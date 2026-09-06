# Guía de Implementación i18n para VibeCoding

**Versión:** 1.0
**Fecha:** 2026-01-24
**Stack:** Vite + React 18 + TypeScript + react-i18next
**Proyecto:** VibeCoding Landing Page

Esta guía documenta la implementación completa de soporte multi-idioma (Español/Inglés) en el proyecto VibeCoding, dividida en tickets de desarrollo accionables.

---

## 📊 Resumen del Proyecto

### Estado Actual
- **Framework:** Vite + React 18 + TypeScript
- **UI Components:** shadcn/ui + Radix UI
- **Routing:** React Router v6
- **Componentes principales:** 11 secciones de landing page
- **Idioma actual:** Español (hardcoded)

### Objetivo
- ✅ Soporte español/inglés con toggle de idioma
- ✅ Español como idioma primario (default)
- ✅ Detección automática del navegador
- ✅ Persistencia de preferencia del usuario
- ✅ TypeScript type safety para traducciones
- ✅ Validación automática pre-commit
- ✅ Zero FOUC (Flash of Untranslated Content)

### Componentes a Migrar
```
src/components/
├── Navbar.tsx           ✓ Migrar
├── Hero.tsx             ✓ Migrar
├── ForWho.tsx           ✓ Migrar
├── Problem.tsx          ✓ Migrar
├── Layers.tsx           ✓ Migrar
├── Journey.tsx          ✓ Migrar
├── Includes.tsx         ✓ Migrar
├── IsForYou.tsx         ✓ Migrar
├── Pricing.tsx          ✓ Migrar
├── FAQ.tsx              ✓ Migrar
├── FinalCTA.tsx         ✓ Migrar
└── Footer.tsx           ✓ Migrar
```

---

## 🎯 Arquitectura de Implementación

### Estructura de Archivos
```
src/
├── i18n/
│   └── config.ts                    # Configuración i18next
├── locales/
│   ├── en/
│   │   └── translation.json        # Traducciones inglés
│   └── es/
│       └── translation.json        # Traducciones español
├── types/
│   └── i18next.d.ts                # TypeScript augmentation
└── components/
    ├── LanguageSwitcher.tsx        # Componente toggle ES/EN
    └── [componentes migrados]      # Todos usan useTranslation()

scripts/
└── validate-translations.cjs       # Validación de paridad de claves

.husky/
└── pre-commit                      # Hook para validación automática
```

### Principios de Diseño
1. **Español-first UX** — Audiencia primaria hispanohablante
2. **Bundled translations** — Sin HTTP requests, sin FOUC
3. **Sync initialization** — i18n carga antes de React render
4. **Hierarchical keys** — `component.element.variant` pattern
5. **TypeScript safety** — Autocomplete de claves de traducción
6. **Validation-first** — Pre-commit hooks previenen drift

---

## 📋 Tickets de Desarrollo

### Epic: Implementación i18n VibeCoding
**Total estimado:** ~4 horas
**Prioridad:** Alta
**Dividido en:** 12 tickets

---

## 🎫 TICKET #1: Instalación de Dependencias i18n

**Tipo:** Setup
**Estimado:** 5 minutos
**Prioridad:** P0 (Bloqueante)

### Descripción
Instalar paquetes npm necesarios para i18next y configuración de husky.

### Tareas
1. Instalar dependencias principales de i18next
2. Instalar herramientas de desarrollo (husky)
3. Verificar instalación exitosa

### Comandos
```bash
# Dependencias principales
npm install i18next@25.8.0 react-i18next@16.5.3 i18next-browser-languagedetector@8.2.0 i18next-resources-to-backend@1.2.1

# Dev dependencies
npm install -D husky

# Inicializar husky
npx husky init
```

### Verificación
```bash
# Verificar en package.json
cat package.json | grep -A 4 '"dependencies"'

# Debe mostrar:
# "i18next": "25.8.0",
# "react-i18next": "16.5.3",
# "i18next-browser-languagedetector": "8.2.0",
# "i18next-resources-to-backend": "1.2.1"
```

### Criterios de Aceptación
- ✅ Todos los paquetes instalados sin errores
- ✅ `node_modules/` contiene paquetes i18next
- ✅ Husky inicializado (`.husky/` folder existe)

### Notas Técnicas
- Versiones específicas para compatibilidad probada
- `i18next-resources-to-backend` permite bundled translations
- `i18next-browser-languagedetector` para detección automática

---

## 🎫 TICKET #2: Configuración i18next Core

**Tipo:** Configuration
**Estimado:** 15 minutos
**Prioridad:** P0 (Bloqueante)
**Depende de:** TICKET #1

### Descripción
Crear archivo de configuración i18next con soporte español-first y detección de navegador.

### Tareas
1. Crear `src/i18n/config.ts`
2. Configurar detección español-first
3. Habilitar bundled translations
4. Integrar en `src/main.tsx` ANTES de React

### Archivos a Crear

**`src/i18n/config.ts`**
```typescript
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import resourcesToBackend from 'i18next-resources-to-backend';

i18n
  .use(resourcesToBackend((language: string, namespace: string) =>
    import(`../locales/${language}/${namespace}.json`)
  ))
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ['en', 'es'],
    fallbackLng: (code) => {
      // Spanish-first detection logic
      if (code && code.toLowerCase().startsWith('en')) {
        return ['en'];
      }
      return ['es']; // Default español
    },
    defaultNS: 'translation',
    interpolation: {
      escapeValue: false, // React already escapes
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng',
    },
  });

// Dev helper - exponer i18n en consola
if (import.meta.env.DEV) {
  (window as any).i18n = i18n;
}

export default i18n;
```

