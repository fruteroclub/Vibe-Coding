# Guía de Términos Técnicos con Tooltips

## 📚 Sistema de Tooltips Implementado

Hemos implementado un sistema de **tooltips interactivos** para términos técnicos en la documentación. Cuando el usuario pasa el cursor sobre palabras técnicas, aparece una definición breve.

---

## 🎯 Cómo Funciona

### **Componente TechTerm**

Ubicación: `src/components/doc/TechTerm.tsx`

```tsx
<TechTerm
  term="React"
  definition="Librería JavaScript para construir interfaces"
>
  React
</TechTerm>
```

**Características:**
- ✅ Subrayado punteado para indicar que es clickeable
- ✅ Tooltip aparece al hover
- ✅ Responsive y accesible
- ✅ Muestra nombre del término + definición

---

## 📖 Diccionario de Términos Actuales

Ubicación: `src/pages/doc/AI.tsx`

### **Fundamentos (Sesión 1)**
| Término | Definición |
|---------|------------|
| **componentes** | Bloques reutilizables de interfaz que encapsulan HTML, lógica y estilos |
| **useState** | Hook de React que crea variables reactivas que actualizan la UI automáticamente |
| **localStorage** | API del navegador que persiste datos en disco entre sesiones |
| **React** | Librería JavaScript para construir interfaces de usuario con componentes |
| **Tailwind CSS** | Framework CSS utility-first con clases predefinidas |
| **v0.dev** | Herramienta de IA para generar componentes React desde prompts |
| **Vercel** | Plataforma para desplegar aplicaciones web (hosting) |

### **IA & APIs (Sesión 2)**
| Término | Definición |
|---------|------------|
| **API** | Interfaz que permite comunicación entre servicios (request/response) |
| **LLMs** | Large Language Models - Modelos de IA entrenados en millones de ejemplos |
| **prompt** | Instrucción en lenguaje natural que le das a la IA para generar código |
| **Next.js** | Framework de React con routing y API routes integrados |
| **system prompt** | Instrucciones permanentes que definen el comportamiento del LLM |
| **API route** | Endpoint en Next.js que ejecuta código en servidor |
| **asíncronas** | Operaciones que no bloquean el código (await/async) |

### **Autenticación (Sesión 3)**
| Término | Definición |
|---------|------------|
| **Privy SDK** | Kit de desarrollo para autenticación con wallets |
| **PrivyProvider** | Componente de React que provee autenticación a toda la app |
| **endpoint** | URL específica de una API que ejecuta una función |
| **POST** | Método HTTP para enviar datos al servidor |
| **GET** | Método HTTP para obtener datos del servidor |
| **toast notifications** | Mensajes emergentes no-intrusivos que informan al usuario |

### **IA Multimodal (Sesión 4)**
| Término | Definición |
|---------|------------|
| **Multimodal** | IA que procesa múltiples tipos de datos (texto + imágenes) |
| **base64** | Formato que convierte archivos binarios (imágenes) a texto |
| **HTML5 File API** | API nativa del navegador para manejar archivos |
| **Drag-and-drop** | Patrón UX para subir archivos arrastrando |

### **Features Sociales (Sesión 5)**
| Término | Definición |
|---------|------------|
| **Polling** | Consultar API periódicamente para actualizar datos |
| **WebSockets** | Conexión permanente para recibir actualizaciones en tiempo real |
| **Routing dinámico** | URLs que incluyen parámetros variables |
| **Paginación** | Cargar datos en bloques para mejorar performance |
| **Grid** | Diseño en cuadrícula para mostrar múltiples items |

---

## 🔧 Cómo Agregar Nuevos Términos

### **Paso 1: Actualizar el Diccionario**

Edita el objeto `techTerms` en `src/pages/doc/AI.tsx`:

```typescript
const techTerms: Record<string, string> = {
  // ... términos existentes ...

  // Agregar nuevo término
  "hooks": "Funciones especiales de React que permiten usar estado y ciclo de vida",
  "props": "Datos que un componente padre pasa a un componente hijo",
  "JSX": "Sintaxis que combina JavaScript con HTML",
};
```

### **Paso 2: La Función lo Detecta Automáticamente**

La función `renderItemWithTooltips()` detecta automáticamente términos en el texto y aplica tooltips:

```typescript
const renderItemWithTooltips = (text: string) => {
  // Busca palabras del diccionario en el texto
  // Aplica <TechTerm> automáticamente
};
```

**No necesitas modificar el HTML/JSX manualmente** ✨

---

## 🎨 Personalización de Estilos

### **Cambiar Colores del Tooltip**

Edita `src/components/doc/TechTerm.tsx`:

```tsx
<span className="
  underline
  decoration-dotted
  decoration-doc-primary/50    // ← Color del subrayado
  cursor-help
  hover:decoration-doc-primary // ← Color al hover
">
```

### **Cambiar Posición del Tooltip**

