# Las 5 Capas de Toda Aplicación

> **Filosofía:** No enseñamos recetas. Enseñamos ingredientes.

Toda aplicación funcional se construye sobre estas 5 capas fundamentales. Cambias el contenido, no la estructura.

---

## 💡 Clave para Entender

**Todas las apps que usas día con día tienen las mismas 5 capas.**

- Instagram: UI + Data + AI + Auth + Deploy
- ChatGPT: UI + Data + AI + Auth + Deploy
- Tu banco online: UI + Data + AI + Auth + Deploy
- Netflix: UI + Data + AI + Auth + Deploy

**Cambias el contenido, no la estructura.**

Una vez que dominas estas 5 capas, puedes construir **LO QUE SEA**.

---

## 🎨 LAYER 1: UI (Interfaz)
**Subtítulo:** Lo que ves en pantalla

### ¿Qué es?

Todo lo visual de tu app: colores, botones, textos, imágenes. Es lo que tus usuarios ven y tocan.

**En términos simples:** Todo lo que ves y tocas en la pantalla.

### Qué Incluye

- ✅ Botones y menús
- ✅ Diseño y colores
- ✅ Animaciones
- ✅ Versión móvil y computadora (responsive)

### En Regenmon

- 🎮 La imagen de tu mascota
- 📊 Las barras de felicidad y energía
- 🔘 Los botones para interactuar (Alimentar, Jugar, Dormir)
- 🎨 La pantalla donde creas tu mascota

### Herramientas

**React** - Framework para construir interfaces
**Tailwind CSS** - Estilos y diseño visual
**v0.dev** - Generación de código con IA

### Cuándo la Usas

**Sesión 1** - Construyes toda la interfaz visual de tu Regenmon desde cero.

---

## 💾 LAYER 2: DATA (Datos)
**Subtítulo:** La memoria de tu app

### ¿Qué es?

Aquí se guarda toda la información: nombres, mensajes, progreso. Es como la memoria de tu app.

**En términos simples:** Todo lo que tu app recuerda cuando la cierras y vuelves a abrir.

### Qué Incluye

- ✅ Información mientras usas la app (temporal)
- ✅ Datos guardados en tu dispositivo (localStorage)
- ✅ Información guardada en internet (base de datos en la nube)
- ✅ Sincronización entre tus dispositivos

### En Regenmon

- 📝 El nombre de tu mascota
- 💯 Su nivel de felicidad y energía
- 💬 Las conversaciones que tuviste
- 🌟 En qué etapa de evolución está

### Herramientas

**useState** - Memoria temporal en React
**localStorage** - Memoria en tu navegador (persiste)
**Supabase** - Base de datos en la nube

### Tipos de Datos

| Tipo | Dónde se Guarda | Duración | Uso |
|------|----------------|----------|-----|
| **Estado (State)** | RAM del navegador | Mientras la app está abierta | Datos temporales que cambian |
| **localStorage** | Disco de tu PC | Hasta que limpies cookies | Datos locales que persisten |
| **Database** | Servidores en la nube | Para siempre | Datos compartidos entre usuarios |

### Cuándo la Usas

**Sesión 1** - localStorage para guardar tu Regenmon
**Sesión 4** - Supabase para datos permanentes y compartidos

---

## 🤖 LAYER 3: AI (Inteligencia)
**Subtítulo:** El cerebro de tu app

### ¿Qué es?

La inteligencia artificial que hace que tu app entienda, piense y responda como si fuera inteligente.

**En términos simples:** Todo lo que hace que tu app parezca inteligente y responda como una persona.

### Qué Incluye

- ✅ Conversaciones y chat
- ✅ Entender imágenes (visión por computadora)
- ✅ Crear respuestas únicas
- ✅ Dar recomendaciones personalizadas

### En Regenmon

- 💬 Cuando tu mascota te habla
- 👁️ Cuando evalúa las fotos que subes
- 🎭 La personalidad única de tu mascota
- 🎭 Las respuestas que te da según su humor

### Herramientas

**Claude API** - Modelo de lenguaje de Anthropic
**OpenAI API** - GPT-4 y modelos de OpenAI
**Replicate** - Modelos de código abierto

### Capacidades de IA Moderna

#### 1. Conversación (Text)
```
Entrada: "Hola, ¿cómo estás?"
IA: Analiza contexto + personalidad
Salida: "¡Hola! 🔥 Estoy genial, full energía!"
```