### Modificar `src/main.tsx`
```typescript
// IMPORTANTE: import i18n ANTES de React
import './i18n/config';

import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
```

### Verificación
```bash
# Verificar que el archivo existe
ls src/i18n/config.ts

# Verificar import en main.tsx
head -5 src/main.tsx | grep i18n
```

### Criterios de Aceptación
- ✅ `src/i18n/config.ts` creado con configuración completa
- ✅ Import en `main.tsx` ANTES de `createRoot`
- ✅ Proyecto compila sin errores TypeScript
- ✅ `npm run dev` inicia sin warnings de i18next

### Decisiones Técnicas
- **`fallbackLng: (code) => {...}`** — Custom function para lógica español-first
- **`resourcesToBackend`** — Bundled translations (no HTTP, no FOUC)
- **`order: ['localStorage', 'navigator']`** — Preferencia usuario > navegador
- **`supportedLngs`** — Previene intentos de cargar idiomas no soportados

---

## 🎫 TICKET #3: TypeScript Type Safety

**Tipo:** Configuration
**Estimado:** 10 minutos
**Prioridad:** P1
**Depende de:** TICKET #2

### Descripción
Configurar TypeScript para autocomplete de claves de traducción y type safety.

### Tareas
1. Crear archivo de type augmentation
2. Verificar autocomplete en VSCode
3. Confirmar errores en claves inválidas

### Archivos a Crear

**`src/types/i18next.d.ts`**
```typescript
import 'i18next';

// NOTA: Este archivo se actualizará después de crear translation.json
// Por ahora, usamos estructura vacía

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translation';
    resources: {
      translation: Record<string, any>; // Se actualizará en TICKET #5
    };
  }
}
```

### Verificación
```typescript
// Test en cualquier componente
import { useTranslation } from 'react-i18next';

function Test() {
  const { t } = useTranslation();

  // Después de TICKET #5, esto mostrará autocomplete:
  t('navbar.') // → debe mostrar sugerencias
}
```

### Criterios de Aceptación
- ✅ `src/types/i18next.d.ts` creado
- ✅ Proyecto compila sin errores
- ✅ TypeScript reconoce el módulo i18next

### Notas Técnicas
- El type augmentation se completará en TICKET #5 después de crear `translation.json`
- Por ahora solo configuramos la estructura base

---

## 🎫 TICKET #4: Archivos de Traducción Base

**Tipo:** Content
**Estimado:** 10 minutos
**Prioridad:** P0 (Bloqueante)
**Depende de:** TICKET #2

### Descripción
Crear estructura de directorios y archivos JSON vacíos para traducciones.

### Tareas
1. Crear estructura de carpetas `locales/`
2. Crear archivos `translation.json` vacíos
3. Verificar que i18next puede cargarlos

### Comandos
```bash
# Crear directorios
mkdir -p src/locales/es
mkdir -p src/locales/en

# Crear archivos vacíos
echo '{}' > src/locales/es/translation.json
echo '{}' > src/locales/en/translation.json
```

### Estructura Creada
```
src/locales/
├── en/
│   └── translation.json    # {}
└── es/
    └── translation.json    # {}
```

### Verificación
```bash
# Verificar archivos creados
ls -la src/locales/*/translation.json

# Verificar contenido
cat src/locales/es/translation.json  # Debe mostrar: {}
```

### Criterios de Aceptación
- ✅ Directorios `src/locales/es/` y `src/locales/en/` existen
- ✅ Ambos archivos `translation.json` contienen `{}`
- ✅ `npm run dev` inicia sin errores de i18next

---

## 🎫 TICKET #5: Extracción de Contenido Español

**Tipo:** Content
**Estimado:** 45 minutos
**Prioridad:** P0 (Bloqueante)
**Depende de:** TICKET #4

### Descripción
Extraer todos los strings en español de los componentes y organizarlos en `es/translation.json` con estructura jerárquica.

### Tareas
1. Revisar todos los componentes (Navbar, Hero, ForWho, etc.)
2. Extraer strings hardcoded
3. Organizar en estructura jerárquica por componente
4. Actualizar `i18next.d.ts` con types

### Estructura de Claves

**Patrón:** `component.element.variant`

```json
{
  "navbar": {
    "logo": {
      "alt": "Frutero"
    },
    "links": {
      "programa": "Programa",
      "faq": "FAQ"
    },
    "cta": "Únete ahora"
  },
  "hero": {
    "badge": "Bootcamp de Desarrollo con IA",
    "title": {
      "prefix": "VibeCoding: ",
      "highlight": "De Idea a App"
    },
    "subtitle1": "Crea tu primera app en 2 semanas. Sin código tradicional, sin instalaciones.",
    "subtitle2": "El futuro del código está en tus ideas, no en tu teclado. Aprende a DIRIGIR la IA para que construya por ti.",
    "cta": {
      "primary": "Asegurar mi lugar",
      "secondary": "Ver el programa completo ↓"
    },
    "stats": {
      "completion": {
        "value": "70%+",
        "label": "completado"
      },
      "builders": {
        "value": "1,000+",
        "label": "builders"
      }
    }
  }
}
```

### Archivo Completo

