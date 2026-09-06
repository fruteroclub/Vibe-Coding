# Temario Completo - VibeCoding Bootcamp

> Aprende a construir aplicaciones con inteligencia artificial integrada. Este es el temario completo del bootcamp, sesión por sesión.

---

## 📚 Estructura del Programa

El bootcamp consta de **5 sesiones prácticas** donde construyes tu Regenmon paso a paso, agregando una capa nueva en cada sesión.

**Duración total:** 10-15 horas (2-3 horas por sesión)
**Modalidad:** Self-paced con soporte en Discord
**Resultado:** Aplicación web completa desplegada en producción

---

## 🥚 Sesión 1: Nace tu Regenmon
**Tiempo:** 2-3 horas | **Capa:** UI + Data (básico)

### ¿Qué Aprenderás?

✅ Cómo funciona el desarrollo con IA
✅ Qué son componentes y cómo se organizan
✅ Hacer que la info persista (localStorage)

### Contenido Detallado

#### 1. Introducción al AI-assisted development

**Conceptos:**
- Cómo funciona el desarrollo con IA
- Crear cuentas en v0.dev y Vercel
- Tu primer prompt para generar código

**Herramientas:**
- **v0.dev** - Generación de código con IA
- **Vercel** - Plataforma de hosting y deployment
- **React** - Librería JavaScript para UI

**¿Por qué importa?**
Aprendes a comunicarte con la IA de forma efectiva. No escribirás código línea por línea, sino que dirigirás a la IA con prompts claros.

---

#### 2. Componentes de React y state management

**Conceptos:**
- Qué son los componentes y cómo se usan
- Guardar información con `useState`
- localStorage para guardar información

**Términos clave:**
- **Componentes:** Bloques reutilizables de interfaz que encapsulan HTML, lógica y estilos
- **useState:** Hook de React que crea variables reactivas que actualizan la UI automáticamente
- **localStorage:** API del navegador que persiste datos en disco entre sesiones

**Ejemplo práctico:**
```javascript
// Estado que cambia (useState)
const [felicidad, setFelicidad] = useState(80)

// Guardado permanente (localStorage)
localStorage.setItem('regenmon', JSON.stringify(data))
```

---

#### 3. Construcción del display principal

**Conceptos:**
- Prompt: Contenedor estilo Tamagotchi
- Crear las barras de estadísticas (felicidad, energía, hambre)
- Estilizar con Tailwind CSS

**Herramientas:**
- **Tailwind CSS:** Framework CSS utility-first con clases predefinidas
- **React Components:** Estructura modular de la UI

**¿Qué construirás?**
- 🎮 Display de tu Regenmon (visual Tamagotchi)
- 📝 Modal de creación (nombre + tipo)
- 📊 Sistema de stats con barras visuales

---

### Resultado Final de Sesión 1

✅ **App en internet donde creas tu Regenmon y regresas sin perder progreso**

**URL de ejemplo:** `https://mi-regenmon.vercel.app`

**Funcionalidades:**
- Crear Regenmon con nombre personalizado
- Ver stats visuales (felicidad, energía, hambre)
- Datos persisten al cerrar y reabrir
- App desplegada en Vercel 24/7

---

## 💬 Sesión 2: Tu Regenmon Habla
**Tiempo:** 2-3 horas | **Capa:** AI (conversación)

### ¿Qué Aprenderás?

✅ Cómo funcionan los LLMs (mental model)
✅ Qué es una API y cómo conectarte
✅ Crear "personalidad" con prompts

### Contenido Detallado

#### 1. Integración con LLMs

**Conceptos:**
- Cómo funcionan las APIs de inteligencia artificial
- Cómo funcionan los Large Language Models
- Crear tu primer API route en Next.js

**Términos clave:**
- **API:** Interfaz que permite comunicación entre servicios (request/response)
- **LLMs:** Large Language Models - Modelos de IA entrenados en millones de ejemplos de texto
- **API route:** Endpoint en Next.js que ejecuta código en servidor

**Flujo de comunicación:**
```
Tu App → API Route → Claude API → Respuesta IA
```

---

#### 2. System prompts: Definiendo personalidad

**Conceptos:**
- Anatomía de un system prompt efectivo
- Workshop: Crear personalidad de tu Regenmon
- Reglas de comportamiento y estilo
- Sistema simple de memoria (guardar temas)

**Términos clave:**
- **system prompt:** Instrucciones permanentes que definen el comportamiento del LLM
- **Contexto:** Información que la IA recuerda durante la conversación