```tsx
<TooltipContent
  side="top"     // ← Opciones: "top" | "bottom" | "left" | "right"
  className="max-w-xs"
>
```

---

## 📋 Casos de Uso Adicionales

### **Uso Manual del Componente**

Si necesitas un tooltip personalizado en cualquier lugar:

```tsx
import { TechTerm } from '@/components/doc/TechTerm';

<p>
  Usamos <TechTerm term="React" definition="...">React</TechTerm>
  para construir la interfaz.
</p>
```

### **Términos con Múltiples Palabras**

```typescript
const techTerms = {
  "API route": "Endpoint en Next.js...",
  "system prompt": "Instrucciones permanentes...",
};
```

La función detecta automáticamente frases completas.

---

## 🔍 Ejemplos Visuales

### **Antes (sin tooltips)**
```
Cómo funcionan los LLMs (mental model)
```

### **Después (con tooltips)**
```
Cómo funcionan los LLMs (mental model)
                    ^^^^
                    [tooltip aparece al hover]

                    LLMs
                    Large Language Models - Modelos
                    de IA entrenados en millones de
                    ejemplos de código
```

---

## 🚀 Mejoras Futuras

### **1. Integración con API Externa**

En lugar de diccionario estático, podríamos consultar definiciones desde una API:

```typescript
// Ejemplo conceptual
const fetchDefinition = async (term: string) => {
  const response = await fetch(`/api/definitions/${term}`);
  return response.json();
};
```

### **2. Traducciones (i18n)**

Agregar definiciones en múltiples idiomas:

```typescript
const techTerms = {
  es: {
    "React": "Librería JavaScript para interfaces",
  },
  en: {
    "React": "JavaScript library for building UIs",
  }
};
```

### **3. Tooltips con Ejemplos de Código**

```tsx
<TooltipContent>
  <p className="font-semibold">{term}</p>
  <p className="text-xs">{definition}</p>
  <pre className="mt-2 text-xs">
    <code>{codeExample}</code>
  </pre>
</TooltipContent>
```

### **4. Analytics**

Trackear qué términos generan más consultas:

```typescript
const trackTooltipView = (term: string) => {
  if (window.clarity) {
    clarity.set("tooltip_viewed", term);
  }
};
```

---

## 📊 Métricas de Uso

Con Microsoft Clarity integrado, podrías rastrear:

- ✅ Qué términos tienen más hover (más confusos)
- ✅ Usuarios que nunca usan tooltips (¿texto muy claro?)
- ✅ Términos que necesitan mejor definición

```javascript
// Ejemplo de tracking
clarity.set("tooltip_hovered", termName);
clarity.set("session_tooltips_count", count);
```

---

## 🎓 Buenas Prácticas

### **Definiciones**
- ✅ Máximo 2-3 líneas
- ✅ Sin jerga técnica en la definición
- ✅ Enfocadas en "qué es" y "para qué sirve"
- ❌ Evitar definiciones circulares

### **Términos a Incluir**
- ✅ Tecnologías (React, Next.js, Vercel)
- ✅ Conceptos de programación (componentes, hooks, API)
- ✅ Patrones (asíncrono, polling, routing)
- ❌ Palabras comunes en español

### **UX**
- ✅ Subrayado punteado (indica interactividad)
- ✅ Hover para mostrar (no click)
- ✅ Tooltip no bloquea lectura
- ❌ No abusar (máximo 3-4 términos por párrafo)

---

## 🐛 Troubleshooting

### **Problema: Tooltip no aparece**

**Causa:** El término no está en el diccionario o tiene mayúsculas diferentes.

**Solución:** La búsqueda es case-insensitive, pero verifica ortografía exacta:

```typescript
// Correcto
"API": "Definición...",

// Incorrecto (no matcheará "API" en el texto)
"api": "Definición...",
```

### **Problema: Tooltip se corta en móvil**

**Solución:** Ajusta el `max-w-` del tooltip:

```tsx
<TooltipContent className="max-w-xs sm:max-w-sm">
```

---

## 📚 Referencias

- **Radix UI Tooltip**: [https://www.radix-ui.com/docs/primitives/components/tooltip](https://www.radix-ui.com/docs/primitives/components/tooltip)
- **shadcn/ui Tooltip**: [https://ui.shadcn.com/docs/components/tooltip](https://ui.shadcn.com/docs/components/tooltip)
- **Accessibility**: Tooltips usan `aria-describedby` automáticamente

---

## ✅ Checklist de Implementación

- [x] Componente `TechTerm` creado
- [x] Diccionario de 30+ términos técnicos
- [x] Función `renderItemWithTooltips` automática
- [x] Integrado en página `/doc/ai`
- [x] Build exitoso sin errores TypeScript
- [ ] Testing en móvil (responsive)
- [ ] Traducción al inglés (i18n)
- [ ] Analytics con Clarity (opcional)

---

**Última actualización:** 2026-01-27
**Autor:** VibeCoding Team
**Contacto:** brian@frutero.club