#### 2. Visión (Multimodal)
```
Entrada: Foto de ejercicio
IA: Analiza imagen + contexto
Salida: Score 8/10 + feedback detallado
```

#### 3. Personalidad
```
System Prompt: "Eres Flamix, un Regenmon de fuego entusiasta"
→ Todas las respuestas reflejan esta personalidad
```

### Cuándo la Usas

**Sesión 2** - Tu Regenmon conversa usando Claude API
**Sesión 4** - Claude Vision evalúa fotos que subes

---

## 🔐 LAYER 4: AUTH (Login)
**Subtítulo:** Tu identidad en la app

### ¿Qué es?

El sistema que te permite entrar a tu cuenta y mantiene tu información separada de otros usuarios.

**En términos simples:** Cómo la app sabe que eres tú y te deja ver solo tus cosas.

### Qué Incluye

- ✅ Crear cuenta y entrar
- ✅ Mantener tu sesión abierta
- ✅ Tus datos privados y separados
- ✅ Lo que puedes y no puedes hacer (permisos)

### En Regenmon

- 🔑 Tu login personal
- 💰 Tus monedas acumuladas ($FRUTA)
- 🎮 Tu mascota es solo tuya (nadie más puede modificarla)
- 🛒 Tus compras y recompensas

### Herramientas

**Privy** - Autenticación Web3 y tradicional
**Clerk** - Auth as a Service
**NextAuth** - Auth de código abierto para Next.js

### Flujo de Autenticación

```
1. Usuario hace clic en "Conectar"
2. Privy muestra opciones (email, wallet, Google)
3. Usuario se autentica
4. Privy genera un token
5. Tu app guarda el token
6. Todas las requests incluyen el token
7. Backend verifica token antes de responder
```

### Conceptos Clave

**Session (Sesión):** Tiempo que estás logueado
**Token:** Pase que prueba que ya hiciste login
**Permissions:** Lo que puedes hacer según tu rol
**User ID:** Identificador único de tu cuenta

### Cuándo la Usas

**Sesión 3** - Integras Privy para login y manejo de monedas

---

## 🚀 LAYER 5: DEPLOY (Publicación)
**Subtítulo:** Compartir tu app con el mundo

### ¿Qué es?

El proceso de llevar tu app de tu computadora a internet para que cualquiera pueda usarla. Es como publicar un video en YouTube, pero con tu aplicación.

**En términos simples:** De tu computadora a internet para que todos puedan verla.

### Qué Incluye

- ✅ Subir tu app a internet
- ✅ Conseguir un enlace para compartir
- ✅ Hacer que funcione desde cualquier dispositivo
- ✅ Mantenerla actualizada automáticamente

### En Regenmon

- 🌐 Tu app funciona 24/7 aunque cierres tu computadora
- 🔗 Puedes compartir un link con tus amigos
- 📱 Funciona desde cualquier celular o computadora
- 🔄 Cada vez que mejoras algo, se actualiza automáticamente

### Herramientas

**Vercel** - Plataforma donde publicamos apps web (la más usada)
**Netlify** - Alternativa a Vercel
**GitHub Pages** - Hosting gratuito para proyectos simples

### Proceso de Deploy

```
1. Código en tu computadora (localhost)
   ↓
2. Push a GitHub (control de versiones)
   ↓
3. Vercel detecta cambios automáticamente
   ↓
4. Vercel construye tu app (build)
   ↓
5. Vercel la publica en su red global (CDN)
   ↓
6. Recibes una URL única
   ↓
7. Tu app está viva en internet 🎉
```

### Diferencia: Localhost vs Producción

| Aspecto | Localhost | Producción |
|---------|-----------|-----------|
| **Dónde está** | Solo en tu PC | Servidores de Vercel |
| **Quién puede verla** | Solo tú | Cualquiera con el link |
| **Velocidad** | Instantánea | Depende de internet |
| **Estabilidad** | Se cae si apagas tu PC | Funciona 24/7 |
| **URL** | localhost:3000 | miapp.vercel.app |

### Cuándo la Usas

**Sesión 1** - Primer deploy de tu Regenmon
**Todas las sesiones** - Cada mejora se despliega a producción

---

## 🔄 Cómo Funcionan Juntas

### Flujo Completo de Usuario