**Ejemplo de System Prompt:**
```
Eres Flamix, un Regenmon de tipo fuego.

Personalidad:
- Entusiasta y motivador
- Usas emojis de fuego 🔥
- Hablas en segunda persona

Reglas:
- Si felicidad < 50: responde cansado
- Si energía > 80: responde muy animado
- Menciona tus stats ocasionalmente
```

---

#### 3. Interfaz de chat y personalidad

**Conceptos:**
- Escribir el system prompt de tu Regenmon
- Hacer que la IA responda según los stats
- Manejo de respuestas asíncronas
- Prompt: Actualizar stats según conversaciones
- Detección de palabras clave

**Términos clave:**
- **asíncronas:** Operaciones que no bloquean el código (await/async)
- **toast notifications:** Mensajes emergentes no-intrusivos que informan al usuario

**¿Qué construirás?**
- 💬 Interfaz de chat completa
- 🔌 Integración con Claude API
- 🎭 Stats afectan tono de respuestas
- 💾 Historial de conversaciones

---

### Resultado Final de Sesión 2

✅ **Tu Regenmon conversa. Si está feliz, es entusiasta. Si tiene baja energía, responde cansado.**

**Funcionalidades:**
- Chat funcional con IA
- Personalidad única según tipo de Regenmon
- Respuestas varían según stats actuales
- Conversación se siente natural y contextual

---

## 💛 Sesión 3: Tu Regenmon se Conecta
**Tiempo:** 2-3 horas | **Capa:** Auth (autenticación)

### ¿Qué Aprenderás?

✅ Sistemas de autenticación modernos
✅ Gestión de usuarios y sesiones
✅ Monedas virtuales en tu app

### Contenido Detallado

#### 1. Autenticación con Privy SDK

**Conceptos:**
- Configurar PrivyProvider
- Botón de "Conecta con tu Regenmon"
- Mostrar el perfil del usuario

**Términos clave:**
- **Privy SDK:** Kit de desarrollo para autenticación de usuarios
- **PrivyProvider:** Componente de React que provee autenticación a toda la app

**Flujo de Auth:**
```
1. Usuario hace clic en "Conectar"
2. Privy muestra opciones (email, wallet, Google)
3. Usuario se autentica
4. App obtiene userId único
5. Todas las acciones se asocian a ese userId
```

---

#### 2. Sistema de monedas $FRUTA

**Conceptos:**
- Llamar a la API para ver el balance
- Botón de "Reclamar Monedas"
- Actualizar el balance en tiempo real

**Términos clave:**
- **GET:** Método HTTP para obtener datos del servidor
- **endpoint:** URL específica de una API que ejecuta una función

**¿Cómo funciona?**
```javascript
// Ver balance
GET /api/coins → { userId: "123", balance: 100 }

// Reclamar monedas
POST /api/coins/claim → { newBalance: 110, claimed: 10 }
```

---

#### 3. Mecánica de alimentar

**Conceptos:**
- Crear endpoint POST /api/feed
- Gastar monedas y reducir hambre
- Feedback de transacción (toast notifications)

**Términos clave:**
- **POST:** Método HTTP para enviar datos al servidor
- **toast notifications:** Mensajes emergentes que confirman acciones

**¿Qué construirás?**
- 🔑 Login con Privy
- 💰 Balance de monedas $FRUTA
- 🍎 Botón "Alimentar" que gasta monedas
- ✅ Sistema de feedback visual

---

### Resultado Final de Sesión 3

✅ **Tu Regenmon tiene cuenta propia. Puedes alimentarlo gastando monedas virtuales.**

**Funcionalidades:**
- Login personalizado por usuario
- Sistema de monedas funcional
- Alimentar reduce hambre y gasta monedas
- Balance se actualiza en tiempo real

---

## 🌟 Sesión 4: Tu Regenmon Evoluciona
**Tiempo:** 2-3 horas | **Capa:** AI (multimodal)

### ¿Qué Aprenderás?

✅ Cómo la IA "ve" imágenes
✅ Evaluar contenido con APIs multimodales
✅ Sistemas de progresión y recompensas

### Contenido Detallado

#### 1. IA Multimodal

**Conceptos:**
- Cómo la IA "ve" imágenes
- Convertir imágenes a base64
- Enviar imagen al API de evaluación
- Evaluación de progreso a través de IA

**Términos clave:**
- **Multimodal:** IA que procesa múltiples tipos de datos (texto + imágenes)
- **base64:** Formato que convierte archivos binarios (imágenes) a texto

**¿Cómo funciona Claude Vision?**
```
1. Usuario sube foto de ejercicio
2. App convierte imagen a base64
3. Envía a Claude API con prompt de evaluación
4. Claude "ve" la imagen y analiza
5. Devuelve score (1-10) + feedback
6. App otorga monedas según score
```