**`src/locales/es/translation.json`**
```json
{
  "navbar": {
    "logo": {
      "alt": "Frutero"
    },
    "links": {
      "programa": "Programa",
      "faq": "FAQ"
    },
    "cta": "Únete ahora"
  },
  "hero": {
    "badge": "Bootcamp de Desarrollo con IA",
    "title": {
      "prefix": "VibeCoding: ",
      "highlight": "De Idea a App"
    },
    "subtitle1": "Crea tu primera app en 2 semanas. Sin código tradicional, sin instalaciones.",
    "subtitle2": "El futuro del código está en tus ideas, no en tu teclado. Aprende a DIRIGIR la IA para que construya por ti.",
    "cta": {
      "primary": "Asegurar mi lugar",
      "secondary": "Ver el programa completo ↓"
    },
    "stats": {
      "completion": {
        "value": "70%+",
        "label": "completado"
      },
      "builders": {
        "value": "1,000+",
        "label": "builders"
      }
    }
  },
  "pricing": {
    "title": {
      "prefix": "Invierte en tu futuro ",
      "highlight": "como creador"
    },
    "price": {
      "current": "$0 USD",
      "original": "$150 USD",
      "discount": "100% descuento por tiempo limitado"
    },
    "features": {
      "0": "5 sesiones en vivo",
      "1": "Grabaciones permanentes",
      "2": "Soporte Discord <24hrs",
      "3": "2 office hours/semana",
      "4": "Comunidad 1,000+ builders",
      "5": "Certificado verificable",
      "6": "Proyecto portfolio-ready",
      "7": "Templates + código base"
    },
    "details": {
      "start": "Inicio: Febrero 10, 2025",
      "schedule": "Horario: Lun/Mié/Vie 7-8:15pm CDMX",
      "format": "100% virtual, español",
      "maxParticipants": "Máximo 30 participantes"
    },
    "cta": {
      "primary": "Asegurar mi lugar",
      "secondary": "¿Dudas? → Contáctanos en X"
    }
  },
  "faq": {
    "title": "Preguntas frecuentes",
    "items": {
      "0": {
        "question": "¿Necesito saber programar?",
        "answer": "No. El bootcamp está diseñado para personas sin experiencia previa en programación. Aprenderás a usar IA para escribir código por ti."
      },
      "1": {
        "question": "¿Cuál es la política de reembolso?",
        "answer": "Si no estás satisfecho después de la primera sesión, te devolvemos el 100% de tu inversión sin preguntas."
      },
      "2": {
        "question": "¿Cuánto tiempo debo dedicar por semana?",
        "answer": "Las sesiones en vivo son de 75 minutos (3 veces por semana). Recomendamos dedicar 1-2 horas adicionales para práctica."
      },
      "3": {
        "question": "¿Las sesiones son en vivo o grabadas?",
        "answer": "Las sesiones son 100% en vivo con interacción directa. Todas las sesiones quedan grabadas para que puedas repasarlas cuando quieras."
      }
    },
    "cta": {
      "question": "¿Respondimos tus dudas?",
      "button": "Sí, quiero unirme",
      "contact": {
        "text": "¿Otra pregunta? → ",
        "email": "hola@frutero.club"
      }
    }
  },
  "footer": {
    "logo": {
      "alt": "Kukulcan"
    },
    "copyright": "© 2025 VibeCoding. Todos los derechos reservados.",
    "contact": "brian@frutero.club"
  }
}
```

**NOTA:** Este es solo un ejemplo con Navbar, Hero, Pricing, FAQ y Footer. Debes completar con TODOS los componentes (ForWho, Problem, Layers, Journey, Includes, IsForYou, FinalCTA).

### Actualizar Types

**`src/types/i18next.d.ts`**
```typescript
import 'i18next';
import translation from '../locales/es/translation.json';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translation';
    resources: {
      translation: typeof translation;
    };
  }
}
```

### Verificación
```bash
# Contar claves (debe ser >100)
cat src/locales/es/translation.json | grep -o '"[^"]*":' | wc -l

# Verificar formato JSON
cat src/locales/es/translation.json | jq . > /dev/null && echo "JSON válido"
```

### Criterios de Aceptación
- ✅ `es/translation.json` contiene TODAS las claves de TODOS los componentes
- ✅ Estructura jerárquica: `component.element.variant`
- ✅ Arrays usan índices: `items.0.title`, `items.1.title`
- ✅ JSON es válido (sin trailing commas)
- ✅ TypeScript autocompleta claves en VSCode
- ✅ Mínimo 100+ claves totales

### Notas Técnicas
- **Arrays como objetos indexados** para validación plana
- **No traducir:** URLs, emails, nombres de marca
- **Multiline:** Usar `\n` dentro del string JSON

---

## 🎫 TICKET #6: Generación de Traducciones Inglesas

**Tipo:** Content
**Estimado:** 30 minutos
**Prioridad:** P0 (Bloqueante)
**Depende de:** TICKET #5

### Descripción
Traducir todas las claves del archivo español al inglés, manteniendo exactamente la misma estructura.

### Tareas
1. Copiar estructura de `es/translation.json`
2. Traducir cada valor al inglés
3. Mantener EXACTAMENTE las mismas claves
4. Revisar contexto de uso para traducciones naturales

### Estrategia de Traducción

**Opción A - Manual (recomendado para calidad):**
- Traducir manualmente con contexto
- Verificar tono y voz de marca

**Opción B - IA + Revisión:**
```bash
# Usar Claude/GPT para traducir, luego revisar manualmente
# Prompt: "Traduce este JSON al inglés manteniendo la estructura exacta y tono profesional pero cercano"
```

### Archivo a Crear

