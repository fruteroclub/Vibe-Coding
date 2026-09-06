# Sesión 2 - Inteligencia Artificial 🤖

> Transforma tu Regenmon en un compañero conversacional inteligente.

---

## 📋 Tabla de Contenidos

1. [Resumen de la Sesión](#resumen-de-la-sesión)
2. [Prerequisitos](#prerequisitos)
3. [Prompt Completo para v0](#prompt-completo-para-v0)
4. [Entregable de la Sesión](#entregable-de-la-sesión)
5. [Material de Apoyo](#material-de-apoyo)
6. [Errores Comunes y Soluciones](#errores-comunes-y-soluciones)
7. [Checklist de Validación](#checklist-de-validación)
8. [Puente a Sesión 3](#puente-a-sesión-3)

**Tiempo estimado**: 3-4 horas
**Dificultad**: ⭐⭐ Intermedio
**Prerequisito**: [Sesión 1 completada](./06-sesion-1.md)

---

## 🎯 Resumen de la Sesión

### ¿Qué Aprenderás?

Esta sesión introduce la integración de modelos de lenguaje (IA) en aplicaciones web. Aprenderás a conectar tu app con servicios de IA profesionales y diseñar experiencias conversacionales.

**4 Conceptos Clave:**

1. **Modelos de IA (LLMs)** - Qué son Claude/Gemini y cómo funcionan las APIs de IA
2. **System Prompts** - Cómo darle personalidad única a la IA
3. **Interfaz de Chat** - Construir UX conversacional con historial de mensajes
4. **Contexto de Conversación** - Cómo mantener memoria entre mensajes

### ¿Qué Construirás?

Agregarás un **sistema de chat inteligente** a tu Regenmon:
- Conversaciones naturales con tu mascota
- Personalidad dinámica basada en nivel y felicidad
- Historial de mensajes persistente
- Respuestas contextuales y coherentes
- Integración con Claude API o Google Gemini

**Resultado final**: Tu Regenmon podrá mantener conversaciones reales, dar consejos de entrenamiento, contar chistes, y responder preguntas con personalidad única.

### ¿Por Qué Esta Sesión Es Importante?

> **"Las aplicaciones del futuro no son formularios y botones, son conversaciones inteligentes."**

Integrar IA en aplicaciones ya no es opcional - es la expectativa estándar. Esta sesión te enseña a agregar capacidades conversacionales a CUALQUIER app, no solo juegos.

---

## 📚 Prerequisitos

### Antes de Empezar

**Técnicos:**
- [ ] Sesión 1 completada con Regenmon funcional
- [ ] URL de Vercel funcionando correctamente
- [ ] API Key de Claude O Google Gemini configurada
- [ ] $5-15 de crédito en tu cuenta de IA elegida

**Conocimientos:**
- ✅ Cómo usar useState y useEffect (de Sesión 1)
- ✅ Cómo funciona localStorage (de Sesión 1)
- ✅ Cómo hacer deploy a Vercel (de Sesión 1)

### Configuración de API Keys

#### Opción A: Claude API (Anthropic)

1. Ve a [console.anthropic.com](https://console.anthropic.com)
2. Inicia sesión o regístrate
3. Ve a **API Keys** → **Create Key**
4. Copia tu key (empieza con `sk-ant-...`)
5. Guárdala en un gestor de contraseñas

**Costo**: $5 gratis inicial + ~$0.01-0.05 por conversación

#### Opción B: Google Gemini

1. Ve a [aistudio.google.com](https://aistudio.google.com)
2. Inicia sesión con tu cuenta de Google
3. Clic en **Get API Key**
4. Crea un proyecto nuevo
5. Copia tu API Key

**Costo**: Gratis hasta 60 requests/minuto

### ¿Cuál Elegir?

| Aspecto | Claude | Gemini |
|---------|--------|--------|
| **Calidad** | Excelente | Muy buena |
| **Costo** | Pago ($5 gratis) | Gratis (límites) |
| **Velocidad** | Rápida | Muy rápida |
| **Personalidad** | Más natural | Más técnica |
| **Límites** | Por uso | 60 req/min |

**Recomendación:** Empieza con **Gemini** (gratis) para aprender, migra a **Claude** si necesitas mejor personalidad.

---

## 📝 Prompt Completo para v0

### Contexto para el Prompt

Este prompt agrega un sistema de chat completo a tu Regenmon existente. Asume que ya tienes:
- Sistema de nivel, felicidad, XP (de Sesión 1)
- localStorage funcionando
- Botones de acción (Alimentar, Jugar, Entrenar)

### Prompt Principal

Copia este prompt en v0 (asegúrate de tener tu proyecto de Sesión 1 abierto):

```
Agrega un sistema de chat inteligente con IA a mi aplicación Regenmon existente. El chat debe permitir al usuario conversar con su Regenmon usando Claude API o Google Gemini.

## INTEGRACIÓN CON CÓDIGO EXISTENTE

Mantener todo lo de Sesión 1:
- Sistema de nivel, felicidad, XP
- Botones de acción (Alimentar, Jugar, Entrenar)
- localStorage con persistencia
- Diseño responsive actual

Agregar nueva sección de chat debajo de las acciones principales.

## NUEVA FUNCIONALIDAD: CHAT CON IA

1. Interfaz de Chat
   - Input de texto con placeholder "Habla con tu Regenmon..."
   - Botón de "Enviar" o Enter para enviar mensaje
   - Área de conversación que muestra historial
   - Mensajes del usuario alineados a la derecha (fondo azul)
   - Mensajes del Regenmon alineados a la izquierda (fondo verde)
   - Auto-scroll al último mensaje
   - Indicador de "escribiendo..." mientras la IA responde

2. System Prompt Dinámico
   El system prompt de la IA debe incluir:
   - Nombre del Regenmon
   - Nivel actual
   - Felicidad actual (afecta el tono)
   - Tipo/elemento del Regenmon (fuego, agua, etc.)

   Ejemplo de system prompt:
   ```
   Eres {nombre}, un Regenmon de tipo {tipo} de nivel {nivel}.
   Tu felicidad actual es {felicidad}/100.

   Personalidad:
   - Si felicidad > 70: Alegre, juguetón, energético
   - Si felicidad 40-70: Neutral, amigable, tranquilo
   - Si felicidad < 40: Triste, necesitado, pide atención

   Comportamiento:
   - Hablas en primera persona como la mascota
   - Eres breve (máximo 2-3 oraciones por respuesta)
   - Mencionas tu nivel y stats cuando es relevante
   - Das consejos sobre cómo mejorar
   - Puedes contar chistes relacionados con tu tipo
   - Reaccionas al estado de felicidad
   ```

3. Llamada a la API
   - Usa fetch para llamar a la API elegida (Claude o Gemini)
   - Endpoint de Claude: `https://api.anthropic.com/v1/messages`
   - Endpoint de Gemini: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent`

   Manejo de errores:
   - Si falla la API, muestra mensaje de error amigable
   - Si no hay API key configurada, muestra instrucciones
   - Loading state mientras espera respuesta

4. Historial de Conversación
   - Guarda últimos 10 mensajes en localStorage
   - Formato: array de objetos `{ role: 'user'|'assistant', content: string, timestamp: number }`
   - Carga historial al iniciar la app
   - Botón "Limpiar chat" para borrar historial

5. Context Window
   - Envía últimos 5 mensajes como contexto a la API
   - Formato correcto para cada API:
     - Claude: array de `{role, content}`
     - Gemini: array de `{parts: [{text}]}`

## ESPECIFICACIONES TÉCNICAS

API Configuration (Claude):
```typescript
const response = await fetch('https://api.anthropic.com/v1/messages', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': apiKey,
    'anthropic-version': '2023-06-01'
  },
  body: JSON.stringify({
    model: 'claude-3-haiku-20240307',
    max_tokens: 150,
    system: systemPrompt,
    messages: conversationHistory
  })
});
```

API Configuration (Gemini):
```typescript
const response = await fetch(
  `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`,
  {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: conversationHistory,
      generationConfig: {
        temperature: 0.9,
        maxOutputTokens: 150
      }
    })
  }
);
```

localStorage Schema:
```typescript
interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
}

interface ChatData {
  messages: ChatMessage[];
  lastUpdated: number;
}
```

## INTERFAZ Y DISEÑO

Layout del Chat:
- Card separada con título "Conversa con {nombre}"
- Área de mensajes: altura fija (300px), scroll vertical
- Input + botón en la parte inferior
- Mensajes con:
  - Timestamp (relativo: "hace 2 minutos")
  - Avatar/emoji según el rol
  - Fondo diferenciado (usuario: azul claro, IA: verde claro)
  - Bordes redondeados y padding generoso

Estados Visuales:
- Input deshabilitado mientras espera respuesta
- Spinner o "..." animado cuando la IA está respondiendo
- Botón de enviar deshabilitado si input vacío
- Scroll automático al último mensaje

Responsive:
- En móvil: chat ocupa 90% del ancho
- En desktop: máximo 600px de ancho
- Mensajes siempre legibles en cualquier pantalla

## VALIDACIONES Y SEGURIDAD

1. API Key Management
   - NO hardcodear API keys en código frontend
   - Crear función serverless en Vercel para proxy:
     - `/api/chat` endpoint
     - Lee API key de variables de entorno en Vercel
     - Hace request a Claude/Gemini desde servidor
     - Retorna respuesta al frontend

2. Rate Limiting
   - Máximo 1 mensaje cada 3 segundos
   - Cooldown visual en botón de enviar
   - Mensaje de error si usuario spamea

3. Content Validation
   - Mensajes vacíos o solo espacios: rechazados
   - Máximo 500 caracteres por mensaje
   - Sanitización básica de input (trim, escape HTML)

4. Error Handling
   - API timeout: mensaje "La IA está tardando, intenta de nuevo"
   - API error: mensaje "Error conectando con la IA"
   - Sin conexión: mensaje "Verifica tu conexión a internet"
   - Sin API key: instrucciones de configuración

## CARACTERÍSTICAS AVANZADAS (OPCIONALES)

1. Typing Indicator Realista
   - Simula velocidad de escritura humana
   - Muestra "..." animado mientras "escribe"

2. Sugerencias de Mensajes
   - Botones rápidos: "¿Cómo estás?", "Cuéntame un chiste", "Dame consejos"
   - Aparecen cuando el chat está vacío

3. Reacciones a Stats
   - Si felicidad < 30: IA menciona proactivamente que está triste
   - Si sube de nivel: IA celebra en el próximo mensaje
   - Si XP está cerca de 100: IA anima a entrenar

4. Análisis de Sentimiento
   - IA detecta tono del usuario (positivo/negativo)
   - Responde con empatía apropiada

Asegúrate de que:
- El código sea limpio y bien comentado
- La integración con código existente sea perfecta
- El chat funcione tanto en localhost como en producción
- Las API keys se manejen de forma segura (nunca en código frontend)
```

### Prompt Simplificado (Troubleshooting)

Si el prompt completo genera errores o es muy complejo, usa esta versión gradual:

**Paso 1: Solo la Interfaz**
```
Agrega una interfaz de chat básica a mi Regenmon:
- Input de texto para escribir mensajes
- Área de mensajes con scroll
- Mensajes del usuario a la derecha (azul)
- Respuestas simuladas a la izquierda (verde)
- Por ahora, solo respuestas hardcodeadas (sin IA real)
```

**Paso 2: Integrar API (Después de que Paso 1 funcione)**
```
Ahora conecta el chat con Claude API:
- Endpoint: https://api.anthropic.com/v1/messages
- Modelo: claude-3-haiku-20240307
- System prompt: "Eres un Regenmon amigable"
- Envía mensaje del usuario y muestra respuesta de Claude
- Maneja errores de API
```

**Paso 3: Personalidad Dinámica (Después de que Paso 2 funcione)**
```
Mejora el system prompt para incluir:
- Nombre del Regenmon: {nombre}
- Nivel actual: {nivel}
- Felicidad actual: {felicidad}
- Personalidad según felicidad (alegre si >70, triste si <40)
```

---

## 📦 Entregable de la Sesión

### Criterios de Éxito

Tu proyecto debe cumplir con:

**Funcionalidad Mínima Viable (MVP):**
- [ ] Sistema de chat funcional con input y área de mensajes
- [ ] Integración con Claude API O Google Gemini funcionando
- [ ] System prompt dinámico que incluye nombre, nivel, y felicidad
- [ ] Historial de conversación visible (últimos 10 mensajes)
- [ ] Mensajes persisten en localStorage
- [ ] La IA responde con personalidad coherente
- [ ] Manejo de errores (API falla, sin conexión, sin API key)
- [ ] Deploy exitoso con chat funcionando en producción

**Calidad Básica:**
- [ ] La interfaz de chat es responsive (móvil y desktop)
- [ ] Indicador de "escribiendo..." mientras espera respuesta
- [ ] Auto-scroll al último mensaje
- [ ] API key NO está hardcodeada en código frontend
- [ ] No hay errores en consola del navegador

**Deseable (No Obligatorio):**
- [ ] Sugerencias de mensajes rápidos ("Cuéntame un chiste")
- [ ] Typing indicator realista (simula velocidad humana)
- [ ] Reacciones proactivas (IA menciona si está triste)
- [ ] Botón "Limpiar chat" funcional
- [ ] Rate limiting (evita spam de mensajes)

### Formato de Entrega

Para validar tu proyecto, proporciona:

1. **URL de producción** - `tu-proyecto.vercel.app` con chat funcionando
2. **Captura de pantalla** - Conversación de al menos 5 mensajes
3. **Test de personalidad** - Demuestra que la IA responde diferente cuando:
   - Felicidad es alta (>70): Respuestas alegres
   - Felicidad es baja (<40): Respuestas tristes
4. **Test de persistencia** - Recarga la página, historial debe mantenerse

### Rúbrica de Evaluación

| Criterio | Puntos | Descripción |
|----------|--------|-------------|
| **Integración API** | 30 pts | Claude/Gemini funcionando correctamente |
| **Personalidad Dinámica** | 25 pts | System prompt adapta tono según stats |
| **Interfaz de Chat** | 20 pts | UX conversacional clara y funcional |
| **Persistencia** | 15 pts | Historial guarda en localStorage |
| **Seguridad** | 10 pts | API key no expuesta en frontend |

**Total**: 100 puntos
**Aprobado**: 70+ puntos

---

## 📚 Material de Apoyo

### Conceptos Técnicos Explicados

#### 1. Modelos de Lenguaje (LLMs)

**¿Qué es?**
Sistemas de IA entrenados con millones de textos que pueden generar respuestas coherentes y contextuales.

**Cómo funcionan:**
1. Reciben texto de entrada (tu mensaje)
2. Procesan contexto (mensajes anteriores + system prompt)
3. Predicen respuesta palabra por palabra
4. Retornan texto generado

**Analogía:**
Es como un asistente que ha leído millones de libros y puede mantener conversaciones naturales sobre cualquier tema.

**Modelos Populares:**
- **Claude 3 Haiku**: Rápido, barato, ideal para chat ($0.25/1M tokens)
- **Gemini Pro**: Gratis, muy rápido, límites generosos
- **GPT-4**: Más inteligente, más caro, más lento

---

#### 2. System Prompt

**¿Qué es?**
Instrucciones que definen la personalidad, rol, y comportamiento base de la IA.

**Componentes:**
```typescript
const systemPrompt = `
  Rol: Eres ${nombre}, un Regenmon de tipo ${tipo}
  Contexto: Nivel ${nivel}, Felicidad ${happiness}/100

  Personalidad:
  ${happiness > 70 ? 'Alegre y energético' : 'Triste y necesitado'}

  Reglas:
  - Habla en primera persona
  - Respuestas cortas (2-3 oraciones)
  - Menciona stats cuando es relevante
  - Reacciona a tu estado emocional
`;
```

**Mejores Prácticas:**
- **Específico** > Vago: "Eres alegre" vs "Sé amigable"
- **Ejemplos**: "Di cosas como: '¡Estoy feliz!'"
- **Restricciones**: "Máximo 3 oraciones por respuesta"
- **Contexto**: Incluye información relevante del juego

**Impacto:**
Un buen system prompt puede transformar respuestas genéricas en personalidad única.

---

#### 3. Context Window

**¿Qué es?**
Los últimos N mensajes que envías a la IA para que tenga contexto de la conversación.

**Estructura:**
```typescript
const conversationHistory = [
  { role: 'user', content: '¿Cómo estás?' },
  { role: 'assistant', content: '¡Estoy feliz! Nivel 5 y subiendo.' },
  { role: 'user', content: 'Cuéntame un chiste' },
  // ... últimos 5 mensajes
];
```

**Limitaciones:**
- **Token Limit**: Claude/Gemini tienen límites de tokens (palabras)
- **Costo**: Más contexto = más tokens = más caro
- **Relevancia**: Mensajes muy antiguos pierden relevancia

**Optimización:**
- Envía solo últimos 5-10 mensajes
- Resume conversaciones largas
- Elimina mensajes irrelevantes

---

#### 4. Funciones Serverless

**¿Qué son?**
Código que corre en servidor (backend) sin necesidad de configurar servidores completos.

**Por Qué Necesitas Esto:**
```typescript
// ❌ NUNCA hagas esto (expone tu API key)
const apiKey = 'sk-ant-mi-api-key-secreta';
fetch('https://api.anthropic.com/v1/messages', {
  headers: { 'x-api-key': apiKey }
});

// ✅ Correcto: Llama a tu propio endpoint
fetch('/api/chat', {
  method: 'POST',
  body: JSON.stringify({ message: userMessage })
});
```

**Implementación en Vercel:**

1. Crea archivo `/api/chat.ts` en tu proyecto:
```typescript
// api/chat.ts
export default async function handler(req, res) {
  const { message, systemPrompt, history } = req.body;

  // API key está en variables de entorno (seguro)
  const apiKey = process.env.ANTHROPIC_API_KEY;

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01'
    },
    body: JSON.stringify({
      model: 'claude-3-haiku-20240307',
      max_tokens: 150,
      system: systemPrompt,
      messages: [...history, { role: 'user', content: message }]
    })
  });

  const data = await response.json();
  res.json({ reply: data.content[0].text });
}
```

2. En Vercel Dashboard:
   - Settings → Environment Variables
   - Agrega `ANTHROPIC_API_KEY` = tu key
   - Redeploy

3. Frontend llama a `/api/chat` (seguro)

---

#### 5. Manejo de Estado Asíncrono

**¿Qué es?**
Manejar estado de la UI mientras esperas respuestas de API (loading, error, success).

**Patrón Completo:**
```typescript
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState<string | null>(null);

const sendMessage = async (message: string) => {
  setIsLoading(true);
  setError(null);

  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message, systemPrompt, history })
    });

    if (!response.ok) {
      throw new Error('API request failed');
    }

    const data = await response.json();

    // Agregar mensaje del asistente al historial
    setMessages(prev => [...prev, {
      role: 'assistant',
      content: data.reply,
      timestamp: Date.now()
    }]);

  } catch (err) {
    setError('Error al conectar con la IA. Intenta de nuevo.');
    console.error(err);
  } finally {
    setIsLoading(false);
  }
};
```

**Estados Visuales:**
```typescript
// Mostrar indicador de carga
{isLoading && <div className="text-gray-500">Escribiendo...</div>}

// Mostrar error si hay
{error && <div className="text-red-500">{error}</div>}

// Deshabilitar input mientras carga
<input disabled={isLoading} />
```

---

### Comparación: Claude vs Gemini

| Aspecto | Claude 3 Haiku | Gemini Pro |
|---------|----------------|------------|
| **Costo** | $0.25/1M input, $1.25/1M output | Gratis (60 req/min) |
| **Velocidad** | ~1-2 segundos | ~0.5-1 segundo |
| **Calidad** | Excelente para chat | Muy buena |
| **Personalidad** | Más natural y creativa | Más técnica y directa |
| **Context Window** | 200K tokens | 30K tokens |
| **Mejor Para** | Apps de producción | Desarrollo y prototipos |

**Ejemplo de Respuesta:**

Prompt: "Cuéntame un chiste"

**Claude:**
> "¿Por qué los Regenmon de fuego nunca pierden debates? ¡Porque sus argumentos son ardientes! 🔥 (Nivel 5 aquí, siempre listo para una buena risa)"

**Gemini:**
> "Aquí va un chiste: ¿Qué le dice un Regenmon a otro? Nada, solo se miran y entrenan juntos."

**Observación**: Claude tiende a ser más personalizado y contextual.

---

### Recursos Adicionales

#### Documentación Oficial

- [Claude API Docs](https://docs.anthropic.com/) - Referencia completa de Claude
- [Gemini API Docs](https://ai.google.dev/docs) - Documentación de Google AI
- [Vercel Serverless Functions](https://vercel.com/docs/concepts/functions/serverless-functions) - Funciones backend
- [React Async Patterns](https://react.dev/learn/synchronizing-with-effects) - Manejo de efectos asíncronos

#### Videos Tutorial

- [Claude API Quickstart](https://youtube.com/results?search_query=claude+api+tutorial) - Integración paso a paso
- [Google Gemini Tutorial](https://youtube.com/results?search_query=google+gemini+api+tutorial) - Uso de Gemini
- [Vercel Functions Tutorial](https://youtube.com/results?search_query=vercel+serverless+functions) - Backend en Vercel

#### Herramientas Útiles

- [Claude Workbench](https://console.anthropic.com/workbench) - Test system prompts
- [Google AI Studio](https://aistudio.google.com/) - Test Gemini prompts
- [Postman](https://www.postman.com/) - Test APIs directamente
- [Token Counter](https://platform.openai.com/tokenizer) - Cuenta tokens de mensajes

---

## 🔧 Errores Comunes y Soluciones

### Error 1: API Key Expuesta en Frontend

**Síntomas:**
- API key visible en código fuente del navegador (DevTools → Sources)
- Warning de seguridad en consola
- Riesgo de robo de API key

**Causa:**
Hardcodeaste la API key directamente en el código frontend.

**Solución:**
Usa funciones serverless en Vercel:

1. **Crea `/api/chat.ts`** (ver sección de Funciones Serverless arriba)
2. **Configura variable de entorno en Vercel**:
   - Ve a tu proyecto en Vercel Dashboard
   - Settings → Environment Variables
   - Name: `ANTHROPIC_API_KEY` (o `GEMINI_API_KEY`)
   - Value: tu API key
   - Clic en "Save"
3. **Redeploy** para que tome las nuevas variables
4. **Frontend llama a `/api/chat`**, no directamente a Claude/Gemini

**Validación:**
1. Abre DevTools → Sources → Busca tu API key
2. NO debe aparecer en ningún archivo JavaScript
3. Solo debe llamar a `/api/chat` en Network tab

---

### Error 2: CORS Error al Llamar API

**Síntomas:**
```
Access to fetch at 'https://api.anthropic.com/v1/messages' from origin
'https://tu-proyecto.vercel.app' has been blocked by CORS policy
```

**Causa:**
Las APIs de Claude/Gemini no permiten llamadas directas desde navegador (seguridad).

**Solución:**
Usa funciones serverless (mismo que Error 1). Las llamadas desde servidor no tienen restricciones CORS.

**NO intentes**:
```typescript
// ❌ Esto falla con CORS
fetch('https://api.anthropic.com/v1/messages', { ... });
```

**Correcto:**
```typescript
// ✅ Llama a tu propio endpoint
fetch('/api/chat', { ... });
```

---

### Error 3: Respuesta de API Está Vacía o Undefined

**Síntomas:**
- La IA "responde" pero el mensaje está vacío
- `data.content` es undefined
- Consola muestra respuesta completa pero no extraes el texto correctamente

**Causa:**
Estructura de respuesta diferente entre Claude y Gemini.

**Solución:**

**Claude response structure:**
```typescript
const response = await fetch('/api/chat', ...);
const data = await response.json();

// ✅ Correcto
const aiMessage = data.content[0].text;

// ❌ Incorrecto
const aiMessage = data.message; // undefined
```

**Gemini response structure:**
```typescript
const data = await response.json();

// ✅ Correcto
const aiMessage = data.candidates[0].content.parts[0].text;

// ❌ Incorrecto
const aiMessage = data.text; // undefined
```

**Validación:**
```typescript
console.log('Full response:', data);
// Inspecciona estructura antes de extraer texto
```

---

### Error 4: System Prompt No Afecta Respuestas

**Síntomas:**
- La IA ignora instrucciones del system prompt
- Respuestas genéricas sin personalidad
- No menciona nivel, felicidad, o nombre del Regenmon

**Causas Posibles:**

**Causa 1: System prompt no se envía correctamente**
```typescript
// ❌ Incorrecto (Claude)
body: JSON.stringify({
  messages: [
    { role: 'system', content: systemPrompt }, // Formato incorrecto
    { role: 'user', content: message }
  ]
})

// ✅ Correcto (Claude)
body: JSON.stringify({
  system: systemPrompt, // Parámetro separado
  messages: [{ role: 'user', content: message }]
})
```

**Causa 2: System prompt muy vago**
```typescript
// ❌ Muy vago
const systemPrompt = "Eres un Regenmon amigable";

// ✅ Específico
const systemPrompt = `
Eres ${name}, un Regenmon de fuego de nivel ${level}.
Tu felicidad actual es ${happiness}/100.

Personalidad: ${happiness > 70 ? 'Alegre, juguetón, usa emojis 🔥' : 'Triste, necesitado, pide atención'}

Comportamiento:
- Habla en primera persona ("Estoy feliz")
- Máximo 2-3 oraciones
- Menciona tu nivel si es relevante
- Reacciona a tu estado emocional
`;
```

**Causa 3: Temperature muy baja**
Temperature controla creatividad (0 = muy predecible, 1 = muy creativo).

```typescript
// ❌ Muy predecible
temperature: 0.1

// ✅ Balanceado para personalidad
temperature: 0.8
```

**Validación:**
Prueba con felicidad alta (>70) y luego baja (<40). Las respuestas deben cambiar de tono.

---

### Error 5: Historial No Persiste al Recargar

**Síntomas:**
- Al refrescar la página, el chat se borra
- localStorage no guarda mensajes
- Conversación vuelve a empezar desde cero

**Causa:**
No estás guardando o cargando desde localStorage correctamente.

**Solución:**

```typescript
// 1. Guardar en cada mensaje nuevo
useEffect(() => {
  localStorage.setItem('chatHistory', JSON.stringify(messages));
}, [messages]); // Se ejecuta cuando messages cambia

// 2. Cargar al iniciar
useEffect(() => {
  const saved = localStorage.getItem('chatHistory');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      setMessages(parsed);
    } catch (error) {
      console.error('Error parsing chat history:', error);
      // Si hay error, empieza con array vacío
      setMessages([]);
    }
  }
}, []); // Solo al montar el componente
```

**Validación:**
1. Envía 3 mensajes
2. Recarga la página (F5)
3. Los 3 mensajes deben seguir ahí

---

### Error 6: Rate Limit Exceeded (429 Error)

**Síntomas:**
```
Error 429: Rate limit exceeded
```

**Causas:**

**Claude**: Excediste tu quota mensual o límite de requests/minuto
**Gemini**: Más de 60 requests por minuto

**Soluciones:**

**1. Agregar cooldown en frontend:**
```typescript
const [lastRequestTime, setLastRequestTime] = useState(0);

const sendMessage = async (message: string) => {
  const now = Date.now();
  const timeSinceLastRequest = now - lastRequestTime;

  if (timeSinceLastRequest < 3000) { // 3 segundos
    alert('Espera 3 segundos entre mensajes');
    return;
  }

  setLastRequestTime(now);
  // ... resto del código
};
```

**2. Verificar quota en Claude:**
- Ve a console.anthropic.com → Usage
- Si agotaste créditos, agrega más

**3. Reducir requests en Gemini:**
- Espera al menos 1 segundo entre mensajes
- Limita mensajes a máximo 50 por minuto

---

### Error 7: "Escribiendo..." Nunca Desaparece

**Síntomas:**
- Indicador de carga se queda permanentemente
- La IA no responde pero no hay error visible
- Input queda deshabilitado forever

**Causa:**
No estás manejando el estado `isLoading` correctamente en caso de error.

**Solución:**

```typescript
const sendMessage = async (message: string) => {
  setIsLoading(true);

  try {
    const response = await fetch('/api/chat', ...);
    const data = await response.json();
    // ... procesar respuesta
  } catch (error) {
    console.error(error);
    setError('Error al enviar mensaje');
  } finally {
    // CRÍTICO: Siempre desactivar loading
    setIsLoading(false);
  }
};
```

**Clave:** Usa `finally` para SIEMPRE desactivar loading, incluso si hay error.

**Validación:**
1. Desconecta tu internet
2. Intenta enviar mensaje
3. Debe mostrar error y volver a habilitar input

---

### Error 8: Mensajes No Hacen Auto-Scroll

**Síntomas:**
- Nuevos mensajes aparecen pero no se ve
- Tienes que hacer scroll manual para ver última respuesta
- UX confusa para el usuario

**Causa:**
Falta implementación de auto-scroll después de agregar mensajes.

**Solución:**

```typescript
import { useRef, useEffect } from 'react';

function ChatComponent() {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll cuando cambian los mensajes
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="chat-container overflow-y-auto h-96">
      {messages.map((msg, idx) => (
        <div key={idx} className="message">
          {msg.content}
        </div>
      ))}
      {/* Elemento invisible al final para anclar scroll */}
      <div ref={messagesEndRef} />
    </div>
  );
}
```

**Validación:**
Envía varios mensajes seguidos. Siempre debe mostrar el último automáticamente.

---

### Error 9: System Prompt Muy Largo Causa Error 400

**Síntomas:**
```
Error 400: Invalid request - system prompt too long
```

**Causa:**
Tu system prompt + mensajes exceden el límite de tokens del modelo.

**Solución:**

**1. Acorta el system prompt:**
```typescript
// ❌ Demasiado largo (500+ tokens)
const systemPrompt = `
Eres ${name}, un Regenmon de tipo ${type}...
[10 párrafos de instrucciones]
`;

// ✅ Conciso (< 200 tokens)
const systemPrompt = `
Eres ${name}, Regenmon ${type} nivel ${level}.
Felicidad: ${happiness}/100 ${happiness > 70 ? '(alegre)' : '(triste)'}.
Habla breve, en primera persona, reacciona a tu estado.
`;
```

**2. Limita historial de mensajes:**
```typescript
// Solo últimos 5 mensajes
const recentMessages = messages.slice(-5);
```

**3. Usa modelo con mayor context window:**
- Claude Haiku: 200K tokens (generoso)
- Gemini Pro: 30K tokens (moderado)

---

### Debugging General para APIs

**Herramientas:**

1. **Console.log estratégico:**
```typescript
console.log('Sending to API:', { systemPrompt, message, history });
console.log('API response:', data);
console.log('Extracted message:', aiMessage);
```

2. **Network Tab (F12 → Network):**
- Busca request a `/api/chat`
- Ve la respuesta completa en "Response" tab
- Verifica status code (200 = OK, 4xx/5xx = error)

3. **Postman/Insomnia:**
- Test tu endpoint `/api/chat` directamente
- Verifica que funciona antes de integrar en frontend

4. **Vercel Function Logs:**
- Ve a Vercel Dashboard → tu proyecto → Functions
- Clic en `/api/chat` → Ve logs en tiempo real
- Muestra errores del servidor

---

## ✅ Checklist de Validación

### Funcionalidad Core
- [ ] Puedo enviar mensajes a través del chat
- [ ] La IA responde con texto coherente
- [ ] System prompt incluye nombre, nivel, y felicidad del Regenmon
- [ ] La personalidad cambia según la felicidad (alegre >70, triste <40)
- [ ] Historial de mensajes visible en la interfaz
- [ ] Últimos 10 mensajes persisten en localStorage
- [ ] Indicador de "escribiendo..." aparece mientras espera respuesta

### Seguridad
- [ ] API key NO está en código frontend (verificar en DevTools → Sources)
- [ ] Funciones serverless (`/api/chat`) implementadas correctamente
- [ ] Variables de entorno configuradas en Vercel
- [ ] No hay warnings de seguridad en consola

### UX/UI
- [ ] La interfaz de chat es responsive (móvil y desktop)
- [ ] Auto-scroll al último mensaje funciona
- [ ] Mensajes del usuario y de la IA visualmente diferenciados
- [ ] Input se deshabilita mientras espera respuesta
- [ ] Cooldown de 3 segundos entre mensajes (evita spam)

### Manejo de Errores
- [ ] Si API falla, muestra mensaje de error amigable
- [ ] Si no hay API key configurada, muestra instrucciones
- [ ] Si internet falla, muestra error de conexión
- [ ] Loading state siempre se desactiva (incluso con error)

### Integración
- [ ] Todo de Sesión 1 sigue funcionando (nivel, felicidad, XP, botones)
- [ ] El chat no interfiere con localStorage de stats
- [ ] Deploy en Vercel funciona correctamente en producción

### Test de Personalidad
- [ ] Con felicidad >70: Respuestas alegres y energéticas
- [ ] Con felicidad <40: Respuestas tristes y necesitadas
- [ ] La IA menciona su nivel cuando es relevante
- [ ] La IA reacciona al estado del juego (ejemplo: "¡subí de nivel!")

**¿Todos marcados?** 🎉 ¡Completaste la Sesión 2!

---

## 🔗 Puente a Sesión 3

### Lo Que Lograste

Ahora tienes:
- ✅ Un Regenmon con personalidad conversacional real
- ✅ Integración profesional con APIs de IA
- ✅ Experiencia con backend (funciones serverless)
- ✅ Manejo de estado asíncrono y errores

### La Limitación Actual

Tu Regenmon es increíble, pero tiene un problema crítico:

**Cualquiera con tu URL puede verlo y usarlo.**

Problemas:
1. No hay usuarios separados - todos comparten el mismo Regenmon
2. No hay privacidad - cualquiera puede ver tus conversaciones
3. No hay permisos - no puedes controlar quién accede

**¿Por qué? Falta Autenticación.**

### Lo Que Viene en Sesión 3

Implementarás **sistema completo de autenticación**:

🔐 **Login y Registro**
- Cada usuario tiene su propia cuenta
- Email + contraseña o login social (Google)

👤 **Usuarios Separados**
- Cada persona tiene su propio Regenmon
- Datos privados y aislados

🛡️ **Seguridad**
- Protección de rutas (solo usuarios logueados)
- Tokens de sesión
- Control de permisos

### Analogía

**Sesión 2**: Tu Regenmon es un **asistente personal inteligente**
**Sesión 3**: Lo transformarás en un **servicio privado con cuentas de usuario**

Es la diferencia entre una calculadora pública vs tu cuenta bancaria privada.

### Prerequisitos para Sesión 3

Antes de empezar:
- [ ] Sesión 2 completada con chat funcionando
- [ ] Cuenta de Supabase creada ([Quick Start](./05-quick-start.md))
- [ ] Entendimiento de localStorage (se reemplazará con base de datos)

**Tiempo recomendado entre sesiones**: 2-3 días para asimilar conceptos de APIs.

---

## 📖 Recursos de Referencia Rápida

### Claude API - Quick Reference

```typescript
// Endpoint
POST https://api.anthropic.com/v1/messages

// Headers
{
  'Content-Type': 'application/json',
  'x-api-key': 'sk-ant-...',
  'anthropic-version': '2023-06-01'
}

// Body
{
  model: 'claude-3-haiku-20240307',
  max_tokens: 150,
  system: "Tu system prompt aquí",
  messages: [
    { role: 'user', content: 'Hola' },
    { role: 'assistant', content: 'Hola!' },
    { role: 'user', content: 'Cómo estás?' }
  ]
}

// Response
{
  content: [{ text: "Respuesta de Claude" }]
}
```

### Gemini API - Quick Reference

```typescript
// Endpoint
POST https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=YOUR_KEY

// Body
{
  contents: [
    { parts: [{ text: 'Hola' }] },
    { parts: [{ text: 'Hola!' }] },
    { parts: [{ text: 'Cómo estás?' }] }
  ],
  generationConfig: {
    temperature: 0.9,
    maxOutputTokens: 150
  }
}

// Response
{
  candidates: [
    {
      content: {
        parts: [{ text: "Respuesta de Gemini" }]
      }
    }
  ]
}
```

### Verificación de Seguridad

```bash
# En tu proyecto local, busca API keys hardcodeadas:
grep -r "sk-ant-" src/
grep -r "AIza" src/

# NO debe devolver resultados (API keys no deben estar en código)
```

---

## 🎓 Reflexión Final

### Lo Que Aprendiste

Ahora puedes:
- ✅ Integrar APIs de IA profesionales en apps web
- ✅ Diseñar system prompts efectivos para personalidad única
- ✅ Implementar funciones serverless para seguridad
- ✅ Crear experiencias conversacionales naturales
- ✅ Manejar estado asíncrono y errores de API

**Esto te pone al nivel de developers que construyen productos con IA.**

### Mentalidad de IA

Aprendiste que integrar IA no es "magia" - es:
1. **Diseño de Prompts** - Instrucciones claras definen comportamiento
2. **Manejo de APIs** - Request/response como cualquier API REST
3. **Seguridad** - Proteger API keys con backend
4. **UX** - Loading states, errores, conversación natural

Este conocimiento se aplica a CUALQUIER integración de IA, no solo chat.

### Próximos Pasos

1. **Experimenta** - Prueba diferentes system prompts y temperaturas
2. **Personaliza** - Agrega más personalidades según tipo de Regenmon
3. **Comparte** - Muestra tu proyecto con amigos
4. **Prepara** - Configura Supabase para Sesión 3 ([Quick Start](./05-quick-start.md))

---

**¡Felicidades por completar la Sesión 2!** 🎉

Tu Regenmon pasó de ser un juego simple a una experiencia conversacional con IA real.

**Siguiente paso:** [Sesión 3 - Autenticación →](./08-sesion-3.md)

---

*Última actualización: Febrero 2025*
*Tiempo de lectura: 30 minutos*
*Tiempo de implementación: 3-4 horas*
