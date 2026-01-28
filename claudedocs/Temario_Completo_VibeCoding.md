# Vibe Coding Bootcamp: Regenmon

## 🎯 Arquitectura de 5 Capas

```
┌─────────────────────────────────────┐
│  LAYER 5: DEPLOY                    │  ← Sesión 1, 5
│  (Production & Distribution)        │
├─────────────────────────────────────┤
│  LAYER 4: AUTH                      │  ← Sesión 3
│  (Identity & Permissions)           │
├─────────────────────────────────────┤
│  LAYER 3: AI                        │  ← Sesión 2, 4
│  (Intelligence & Processing)        │
├─────────────────────────────────────┤
│  LAYER 2: DATA                      │  ← Sesión 1, 3, 5
│  (Storage & State)                  │
├─────────────────────────────────────┤
│  LAYER 1: UI                        │  ← Todas las sesiones
│  (Interface & Interaction)          │
└─────────────────────────────────────┘
```

---

## Sesión 1: Nace tu Regenmon

**Duración:** 75 minutos
**Layers:** UI (1) + Data (2) + Deploy (5)
**Objetivo:** App funcional desplegada en producción

### **1. Introducción al AI-assisted development**

**Conceptos Clave:**
- 🤖 **LLMs (Large Language Models)**: Modelos de IA entrenados en millones de ejemplos de código que predicen patrones probables
- 📝 **Prompt Engineering**: Arte de escribir instrucciones efectivas para que la IA genere código exacto
- 🔄 **Iteración**: Ciclo describe → genera → evalúa → refina
- 🎯 **Intención sobre sintaxis**: Enfocarse en QUÉ quieres, no CÓMO implementarlo

**Contenido:**
- 1.1 Cómo funciona el desarrollo con IA
- 1.2 Crear cuentas en v0.dev y Vercel
- 1.3 Tu primer prompt para generar código

---

### **2. Componentes de React y state management**

**Conceptos Clave:**
- 🧩 **Componentes**: Bloques reutilizables que encapsulan HTML + lógica + estilos
- 🌲 **Árbol de componentes**: Jerarquía padre-hijo (composición)
- ⬇️ **Props**: Información que fluye de padre a hijo (unidirectional data flow)
- 🧠 **useState**: Hook que crea variables reactivas que re-renderizan la UI al cambiar
- ⏱️ **Reactividad**: UI se actualiza automáticamente cuando el state cambia
- 💾 **localStorage**: API del navegador para persistir datos en disco entre sesiones
- 📦 **JSON**: Formato para serializar/deserializar objetos JavaScript a texto

**Contenido:**
- 2.1 Qué son los componentes y cómo se usan
- 2.2 Guardar información con useState
- 2.3 localStorage para persistir información

---

### **3. Construcción del display principal**

**Conceptos Clave:**
- 🎨 **Tailwind CSS**: Framework utility-first para estilos (clases predefinidas)
- 📐 **Responsive Design**: Layout que se adapta a diferentes tamaños de pantalla
- 🔀 **Renderizado condicional**: Mostrar/ocultar elementos según condiciones booleanas
- 🎭 **Component composition**: Combinar componentes pequeños en componentes complejos

**Contenido:**
- 3.1 Prompt: Contenedor estilo Tamagotchi
- 3.2 Crear las barras de estadísticas (felicidad, energía, hambre)
- 3.3 Estilizar con Tailwind CSS

---

## Sesión 2: Tu Regenmon Habla

**Duración:** 90 minutos
**Layers:** AI (3) + UI (1) + Data (2)
**Objetivo:** Chat inteligente con personalidad definida

### **1. Integración con LLMs**

**Conceptos Clave:**
- 🌐 **APIs**: Interfaces que permiten comunicación entre servicios (request/response)
- 🔌 **API Routes**: Endpoints en Next.js que ejecutan código en servidor (no en cliente)
- 🔐 **API Keys**: Credenciales secretas para autenticar con servicios externos
- 🔒 **Environment variables**: Variables secretas guardadas en `.env.local` (NUNCA en código)
- ⚙️ **Servidor vs Cliente**: Código que corre en backend vs código que corre en navegador
- 🧬 **LLM Context Window**: Límite de tokens que el modelo puede procesar simultáneamente