```
1. Usuario abre miapp.vercel.app
   └─ LAYER 5 (Deploy): Vercel sirve la app

2. Usuario ve la pantalla principal
   └─ LAYER 1 (UI): React renderiza la interfaz

3. Usuario hace login
   └─ LAYER 4 (Auth): Privy autentica al usuario

4. App carga datos del usuario
   └─ LAYER 2 (Data): Supabase devuelve información

5. Usuario chatea con su Regenmon
   └─ LAYER 3 (AI): Claude genera respuestas

6. Usuario sube una foto para evaluar
   └─ LAYER 3 (AI): Claude Vision analiza imagen
   └─ LAYER 2 (Data): Resultado se guarda en DB
   └─ LAYER 1 (UI): Score aparece en pantalla
```

### Ejemplo Real: Botón "Alimentar"

```javascript
// LAYER 1 (UI) - Botón visible
<button onClick={handleFeed}>Alimentar 🍎</button>

// LAYER 4 (Auth) - Verificar usuario
const userId = await privy.getUser()

// LAYER 2 (Data) - Leer monedas actuales
const balance = await supabase.from('users').select('coins')

// Lógica - Verificar si tiene suficientes monedas
if (balance < 10) return "No tienes monedas"

// LAYER 2 (Data) - Actualizar datos
await supabase.from('users').update({
  coins: balance - 10,
  hunger: 0
})

// LAYER 1 (UI) - Mostrar cambios
setHunger(0)
setCoins(balance - 10)

// LAYER 3 (AI) - Reacción del Regenmon
const response = await claude.chat("Acabas de alimentarme")
```

---

## 📚 Progresión en el Bootcamp

### Sesión 1: Fundamentos
**Capas:** UI + Data (básico)
- ✅ Interfaz completa con React
- ✅ localStorage para guardar progreso
- ✅ Deploy a Vercel

**Resultado:** App funcionando en internet

---

### Sesión 2: Inteligencia
**Capas:** UI + Data + AI
- ✅ Chat funcional
- ✅ Integración con Claude API
- ✅ Personalidad del Regenmon

**Resultado:** Tu mascota conversa contigo

---

### Sesión 3: Identidad
**Capas:** UI + Data + AI + Auth
- ✅ Login con Privy
- ✅ Sistema de monedas
- ✅ Datos privados por usuario

**Resultado:** Cada usuario tiene su propia cuenta

---

### Sesión 4: Visión
**Capas:** UI + Data + AI (multimodal) + Auth
- ✅ Upload de imágenes
- ✅ Claude Vision para evaluar
- ✅ Sistema de evolución

**Resultado:** La IA ve y evalúa lo que subes

---

### Sesión 5: Social
**Capas:** Todas las 5 + Features sociales
- ✅ Base de datos completa en Supabase
- ✅ Galería pública de Regenmons
- ✅ Interacciones entre usuarios

**Resultado:** App social completa

---

## ⭐ Por Qué Importa Este Framework

### 1. 🔄 Transferibilidad

**Este conocimiento se transfiere a CUALQUIER app que construyas.**

Quieres hacer:
- **Red social** → Mismas 5 capas, diferente contenido
- **E-commerce** → Mismas 5 capas, diferente lógica de negocio
- **SaaS** → Mismas 5 capas, diferente funcionalidad
- **Juego** → Mismas 5 capas, diferente mecánica

**El framework no cambia. Solo cambia lo que pones en cada capa.**

---

### 2. 🐛 Claridad de Debugging

Cuando algo no funciona, sabes exactamente dónde buscar:

| Problema | Capa Responsable | Solución |
|----------|------------------|----------|
| Botón no se ve bien | LAYER 1 (UI) | Revisar componente y estilos |
| Datos no se guardan | LAYER 2 (Data) | Verificar localStorage/DB |
| IA responde mal | LAYER 3 (AI) | Ajustar system prompt |
| No puedo hacer login | LAYER 4 (Auth) | Verificar token/sesión |
| App no carga | LAYER 5 (Deploy) | Revisar Vercel logs |

**No más "no sé por dónde empezar a buscar el error".**

---

### 3. 🧩 Modularidad

**Puedes cambiar una capa sin tocar las demás.**

Ejemplos reales:

#### Cambiar de Base de Datos
```
De: localStorage (Layer 2)
A: Supabase (Layer 2)

✅ UI sigue igual
✅ AI sigue igual
✅ Auth sigue igual
✅ Deploy sigue igual
```

#### Cambiar de Framework UI
```
De: React (Layer 1)
A: Vue (Layer 1)

✅ Data sigue igual
✅ AI sigue igual
✅ Auth sigue igual
✅ Deploy sigue igual
```

