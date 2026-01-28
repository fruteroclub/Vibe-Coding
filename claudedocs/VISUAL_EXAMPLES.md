# 🎨 Ejemplos Visuales del Sistema de Tooltips

## Vista Previa de la Página "Integración IA"

### **URL:** `http://localhost:8080/doc/ai`

---

## 📸 Ejemplos de Tooltips en Acción

### **Ejemplo 1: Término "LLMs"**

**Texto en la página:**
```
Cómo funcionan los Large Language Models
```

**Visualización del tooltip:**
```
┌─────────────────────────────────────────┐
│ 💡 Cómo funcionan los LLMs              │
│                        ~~~~              │  ← Subrayado punteado
│                                         │
│ [HOVER SOBRE "LLMs"]                    │
│                                         │
│ ┌───────────────────────────────┐       │
│ │ LLMs                          │       │
│ │ ───────────────────────────── │       │
│ │ Large Language Models -       │       │
│ │ Modelos de IA entrenados en   │       │
│ │ millones de ejemplos de código│       │
│ └───────────────────────────────┘       │
└─────────────────────────────────────────┘
```

---

### **Ejemplo 2: Término "useState"**

**Texto en la página:**
```
2.2 Guardar información con useState
```

**Visualización del tooltip:**
```
┌─────────────────────────────────────────┐
│ 2.2 Guardar información con useState    │
│                                 ~~~~~~~~ │
│                                         │
│ [HOVER SOBRE "useState"]                │
│                                         │
│ ┌───────────────────────────────┐       │
│ │ useState                      │       │
│ │ ───────────────────────────── │       │
│ │ Hook de React que crea        │       │
│ │ variables reactivas que       │       │
│ │ actualizan la UI              │       │
│ │ automáticamente               │       │
│ └───────────────────────────────┘       │
└─────────────────────────────────────────┘
```

---

### **Ejemplo 3: Término "API"**

**Texto en la página:**
```
1.1 Cómo funcionan las APIs de inteligencia artificial
```

**Visualización del tooltip:**
```
┌─────────────────────────────────────────┐
│ Cómo funcionan las APIs de IA           │
│                     ~~~~                │
│                                         │
│ [HOVER SOBRE "APIs"]                    │
│                                         │
│ ┌───────────────────────────────┐       │
│ │ API                           │       │
│ │ ───────────────────────────── │       │
│ │ Interfaz que permite          │       │
│ │ comunicación entre servicios  │       │
│ │ (request/response)            │       │
│ └───────────────────────────────┘       │
└─────────────────────────────────────────┘
```

---

### **Ejemplo 4: Término "Multimodal"**

**Texto en la página:**
```
1. IA Multimodal
```

**Visualización del tooltip:**
```
┌─────────────────────────────────────────┐
│ 1. IA Multimodal                        │
│       ~~~~~~~~~~                        │
│                                         │
│ [HOVER SOBRE "Multimodal"]              │
│                                         │
│ ┌───────────────────────────────┐       │
│ │ Multimodal                    │       │
│ │ ───────────────────────────── │       │
│ │ IA que procesa múltiples      │       │
│ │ tipos de datos (texto +       │       │
│ │ imágenes)                     │       │
│ └───────────────────────────────┘       │
└─────────────────────────────────────────┘
```

---

## 🎯 Estados del Tooltip

### **Estado 1: Normal (sin hover)**
```css
┌──────────────────────┐
│ Texto con componentes│
│           ~~~~~~~~~~│  ← Subrayado punteado gris claro
└──────────────────────┘
```

### **Estado 2: Hover**
```css
┌──────────────────────┐
│ Texto con componentes│
│           ~~~~~~~~~~│  ← Subrayado punteado naranja (doc-primary)
│     [TOOLTIP APARECE]│
└──────────────────────┘
```

### **Estado 3: Tooltip Visible**
```css
┌──────────────────────────────────┐
│ Texto con componentes            │
│           ~~~~~~~~~~             │
│                                  │
│ ┌──────────────────────────┐    │
│ │ componentes              │    │
│ │ ──────────────────────── │    │
│ │ Bloques reutilizables... │    │
│ └──────────────────────────┘    │
└──────────────────────────────────┘
```

---

## 📱 Responsive Design

### **Desktop (>1024px)**
```
┌────────────────────────────────────────────────┐
│  Sidebar          │  Contenido                 │
│  ─────────        │  ────────                  │
│                   │                            │
│  • Introducción   │  # Integración IA          │
│  • Inicio Rápido  │                            │
│  • Recursos       │  ## Sesión 1               │
│                   │                            │
│  • Las 5 Capas    │  1.1 Cómo funciona el      │
│  • Integración IA │      desarrollo con IA     │
│    ^^^^^^^^^^^^^^ │                            │
│    (activo)       │  • useState                │
│                   │    ~~~~~~~~                │
│  • Sesión 1       │    [tooltip aparece]       │
│  • Sesión 2       │                            │
└────────────────────────────────────────────────┘
```

### **Mobile (<768px)**
```
┌───────────────────────┐
│ ☰ Menu (collapsed)    │
├───────────────────────┤
│                       │
│ # Integración IA      │
│                       │
│ ## Sesión 1           │
│                       │
│ 1.1 Desarrollo con IA │
│                       │
│ • useState            │
│   ~~~~~~~~            │
│   [tooltip se ajusta] │
│                       │
└───────────────────────┘
```

---

## 🎨 Paleta de Colores

### **Tooltip**
```css
Background:     var(--background)      /* Gris oscuro */
Border:         var(--border)          /* Gris medio */
Text:           var(--foreground)      /* Blanco */
Text Secondary: var(--muted-foreground)/* Gris claro */
```