**Contenido:**
- 1.1 Cómo funcionan las APIs de inteligencia artificial
- 1.2 Cómo funcionan los Large Language Models
- 1.3 Crear tu primer API route en Next.js

---

### **2. System prompts: Definiendo personalidad**

**Conceptos Clave:**
- 📋 **System prompt**: Instrucciones permanentes que definen comportamiento del LLM
- 🎭 **Personalidad sintética**: Conjunto de reglas que crean comportamiento consistente
- 💬 **Context injection**: Pasar información dinámica (stats) al prompt
- 🧵 **Conversational memory**: Mantener historial de mensajes para coherencia
- 🔍 **Keyword detection**: Detectar patrones en texto para triggerar comportamientos
- 📊 **Dynamic prompts**: Prompts que cambian según el estado de la app

**Contenido:**
- 2.1 Anatomía de un system prompt efectivo
- 2.2 Workshop: Crear personalidad de tu Regenmon
- 2.3 Reglas de comportamiento y estilo
- 2.4 Sistema simple de memoria (guardar temas)

---

### **3. Interfaz de chat y personalidad**

**Conceptos Clave:**
- ⏳ **Operaciones asíncronas**: Código que NO bloquea (await/async)
- 🔄 **Streaming responses**: Recibir respuesta de IA token por token (en tiempo real)
- 💡 **Loading states**: Estados de UI que indican procesamiento en curso
- 🎯 **Side effects**: Efectos secundarios de interacciones (actualizar stats)
- 📈 **State derivation**: Calcular valores nuevos basados en estado actual

**Contenido:**
- 3.1 Escribir el system prompt de tu Regenmon
- 3.2 Hacer que la IA responda según los stats
- 3.3 Manejo de respuestas asíncronas
- 3.4 Prompt: Actualizar stats según conversaciones
- 3.5 Detección de palabras clave

---

## Sesión 3: Tu Regenmon se Conecta

**Duración:** 90 minutos
**Layers:** Auth (4) + Data (2) + UI (1)
**Objetivo:** Sistema de usuarios con economía funcional

### **1. Autenticación con Privy SDK**

**Conceptos Clave:**
- 🔑 **Autenticación**: Verificar identidad del usuario
- 🪪 **Wallets**: Direcciones blockchain como identidad (sin contraseñas)
- 🎁 **Embedded Wallets**: Wallets creados automáticamente para el usuario
- 🔐 **SDK (Software Development Kit)**: Librería que abstrae complejidad de un servicio
- 📦 **Context Providers**: Componentes de React que proveen datos a toda la app
- 👤 **User session**: Estado que indica si usuario está autenticado

**Contenido:**
- 1.1 Configurar PrivyProvider
- 1.2 Botón de "Conecta con tu Regenmon"
- 1.3 Mostrar el perfil del usuario

---

### **2. Sistema de monedas $FRUTA**

**Conceptos Clave:**
- 💰 **Economía virtual**: Sistema de recursos con escasez artificial
- 🎮 **Game loop**: Ciclo acción → recompensa → acción
- 🔄 **Polling**: Consultar API periódicamente para actualizar datos
- 📡 **RESTful APIs**: Arquitectura de APIs con verbos HTTP (GET/POST/PUT/DELETE)
- ⚡ **Optimistic updates**: Actualizar UI antes de confirmar con servidor
- 📊 **Balance management**: Rastrear recursos del usuario

**Contenido:**
- 2.1 Llamar a la API para ver el balance
- 2.2 Botón de "Reclamar Monedas"
- 2.3 Actualizar el balance en tiempo real

---

### **3. Mecánica de alimentar**

**Conceptos Clave:**
- 🔗 **Transaction flow**: Secuencia completa de una operación (request → validation → update → response)
- ✅ **Validation**: Verificar que operación es válida antes de ejecutar
- 💸 **Transacciones**: Operaciones que modifican estado (gastar, recibir)
- 🎉 **Toast notifications**: Feedback visual no-intrusivo de operaciones
- 🔒 **Idempotencia**: Operación que produce mismo resultado si se ejecuta múltiples veces
- ⚠️ **Error handling**: Manejo de casos donde operación falla

**Contenido:**
- 3.1 Crear endpoint POST /api/feed
- 3.2 Gastar monedas y reducir hambre
- 3.3 Feedback de transacción (toast notifications)

---

## Sesión 4: Tu Regenmon Evoluciona