#### Cambiar de Proveedor de IA
```
De: Claude API (Layer 3)
A: OpenAI API (Layer 3)

✅ UI sigue igual
✅ Data sigue igual
✅ Auth sigue igual
✅ Deploy sigue igual
```

**Esto hace que tu código sea:**
- Más fácil de mantener
- Más fácil de mejorar
- Más fácil de escalar

---

## 🎯 Arquitectura en Capas vs Spaghet Code

### ❌ Sin Capas (Caos)
```javascript
// Todo mezclado - DIFÍCIL de mantener
function hacerTodo() {
  // UI
  const button = document.createElement('button')
  button.style.color = 'blue'

  // Auth
  if (!loggedIn) return

  // Data
  localStorage.setItem('data', 'algo')

  // AI
  fetch('/api/ai')

  // Deploy
  // ¿Dónde va esto?
}
```

### ✅ Con Capas (Organizado)
```javascript
// LAYER 1 (UI)
function FeedButton() {
  return <Button onClick={handleFeed}>Alimentar</Button>
}

// LAYER 4 (Auth)
function useAuth() {
  return privy.getUser()
}

// LAYER 2 (Data)
function useRegenmonData() {
  return supabase.from('regenmon').select()
}

// LAYER 3 (AI)
function chatWithRegenmon(message) {
  return claude.chat(message)
}
```

**Beneficios:**
- ✅ Cada función tiene UN propósito claro
- ✅ Fácil encontrar dónde está cada cosa
- ✅ Fácil probar cada parte por separado
- ✅ Fácil trabajar en equipo

---

## 💡 Casos de Uso Reales

### Ejemplo 1: Instagram

| Capa | En Instagram |
|------|-------------|
| **UI** | Feed, stories, reels, botones de like |
| **Data** | Posts guardados, followers, comentarios |
| **AI** | Recomendaciones de contenido, filtros de búsqueda |
| **Auth** | Login, perfil, privacidad |
| **Deploy** | instagram.com funcionando 24/7 |

### Ejemplo 2: ChatGPT

| Capa | En ChatGPT |
|------|-----------|
| **UI** | Chat interface, sidebar, botones |
| **Data** | Historial de conversaciones, configuraciones |
| **AI** | GPT-4, generación de respuestas |
| **Auth** | Cuenta de OpenAI, planes (free/plus) |
| **Deploy** | chat.openai.com funcionando globalmente |

### Ejemplo 3: Tu Regenmon

| Capa | En Regenmon |
|------|------------|
| **UI** | Imagen de mascota, barras de stats, botones |
| **Data** | Nombre, nivel, felicidad, historial |
| **AI** | Conversación, evaluación de fotos |
| **Auth** | Login, monedas $FRUTA |
| **Deploy** | miapp.vercel.app |

---

## 🔑 Conceptos Clave para Recordar

### 1. Separación de Responsabilidades
Cada capa tiene UNA responsabilidad clara. No mezcles.

### 2. Comunicación Entre Capas
Las capas se comunican entre sí, pero no se mezclan.
```
UI ← → Data ← → AI
      ↓
     Auth
      ↓
    Deploy
```

### 3. Independencia
Cambiar una capa no debe romper las demás.

### 4. Universalidad
TODAS las apps modernas usan estas 5 capas.

---

## 🚀 Próximos Pasos

Ahora que entiendes la arquitectura:

1. **[Ver Temario →](/doc/ai)** - Qué aprenderás en cada sesión
2. **[Quick Start →](/doc/quick-start)** - Configura tu entorno
3. **[Sesión 1 →](/doc/session-1)** - Empieza a construir

---

## 📚 Recursos Adicionales

### Para Profundizar en Cada Capa

**UI (Layer 1):**
- [React Docs](https://react.dev/) - Framework oficial
- [Tailwind CSS](https://tailwindcss.com/) - Estilos
- [v0.dev](https://v0.dev/) - Generación de código

**Data (Layer 2):**
- [Supabase Docs](https://supabase.com/docs) - Base de datos
- [MDN localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

**AI (Layer 3):**
- [Anthropic Claude Docs](https://docs.anthropic.com/)
- [OpenAI Platform](https://platform.openai.com/docs)

**Auth (Layer 4):**
- [Privy Docs](https://docs.privy.io/)
- [Clerk Documentation](https://clerk.com/docs)

**Deploy (Layer 5):**
- [Vercel Docs](https://vercel.com/docs)
- [GitHub Pages](https://pages.github.com/)

---

*Última actualización: Febrero 2025*
*Framework universal aplicable a cualquier aplicación web moderna*