**`src/locales/en/translation.json`**
```json
{
  "navbar": {
    "logo": {
      "alt": "Frutero"
    },
    "links": {
      "programa": "Program",
      "faq": "FAQ"
    },
    "cta": "Join now"
  },
  "hero": {
    "badge": "AI Development Bootcamp",
    "title": {
      "prefix": "VibeCoding: ",
      "highlight": "From Idea to App"
    },
    "subtitle1": "Build your first app in 2 weeks. No traditional code, no installations.",
    "subtitle2": "The future of coding is in your ideas, not your keyboard. Learn to DIRECT AI to build for you.",
    "cta": {
      "primary": "Secure my spot",
      "secondary": "See full program ↓"
    },
    "stats": {
      "completion": {
        "value": "70%+",
        "label": "completed"
      },
      "builders": {
        "value": "1,000+",
        "label": "builders"
      }
    }
  },
  "pricing": {
    "title": {
      "prefix": "Invest in your future ",
      "highlight": "as a creator"
    },
    "price": {
      "current": "$0 USD",
      "original": "$150 USD",
      "discount": "100% discount for limited time"
    },
    "features": {
      "0": "5 live sessions",
      "1": "Permanent recordings",
      "2": "Discord support <24hrs",
      "3": "2 office hours/week",
      "4": "1,000+ builders community",
      "5": "Verifiable certificate",
      "6": "Portfolio-ready project",
      "7": "Templates + starter code"
    },
    "details": {
      "start": "Start: February 10, 2025",
      "schedule": "Schedule: Mon/Wed/Fri 7-8:15pm CDMX",
      "format": "100% virtual, Spanish",
      "maxParticipants": "Maximum 30 participants"
    },
    "cta": {
      "primary": "Secure my spot",
      "secondary": "Questions? → Contact us on X"
    }
  },
  "faq": {
    "title": "Frequently asked questions",
    "items": {
      "0": {
        "question": "Do I need to know how to code?",
        "answer": "No. The bootcamp is designed for people with no prior programming experience. You'll learn to use AI to write code for you."
      },
      "1": {
        "question": "What's the refund policy?",
        "answer": "If you're not satisfied after the first session, we'll refund 100% of your investment, no questions asked."
      },
      "2": {
        "question": "How much time should I dedicate per week?",
        "answer": "Live sessions are 75 minutes (3 times per week). We recommend dedicating 1-2 additional hours for practice."
      },
      "3": {
        "question": "Are sessions live or recorded?",
        "answer": "Sessions are 100% live with direct interaction. All sessions are recorded so you can review them anytime."
      }
    },
    "cta": {
      "question": "Did we answer your questions?",
      "button": "Yes, I want to join",
      "contact": {
        "text": "Another question? → ",
        "email": "hola@frutero.club"
      }
    }
  },
  "footer": {
    "logo": {
      "alt": "Kukulcan"
    },
    "copyright": "© 2025 VibeCoding. All rights reserved.",
    "contact": "brian@frutero.club"
  }
}
```

### Verificación
```bash
# Verificar mismo número de claves
ES_KEYS=$(cat src/locales/es/translation.json | grep -o '"[^"]*":' | wc -l)
EN_KEYS=$(cat src/locales/en/translation.json | grep -o '"[^"]*":' | wc -l)
echo "ES: $ES_KEYS | EN: $EN_KEYS (deben ser iguales)"

# Verificar JSON válido
cat src/locales/en/translation.json | jq . > /dev/null && echo "JSON válido"
```

### Criterios de Aceptación
- ✅ Mismo número exacto de claves que `es/translation.json`
- ✅ Estructura jerárquica idéntica
- ✅ Traducciones naturales y profesionales
- ✅ Tono consistente con marca VibeCoding
- ✅ JSON válido sin errores de sintaxis
- ✅ NO traducir: URLs, emails, nombres propios

---

## 🎫 TICKET #7: Script de Validación

**Tipo:** Tooling
**Estimado:** 20 minutos
**Prioridad:** P1
**Depende de:** TICKET #6

### Descripción
Crear script de validación que previene desincronización de claves entre idiomas.

### Tareas
1. Crear script `validate-translations.cjs`
2. Implementar lógica de comparación de claves
3. Agregar script a `package.json`
4. Probar manualmente

### Archivo a Crear

**`scripts/validate-translations.cjs`**
```javascript
const fs = require('fs');
const path = require('path');

const LOCALES_DIR = path.join(__dirname, '../src/locales');
const LANGUAGES = ['es', 'en'];

// Función recursiva para extraer todas las claves en formato flat
function getKeys(obj, prefix = '') {
  let keys = [];
  for (const [key, value] of Object.entries(obj)) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      keys = keys.concat(getKeys(value, fullKey));
    } else {
      keys.push(fullKey);
    }
  }
  return keys.sort();
}

function validateTranslations() {
  console.log('🔍 Validando archivos de traducción...\n');

  const translations = LANGUAGES.map(lang => {
    const filePath = path.join(LOCALES_DIR, lang, 'translation.json');

    if (!fs.existsSync(filePath)) {
      console.error(`❌ Error: No se encontró ${filePath}`);
      process.exit(1);
    }

    const content = fs.readFileSync(filePath, 'utf-8');
    let parsed;

    try {
      parsed = JSON.parse(content);
    } catch (error) {
      console.error(`❌ Error: JSON inválido en ${lang}/translation.json`);
      console.error(error.message);
      process.exit(1);
    }

    return { lang, keys: getKeys(parsed) };
  });

  const [source, ...targets] = translations;
  let hasError = false;

  console.log(`📊 Idioma fuente (${source.lang}): ${source.keys.length} claves`);

  targets.forEach(target => {
    console.log(`📊 Idioma objetivo (${target.lang}): ${target.keys.length} claves`);

    const missingInTarget = source.keys.filter(k => !target.keys.includes(k));
    const extraInTarget = target.keys.filter(k => !source.keys.includes(k));

    if (missingInTarget.length > 0) {
      console.error(`\n❌ Claves faltantes en ${target.lang}:`);
      missingInTarget.forEach(k => console.error(`   - ${k}`));
      hasError = true;
    }

    if (extraInTarget.length > 0) {
      console.error(`\n❌ Claves extra en ${target.lang}:`);
      extraInTarget.forEach(k => console.error(`   - ${k}`));
      hasError = true;
    }
  });

  if (hasError) {
    console.error('\n❌ VALIDACIÓN FALLIDA - Las claves de traducción NO están sincronizadas');
    process.exit(1);
  }

  console.log('\n✅ VALIDACIÓN EXITOSA - Todas las claves están sincronizadas');
  console.log(`✅ Total de claves validadas: ${source.keys.length}\n`);
}

validateTranslations();
```