---

#### 2. Sistema de subida de imágenes

**Conceptos:**
- Drag-and-drop con HTML5 File API
- Preview de la imagen antes de enviar
- Estructura de evaluación (forma, esfuerzo, creatividad)

**Términos clave:**
- **HTML5 File API:** API nativa del navegador para manejar archivos
- **Drag-and-drop:** Patrón UX para subir archivos arrastrando

**Criterios de evaluación:**
- **Forma:** Técnica del ejercicio (0-4 pts)
- **Esfuerzo:** Intensidad visible (0-3 pts)
- **Creatividad:** Originalidad (0-3 pts)

---

#### 3. Evaluación y scoring

**Conceptos:**
- Crear la rúbrica de evaluación en el prompt
- Recibir score y feedback de la IA
- Otorgar monedas según el score

**Ejemplo de rúbrica:**
```
Score 8-10: +50 monedas
Score 5-7: +30 monedas
Score 1-4: +10 monedas
```

**¿Qué construirás?**
- 📸 Upload de imágenes (drag-and-drop)
- 👁️ Claude Vision para evaluar fotos
- 🌟 3 etapas de evolución
- 💰 Sistema de recompensas

---

### Resultado Final de Sesión 4

✅ **Subes fotos de acciones positivas. La IA las evalúa, te da puntos. Tu Regenmon evoluciona.**

**Funcionalidades:**
- Upload de imágenes con preview
- Claude Vision evalúa cada foto
- Score + feedback personalizado
- Regenmon evoluciona según puntos acumulados

**Evoluciones:**
- 🥚 Nivel 1-5: Huevo
- 🐣 Nivel 6-10: Bebé
- 🦁 Nivel 11+: Adulto

---

## 👥 Sesión 5: Tu Regenmon Encuentra Amigos
**Tiempo:** 2-3 horas | **Capa:** Data (database) + Social

### ¿Qué Aprenderás?

✅ Bases de datos relacionales básicas
✅ Queries para leer data de otros
✅ Renderizar listas dinámicas

### Contenido Detallado

#### 1. Arquitectura de features sociales

**Conceptos:**
- Diferencia entre estado público y privado
- Cómo funcionan los registros de usuarios
- Polling vs WebSockets para notificaciones

**Términos clave:**
- **Polling:** Consultar API periódicamente para actualizar datos
- **WebSockets:** Conexión permanente para recibir actualizaciones en tiempo real

**Datos Públicos vs Privados:**
```
Privados (solo tú):
- Balance de monedas
- Historial de conversaciones
- Configuraciones

Públicos (todos pueden ver):
- Nombre de tu Regenmon
- Nivel y tipo
- Contador de visitas
```

---

#### 2. Registro público

**Conceptos:**
- Endpoint POST /api/social/register
- Generar URL compartible
- Contador de visitas

**¿Cómo funciona?**
```
1. Usuario hace clic en "Hacer Público"
2. Backend crea registro en DB
3. Genera slug único (ej: /visit/flamix-123)
4. Devuelve URL compartible
5. Usuario puede compartir su Regenmon
```

---

#### 3. Feed de descubrimiento

**Conceptos:**
- Endpoint GET /api/social/registry
- Grid de cards con otros Regenmons
- Filtros y ordenamiento (más nuevos, más visitados)
- Paginación básica

**Términos clave:**
- **Grid:** Diseño en cuadrícula para mostrar múltiples items
- **Paginación:** Cargar datos en bloques para mejorar performance

**Filtros disponibles:**
- Más recientes
- Más visitados
- Por tipo (Fuego, Agua, Planta)
- Por nivel

---

#### 4. Interacciones entre usuarios

**Conceptos:**
- Routing dinámico (/visit/[id])
- Acciones: Saludar, Regalar, Jugar
- Transferir monedas entre usuarios
- Sistema de notificaciones (toast + historial)

**Términos clave:**
- **Routing dinámico:** URLs que incluyen parámetros variables

**¿Qué construirás?**
- 🌐 Galería pública de Regenmons
- 👤 Perfiles de otros usuarios
- 💬 Sistema de "likes" o interacciones
- 🏆 Rankings y leaderboards

---

### Resultado Final de Sesión 5

✅ **Tu app es social. Ves otros Regenmons, interactúas, compites en rankings.**

**Funcionalidades:**
- Feed de descubrimiento con filtros
- Visitar perfil de otros usuarios
- Regalar monedas a otros Regenmons
- Ranking de más visitados y activos
- Sistema de notificaciones

---

## 📊 Resumen de Progresión