**Duración:** 90 minutos
**Layers:** AI (3) + Data (2) + UI (1)
**Objetivo:** IA evalúa progreso del usuario con visión por computadora

### **1. IA Multimodal**

**Conceptos Clave:**
- 👁️ **Vision AI**: Modelos que "entienden" contenido de imágenes
- 📷 **Multimodal LLMs**: Modelos que procesan texto + imágenes simultáneamente
- 🔢 **Base64 encoding**: Convertir archivos binarios (imágenes) a texto para enviar por APIs
- 🧠 **Image understanding**: IA extrae información semántica de píxeles
- 📐 **Computer vision**: Campo de IA que procesa y analiza imágenes
- 🎯 **Prompt-guided analysis**: Dirigir atención de IA a aspectos específicos de imagen

**Contenido:**
- 1.1 Cómo la IA "ve" imágenes
- 1.2 Convertir imágenes a base64
- 1.3 Enviar imagen al API de evaluación
- 1.4 Evaluación de progreso a través de IA

---

### **2. Sistema de subida de imágenes**

**Conceptos Clave:**
- 📤 **File upload**: Proceso de enviar archivos desde cliente a servidor
- 🎨 **HTML5 File API**: API nativa del navegador para manejar archivos
- 🖱️ **Drag-and-drop**: UX pattern para subir archivos arrastrando
- 👀 **Image preview**: Mostrar imagen antes de procesarla
- 📦 **FormData**: Formato para enviar archivos en requests HTTP
- 🔄 **Upload states**: Estados de UI (idle, uploading, success, error)

**Contenido:**
- 2.1 Drag-and-drop con HTML5 File API
- 2.2 Preview de la imagen antes de enviar
- 2.3 Estructura de evaluación (forma, esfuerzo, creatividad)

---

### **3. Evaluación y scoring**

**Conceptos Clave:**
- 📊 **Rúbricas**: Criterios estructurados para evaluación consistente
- 🎯 **Structured outputs**: Forzar a IA a responder en formato específico (JSON)
- 💯 **Scoring systems**: Algoritmos para calcular puntajes según criterios
- 🔗 **Gamification**: Mecánicas de juego aplicadas a tareas no-lúdicas
- 💰 **Reward systems**: Sistemas que otorgan incentivos por comportamientos deseados
- 🧪 **Calibration**: Ajustar sistema de scoring para recompensar apropiadamente

**Contenido:**
- 3.1 Crear la rúbrica de evaluación en el prompt
- 3.2 Recibir score y feedback de la IA
- 3.3 Otorgar monedas según el score

---

## Sesión 5: Tu Regenmon Encuentra Amigos

**Duración:** 90 minutos
**Layers:** Data (2) + UI (1) + Deploy (5)
**Objetivo:** Sistema social completo con interacciones entre usuarios

### **1. Arquitectura de features sociales**

**Conceptos Clave:**
- 🌐 **Public vs Private data**: Datos accesibles a todos vs solo al dueño
- 🗄️ **User registry**: Base de datos de perfiles públicos
- 🔔 **Real-time updates**: Actualizar UI cuando datos cambian externamente
- 📡 **Polling vs WebSockets**: Estrategias para sincronizar estado (pull vs push)
- 🏗️ **Social graph**: Estructura de relaciones entre usuarios
- 🎭 **Privacy layers**: Niveles de visibilidad de información

**Contenido:**
- 1.1 Diferencia entre estado público y privado
- 1.2 Cómo funcionan los registros de usuarios
- 1.3 Polling vs WebSockets para notificaciones

---

### **2. Registro público**

**Conceptos Clave:**
- 🔗 **Dynamic routing**: URLs que incluyen parámetros variables (/visit/[id])
- 🌍 **Shareable URLs**: Links que otros usuarios pueden visitar
- 📊 **Analytics básicos**: Rastrear métricas (visitas, interacciones)
- 🆔 **Unique identifiers**: IDs únicos para identificar recursos (UUID)
- 📍 **URL parameters**: Pasar información mediante la URL
- 🔍 **SEO basics**: Hacer que tu app sea descubrible en buscadores

**Contenido:**
- 2.1 Endpoint POST /api/social/register
- 2.2 Generar URL compartible
- 2.3 Contador de visitas

---

### **3. Feed de descubrimiento**