### Actualizar `package.json`

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "validate:i18n": "node scripts/validate-translations.cjs",
    "prepare": "husky"
  }
}
```

### Verificación Manual
```bash
# Crear directorio scripts si no existe
mkdir -p scripts

# Ejecutar validación
npm run validate:i18n

# Debe mostrar:
# ✅ VALIDACIÓN EXITOSA - Todas las claves están sincronizadas
```

### Test de Falla (Opcional)
```bash
# Agregar clave falsa en inglés
echo '{"test": "value"}' >> src/locales/en/translation.json

# Ejecutar validación
npm run validate:i18n

# Debe fallar mostrando clave extra
```

### Criterios de Aceptación
- ✅ Script creado en `scripts/validate-translations.cjs`
- ✅ Script ejecuta sin errores con archivos válidos
- ✅ Script detecta claves faltantes
- ✅ Script detecta claves extra
- ✅ Script agregado a `package.json`
- ✅ Exit code 1 en fallo, 0 en éxito

---

## 🎫 TICKET #8: Pre-commit Hook

**Tipo:** Tooling
**Estimado:** 10 minutos
**Prioridad:** P1
**Depende de:** TICKET #7

### Descripción
Configurar hook de Git que ejecuta validación antes de cada commit.

### Tareas
1. Configurar husky pre-commit hook
2. Integrar script de validación
3. Probar con commit de prueba

### Comandos
```bash
# Hook ya está en .husky/pre-commit, actualizarlo
cat > .husky/pre-commit << 'EOF'
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npm run validate:i18n
EOF

# Hacer ejecutable
chmod +x .husky/pre-commit
```

### Verificación
```bash
# Intentar commit
git add .
git commit -m "test: validación i18n"

# Debe ejecutar validación automáticamente
# Si hay errores, el commit será rechazado
```

### Criterios de Aceptación
- ✅ `.husky/pre-commit` configurado
- ✅ Hook ejecuta `npm run validate:i18n`
- ✅ Commits bloqueados si validación falla
- ✅ Commits permitidos si validación pasa

### Notas Técnicas
- Hook previene commits con traducciones rotas
- Equipo no puede hacer push sin sincronizar claves
- Ejecuta automáticamente sin acción manual

---

## 🎫 TICKET #9: Componente LanguageSwitcher

**Tipo:** Feature
**Estimado:** 30 minutos
**Prioridad:** P0 (Bloqueante)
**Depende de:** TICKET #5, TICKET #6

### Descripción
Crear componente toggle ES/EN con Radix UI ToggleGroup y accesibilidad completa.

### Tareas
1. Crear componente `LanguageSwitcher.tsx`
2. Usar Radix UI ToggleGroup
3. Agregar aria-labels localizados
4. Estilizar con Tailwind

### Archivo a Crear

**`src/components/LanguageSwitcher.tsx`**
```typescript
import { useTranslation } from 'react-i18next';
import * as ToggleGroup from '@radix-ui/react-toggle-group';

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const handleLanguageChange = (value: string) => {
    if (value) {
      i18n.changeLanguage(value);
    }
  };

  return (
    <ToggleGroup.Root
      type="single"
      value={i18n.language}
      onValueChange={handleLanguageChange}
      aria-label="Cambiar idioma / Change language"
      className="flex gap-1 rounded-lg bg-secondary/10 backdrop-blur-sm border border-border/30 p-1"
    >
      <ToggleGroup.Item
        value="es"
        aria-label="Cambiar a español / Switch to Spanish"
        className="px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200
                   data-[state=on]:bg-primary/20 data-[state=on]:text-primary
                   data-[state=off]:text-muted-foreground hover:text-foreground"
      >
        <span lang="es">ES</span>
      </ToggleGroup.Item>

      <ToggleGroup.Item
        value="en"
        aria-label="Switch to English / Cambiar a inglés"
        className="px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200
                   data-[state=on]:bg-primary/20 data-[state=on]:text-primary
                   data-[state=off]:text-muted-foreground hover:text-foreground"
      >
        <span lang="en">EN</span>
      </ToggleGroup.Item>
    </ToggleGroup.Root>
  );
}