| Sesión | Capas Activas | Funcionalidades Acumuladas |
|--------|---------------|----------------------------|
| **1** | UI + Data (local) | App visual + localStorage |
| **2** | + AI (text) | Conversación con IA |
| **3** | + Auth | Login + monedas |
| **4** | + AI (vision) | Evaluación de imágenes |
| **5** | + Data (cloud) | Features sociales completas |

---

## 🎯 Términos Técnicos Clave

### Desarrollo
- **componentes:** Bloques reutilizables de interfaz
- **useState:** Hook de React para estado reactivo
- **localStorage:** Persistencia local en navegador
- **React:** Librería JavaScript para UI
- **Tailwind CSS:** Framework CSS utility-first
- **v0.dev:** Herramienta de IA para generar componentes
- **Vercel:** Plataforma de hosting
- **Next.js:** Framework de React con routing y API routes

### APIs e Inteligencia Artificial
- **API:** Interfaz para comunicación entre servicios
- **LLMs:** Large Language Models
- **prompt:** Instrucción en lenguaje natural para IA
- **system prompt:** Instrucciones permanentes de comportamiento
- **API route:** Endpoint en Next.js (servidor)
- **asíncronas:** Operaciones no bloqueantes (await/async)
- **Multimodal:** IA que procesa texto + imágenes
- **base64:** Formato para convertir binarios a texto

### Backend y Datos
- **endpoint:** URL específica de una API
- **POST:** Método HTTP para enviar datos
- **GET:** Método HTTP para obtener datos
- **Polling:** Consultas periódicas a API
- **WebSockets:** Conexión permanente en tiempo real
- **Paginación:** Cargar datos en bloques

### UI/UX
- **toast notifications:** Mensajes emergentes
- **Drag-and-drop:** Patrón UX para subir archivos
- **Grid:** Diseño en cuadrícula
- **Routing dinámico:** URLs con parámetros variables

### Autenticación
- **Privy SDK:** Kit de desarrollo para auth
- **PrivyProvider:** Componente de React para auth global
- **HTML5 File API:** API nativa para archivos

---

## 💡 Consejos para Cada Sesión

### Sesión 1
✅ **Haz:** Dedica tiempo a entender el flujo prompt → código
❌ **Evita:** Intentar memorizar sintaxis de React

### Sesión 2
✅ **Haz:** Experimenta con diferentes personalidades en el system prompt
❌ **Evita:** Hacer prompts genéricos como "hola"

### Sesión 3
✅ **Haz:** Prueba el login con diferentes métodos (email, wallet)
❌ **Evita:** Saltarte la configuración de Privy

### Sesión 4
✅ **Haz:** Sube fotos variadas para ver cómo evalúa la IA
❌ **Evita:** Fotos muy oscuras o borrosas

### Sesión 5
✅ **Haz:** Crea múltiples Regenmons de prueba para probar interacciones
❌ **Evita:** Hacer público tu Regenmon antes de terminar las funciones

---

## 🚀 Después del Bootcamp

Una vez que completes las 5 sesiones, habrás construido:

✅ Aplicación web completa desplegada
✅ Sistema de autenticación funcional
✅ Integración con IA (texto + visión)
✅ Base de datos en la nube
✅ Features sociales completas
✅ Portfolio project deployado

### Próximos Pasos Sugeridos

1. **Personaliza tu Regenmon**
   - Cambia los tipos (agrega nuevos elementos)
   - Modifica las mecánicas de evolución
   - Crea items especiales

2. **Agrega Features**
   - Sistema de comercio entre usuarios
   - Minijuegos para ganar monedas
   - Retos diarios

3. **Mejora el Stack**
   - Migra a Supabase para DB
   - Agrega analytics con Vercel
   - Implementa push notifications

4. **Construye Algo Nuevo**
   - Aplica las 5 capas a tu propia idea
   - Red social de nicho
   - SaaS simple
   - Juego casual

---

## 📚 Recursos Complementarios

### Documentación Oficial
- [React Docs](https://react.dev/)
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Anthropic Claude](https://docs.anthropic.com/)
- [Privy Docs](https://docs.privy.io/)
- [Vercel Docs](https://vercel.com/docs)

### Comunidad
- Discord de VibeCoding - Soporte <24h
- Office hours 2x por semana
- Gallery de proyectos finales

---

## 🎓 Certificación

Al completar las 5 sesiones:
- ✅ Certificado verificable
- ✅ Proyecto en portfolio
- ✅ Acceso a comunidad de alumni
- ✅ Templates de código reutilizables

---

**Siguiente paso:** [Quick Start - Configuración Inicial →](/doc/quick-start)

---

*Última actualización: Febrero 2025*
*Temario v1.0 - 5 sesiones prácticas*