**Conceptos Clave:**
- 📜 **Pagination**: Cargar datos en bloques para mejorar performance
- 🔀 **Sorting algorithms**: Ordenar datos (más nuevos, más visitados, aleatorio)
- 🔍 **Filtering**: Mostrar subconjunto de datos según criterios
- 🎴 **Grid layouts**: Diseño en cuadrícula para mostrar múltiples items
- ♾️ **Infinite scroll**: Cargar más contenido al llegar al final de página
- 🎯 **Discovery algorithms**: Sistemas para que usuarios encuentren contenido relevante

**Contenido:**
- 3.1 Endpoint GET /api/social/registry
- 3.2 Grid de cards con otros Regenmons
- 3.3 Filtros y ordenamiento (más nuevos, más visitados)
- 3.4 Paginación básica

---

### **4. Interacciones entre usuarios**

**Conceptos Clave:**
- 🤝 **P2P interactions**: Interacciones directas entre usuarios (sin intermediario)
- 💸 **Transferencias**: Mover recursos de un usuario a otro
- 📬 **Notification systems**: Informar a usuarios de eventos relevantes
- 📝 **Activity log**: Historial de acciones realizadas
- 🔐 **Authorization**: Verificar que usuario tiene permiso para acción
- ⚡ **Immediate feedback**: Confirmar acciones instantáneamente en UI

**Contenido:**
- 4.1 Routing dinámico (/visit/[id])
- 4.2 Acciones: Saludar, Regalar, Jugar
- 4.3 Transferir monedas entre usuarios
- 4.4 Sistema de notificaciones (toast + historial)

---

## 📚 Glosario de Tecnologías

| Tecnología | Qué es | Sesión |
|-----------|--------|--------|
| **React** | Librería UI con componentes reactivos | 1-5 |
| **Next.js** | Framework React con routing y API routes | 1-5 |
| **Tailwind CSS** | Framework CSS utility-first | 1-5 |
| **v0.dev** | IA para generar componentes React | 1 |
| **Vercel** | Plataforma de deploy para Next.js | 1, 5 |
| **Privy** | SDK de autenticación con wallets | 3 |
| **OpenAI API** | API de GPT para chat inteligente | 2 |
| **Vision AI** | API para análisis de imágenes | 4 |

---

## 🎯 Progresión Pedagógica

```
SESIÓN 1: Fundamentos
└─ UI + Data + Deploy
   └─ "Hacer algo que funcione"

SESIÓN 2: Inteligencia
└─ AI + Chat
   └─ "Hacer algo que piense"

SESIÓN 3: Identidad
└─ Auth + Economía
   └─ "Hacer algo personal"

SESIÓN 4: Visión
└─ Multimodal AI
   └─ "Hacer algo que vea"

SESIÓN 5: Social
└─ Features sociales
   └─ "Hacer algo conectado"
```

---

## 🚀 Resultado Final

Al completar el bootcamp, habrás construido:

✅ **App web funcional** desplegada en producción
✅ **IA conversacional** con personalidad única
✅ **Sistema de autenticación** sin contraseñas
✅ **Economía virtual** con monedas funcionales
✅ **IA multimodal** que evalúa imágenes
✅ **Features sociales** para interactuar con otros usuarios

**Todo sin escribir una línea de código manualmente.**

---

## 💡 Bonus: Sesión 1.5 (Opcional)

**Layer 4.5: Observability & Analytics**

**Duración:** 20 minutos
**Objetivo:** Añadir analytics profesional con Microsoft Clarity

**Conceptos Clave:**
- 📊 **Analytics**: Rastrear comportamiento de usuarios
- 🗺️ **Heatmaps**: Visualizar dónde hacen clic los usuarios
- 🎥 **Session recordings**: Ver grabaciones de sesiones reales
- 🎯 **Custom events**: Rastrear eventos específicos de tu app
- 📈 **User insights**: Entender cómo usuarios usan tu app
- 🔍 **A/B testing**: Comparar diferentes versiones de features

**Implementación:**
```javascript
// Setup Clarity
clarity.set("bootcamp_session", "1")
clarity.set("regenmon_created", "true")
clarity.identify(regenmonId, null, null, nombreRegenmon)
```

**Valor:**
- Ver dónde los usuarios se atascan
- Optimizar UX basado en datos reales
- Entender patrones de uso
- Fundación para features de ML futuras
