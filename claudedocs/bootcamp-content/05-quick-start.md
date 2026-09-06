# Quick Start - Configuración Inicial

> Todo lo que necesitas configurar ANTES de empezar la Sesión 1 del bootcamp.

---

## 📋 Índice Rápido

1. [¿Qué Necesitas?](#qué-necesitas) - Requisitos previos
2. [Cuentas Necesarias](#cuentas-necesarias) - Registro en plataformas
3. [Configuración de v0](#configuración-de-v0) - Herramienta principal
4. [Verificación de Instalación](#verificación-de-instalación) - Checkpoints
5. [Primeros Pasos](#primeros-pasos) - Tu primer proyecto
6. [Solución de Problemas](#solución-de-problemas) - Errores comunes

**Tiempo estimado de configuración**: 15-20 minutos

---

## 🎯 ¿Qué Necesitas?

### Requisitos Previos

**Hardware mínimo:**
- Computadora con acceso a internet
- 4GB RAM mínimo (8GB recomendado)
- Navegador moderno (Chrome, Firefox, Edge, Safari)

**Software:**
- ✅ **Navegador web actualizado** (Chrome recomendado)
- ✅ **Cuenta de email** (Gmail, Outlook, etc.)
- ❌ **NO necesitas instalar Node.js** (v0 lo hace por ti)
- ❌ **NO necesitas instalar editores de código** (v0 incluye editor)
- ❌ **NO necesitas saber programar** (aprenderás en el bootcamp)

### Lo Que NO Necesitas

A diferencia de bootcamps tradicionales, **NO necesitas**:
- Instalar herramientas de desarrollo localmente
- Configurar entornos de desarrollo complejos
- Tener experiencia previa en programación
- Conocer terminal/línea de comandos

---

## 🔐 Cuentas Necesarias

### 1. v0.dev (Obligatorio)

**¿Qué es?** Herramienta de IA que genera código visual en tiempo real.

**Pasos:**
1. Ve a [v0.dev](https://v0.dev)
2. Clic en **"Sign in"** (esquina superior derecha)
3. Registra con Google, GitHub, o email
4. Verifica tu email si es necesario

**Costo:**
- Plan Free: 200 créditos/mes (suficiente para Sesión 1-2)
- Plan Pro: $20/mes (recomendado para bootcamp completo)

**Tip:** Usa tu email personal (no temporal) para no perder acceso.

---

### 2. Vercel (Obligatorio)

**¿Qué es?** Plataforma para publicar tu app en internet (deploy).

**Pasos:**
1. Ve a [vercel.com](https://vercel.com)
2. Clic en **"Sign Up"**
3. Registra con **la misma cuenta de GitHub que usaste en v0** (importante)
4. Acepta los términos y condiciones

**Costo:** Gratis para proyectos personales

**Importante:** Usa la misma cuenta de GitHub en v0 y Vercel para integración automática.

---

### 3. Anthropic/Claude (Sesión 2-3)

**¿Qué es?** Servicio de IA para chat inteligente en tu app.

**Pasos:**
1. Ve a [console.anthropic.com](https://console.anthropic.com)
2. Clic en **"Sign Up"**
3. Registra con email
4. Verifica tu email
5. Ve a **API Keys** → **Create Key**
6. Copia y guarda tu API Key en lugar seguro

**Costo:**
- $5 gratis de crédito inicial
- $15 adicional recomendado para Sesión 2-3
- Pago por uso después

**⚠️ Seguridad:** Nunca compartas tu API Key públicamente.

---

### 4. Google AI Studio / Gemini (Sesión 2-3 - Alternativa)

**¿Qué es?** Servicio de IA de Google (alternativa a Claude).

**Pasos:**
1. Ve a [aistudio.google.com](https://aistudio.google.com)
2. Inicia sesión con tu cuenta de Google
3. Ve a **"Get API Key"**
4. Crea un proyecto nuevo
5. Copia tu API Key

**Costo:** Gratis con límites generosos (60 requests/minuto)

**Nota:** Puedes usar Claude O Gemini, no ambos (son alternativos).

---

### 5. Supabase (Sesión 4)

**¿Qué es?** Base de datos en la nube + autenticación.

**Pasos:**
1. Ve a [supabase.com](https://supabase.com)
2. Clic en **"Start your project"**
3. Registra con GitHub (mismo que v0/Vercel)
4. Crea un nuevo proyecto (toma 2-3 minutos)
5. Guarda tu **Project URL** y **anon key** (las necesitarás en Sesión 4)

**Costo:** Gratis hasta 2 proyectos

**Tip:** No necesitas configurar nada más ahora, volverás en Sesión 4.

---

## ⚙️ Configuración de v0

### Paso 1: Crear Tu Primer Proyecto

1. Inicia sesión en [v0.dev](https://v0.dev)
2. Clic en **"New Project"** o **"+"**
3. Escribe un prompt de prueba:
   ```
   Crea una página simple con:
   - Un título que diga "Hola Bootcamp"
   - Un botón que cambie de color al hacer clic
   - Fondo degradado azul
   ```
4. Espera 10-20 segundos a que v0 genere el código
5. Verás un preview en vivo a la derecha

**¿Funciona?** ✅ Configuración correcta, continúa.
**¿No funciona?** ❌ Ve a [Solución de Problemas](#solución-de-problemas).

---

### Paso 2: Entender la Interfaz de v0

**Panel Izquierdo (Chat):**
- Aquí escribes tus prompts (instrucciones para la IA)
- La IA te responde con código y explicaciones
- Puedes hacer preguntas de seguimiento

**Panel Central (Código):**
- Muestra el código generado
- Tabs: `page.tsx`, `globals.css`, etc.
- Puedes editar manualmente si quieres

**Panel Derecho (Preview):**
- Muestra cómo se ve tu app en tiempo real
- Se actualiza automáticamente cuando cambias código
- Tiene modo móvil/desktop (toggle arriba)

---

### Paso 3: Hacer Deploy a Vercel

1. En v0, clic en **"Deploy"** (botón arriba a la derecha)
2. Selecciona **"Deploy to Vercel"**
3. Se abrirá Vercel pidiendo confirmación
4. Clic en **"Deploy"**
5. Espera 1-2 minutos
6. Verás tu URL pública: `tu-proyecto.vercel.app`

**¿Funciona la URL?** ✅ Todo listo para Sesión 1!
**¿No funciona?** ❌ Ve a [Solución de Problemas](#solución-de-problemas).

---

## ✅ Verificación de Instalación

### Checklist Pre-Sesión 1

Marca cada item cuando esté completo:

**Cuentas:**
- [ ] v0.dev registrado y funcionando
- [ ] Vercel registrado (misma cuenta GitHub que v0)
- [ ] Anthropic/Claude registrado (para Sesión 2)
- [ ] Google AI Studio O Claude (uno de los dos)
- [ ] Supabase registrado (para Sesión 4)

**Verificación Funcional:**
- [ ] Puedes crear un proyecto en v0
- [ ] v0 genera código correctamente
- [ ] El preview en v0 funciona
- [ ] Puedes hacer deploy a Vercel
- [ ] Tu URL de Vercel funciona
- [ ] Puedes acceder a tu API Key de Claude/Gemini

**Organización:**
- [ ] API Keys guardadas en lugar seguro (notas, gestor de contraseñas)
- [ ] Navegador con bookmarks: v0.dev, vercel.com, console.anthropic.com
- [ ] Correo verificado en todas las plataformas

**¿Todo marcado?** 🎉 Estás listo para empezar el bootcamp!

---

## 🚀 Primeros Pasos

### Tu Primer Proyecto de Práctica

Antes de la Sesión 1, practica con este proyecto simple:

**Prompt para v0:**
```
Crea una landing page personal con:
- Header con mi nombre y foto de perfil
- Sección "Sobre mí" con texto de presentación
- Sección de habilidades con 3 cards
- Footer con redes sociales (Twitter, LinkedIn, GitHub)
- Diseño moderno con colores azul y blanco
- Responsive (se adapta a móvil)
```

**Pasos:**
1. Copia el prompt y pégalo en v0
2. Espera a que genere el código
3. Personaliza con tu información real
4. Haz deploy a Vercel
5. Comparte tu URL en redes sociales

**Objetivo:** Familiarizarte con el flujo v0 → personalización → deploy.

---

### Conceptos Clave Antes de Empezar

Antes de la Sesión 1, entiende estos conceptos básicos:

**Localhost vs Producción:**
- **Localhost**: Tu app corriendo solo en tu computadora (nadie más puede verla)
- **Producción**: Tu app en internet (cualquiera con la URL puede verla)
- v0 trabaja en un "localhost virtual" (cloud preview)
- Vercel lleva tu app a producción

**Deploy:**
- Acción de publicar tu app en internet
- v0 → Vercel = automático con un clic
- Toma 1-2 minutos
- Te da una URL pública tipo `proyecto.vercel.app`

**Prompt:**
- Instrucciones que le das a la IA (v0, Claude, Gemini)
- Mientras más específicas, mejores resultados
- Puedes iterar: pedir cambios, ajustes, mejoras

---

## 🔧 Solución de Problemas

### Error 1: v0 No Genera Código

**Síntomas:**
- El chat queda en "thinking..." por más de 2 minutos
- Mensaje de error "Something went wrong"
- No aparece preview

**Soluciones:**
1. **Refresca la página** (F5 o Cmd+R)
2. **Verifica tu conexión a internet**
3. **Revisa tus créditos**: Ve a Settings → Usage (quizás agotaste el plan free)
4. **Simplifica el prompt**: Empieza con algo más básico
5. **Prueba en navegador incógnito**: Puede ser caché o extensiones

**Ejemplo de prompt más simple:**
```
Crea una página con un botón azul que diga "Hola"
```

---

### Error 2: Deploy a Vercel Falla

**Síntomas:**
- "Build failed" en Vercel
- URL muestra página de error
- Deploy queda en "Building..." por más de 10 minutos

**Soluciones:**
1. **Verifica conexión v0-Vercel**:
   - Ve a v0 → Settings → Integrations
   - Debe mostrar Vercel como "Connected"
   - Si no, clic en "Connect to Vercel"

2. **Revisa logs de build en Vercel**:
   - Ve a vercel.com → tu proyecto → Deployments
   - Clic en el deploy fallido
   - Revisa "Build Logs" para ver el error específico

3. **Re-intenta el deploy**:
   - En Vercel, clic en "Redeploy"
   - O en v0, clic en "Deploy" nuevamente

4. **Crea proyecto nuevo**:
   - Si persiste, crea un proyecto nuevo desde cero
   - A veces hay corrupciones en el proyecto

---

### Error 3: API Key de Claude/Gemini No Funciona

**Síntomas:**
- Error "Invalid API Key" en tu app
- No se puede conectar con el servicio de IA
- Mensajes de autenticación fallida

**Soluciones:**
1. **Verifica que copiaste la key completa**:
   - API Keys suelen ser largas (50-100 caracteres)
   - No debe tener espacios al inicio/final
   - Copia directamente desde la consola

2. **Revisa que la key no esté expirada**:
   - En Anthropic: console.anthropic.com → API Keys
   - En Google: aistudio.google.com → API keys
   - Verifica estado "Active"

3. **Genera una nueva key**:
   - Borra la key problemática
   - Crea una nueva
   - Actualiza en tu código

4. **Verifica créditos**:
   - Anthropic: console.anthropic.com → Billing
   - Google: No aplica (es gratis)

---

### Error 4: Supabase No Conecta

**Síntomas:**
- Error de conexión a base de datos
- No se puede autenticar usuarios
- "Invalid project URL" o "Invalid anon key"

**Soluciones:**
1. **Verifica que tu proyecto Supabase esté activo**:
   - Ve a supabase.com → Projects
   - Tu proyecto debe tener estado "Active" (verde)
   - Si está "Paused", clic en "Resume"

2. **Copia las credenciales correctas**:
   - Ve a Settings → API
   - Copia **Project URL** (empieza con `https://`)
   - Copia **anon public key** (NO la service_role key)

3. **Revisa configuración de variables de entorno en Vercel**:
   - Ve a Vercel → tu proyecto → Settings → Environment Variables
   - Debe tener `SUPABASE_URL` y `SUPABASE_ANON_KEY`
   - Re-deploy después de agregar variables

---

### Error 5: Preview en v0 No Se Actualiza

**Síntomas:**
- Cambias código pero preview sigue igual
- Preview muestra versión antigua
- Botones/funcionalidad no responde

**Soluciones:**
1. **Refresca el preview**:
   - Clic en botón de refresh arriba del preview (⟳)
   - O clic derecho en preview → Reload

2. **Limpia caché del navegador**:
   - Chrome: Cmd/Ctrl + Shift + Delete
   - Selecciona "Cached images and files"
   - Cierra y vuelve a abrir v0

3. **Fuerza regeneración**:
   - Pide a v0 que regenere: "regenera el código"
   - O crea un proyecto nuevo con el mismo código

---

## 📚 Recursos Adicionales

### Documentación Oficial

- [v0.dev Docs](https://v0.dev/docs) - Guía oficial de v0
- [Vercel Docs](https://vercel.com/docs) - Deploy y hosting
- [Anthropic Claude](https://docs.anthropic.com/) - API de IA
- [Google AI Studio](https://ai.google.dev/) - Gemini API
- [Supabase Docs](https://supabase.com/docs) - Base de datos y auth

### Videos Tutoriales

- [Cómo usar v0.dev (YouTube)](https://youtube.com/results?search_query=v0.dev+tutorial)
- [Deploy con Vercel (YouTube)](https://youtube.com/results?search_query=vercel+deploy+tutorial)
- [Claude API Quickstart (YouTube)](https://youtube.com/results?search_query=claude+api+tutorial)

### Comunidades

- [v0 Discord](https://discord.gg/v0) - Comunidad oficial de v0
- [Vercel Community](https://github.com/vercel/community) - Foro de Vercel
- [Supabase Discord](https://discord.supabase.com/) - Comunidad de Supabase

---

## 🎓 Tips Antes de Empezar

### Mentalidad de Aprendizaje

1. **Está bien no entender todo de inmediato**: Aprenderás haciendo, no memorizando
2. **Los errores son normales**: Todos los programadores los tienen, son parte del proceso
3. **Pregunta sin miedo**: La comunidad está para ayudar
4. **Experimenta libremente**: v0 y Vercel son gratis, no puedes romper nada permanentemente

### Organización

1. **Crea una carpeta de bookmarks** con todas tus herramientas
2. **Usa un gestor de contraseñas** para API Keys (LastPass, 1Password, Bitwarden)
3. **Toma capturas de pantalla** cuando encuentres errores (útil para pedir ayuda)
4. **Documenta tus avances**: Guarda URLs de tus proyectos, anota aprendizajes

### Expectativas Realistas

- **Sesión 1**: 2-3 horas (creación de Regenmon básico)
- **Sesión 2-3**: 3-4 horas cada una (IA + Auth)
- **Sesión 4**: 4-5 horas (Base de datos + funcionalidad compleja)
- **Sesión 5**: 2-3 horas (UI polish y mejoras finales)

**Total bootcamp**: 15-20 horas distribuidas en 5 semanas.

---

## ✅ Checklist Final Pre-Sesión 1

Antes de empezar la Sesión 1, confirma:

**Técnico:**
- [ ] v0.dev funciona correctamente
- [ ] Vercel conectado a v0
- [ ] Hiciste un deploy de prueba exitoso
- [ ] Tu URL de Vercel funciona
- [ ] Tienes API Key de Claude O Gemini guardada
- [ ] Supabase registrado (no necesitas configurarlo aún)

**Mental:**
- [ ] Entiendes el flujo: v0 → código → deploy → URL pública
- [ ] Sabes dónde buscar ayuda si algo falla
- [ ] Tienes 2-3 horas disponibles para Sesión 1
- [ ] Estás listo para experimentar y aprender

**Organizacional:**
- [ ] Navegador con pestañas: v0, Vercel, docs
- [ ] API Keys guardadas en lugar seguro
- [ ] Notas o documento para tomar apuntes
- [ ] Entorno de trabajo tranquilo sin interrupciones

---

## 🚀 ¿Listo para Empezar?

Si completaste todos los checkpoints, **estás listo para la Sesión 1**.

**Próximos pasos:**
1. [Sesión 1 - Tu Primer Regenmon →](./06-sesion-1.md) - Empieza el bootcamp
2. [Temario Completo →](./04-temario-completo.md) - Vista general del bootcamp
3. [Glosario →](./02-glosario.md) - Términos que encontrarás

---

## 🆘 ¿Necesitas Ayuda?

Si después de seguir todos los pasos aún tienes problemas:

1. **Revisa la sección de Solución de Problemas** arriba
2. **Consulta la documentación oficial** de la herramienta con problemas
3. **Busca en YouTube** tutoriales específicos de tu error
4. **Pregunta en la comunidad** (Discord, foros)
5. **Contacta a soporte** si es problema técnico de la plataforma

**Recuerda:** La configuración inicial es la parte más técnica del bootcamp. Una vez superada, todo fluye más naturalmente.

---

*Última actualización: Febrero 2025*
*Tiempo de lectura: 15 minutos*
*Tiempo de configuración: 15-20 minutos*