### **Subrayado**
```css
Normal:         doc-primary/50         /* Naranja 50% */
Hover:          doc-primary            /* Naranja 100% */
Style:          decoration-dotted      /* Punteado */
```

---

## 🔍 Detalles de Interacción

### **Trigger**
- **Evento:** `onMouseEnter` (hover)
- **Delay:** 200ms (configurado por Radix UI)
- **Cursor:** `cursor-help` (signo de interrogación)

### **Tooltip**
- **Posición:** `top` (arriba del término)
- **Alineación:** Auto-ajustable según espacio disponible
- **Max-width:** `max-w-xs` (20rem / 320px)
- **Padding:** `p-3` (0.75rem)
- **Shadow:** Sombra sutil para profundidad

---

## 📋 Lista Completa de Términos Activos

### **Sesión 1: Fundamentos**
- [x] componentes
- [x] useState
- [x] localStorage
- [x] React
- [x] Tailwind CSS
- [x] v0.dev
- [x] Vercel

### **Sesión 2: IA & APIs**
- [x] API
- [x] LLMs
- [x] prompt
- [x] Next.js
- [x] system prompt
- [x] API route
- [x] asíncronas

### **Sesión 3: Autenticación**
- [x] Privy SDK
- [x] PrivyProvider
- [x] endpoint
- [x] POST
- [x] GET
- [x] toast notifications

### **Sesión 4: Multimodal**
- [x] Multimodal
- [x] base64
- [x] HTML5 File API
- [x] Drag-and-drop

### **Sesión 5: Social**
- [x] Polling
- [x] WebSockets
- [x] Routing dinámico
- [x] Paginación
- [x] Grid

---

## 🎯 Casos de Uso Especiales

### **Término con Múltiples Palabras**

**Ejemplo:** "API route"

```
Texto: "Crear tu primer API route en Next.js"
                       ~~~~~~~~~

Tooltip:
┌───────────────────────────────┐
│ API route                     │
│ ───────────────────────────── │
│ Endpoint en Next.js que       │
│ ejecuta código en servidor    │
└───────────────────────────────┘
```

### **Múltiples Términos en una Línea**

```
Texto: "Guardar información con useState en localStorage"
                                ~~~~~~~~    ~~~~~~~~~~~~

[Dos tooltips independientes]
```

### **Término dentro de Código**

```
Texto: "const [state, setState] = useState(0)"
                                   ~~~~~~~~

[Tooltip funciona incluso en contexto de código]
```

---

## 🚀 Ejemplo Completo de Sesión

```
┌──────────────────────────────────────────────────┐
│ Sesión 1: Nace tu Regenmon                       │
│ ─────────────────────────────                    │
│                                                  │
│ 1. Introducción al AI-assisted development      │
│                                                  │
│ • Cómo funciona el desarrollo con IA            │
│ • Crear cuentas en v0.dev y Vercel              │
│                       ~~~~~~     ~~~~~~          │
│ • Tu primer prompt para generar código          │
│             ~~~~~~                               │
│                                                  │
│ 2. Componentes de React y state management      │
│    ~~~~~~~~~~~    ~~~~~                         │
│                                                  │
│ • Qué son los componentes y cómo se usan       │
│                 ~~~~~~~~~~~                     │
│ • Guardar información con useState              │
│                               ~~~~~~~~          │
│ • localStorage para guardar información         │
│   ~~~~~~~~~~~~                                  │
│                                                  │
│ 3. Construcción del display principal           │
│                                                  │
│ • Prompt: Contenedor estilo Tamagotchi          │
│   ~~~~~~                                        │
│ • Crear las barras de estadísticas              │
│ • Estilizar con Tailwind CSS                    │
│                  ~~~~~~~~~~~~                   │
└──────────────────────────────────────────────────┘

[Todos los términos subrayados tienen tooltips]
```

---

## 📊 Estadísticas de Cobertura

| Métrica | Valor |
|---------|-------|
| **Total de términos técnicos únicos** | 30+ |
| **Sesiones cubiertas** | 5/5 (100%) |
| **Items con al menos 1 tooltip** | ~45/60 (75%) |
| **Promedio de tooltips por sesión** | 6 términos |

---

## 🎓 Beneficios Educativos

### **Antes (sin tooltips)**
```
Estudiante lee: "Guardar información con useState"
                 ↓
                 ¿Qué es useState?
                 ↓
                 Abre Google
                 ↓
                 Se distrae (50% probabilidad)
                 ↓
                 Pierde contexto
```

### **Después (con tooltips)**
```
Estudiante lee: "Guardar información con useState"
                                        ~~~~~~~~
                 ↓
                 Hover sobre useState
                 ↓
                 Lee definición (2 segundos)
                 ↓
                 Continúa leyendo
                 ↓
                 ✅ Mantiene flujo de aprendizaje
```

---

## 🔗 Navegación de la Documentación

```
Estructura completa:

/doc                    (Home de docs)
  │
  ├── /doc/quick-start  (Inicio rápido)
  ├── /doc/resources    (Recursos)
  ├── /doc/layers       (Las 5 Capas)
  │
  ├── /doc/ai           ← IMPLEMENTADO CON TOOLTIPS
  │   └── [Temario completo + 30+ tooltips]
  │
  ├── /doc/session-1    (Sesión 1)
  ├── /doc/session-2    (Sesión 2)
  ├── /doc/session-3    (Sesión 3)
  ├── /doc/session-4    (Sesión 4)
  └── /doc/session-5    (Sesión 5)
```

---

**📝 Nota:** Los ejemplos visuales son representaciones ASCII. La implementación real usa Radix UI con estilos Tailwind CSS para una experiencia visual pulida y profesional.

**🎨 Ver en vivo:** `http://localhost:8080/doc/ai`

---

**Última actualización:** 2026-01-27