export default LanguageSwitcher;
```

### Verificación Manual
```bash
# Crear componente de prueba
# Agregar a Index.tsx temporalmente
# Verificar que toggle cambia idioma
# Verificar localStorage persiste selección
```

### Criterios de Aceptación
- ✅ Componente renderiza correctamente
- ✅ Click en ES cambia a español
- ✅ Click en EN cambia a inglés
- ✅ Estado visual refleja idioma activo
- ✅ aria-labels bilingües para accesibilidad
- ✅ `lang` attributes en spans para screen readers
- ✅ Preferencia se guarda en localStorage

### Notas de Diseño
- **Radix ToggleGroup** para accesibilidad built-in
- **`data-[state=on]`** variants para estado activo
- **Backdrop blur** consistente con diseño VibeCoding
- **Border sutil** para definición visual

---

## 🎫 TICKET #10: Integrar LanguageSwitcher en Navbar

**Tipo:** Integration
**Estimado:** 15 minutos
**Prioridad:** P0 (Bloqueante)
**Depende de:** TICKET #9

### Descripción
Integrar componente LanguageSwitcher en el Navbar, posicionado entre links y CTA.

### Tareas
1. Importar LanguageSwitcher en Navbar
2. Posicionar en desktop nav (derecha, antes del CTA)
3. Posicionar en mobile menu (parte superior)
4. Verificar responsive design

### Modificar `src/components/Navbar.tsx`

```typescript
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img src="/frutero-logo.svg" alt="Frutero" className="h-12 w-auto object-contain" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#programa" className="text-muted-foreground hover:text-foreground transition-colors">
              Programa
            </a>
            <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">
              FAQ
            </a>

            {/* Language Switcher */}
            <LanguageSwitcher />

            <a href="#pricing" className="btn-primary-gradient text-sm px-6 py-2.5">
              Únete ahora
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            {/* Language Switcher at top of mobile menu */}
            <div className="flex justify-center mb-2">
              <LanguageSwitcher />
            </div>

            <a
              href="#programa"
              className="text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Programa
            </a>
            <a
              href="#faq"
              className="text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsOpen(false)}
            >
              FAQ
            </a>
            <a
              href="#pricing"
              className="btn-primary-gradient text-sm px-6 py-2.5 text-center"
              onClick={() => setIsOpen(false)}
            >
              Únete ahora
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
```

### Verificación Visual
```
Desktop (>768px):
[Logo] _______ [Programa] [FAQ] [ES|EN] [Únete ahora]

Mobile (<768px):
[Logo] _____________________________________________ [☰]
↓ (menu abierto)
        [ES|EN]
        Programa
        FAQ
        [Únete ahora]
```

### Criterios de Aceptación
- ✅ LanguageSwitcher visible en desktop entre FAQ y CTA
- ✅ LanguageSwitcher visible en mobile en parte superior del menú
- ✅ Spacing consistente con diseño existente
- ✅ No rompe layout responsive
- ✅ Toggle funciona en ambos modos (desktop/mobile)

---

## 🎫 TICKET #11: Migración de Componentes a i18n

**Tipo:** Feature
**Estimado:** 2 horas
**Prioridad:** P0 (Bloqueante)
**Depende de:** TICKET #5, TICKET #6, TICKET #10

### Descripción
Reemplazar todos los strings hardcoded en componentes con hooks `useTranslation()`.

### División en Sub-tareas

#### Sub-tarea 11.1: Componentes Simples (30 min)
**Componentes:** Navbar, Footer, Hero, FinalCTA

**Patrón:**
```typescript
// Antes
const Navbar = () => {
  return <a href="#programa">Programa</a>;
};

