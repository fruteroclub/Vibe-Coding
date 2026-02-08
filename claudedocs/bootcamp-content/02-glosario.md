# Glosario Rápido para Vibecoders

> Todos los términos técnicos explicados en lenguaje simple. Busca cualquier palabra que no entiendas.

---

## 📖 Cómo Usar Este Glosario

Este glosario está organizado por categorías para facilitar la búsqueda. Cada término tiene:
- **Nombre técnico** en español e inglés
- **Definición simple** con analogías del mundo real
- **Categoría** para saber en qué contexto se usa

**Tip:** No necesitas memorizar todo. Vuelve aquí cada vez que encuentres un término nuevo en las sesiones.

---

## 📑 Índice por Categorías

- [Desarrollo (Development)](#desarrollo-development) - 6 términos
- [Datos (Data)](#datos-data) - 6 términos
- [Inteligencia Artificial (AI)](#inteligencia-artificial-ai) - 6 términos
- [Interfaz (UI)](#interfaz-ui) - 5 términos
- [Autenticación (Auth)](#autenticación-auth) - 4 términos

**Total: 27 términos esenciales**

---

## 🚀 Desarrollo (Development)

### Deploy / Desplegar
**Categoría:** Desarrollo

Subir tu app a internet para que funcione 24/7. Es como publicar un video en YouTube: pasas de tenerlo solo en tu computadora a que todos puedan verlo.

**Cuándo lo usas:** Sesión 1 - Después de construir tu Regenmon localmente, haces "deploy" para que tenga una URL pública.

---

### Producción
**Categoría:** Desarrollo

Tu app funcionando en internet, accesible para todos. Es el "modo final" después de que terminas de construir y probar.

**Cuándo lo usas:** Cuando dices "mi app ya está en producción", significa que está viva en internet, no solo en tu computadora.

---

### Localhost
**Categoría:** Desarrollo

Tu app funcionando solo en tu computadora (nadie más puede verla). Es como un ensayo privado antes del show.

**Cuándo lo usas:** Sesión 1 - Cuando trabajas en v0, primero ves tu app en localhost antes de hacer deploy.

**URL típica:** `http://localhost:3000` o `http://localhost:8080`

---

### URL
**Categoría:** Desarrollo

Dirección web de tu app (ej: `miapp.vercel.app`). Es como la dirección de una casa en internet.

**Cuándo lo usas:** Después de hacer deploy, Vercel te da una URL única para compartir tu app.

**Ejemplo real:** `https://regenmon-final.vercel.app`

---

### Framework
**Categoría:** Desarrollo

Herramientas y reglas predefinidas para construir apps más rápido. Como una caja de LEGO con instrucciones vs construir desde cero.

**Cuándo lo usas:** React, Next.js, y Vite son frameworks que v0 usa para generar código más organizado y eficiente.

**Analogía:** Es como usar una plantilla de PowerPoint vs diseñar todo desde cero en blanco.

---

### Bug / Error
**Categoría:** Desarrollo

Algo que no funciona como debería en tu app. Como un agujero en una red: necesitas encontrarlo y arreglarlo.

**Cuándo lo usas:** Cuando tu Regenmon no aparece, cuando el deploy falla, cuando algo no hace lo que esperabas.

**Tip:** La consola del navegador (F12) muestra bugs en rojo para que los encuentres rápido.

---

## 💾 Datos (Data)

### localStorage
**Categoría:** Datos

Memoria en tu navegador (se borra si limpias cookies). Es como notas adhesivas: temporales y solo en tu navegador.

**Cuándo lo usas:** Sesión 1 - Para guardar el nombre y nivel de tu Regenmon sin necesitar una base de datos.

**Limitaciones:**
- Solo guarda en TU navegador (no se comparte entre dispositivos)
- Se borra si limpias cookies o navegas en incógnito
- Límite de ~5-10MB de datos

---

### Base de datos
**Categoría:** Datos

Memoria en internet (permanente, no se borra). Como un archivo de Excel gigante que vive en la nube: siempre está ahí.

**Cuándo lo usas:** Sesión 4 - Cuando necesitas guardar datos de múltiples usuarios o que persistan para siempre.

**Diferencia con localStorage:**
- Database: Permanente, compartida, accesible desde cualquier dispositivo
- localStorage: Temporal, local, solo en tu navegador

---

### API
**Categoría:** Datos

Puente que conecta tu app con servicios externos (como IA, imágenes, pagos). Es como un mesero: tú pides, él trae lo que necesitas.

**Cuándo lo usas:** Sesión 2 y 3 - Para conectar con Claude API, Google Gemini, o servicios de autenticación.

**Analogía:** Tu app es un restaurante, la API es el mesero, y el servicio externo es la cocina.

---

### API Key
**Categoría:** Datos

Contraseña especial para usar servicios de IA o APIs. Como la llave de tu casa: sin ella no puedes entrar.

**Cuándo lo usas:** Sesión 2 y 3 - Necesitas una API Key de Claude o Gemini para que tu app pueda usar IA.

**Seguridad:**
- ⚠️ Nunca la compartas públicamente
- ⚠️ No la subas a GitHub sin protección
- ✅ Usa variables de entorno en Vercel

---

### Endpoint
**Categoría:** Datos

Dirección específica donde tu app pide o envía información. Como diferentes ventanillas en un banco: una para depósitos, otra para retiros.

**Cuándo lo usas:** Cuando conectas con APIs, cada funcionalidad tiene su endpoint específico.

**Ejemplo:**
- `https://api.claude.ai/v1/messages` - Endpoint para enviar mensajes a Claude
- `https://api.miapp.com/users` - Endpoint para gestionar usuarios

---

### JSON
**Categoría:** Datos

Formato para organizar información que las apps entienden. Como hablar el mismo idioma entre diferentes programas.

**Cuándo lo usas:** Cuando tu app recibe o envía datos a APIs, todo se comunica en JSON.

**Ejemplo:**
```json
{
  "regenmon": {
    "nombre": "Flamix",
    "tipo": "fuego",
    "nivel": 5,
    "felicidad": 80
  }
}
```

---

## 🤖 Inteligencia Artificial (AI)

### Prompt
**Categoría:** Inteligencia Artificial

Instrucciones que le das a la IA. Mientras más claras, mejores respuestas.

**Cuándo lo usas:** En TODAS las sesiones - Es la forma principal de comunicarte con v0, Claude, y cualquier IA.

**Ejemplo de buen prompt:**
```
Crea un Regenmon tipo mascota virtual con:
- Sistema de felicidad que baja con el tiempo
- Botones para alimentar y jugar
- Evolución cuando llega a nivel 10
```

**Ejemplo de mal prompt:**
```
"haz un juego"
```

---

### Contexto
**Categoría:** Inteligencia Artificial

Lo que la IA recuerda de conversaciones anteriores. Como la memoria a corto plazo: se pierde si pasas mucho tiempo.

**Cuándo lo usas:** En v0, la IA recuerda tus mensajes anteriores en la misma sesión para generar código consistente.

**Limitación:** Si empiezas un nuevo chat, la IA no recuerda lo anterior.

---

### Multimodal
**Categoría:** Inteligencia Artificial

IA que entiende texto + imágenes al mismo tiempo. Como un maestro que puede leer tu ensayo Y ver tus dibujos.

**Cuándo lo usas:** Sesión 3 - Claude y Gemini pueden analizar imágenes que les envías, no solo texto.

**Ejemplo de uso:**
- Subir screenshot de tu app y preguntar "¿qué está mal aquí?"
- Enviar imagen de diseño y pedir "clona este estilo"

---

### Temperatura (IA)
**Categoría:** Inteligencia Artificial

Qué tan creativa es la IA (0=precisa y repetitiva, 1=creativa e impredecible). Como el volumen de la radio.

**Cuándo lo usas:** Avanzado - Cuando configuras la API de Claude puedes ajustar temperatura.

**Valores comunes:**
- `0.0-0.3` - Respuestas consistentes y predecibles (ideal para código)
- `0.7-1.0` - Respuestas creativas y variadas (ideal para ideas)

---

### Token
**Categoría:** Inteligencia Artificial

Unidad de texto que la IA procesa (≈4 caracteres). Como contar palabras, pero más técnico. Más tokens = más caro.

**Cuándo lo usas:** Cuando usas APIs de IA, te cobran por tokens procesados.

**Ejemplo:**
- "Hola" = ~1 token
- "Hola, ¿cómo estás?" = ~5 tokens
- Prompt completo de sesión 1 = ~500 tokens

---

### System Prompt
**Categoría:** Inteligencia Artificial

Personalidad base de la IA. Le dices "eres un entrenador motivador" y siempre responderá así.

**Cuándo lo usas:** Sesión 3 - Para darle personalidad específica a tu chatbot IA.

**Ejemplo:**
```
System Prompt: "Eres Flamix, un Regenmon de fuego amigable.
Hablas con entusiasmo y usas emojis de fuego 🔥"
```

---

## 🎨 Interfaz (UI)

### UI (User Interface)
**Categoría:** Interfaz

Todo lo que ves en pantalla: botones, texto, colores, imágenes. Es la "cara" de tu app.

**Cuándo lo usas:** Sesión 5 - Mejoras el diseño visual de tu app para que se vea profesional.

**Componentes de UI:**
- Botones, inputs, cards, modals
- Colores, tipografía, espaciado
- Animaciones, transiciones

---

### Componente
**Categoría:** Interfaz

Una pieza reutilizable de tu interfaz (ej: botón, tarjeta, menú). Como piezas de LEGO que puedes combinar.

**Cuándo lo usas:** En React (framework que usa v0), todo se construye con componentes reutilizables.

**Ejemplo:**
```jsx
<Button>Alimentar</Button>
<Button>Jugar</Button>
<Button>Dormir</Button>
```
El mismo componente `Button`, usado 3 veces con texto diferente.

---

### Estado (State)
**Categoría:** Interfaz

Información que cambia en tu app (ej: nivel de felicidad, monedas, nombre). Es la "memoria activa" de tu interfaz.

**Cuándo lo usas:** Sesión 1 - Tu Regenmon tiene estado: nombre, nivel, felicidad cambian con el tiempo.

**Ejemplo de estados:**
- `felicidad: 80` → Clic en alimentar → `felicidad: 100`
- `nivel: 1` → XP suficiente → `nivel: 2`

---

### Props
**Categoría:** Interfaz

Información que pasas de un componente a otro. Como darle instrucciones específicas a cada pieza.

**Cuándo lo usas:** Cuando usas el mismo componente pero con valores diferentes.

**Ejemplo:**
```jsx
<Regenmon nombre="Flamix" tipo="fuego" nivel={5} />
<Regenmon nombre="Aqua" tipo="agua" nivel={3} />
```
Mismo componente `Regenmon`, props diferentes.

---

### Responsive
**Categoría:** Interfaz

Que tu app se vea bien en celular, tablet y computadora. Se adapta automáticamente al tamaño de pantalla.

**Cuándo lo usas:** Sesión 5 - Tu app debe verse bien en cualquier dispositivo sin código extra.

**Cómo funciona:** CSS moderno (Tailwind) ajusta el diseño según el ancho de pantalla.

---

## 🔐 Autenticación (Auth)

### Auth / Autenticación
**Categoría:** Autenticación

Sistema de login que verifica quién eres. Es como mostrar tu ID en la entrada.

**Cuándo lo usas:** Sesión 2 - Para que cada usuario tenga su propia cuenta y datos privados.

**Beneficios:**
- Cada usuario ve solo sus datos
- Puedes guardar progreso por usuario
- Control de acceso (admin vs usuario normal)

---

### Sesión
**Categoría:** Autenticación

El tiempo que estás logueado en la app. Cuando cierras sesión, termina.

**Cuándo lo usas:** Después del login, tu sesión permanece activa hasta que cierres o expire.

**Duración típica:**
- 30 minutos de inactividad → sesión expira
- Login con "recordarme" → sesión de 7-30 días

---

### Token (Auth)
**Categoría:** Autenticación

Pase temporal que prueba que ya hiciste login. La app lo guarda para no pedirte contraseña cada vez.

**Cuándo lo usas:** Después del login exitoso, el servidor te da un token que tu app guarda.

**Analogía:** Es como un brazalete en un festival - prueba que pagaste entrada sin tener que mostrar ticket cada vez.

---

### Permisos
**Categoría:** Autenticación

Qué puedes y no puedes hacer en la app según tu tipo de usuario (admin, usuario normal, visitante).

**Cuándo lo usas:** Cuando necesitas diferentes niveles de acceso.

**Ejemplo de permisos:**
- **Admin:** Puede ver todos los Regenmon, borrar usuarios, modificar configuración
- **Usuario:** Solo ve y modifica su propio Regenmon
- **Visitante:** Solo puede ver la landing page, no puede crear Regenmon

---

## 🔎 Búsqueda Rápida por Sesión

### Sesión 1: Fundamentos
- Deploy
- Producción
- Localhost
- URL
- Framework
- Bug
- localStorage
- UI
- Componente
- Estado

### Sesión 2: Inteligencia Artificial
- API
- API Key
- Endpoint
- JSON
- Prompt
- Contexto
- Multimodal
- Temperature
- Token
- System Prompt

### Sesión 3: Autenticación
- Auth
- Sesión
- Token (Auth)
- Permisos

### Sesión 4: Base de Datos
- Database
- API
- Endpoint
- JSON

### Sesión 5: UI/UX
- UI
- Componente
- Props
- Responsive
- Estado

---

## 💡 Consejos para Aprender Términos Nuevos

### 1. No Memorices Todo de Una Vez
Este glosario es una **referencia**, no un examen. Vuelve aquí cada vez que encuentres un término nuevo en las sesiones.

### 2. Aprende en Contexto
Cada término cobra sentido cuando lo usas. No intentes aprender "API" sin haber conectado una API real.

### 3. Usa Analogías
Todas las definiciones tienen analogías del mundo real. Úsalas para recordar conceptos.

### 4. Experimenta
La mejor forma de entender "estado" es cambiando el nivel de tu Regenmon y viendo cómo reacciona la app.

### 5. Progresión Natural
Los términos están ordenados por complejidad. Sesión 1 usa términos básicos, Sesión 5 términos avanzados.

---

## 🎯 Términos que DEBES Dominar

### Por Sesión

**Sesión 1 (Esenciales):**
- ✅ Deploy
- ✅ Localhost
- ✅ URL
- ✅ localStorage
- ✅ Estado

**Sesión 2-3 (Intermedios):**
- ✅ API
- ✅ API Key
- ✅ Prompt
- ✅ Auth
- ✅ Endpoint

**Sesión 4-5 (Avanzados):**
- ✅ Database
- ✅ Responsive
- ✅ Componente
- ✅ Props
- ✅ Permisos

---

## 📚 Recursos Adicionales

### Para Profundizar

**Desarrollo:**
- [MDN Web Docs](https://developer.mozilla.org/) - Documentación oficial web
- [React Docs](https://react.dev/) - Framework que usa v0

**APIs y Datos:**
- [JSON.org](https://www.json.org/) - Especificación JSON
- [Vercel Docs](https://vercel.com/docs) - Deploy y hosting

**Inteligencia Artificial:**
- [Anthropic Docs](https://docs.anthropic.com/) - Claude API
- [OpenAI Platform](https://platform.openai.com/) - GPT API

---

## 🆘 ¿Falta un Término?

Si encuentras un término técnico en las sesiones que no está aquí, significa una de dos cosas:

1. **Es específico de la sesión** - Busca en "Material de Apoyo" de esa sesión
2. **Es avanzado** - Probablemente no lo necesitas para completar el bootcamp

**Sugerencia:** Anota términos nuevos en tu tablero de tareas y pregunta en la comunidad.

---

## 🚀 Próximos Pasos

- [Ver Las 5 Capas →](/doc/layers) - Entiende la arquitectura completa
- [Explorar Sesiones →](/doc/sessions) - Empieza a construir
- [Volver a Intro →](/doc) - Repasa la visión general

---

*Última actualización: Febrero 2025*
*Total de términos: 27*
*Glosario vivo - se actualiza con cada sesión nueva*