// Después
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t } = useTranslation();
  return <a href="#programa">{t('navbar.links.programa')}</a>;
};
```

**Ejemplo completo: Hero.tsx**
```typescript
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-secondary/20 rounded-full filter blur-[100px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/20 rounded-full filter blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/60 backdrop-blur-sm border border-border/50 mb-6 animate-fade-in">
          <span className="text-muted-foreground text-sm">{t('hero.badge')}</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <span className="text-foreground">{t('hero.title.prefix')}</span>
          <span className="gradient-text">{t('hero.title.highlight')}</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-muted-foreground mb-3 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
          {t('hero.subtitle1')}
        </p>

        <p className="text-base text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
          {t('hero.subtitle2')}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <a href="https://tally.so/r/gDqk1M" target="_blank" rel="noopener noreferrer" className="btn-primary-gradient glow-effect">
            {t('hero.cta.primary')}
          </a>
          <a href="#viaje" className="btn-outline-glow">
            {t('hero.cta.secondary')}
          </a>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-6 text-muted-foreground animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <div className="flex items-center gap-2">
            <span className="text-foreground font-semibold">{t('hero.stats.completion.value')}</span>
            <span className="text-sm">{t('hero.stats.completion.label')}</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-muted-foreground hidden sm:block self-center" />
          <div className="flex items-center gap-2">
            <span className="text-foreground font-semibold">{t('hero.stats.builders.value')}</span>
            <span className="text-sm">{t('hero.stats.builders.label')}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
```

#### Sub-tarea 11.2: Componentes con Arrays (45 min)
**Componentes:** Pricing, FAQ

**Patrón con índices:**
```typescript
// Pricing features
const Pricing = () => {
  const { t } = useTranslation();

  return (
    <ul className="grid grid-cols-2 gap-2 mb-6">
      {Array.from({ length: 8 }).map((_, index) => (
        <li key={index} className="flex items-center gap-2">
          <Check className="w-4 h-4 text-primary flex-shrink-0" />
          <span className="text-muted-foreground text-xs">
            {t(`pricing.features.${index}`)}
          </span>
        </li>
      ))}
    </ul>
  );
};
```

**Ejemplo completo: FAQ.tsx**
```typescript
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const FAQ = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Total de FAQs (debe coincidir con JSON)
  const faqCount = 4;

  return (
    <section id="faq" className="py-16 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          {t('faq.title')}
        </h2>

        <div className="space-y-3">
          {Array.from({ length: faqCount }).map((_, index) => (
            <div
              key={index}
              className="glass-card overflow-hidden"
            >
              <button
                className="w-full p-4 flex items-center justify-between text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="font-medium text-foreground pr-4 text-sm">
                  {t(`faq.items.${index}.question`)}
                </h3>
                <ChevronDown
                  className={`w-4 h-4 text-muted-foreground flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-4 pb-4">
                  <p className="text-sm text-muted-foreground">
                    {t(`faq.items.${index}.answer`)}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-muted-foreground mb-3 text-sm">{t('faq.cta.question')}</p>
          <a href="#pricing" className="btn-primary-gradient inline-block text-sm px-6 py-3">
            {t('faq.cta.button')}
          </a>
          <p className="mt-3">
            <a href={`mailto:${t('faq.cta.contact.email')}`} className="text-primary hover:underline text-sm">
              {t('faq.cta.contact.text')}{t('faq.cta.contact.email')}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
```

#### Sub-tarea 11.3: Componentes Restantes (45 min)
**Componentes:** ForWho, Problem, Layers, Journey, Includes, IsForYou

**Aplicar mismo patrón:**
1. Importar `useTranslation`
2. Destructurar `{ t }`
3. Reemplazar strings con `t('component.element.variant')`
4. Arrays usar índices: `t(\`component.items.\${index}.title\`)`

### Criterios de Aceptación GLOBALES
- ✅ CERO strings hardcoded en español en componentes
- ✅ Todos los componentes usan `useTranslation()`
- ✅ Proyecto compila sin errores TypeScript
- ✅ `npm run validate:i18n` pasa
- ✅ Página renderiza correctamente en español
- ✅ Página renderiza correctamente en inglés
- ✅ Toggle cambia TODOS los textos visibles

### Validación Manual
```bash
# Buscar strings hardcoded (no debe haber matches críticos)
grep -r "Bootcamp" src/components/*.tsx
grep -r "Únete ahora" src/components/*.tsx

# Ejecutar validación
npm run validate:i18n

# Iniciar dev server
npm run dev

# Probar toggle ES/EN en navegador
```

---

## 🎫 TICKET #12: Testing y Validación Final

**Tipo:** QA
**Estimado:** 30 minutos
**Prioridad:** P0 (Bloqueante)
**Depende de:** TICKET #11

### Descripción
Validación completa de implementación i18n en todos los escenarios.

### Checklist de Testing

#### 1. Detección de Idioma
```javascript
// En consola del navegador (Dev Tools)

// Test 1: Default español
localStorage.removeItem('i18nextLng');
window.location.reload();
// Esperado: Página en español

// Test 2: Browser detection (inglés)
// Cambiar navegador a inglés en settings
localStorage.removeItem('i18nextLng');
window.location.reload();
// Esperado: Página en inglés

// Test 3: Persistencia
window.i18n.changeLanguage('en');
window.location.reload();
// Esperado: Sigue en inglés (localStorage)

// Verificar localStorage
localStorage.getItem('i18nextLng'); // → 'en' o 'es'
```

#### 2. UI Testing (Ambos Idiomas)

**Desktop (1920px width):**
- [ ] Navbar: Links, CTA, logo alt text
- [ ] Hero: Title, subtitles, CTAs, stats
- [ ] ForWho: Título y contenido
- [ ] Problem: Título y contenido
- [ ] Layers: Título y contenido
- [ ] Journey: Título y contenido
- [ ] Includes: Título y contenido
- [ ] IsForYou: Título y contenido
- [ ] Pricing: Título, precio, features, details, CTAs
- [ ] FAQ: Título, preguntas, respuestas, CTA
- [ ] FinalCTA: Título y CTA
- [ ] Footer: Copyright, email

**Mobile (375px width):**
- [ ] Navbar mobile menu
- [ ] Language switcher en mobile
- [ ] Todos los componentes responsive
- [ ] No overflow horizontal
- [ ] Texto no cortado

#### 3. Layout Validation

**Buscar:**
- ❌ Text overflow/clipping
- ❌ Broken button layouts
- ❌ Horizontal scroll
- ❌ Overlapping elements
- ❌ Text fuera de contenedores

**Nota:** Texto en español es ~20-30% más largo que inglés.

#### 4. Accessibility Testing

```bash
# Lighthouse audit
npm run build
npm run preview
# Abrir DevTools → Lighthouse → Run audit

# Verificar:
# - Accessibility score >90
# - Language switcher keyboard navigable
# - Screen reader compatible
```

#### 5. TypeScript Safety

```typescript
// En cualquier componente
import { useTranslation } from 'react-i18next';

function Test() {
  const { t } = useTranslation();

  // Debe autocompletar:
  t('navbar.') // → muestra: logo, links, cta

  // Debe dar error:
  t('invalidKey'); // TypeScript error
}
```

#### 6. Build Production

```bash
# Build
npm run build

# Verificar bundle size
ls -lh dist/assets/*.js

# Preview
npm run preview

# Abrir http://localhost:4173
# Probar toggle ES/EN
```

### Criterios de Aceptación FINAL
- ✅ Detección español-first funciona
- ✅ Browser detection funciona (inglés)
- ✅ Persistencia localStorage funciona
- ✅ TODOS los textos cambian con toggle
- ✅ Sin overflow/layout issues
- ✅ Sin errores de consola
- ✅ TypeScript autocomplete funciona
- ✅ Build production exitoso
- ✅ Lighthouse accessibility >90
- ✅ Pre-commit hook bloquea commits con errores

### Bugs Comunes a Verificar
- [ ] Strings hardcoded olvidados
- [ ] Claves de traducción con typos
- [ ] Arrays con índices incorrectos
- [ ] Layout roto en español (texto largo)
- [ ] Language switcher no visible
- [ ] localStorage no persiste
- [ ] TypeScript errors ignorados

---

## 📊 Resumen de Tickets

| # | Ticket | Tipo | Estimado | Prioridad | Depende de |
|---|--------|------|----------|-----------|------------|
| 1 | Instalación Dependencias | Setup | 5 min | P0 | - |
| 2 | Configuración i18next | Config | 15 min | P0 | #1 |
| 3 | TypeScript Types | Config | 10 min | P1 | #2 |
| 4 | Archivos Traducción Base | Content | 10 min | P0 | #2 |
| 5 | Extracción Contenido ES | Content | 45 min | P0 | #4 |
| 6 | Generación Traducciones EN | Content | 30 min | P0 | #5 |
| 7 | Script Validación | Tooling | 20 min | P1 | #6 |
| 8 | Pre-commit Hook | Tooling | 10 min | P1 | #7 |
| 9 | Componente LanguageSwitcher | Feature | 30 min | P0 | #5, #6 |
| 10 | Integrar Switcher en Navbar | Integration | 15 min | P0 | #9 |
| 11 | Migración Componentes | Feature | 2h | P0 | #5, #6, #10 |
| 12 | Testing y Validación | QA | 30 min | P0 | #11 |

**Total estimado:** ~4 horas

---

## 🚀 Orden de Ejecución Recomendado

### Sprint 1: Infraestructura (1 hora)
1. TICKET #1 → Instalación
2. TICKET #2 → Config i18next
3. TICKET #3 → TypeScript types
4. TICKET #4 → Archivos base
5. TICKET #7 → Script validación
6. TICKET #8 → Pre-commit hook

✅ **Checkpoint:** Proyecto compila, validación funciona

### Sprint 2: Contenido (1.5 horas)
7. TICKET #5 → Extracción ES (45 min)
8. TICKET #6 → Traducción EN (30 min)
9. Actualizar TICKET #3 con types reales (5 min)
10. Ejecutar `npm run validate:i18n` (5 min)

✅ **Checkpoint:** Ambos idiomas completos y validados

### Sprint 3: UI Integration (1 hora)
11. TICKET #9 → LanguageSwitcher (30 min)
12. TICKET #10 → Integrar en Navbar (15 min)
13. Test manual toggle (5 min)

✅ **Checkpoint:** Toggle funciona, localStorage persiste

### Sprint 4: Component Migration (2 horas)
14. TICKET #11.1 → Componentes simples (30 min)
15. TICKET #11.2 → Componentes con arrays (45 min)
16. TICKET #11.3 → Componentes restantes (45 min)

✅ **Checkpoint:** CERO strings hardcoded

### Sprint 5: QA (30 minutos)
17. TICKET #12 → Testing completo
18. Fix de bugs encontrados
19. Build production

✅ **Release:** i18n completamente funcional

---

## 🔧 Troubleshooting

### Problema: Traducciones no cargan
```bash
# Verificar paths de archivos
ls -la src/locales/*/translation.json

# Verificar import en config
grep "import.*locales" src/i18n/config.ts

# Verificar i18n antes de React
head -5 src/main.tsx | grep i18n
```

### Problema: TypeScript no autocompleta
```bash
# Verificar archivo de types
ls src/types/i18next.d.ts

# Reiniciar TS server en VSCode
# Cmd/Ctrl + Shift + P → "TypeScript: Restart TS Server"
```

### Problema: Pre-commit hook no ejecuta
```bash
# Verificar husky instalado
ls -la .husky/pre-commit

# Hacer ejecutable
chmod +x .husky/pre-commit

# Test manual
npm run validate:i18n
```

### Problema: Idioma no persiste
```javascript
// Consola navegador
i18n.changeLanguage('en');
localStorage.getItem('i18nextLng'); // Debe ser 'en'

// Verificar config detection
console.log(i18n.options.detection);
// Debe tener: caches: ['localStorage']
```

---

## 📚 Recursos Adicionales

### Documentación Oficial
- [i18next](https://www.i18next.com/)
- [react-i18next](https://react.i18next.com/)
- [TypeScript Integration](https://www.i18next.com/overview/typescript)

### Guía de Referencia Original
- [AgentCamp i18n Guide](https://github.com/fruteroclub/staging-agentcamp/blob/main/docs/I18N_IMPLEMENTATION_GUIDE.md)

### Patrones Clave
- **Spanish-first detection:** Custom `fallbackLng` function
- **Index-based arrays:** `t(\`items.\${index}.title\`)`
- **Validation automation:** Pre-commit hooks
- **TypeScript safety:** Type augmentation

---

## ✅ Criterios de Éxito del Proyecto

### Funcionalidad
- [x] Toggle ES/EN funciona en toda la página
- [x] Detección automática español-first
- [x] Persistencia de preferencia usuario
- [x] CERO FOUC (Flash of Untranslated Content)
- [x] CERO strings hardcoded

### Calidad
- [x] TypeScript autocomplete de claves
- [x] Validación pre-commit automática
- [x] Layouts responsive en ambos idiomas
- [x] Accessibility score >90

### Performance
- [x] Bundled translations (no HTTP requests)
- [x] Sync initialization (no delay)
- [x] Build size aceptable (<500KB)

### Developer Experience
- [x] Estructura de claves clara y mantenible
- [x] Errores de traducción prevenidos por hooks
- [x] Documentación completa

---

## 🎉 Conclusión

Esta guía proporciona un roadmap completo para implementar i18n en VibeCoding siguiendo las mejores prácticas probadas en producción.

**Tiempo total estimado:** 4 horas
**Resultado:** Landing page completamente bilingüe (ES/EN) con soporte español-first, validación automática y type safety.

¡Buena suerte con la implementación! 🚀
