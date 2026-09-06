# Sesión 3 - Sistema de Recursos y Economía 💰

> Agrega profundidad estratégica con recursos, evoluciones, y consecuencias.

---

## 📋 Tabla de Contenidos

1. [Resumen de la Sesión](#resumen-de-la-sesión)
2. [Prerequisitos](#prerequisitos)
3. [Prompt Completo para v0](#prompt-completo-para-v0)
4. [Entregable de la Sesión](#entregable-de-la-sesión)
5. [Material de Apoyo](#material-de-apoyo)
6. [Errores Comunes y Soluciones](#errores-comunes-y-soluciones)
7. [Checklist de Validación](#checklist-de-validación)
8. [Puente a Sesión 4](#puente-a-sesión-4)

**Tiempo estimado**: 3-4 horas
**Dificultad**: ⭐⭐ Intermedio
**Prerequisito**: [Sesión 2 completada](./07-sesion-2.md)

---

## 🎯 Resumen de la Sesión

### ¿Qué Aprenderás?

Esta sesión transforma tu juego simple en un sistema complejo con mecánicas de economía, recursos, y consecuencias estratégicas.

**4 Conceptos Clave:**

1. **Sistema de Recursos** - Monedas, energía, y gestión de inventario
2. **Economía de Juego** - Costo-beneficio, trade-offs, y decisiones estratégicas
3. **Evoluciones y Tipos** - Sistema de progresión complejo con ramificaciones
4. **Feedback Visual** - Notificaciones, animaciones, y estados visuales

### ¿Qué Construirás?

Agregarás **sistemas de progresión avanzados** a tu Regenmon:
- Sistema de monedas (se ganan al entrenar, se gastan en objetos)
- Sistema de energía (limita acciones, se recarga con tiempo)
- Tienda de objetos (pociones, comida especial, accesorios)
- Evoluciones por tipo (fuego → dragón, agua → hielo, planta → bosque)
- Sistema de logros y recompensas
- Notificaciones visuales y feedback constante

**Resultado final**: Un juego con profundidad estratégica donde cada decisión tiene consecuencias y el progreso es significativo.

### ¿Por Qué Esta Sesión Es Importante?

> **"La diferencia entre un juguete y un juego es la profundidad de sus sistemas."**

**Antes de Sesión 3**: Juguete simple con botones
**Después de Sesión 3**: Juego complejo con estrategia, recursos, y consecuencias

Aprendes a diseñar sistemas que mantienen a los usuarios enganchados, no solo con mecánicas básicas sino con decisiones significativas.

---

## 📚 Prerequisitos

### Antes de Empezar

**Técnicos:**
- [ ] Sesión 1 completada (sistema base de Regenmon)
- [ ] Sesión 2 completada (chat con IA)
- [ ] URL de Vercel funcionando
- [ ] Familiaridad con useState y localStorage

**Conceptuales:**
- ✅ Entiendes cómo funcionan los sistemas de progresión
- ✅ Conoces juegos con economía interna (Pokémon, RPGs, idle games)
- ✅ Sabes qué son los trade-offs (decisiones con pros y contras)

### Conceptos de Game Design

Antes de programar, entiende estos conceptos:

**1. Economía de Juego:**
Todo tiene costo y beneficio. Ejemplo:
- Entrenar: -10 energía, +20 XP, +5 monedas
- Alimentar: -5 monedas, +20 felicidad
- Poción: -50 monedas, +50 energía

**2. Loop de Juego:**
```
Entrenar → Ganar monedas → Comprar objetos → Mejorar stats → Entrenar más fuerte
```

**3. Escasez:**
Recursos limitados crean decisiones interesantes:
- Si energía es ilimitada, entrenar es trivial
- Si energía es limitada, debes elegir cuándo entrenar

**4. Feedback Inmediato:**
Toda acción debe tener feedback visual:
- Ganaste monedas: +5 💰 flota en pantalla
- Energía baja: barra roja + mensaje "Descansa!"
- Nivel up: confetti + sonido + animación

---

## 📝 Prompt Completo para v0

### Contexto para el Prompt

Este prompt agrega sistemas de economía y progresión a tu Regenmon existente. Asume que ya tienes:
- Sistema base de nivel, felicidad, XP (Sesión 1)
- Chat con IA (Sesión 2)
- localStorage funcionando

### Prompt Principal

Copia este prompt en v0:

```
Agrega sistemas de recursos, economía, y evoluciones avanzadas a mi juego Regenmon existente. Implementa mecánicas de profundidad estratégica que transformen el juego en una experiencia más compleja y adictiva.

## INTEGRACIÓN CON CÓDIGO EXISTENTE

Mantener todo lo anterior:
- Sistema base: nivel, felicidad, XP, acciones (Sesión 1)
- Chat con IA (Sesión 2)
- localStorage con persistencia
- Deploy en Vercel funcionando

## NUEVAS FUNCIONALIDADES

### 1. SISTEMA DE MONEDAS

Implementar economía básica:

**Stats:**
- Monedas actuales (empieza en 100)
- Display visible siempre: "💰 {monedas}"

**Ganar monedas:**
- Entrenar: +5 monedas
- Jugar: +3 monedas
- Alimentar: +2 monedas
- Subir de nivel: +50 monedas (bonus)

**Gastar monedas:**
- Comprar objetos en tienda
- Forzar evolución (500 monedas)

**Validaciones:**
- No puede bajar de 0
- Mostrar mensaje si no hay suficientes monedas

---

### 2. SISTEMA DE ENERGÍA

Implementar recurso limitado:

**Stats:**
- Energía actual (máximo 100, empieza en 100)
- Display: Barra de progreso azul + "⚡ {energía}/100"

**Consumo de energía:**
- Entrenar: -15 energía
- Jugar: -10 energía
- Alimentar: -5 energía

**Regeneración:**
- +1 energía cada 30 segundos automáticamente
- No puede exceder 100

**Restricciones:**
- Si energía < costo de acción: botón deshabilitado
- Mensaje: "Sin energía suficiente. Espera o compra poción."

---

### 3. TIENDA DE OBJETOS

Implementar shop con objetos comprables:

**Interfaz:**
- Modal/sección expandible "🏪 Tienda"
- Grid de cards de objetos
- Cada card muestra: nombre, icono, descripción, costo, botón "Comprar"

**Objetos disponibles:**

1. **Poción de Energía** - 💙
   - Costo: 50 monedas
   - Efecto: +50 energía
   - Descripción: "Recupera energía instantáneamente"

2. **Comida Premium** - 🍖
   - Costo: 30 monedas
   - Efecto: +50 felicidad, +10 XP
   - Descripción: "Tu Regenmon se pone super feliz"

3. **Libro de Entrenamiento** - 📚
   - Costo: 80 monedas
   - Efecto: +30 XP
   - Descripción: "Aprende técnicas nuevas"

4. **Gema de Evolución** - 💎
   - Costo: 500 monedas
   - Efecto: Fuerza evolución inmediata (si nivel >= 10)
   - Descripción: "Evoluciona antes de tiempo"

**Validaciones:**
- Si no hay monedas suficientes: botón deshabilitado + tooltip
- Después de comprar: feedback visual + actualizar stats
- Animación de compra (confetti, sonido opcional)

---

### 4. SISTEMA DE TIPOS Y EVOLUCIONES

Implementar evolución por tipo:

**Tipos de Regenmon:**
- Fuego 🔥 (rojo/naranja)
- Agua 💧 (azul)
- Planta 🌱 (verde)
- Normal ⚪ (gris/blanco)

**Selección de tipo:**
- Al nombrar el Regenmon por primera vez, pregunta: "¿Qué tipo es {nombre}?"
- Botones de selección con iconos
- Tipo afecta colores de UI y personalidad en chat

**Evoluciones:**

Nivel 1-9: Forma básica
- Ejemplo: "Flamix (Fuego básico)"

Nivel 10-19: Primera evolución
- Fuego → Dragón 🐉
- Agua → Marino 🌊
- Planta → Bosque 🌳
- Normal → Volador 🦅
- Mensaje: "¡{nombre} evolucionó a {tipo evolucionado}!"

Nivel 20+: Evolución final
- Fuego → Fénix 🔥🦅
- Agua → Leviatán 🐋
- Planta → Ent 🌲
- Normal → Ángel 👼
- Mensaje: "¡{nombre} alcanzó su forma máxima!"

**Efectos visuales:**
- Cambio de color de barra de stats según tipo
- Animación de evolución (glow, shake, confetti)
- Actualizar avatar/imagen del Regenmon

---

### 5. SISTEMA DE LOGROS

Implementar achievements:

**Logros desbloqueables:**
1. "Primer paso" - Sube a nivel 2 (Recompensa: 50 monedas)
2. "Conversador" - Envía 10 mensajes en chat (Recompensa: 30 monedas)
3. "Millonario" - Acumula 500 monedas (Recompensa: 100 monedas)
4. "Atleta" - Entrena 20 veces (Recompensa: 50 monedas)
5. "Evolucionado" - Alcanza primera evolución (Recompensa: 100 monedas)
6. "Maestro" - Llega a nivel 20 (Recompensa: 200 monedas)

**UI de logros:**
- Sección "🏆 Logros" expandible
- Lista de logros: desbloqueados (color) vs bloqueados (gris)
- Progreso visible: "Conversador: 7/10 mensajes"
- Notificación al desbloquear: "¡Logro desbloqueado! +50 💰"

**Persistencia:**
- Guardar logros desbloqueados en localStorage
- Guardar estadísticas: mensajes enviados, veces entrenado, etc.

---

### 6. FEEDBACK VISUAL AVANZADO

Implementar notificaciones y animaciones:

**Sistema de notificaciones:**
- Toast notifications en esquina superior derecha
- Tipos: success (verde), error (rojo), info (azul), warning (amarillo)

**Ejemplos de uso:**
- "+5 💰" flota cuando ganas monedas
- "¡Nivel UP! 🎉" con confetti al subir nivel
- "Sin energía ⚡" en rojo cuando intentas acción sin energía
- "Objeto comprado ✅" al comprar en tienda
- "¡Logro desbloqueado! 🏆" con sonido

**Animaciones CSS:**
- Shake en botones al hacer hover
- Pulse en stats cuando cambian
- Glow en evoluciones
- Fade in/out en notificaciones
- Scale up/down en acciones

---

## ESPECIFICACIONES TÉCNICAS

### localStorage Schema Actualizado

```typescript
interface RegenmonData {
  // Básico (Sesión 1)
  name: string;
  level: number;
  happiness: number;
  xp: number;

  // Nuevo (Sesión 3)
  type: 'fire' | 'water' | 'plant' | 'normal';
  evolutionStage: 0 | 1 | 2; // básico, primera evolución, final
  coins: number;
  energy: number;

  // Estadísticas para logros
  stats: {
    messagesSent: number;
    timesTrained: number;
    timesPlayed: number;
    timesFed: number;
    objectsBought: number;
  };

  // Logros desbloqueados
  achievements: string[]; // Array de IDs de logros

  // Timestamp
  lastUpdated: number;
  lastEnergyRegenTime: number;
}
```

### Constantes de Balance

```typescript
const GAME_BALANCE = {
  // Energía
  ENERGY_MAX: 100,
  ENERGY_REGEN_RATE: 1, // puntos por tick
  ENERGY_REGEN_INTERVAL: 30000, // 30 segundos

  // Costos de acciones
  COSTS: {
    train: { energy: 15, coins: 0 },
    play: { energy: 10, coins: 0 },
    feed: { energy: 5, coins: 5 },
  },

  // Recompensas de acciones
  REWARDS: {
    train: { coins: 5, xp: 20, happiness: 5 },
    play: { coins: 3, xp: 10, happiness: 15 },
    feed: { coins: 2, xp: 5, happiness: 20 },
  },

  // Niveles de evolución
  EVOLUTION_LEVELS: {
    first: 10,
    final: 20,
  },

  // Precios de tienda
  SHOP: {
    energyPotion: 50,
    premiumFood: 30,
    trainingBook: 80,
    evolutionGem: 500,
  },
};
```

### Sistema de Evolución

```typescript
const getEvolutionName = (type: string, stage: number): string => {
  const evolutions = {
    fire: ['Flamix', 'Dragón de Fuego', 'Fénix Carmesí'],
    water: ['Aquaris', 'Guardián Marino', 'Leviatán'],
    plant: ['Verdis', 'Árbol Antiguo', 'Ent Milenario'],
    normal: ['Nimbus', 'Águila Real', 'Ángel Guardián'],
  };

  return evolutions[type][stage] || evolutions[type][0];
};

const checkEvolution = (level: number, currentStage: number): number => {
  if (level >= 20 && currentStage < 2) return 2; // Evolución final
  if (level >= 10 && currentStage < 1) return 1; // Primera evolución
  return currentStage;
};
```

---

## INTERFAZ Y DISEÑO

### Layout Actualizado

```
┌────────────────────────────────────────┐
│  Header: Nombre + Tipo + Nivel        │
├────────────────────────────────────────┤
│  Stats:                                │
│  ❤️ Felicidad: [====...] 80/100       │
│  ⭐ XP: [======..] 60/100              │
│  ⚡ Energía: [====....] 45/100         │
│  💰 Monedas: 125                       │
├────────────────────────────────────────┤
│  Avatar/Imagen del Regenmon            │
│  (cambia según tipo y evolución)       │
├────────────────────────────────────────┤
│  Botones de Acción:                    │
│  [Alimentar] [Jugar] [Entrenar]        │
│  (muestran costo de energía)           │
├────────────────────────────────────────┤
│  Tienda: [🏪 Ver Tienda]               │
│  Logros: [🏆 Ver Logros]               │
├────────────────────────────────────────┤
│  Chat con IA (Sesión 2)                │
└────────────────────────────────────────┘
```

### Colores por Tipo

```css
fire: {
  primary: '#FF6B35',
  secondary: '#FF8C42',
  glow: 'rgba(255, 107, 53, 0.3)',
}

water: {
  primary: '#4ECDC4',
  secondary: '#44A8A8',
  glow: 'rgba(78, 205, 196, 0.3)',
}

plant: {
  primary: '#8BC34A',
  secondary: '#689F38',
  glow: 'rgba(139, 195, 74, 0.3)',
}

normal: {
  primary: '#BDBDBD',
  secondary: '#9E9E9E',
  glow: 'rgba(189, 189, 189, 0.3)',
}
```

---

## VALIDACIONES Y LÓGICA

### Validación de Acciones

```typescript
const canPerformAction = (action: string, energy: number, coins: number): boolean => {
  const cost = GAME_BALANCE.COSTS[action];

  if (energy < cost.energy) {
    showNotification('Sin energía suficiente ⚡', 'error');
    return false;
  }

  if (coins < cost.coins) {
    showNotification('Sin monedas suficientes 💰', 'error');
    return false;
  }

  return true;
};
```

### Sistema de Logros

```typescript
const checkAchievements = (data: RegenmonData): string[] => {
  const newAchievements: string[] = [];

  if (data.level >= 2 && !data.achievements.includes('first_step')) {
    newAchievements.push('first_step');
    showNotification('¡Logro desbloqueado! Primer paso 🏆', 'success');
  }

  if (data.stats.messagesSent >= 10 && !data.achievements.includes('conversador')) {
    newAchievements.push('conversador');
    showNotification('¡Logro desbloqueado! Conversador 🏆', 'success');
  }

  // ... más logros

  return newAchievements;
};
```

---

## CARACTERÍSTICAS AVANZADAS (OPCIONALES)

1. **Eventos Temporales:**
   - Cada 24 horas: bonus de 100 monedas
   - Fines de semana: doble XP

2. **Multiplicadores:**
   - Felicidad >80: +10% monedas
   - Energía completa: +20% XP

3. **Misiones Diarias:**
   - "Entrena 5 veces" → +50 monedas
   - "Mantén felicidad >70" → +30 monedas

4. **Ranking/Leaderboard:**
   - Comparar nivel con otros usuarios (Sesión 4)

Asegúrate de que:
- El código sea limpio y modular
- Todas las mecánicas sean balanceadas
- El feedback visual sea claro y constante
- La persistencia funcione perfectamente
- El juego sea divertido y adictivo
```

### Prompt Simplificado (Troubleshooting)

Si el prompt completo es demasiado, divide en pasos:

**Paso 1: Solo Monedas y Energía**
```
Agrega dos recursos básicos a mi Regenmon:
1. Monedas (empieza en 100, se ganan +5 al entrenar, display: 💰)
2. Energía (máx 100, se gasta -10 al entrenar, regenera +1/30s, display: ⚡)

Restricción: Si energía < 10, deshabilitar botón de entrenar.
```

**Paso 2: Tienda Simple (Después de Paso 1)**
```
Agrega una tienda con 2 objetos:
1. Poción (50 monedas): +50 energía
2. Comida (30 monedas): +50 felicidad

Modal con botones "Comprar". Valida que haya monedas suficientes.
```

**Paso 3: Tipos y Evoluciones (Después de Paso 2)**
```
Agrega sistema de tipos:
- Al iniciar: elegir tipo (Fuego, Agua, Planta, Normal)
- Cada tipo tiene color diferente
- Al llegar a nivel 10: mensaje "Evolucionó!" + cambiar nombre según tipo
```

---

## 📦 Entregable de la Sesión

### Criterios de Éxito

Tu proyecto debe cumplir con:

**Funcionalidad Mínima Viable (MVP):**
- [ ] Sistema de monedas funcionando (ganar y gastar)
- [ ] Sistema de energía con regeneración automática
- [ ] Al menos 2 objetos comprables en tienda
- [ ] Sistema de tipos implementado (mínimo 3 tipos)
- [ ] Evoluciones funcionan al llegar a niveles clave (10, 20)
- [ ] Al menos 3 logros desbloqueables
- [ ] Feedback visual en acciones clave (notificaciones, animaciones básicas)
- [ ] Todo persiste en localStorage

**Calidad Básica:**
- [ ] Las barras de recursos se actualizan visualmente
- [ ] Los botones se deshabilitan cuando no hay recursos
- [ ] Mensajes de error claros ("Sin energía", "Sin monedas")
- [ ] El balance es jugable (no imposible ganar monedas, energía regenera razonablemente)
- [ ] No hay exploits obvios (duplicar monedas, energía infinita)

**Deseable (No Obligatorio):**
- [ ] Animaciones avanzadas (confetti, glow, shake)
- [ ] Sistema de sonidos para acciones
- [ ] Eventos temporales (bonus diario)
- [ ] Multiplicadores según stats
- [ ] Misiones diarias

### Formato de Entrega

Para validar tu proyecto, proporciona:

1. **URL de producción** - `tu-proyecto.vercel.app` con todos los sistemas funcionando
2. **Captura de pantalla** - Mostrar stats con monedas, energía, y logros desbloqueados
3. **Test de economía** - Demuestra:
   - Ganar monedas al entrenar
   - Comprar objeto en tienda
   - Energía regenera automáticamente
   - Evolución al llegar a nivel 10
4. **Test de logros** - Desbloquea al menos 1 logro y muestra notificación

### Rúbrica de Evaluación

| Criterio | Puntos | Descripción |
|----------|--------|-------------|
| **Sistema de Recursos** | 25 pts | Monedas y energía funcionando correctamente |
| **Economía Balanceada** | 20 pts | Costo-beneficio lógico, sin exploits |
| **Evoluciones y Tipos** | 20 pts | Sistema de tipos y evoluciones funcional |
| **Logros** | 15 pts | Al menos 3 logros desbloqueables |
| **Feedback Visual** | 10 pts | Notificaciones y animaciones básicas |
| **Persistencia** | 10 pts | Todo guarda en localStorage correctamente |

**Total**: 100 puntos
**Aprobado**: 70+ puntos

---

## 📚 Material de Apoyo

### Conceptos de Game Design Explicados

#### 1. Economía de Juego

**¿Qué es?**
Sistema de recursos con entrada y salida balanceada para mantener engagement.

**Componentes:**
```
Fuentes de Ingreso (Input):
- Acciones del jugador (entrenar, jugar)
- Logros desbloqueados
- Bonus temporales

Sumideros de Gasto (Output):
- Tienda de objetos
- Upgrades
- Evoluciones forzadas
```

**Balance:**
Si ingreso > gasto: Jugador acumula infinitamente (boring)
Si gasto > ingreso: Jugador se frustra (quit)
**Balance perfecto**: Ingreso ≈ Gasto + pequeño surplus

**Ejemplo del Regenmon:**
- Entrenar 10 veces = 50 monedas ganadas
- Poción cuesta 50 monedas
- Balance: Entrenar 10 veces = 1 poción (razonable)

---

#### 2. Loop de Juego (Core Loop)

**¿Qué es?**
Ciclo repetitivo de acciones que mantiene al jugador enganchado.

**Loop del Regenmon:**
```
1. Entrenar → 2. Ganar monedas/XP → 3. Comprar objetos → 4. Mejorar stats →
5. Poder entrenar más → (volver a 1)
```

**Por qué funciona:**
- Cada paso tiene recompensa inmediata
- Cada paso motiva el siguiente
- El loop se mejora con el tiempo (más eficiente)

**Mejores Prácticas:**
- Loop debe ser < 5 minutos por ciclo completo
- Cada paso debe tener feedback visual claro
- Debe haber "salida" opcional (puedes detenerte en cualquier momento)

---

#### 3. Escasez y Trade-offs

**¿Qué es?**
Recursos limitados que fuerzan decisiones estratégicas.

**Sin escasez:**
```typescript
// Energía ilimitada
function train() {
  xp += 20;
  // Sin costo, sin decisión interesante
}
```

**Con escasez:**
```typescript
// Energía limitada
function train() {
  if (energy < 15) {
    return 'Sin energía. Espera o compra poción.';
  }
  energy -= 15;
  xp += 20;
  // Ahora hay decisión: ¿Entreno ahora o espero?
}
```

**Trade-offs:**
- ¿Gasto monedas en poción o en comida premium?
- ¿Entreno ahora o espero a tener más energía?
- ¿Fuerzo evolución por 500 monedas o espero a nivel 10?

**Diseño de Trade-offs:**
- Ninguna opción debe ser "obviamente mejor"
- Ambas opciones deben tener casos de uso válidos
- El contexto determina la mejor elección

---

#### 4. Progresión y Escalamiento

**¿Qué es?**
Cómo el juego aumenta de dificultad/complejidad con el progreso.

**Escalamiento Lineal (Malo):**
```
Nivel 1: 100 XP para subir
Nivel 2: 200 XP para subir
Nivel 3: 300 XP para subir
```
Problema: Se vuelve tedioso rápidamente

**Escalamiento Exponencial (Moderado):**
```
Nivel 1: 100 XP
Nivel 2: 150 XP
Nivel 3: 225 XP (1.5x cada nivel)
```
Mejor: Mantiene desafío pero puede ser frustrante

**Escalamiento con Milestones (Ideal):**
```
Nivel 1-5: 100 XP cada nivel (fácil al inicio)
Nivel 6-10: 200 XP cada nivel (medio)
Nivel 11-15: 300 XP cada nivel (difícil)
Nivel 16-20: 500 XP cada nivel (muy difícil)

Pero al llegar a nivel 10: EVOLUCIÓN (recompensa masiva)
```

**Curva J:**
```
Esfuerzo ────────────┐
                     │     ┌── Recompensa grande (evolución)
Inicio fácil         │    /
  └──────────────────┴───/

```

---

#### 5. Feedback Loops

**¿Qué son?**
Sistemas que se refuerzan a sí mismos (positiva o negativamente).

**Feedback Loop Positivo (Peligroso):**
```
Más monedas → Más objetos → Stats más altos → Ganas más monedas → (loop)
```
Problema: El jugador se vuelve "invencible" rápidamente

**Feedback Loop Negativo (Frustrante):**
```
Sin energía → No puedes entrenar → No ganas monedas → No compras poción →
Sin energía → (loop de muerte)
```
Problema: El jugador se atasca permanentemente

**Balance Ideal:**
```
Feedback positivo LIMITADO: Mejoras hasta cierto punto, luego se estabiliza
Feedback negativo CON SALIDA: Siempre hay forma de recuperarse
```

**Ejemplo en Regenmon:**
- Límite de energía (100 máx) previene crecimiento infinito
- Regeneración automática previene loop de muerte
- Logros dan bonus único (no acumulable infinitamente)

---

### Sistema de Notificaciones

**Implementación Básica:**

```typescript
// Componente Toast
interface Toast {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info' | 'warning';
  duration: number;
}

const [toasts, setToasts] = useState<Toast[]>([]);

const showNotification = (message: string, type: string = 'info') => {
  const id = Date.now().toString();
  const toast = { id, message, type, duration: 3000 };

  setToasts(prev => [...prev, toast]);

  setTimeout(() => {
    setToasts(prev => prev.filter(t => t.id !== id));
  }, 3000);
};

// Uso
showNotification('+5 💰', 'success');
showNotification('Sin energía ⚡', 'error');
```

**Mejores Prácticas:**
- Duración: 2-3 segundos para info, 5 segundos para errores
- Posición: Esquina superior derecha (no bloquea UI central)
- Límite: Máximo 3 toasts simultáneos
- Animación: Fade in/out suave (300ms)

---

### Balancing de Economía

**Fórmula para Balance:**

```typescript
// 1. Define cuánto tiempo quieres que el jugador invierta por objetivo
const TIME_TO_EVOLUTION = 30 * 60; // 30 minutos en segundos

// 2. Calcula acciones necesarias
const TRAINS_TO_LEVEL_10 = 50; // 50 entrenamientos para nivel 10

// 3. Calcula tiempo por acción
const TIME_PER_TRAIN = TIME_TO_EVOLUTION / TRAINS_TO_LEVEL_10;
// = 36 segundos por entrenamiento

// 4. Ajusta cooldowns y regeneración
const ENERGY_PER_TRAIN = 15;
const ENERGY_REGEN_RATE = 1; // cada 30s
// = 450 segundos (7.5 min) para regenerar energía completa
```

**Checklist de Balance:**
- [ ] Tiempo para primera evolución: 20-40 minutos
- [ ] Tiempo para evolución final: 2-4 horas
- [ ] Monedas por hora: 50-100
- [ ] Objetos comprables con 1 hora de juego: 2-3
- [ ] Energía completa regenera en: 5-10 minutos

---

### Recursos Adicionales

#### Documentación Técnica

- [Game Balance Tutorial](https://www.gamedeveloper.com/design/game-balance-tutorial) - Conceptos de balanceo
- [Economy Design](https://www.gdcvault.com/play/1023329/) - GDC talk sobre economía
- [Progression Systems](https://www.youtube.com/results?search_query=game+progression+systems) - Videos educativos

#### Ejemplos de Juegos

- **Idle Games**: Cookie Clicker, Adventure Capitalist (economía exponencial)
- **Pokémon**: Sistema de tipos, evoluciones, balance clásico
- **Animal Crossing**: Economía lenta, sin presión, reward loops
- **Clash of Clans**: Recursos múltiples, construcción con tiempo real

#### Herramientas de Balanceo

- **Excel/Google Sheets**: Modela tu economía antes de programar
- **Desmos Calculator**: Grafica curvas de progresión
- **Machinations**: Software especializado para diseño de economía

---

## 🔧 Errores Comunes y Soluciones

### Error 1: Energía Negativa

**Síntomas:**
- Energía baja de 0 y muestra valores negativos
- Barra de energía desborda o desaparece

**Causa:**
No validas el límite inferior antes de restar.

**Solución:**
```typescript
const performAction = (action: string) => {
  const cost = COSTS[action].energy;

  // ✅ Validar ANTES de restar
  if (energy < cost) {
    showNotification('Sin energía suficiente', 'error');
    return;
  }

  // ✅ Restar y asegurar no sea negativa
  setEnergy(prev => Math.max(0, prev - cost));

  // ... resto de la acción
};
```

**Validación:**
Intenta entrenar 10 veces seguidas sin esperar. La energía nunca debe ser negativa.

---

### Error 2: Duplicación de Monedas (Exploit)

**Síntomas:**
- Usuario puede hacer clic rápido y duplicar recompensas
- Monedas crecen más rápido de lo esperado
- Logros se desbloquean múltiples veces

**Causa:**
No tienes cooldown o deshabilitación de botones durante acciones.

**Solución:**
```typescript
const [isProcessing, setIsProcessing] = useState(false);

const performAction = async (action: string) => {
  if (isProcessing) return; // Prevenir spam

  setIsProcessing(true);

  // Realizar acción
  setCoins(prev => prev + REWARDS[action].coins);
  setXP(prev => prev + REWARDS[action].xp);

  // Cooldown de 1 segundo
  setTimeout(() => {
    setIsProcessing(false);
  }, 1000);
};

// En botón
<button disabled={isProcessing || energy < cost}>
  {isProcessing ? 'Procesando...' : 'Entrenar'}
</button>
```

**Validación:**
Haz clic rápidamente 10 veces en "Entrenar". Solo debe ejecutarse 1 vez, luego cooldown.

---

### Error 3: Energía No Regenera

**Síntomas:**
- La energía se queda estancada en un valor
- No sube automáticamente con el tiempo
- Siempre está en 0 o en el valor inicial

**Causa:**
`setInterval` no está implementado correctamente o se ejecuta múltiples veces.

**Solución:**
```typescript
useEffect(() => {
  const interval = setInterval(() => {
    setEnergy(prev => {
      const newEnergy = Math.min(100, prev + 1);
      console.log('Regenerando energía:', prev, '→', newEnergy);
      return newEnergy;
    });
  }, 30000); // 30 segundos

  // CRÍTICO: Cleanup
  return () => clearInterval(interval);
}, []); // Array vacío = solo ejecuta una vez
```

**Debug:**
```typescript
// Temporal: Regenera cada 3 segundos para testing
const interval = setInterval(() => {
  setEnergy(prev => Math.min(100, prev + 1));
}, 3000); // 3 segundos para debug
```

**Validación:**
1. Gasta energía hasta 50
2. Espera 1 minuto (en modo debug, 6 segundos)
3. Energía debe subir a 52

---

### Error 4: Evolución No Se Guarda

**Síntomas:**
- Evolución ocurre visualmente pero al recargar vuelve a estado anterior
- Nombre de evolución desaparece al refrescar
- `evolutionStage` siempre es 0

**Causa:**
No estás guardando `evolutionStage` en localStorage.

**Solución:**
```typescript
// Al cargar datos
useEffect(() => {
  const saved = localStorage.getItem('regenmonData');
  if (saved) {
    const data = JSON.parse(saved);
    setEvolutionStage(data.evolutionStage || 0);
    // ... cargar otros datos
  }
}, []);

// Al guardar datos
useEffect(() => {
  const data = {
    name,
    level,
    happiness,
    xp,
    evolutionStage, // ← IMPORTANTE: incluir en guardado
    // ... otros datos
  };
  localStorage.setItem('regenmonData', JSON.stringify(data));
}, [name, level, happiness, xp, evolutionStage]); // ← Dependencia
```

**Validación:**
1. Evoluciona a nivel 10
2. Recarga la página (F5)
3. Debe mantener evolución y nombre actualizado

---

### Error 5: Logros Se Desbloquean Múltiples Veces

**Síntomas:**
- El mismo logro se desbloquea repetidamente
- Notificaciones de logros spamean
- Monedas de recompensa se duplican

**Causa:**
No verificas si el logro ya está desbloqueado antes de agregarlo.

**Solución:**
```typescript
const checkAchievements = (data: RegenmonData) => {
  const newAchievements: string[] = [];

  // ✅ Verificar que NO esté desbloqueado antes
  if (data.level >= 2 && !data.achievements.includes('first_step')) {
    newAchievements.push('first_step');
    setCoins(prev => prev + 50); // Recompensa
    showNotification('¡Logro desbloqueado! Primer paso 🏆', 'success');
  }

  // Agregar nuevos logros al array existente
  if (newAchievements.length > 0) {
    setAchievements(prev => [...prev, ...newAchievements]);
  }
};

// Llamar en cada actualización relevante
useEffect(() => {
  checkAchievements({ level, achievements, stats, ... });
}, [level, stats.messagesSent, stats.timesTrained]); // Dependencias
```

**Validación:**
1. Desbloquea un logro
2. Sigue jugando (entrena, sube nivel, etc.)
3. El mismo logro NO debe desbloquearse de nuevo

---

### Error 6: Tienda Permite Comprar Sin Monedas

**Síntomas:**
- Puedes comprar objetos aunque no tengas monedas suficientes
- Monedas se vuelven negativas
- Balance del juego se rompe

**Causa:**
Validación de monedas ocurre DESPUÉS de restar, no antes.

**Solución:**
```typescript
const buyItem = (itemId: string, cost: number) => {
  // ✅ Validar ANTES de cualquier acción
  if (coins < cost) {
    showNotification(`Necesitas ${cost} monedas. Te faltan ${cost - coins}`, 'error');
    return;
  }

  // ✅ Restar y aplicar efecto
  setCoins(prev => prev - cost);

  switch(itemId) {
    case 'energyPotion':
      setEnergy(prev => Math.min(100, prev + 50));
      break;
    // ... otros items
  }

  showNotification('Objeto comprado ✅', 'success');
};

// En botón de tienda
<button
  disabled={coins < item.cost}
  onClick={() => buyItem(item.id, item.cost)}
>
  Comprar ({item.cost} 💰)
</button>
```

**Validación:**
1. Reduce tus monedas a 30
2. Intenta comprar poción (cuesta 50)
3. Botón debe estar deshabilitado + mensaje de error si intentas

---

### Error 7: Stats No Se Actualizan Para Logros

**Síntomas:**
- Logro "Entrena 20 veces" nunca se desbloquea
- `stats.timesTrained` siempre es 0
- No se rastrea actividad del usuario

**Causa:**
No estás incrementando estadísticas en cada acción.

**Solución:**
```typescript
const performAction = (action: string) => {
  // Aplicar efectos de la acción
  setEnergy(prev => prev - COSTS[action].energy);
  setCoins(prev => prev + REWARDS[action].coins);
  setXP(prev => prev + REWARDS[action].xp);

  // ✅ Incrementar estadística correspondiente
  setStats(prev => ({
    ...prev,
    timesTrained: action === 'train' ? prev.timesTrained + 1 : prev.timesTrained,
    timesPlayed: action === 'play' ? prev.timesPlayed + 1 : prev.timesPlayed,
    timesFed: action === 'feed' ? prev.timesFed + 1 : prev.timesFed,
  }));

  // Verificar logros después de actualizar stats
  checkAchievements({ level, stats, ... });
};
```

**Validación:**
```typescript
// Debug: Ver stats en consola
console.log('Stats:', stats);
// Debe incrementar después de cada acción
```

---

### Error 8: Tipo de Regenmon No Cambia Colores

**Síntomas:**
- Todos los Regenmon tienen el mismo color
- El tipo no afecta la UI visualmente
- No se distingue entre fuego, agua, planta

**Causa:**
Colores no están mapeados dinámicamente según el tipo.

**Solución:**
```typescript
// Definir colores por tipo
const TYPE_COLORS = {
  fire: {
    primary: 'bg-orange-500',
    secondary: 'text-orange-400',
    border: 'border-orange-500',
  },
  water: {
    primary: 'bg-blue-500',
    secondary: 'text-blue-400',
    border: 'border-blue-500',
  },
  plant: {
    primary: 'bg-green-500',
    secondary: 'text-green-400',
    border: 'border-green-500',
  },
  normal: {
    primary: 'bg-gray-500',
    secondary: 'text-gray-400',
    border: 'border-gray-500',
  },
};

// Aplicar colores dinámicamente
const colors = TYPE_COLORS[type];

return (
  <div className={`glass-card border-l-4 ${colors.border}`}>
    <h2 className={colors.secondary}>{name}</h2>
    <div className={`${colors.primary} h-4 w-full rounded`}>
      {/* Barra de stats */}
    </div>
  </div>
);
```

**Validación:**
1. Crea Regenmon de tipo Fuego (debe ser naranja/rojo)
2. Reinicia y elige tipo Agua (debe ser azul)
3. Colores deben cambiar según el tipo

---

### Error 9: Balance Roto (Muy Fácil o Muy Difícil)

**Síntomas:**
- Jugador acumula 1000+ monedas en 5 minutos (muy fácil)
- O jugador nunca puede comprar nada (muy difícil)
- Energía se acaba instantáneamente o nunca baja

**Causa:**
Valores de balance no están ajustados correctamente.

**Solución:**

**Testing de Balance:**
```typescript
// 1. Calcula cuánto gana el jugador por hora
const coinsPerTrain = 5;
const trainsPerHour = 60 / (ENERGY_REGEN_INTERVAL / 1000 / 60); // ~20
const coinsPerHour = coinsPerTrain * trainsPerHour; // ~100

// 2. Calcula cuánto cuestan los objetivos
const firstGoalCost = 50; // Poción
const timeToFirstGoal = (firstGoalCost / coinsPerHour) * 60; // minutos
console.log('Tiempo para primer objetivo:', timeToFirstGoal, 'minutos');
// Objetivo: 10-15 minutos

// 3. Ajusta valores si es necesario
if (timeToFirstGoal < 5) {
  // Muy rápido: reduce recompensas o aumenta precios
  coinsPerTrain = 3;
} else if (timeToFirstGoal > 20) {
  // Muy lento: aumenta recompensas o reduce precios
  coinsPerTrain = 7;
}
```

**Checklist de Balance:**
- [ ] Primer objeto de tienda: 10-15 minutos de juego
- [ ] Primera evolución (nivel 10): 30-45 minutos
- [ ] Energía completa regenera en: 5-10 minutos
- [ ] Nunca quedas "atascado" sin poder hacer nada

**Validación:**
Juega durante 30 minutos cronometrados. Debes poder:
- Comprar al menos 2-3 objetos
- Subir al menos 5 niveles
- Nunca estar >5 minutos sin poder hacer nada

---

### Debugging de Economía

**Herramientas:**

```typescript
// 1. Panel de debug (solo en desarrollo)
const DebugPanel = () => {
  return (
    <div className="fixed bottom-0 left-0 bg-black/90 text-white p-4 text-xs">
      <h3>Debug Stats</h3>
      <p>Coins: {coins}</p>
      <p>Energy: {energy}/100</p>
      <p>Coins/min rate: {calculateCoinsPerMinute()}</p>
      <p>Time to next goal: {timeToNextGoal()} min</p>

      <button onClick={() => setCoins(1000)}>+1000 💰</button>
      <button onClick={() => setEnergy(100)}>Full ⚡</button>
      <button onClick={() => setLevel(10)}>Level 10</button>
    </div>
  );
};

// 2. Console logs estratégicos
console.group('Action: Train');
console.log('Before:', { coins, energy, xp });
// ... perform action
console.log('After:', { coins, energy, xp });
console.log('Deltas:', {
  coins: coinsAfter - coinsBefore,
  energy: energyAfter - energyBefore
});
console.groupEnd();
```

---

## ✅ Checklist de Validación

### Funcionalidad Core
- [ ] Sistema de monedas: se ganan y gastan correctamente
- [ ] Sistema de energía: se consume y regenera automáticamente
- [ ] Tienda: al menos 2 objetos comprables funcionando
- [ ] Tipos: al menos 3 tipos implementados con colores diferentes
- [ ] Evoluciones: funciona al llegar a nivel 10 y 20
- [ ] Logros: al menos 3 logros desbloqueables
- [ ] Feedback: notificaciones aparecen en acciones clave

### Balance y Economía
- [ ] No es posible tener monedas negativas
- [ ] No es posible tener energía negativa
- [ ] Primer objeto de tienda es alcanzable en 10-15 minutos
- [ ] Energía completa regenera en 5-10 minutos
- [ ] No hay exploits (duplicar monedas, energía infinita)
- [ ] El juego no es frustrante (siempre puedes progresar)

### Persistencia
- [ ] Monedas persisten al recargar
- [ ] Energía persiste al recargar
- [ ] Evolución persiste al recargar
- [ ] Logros desbloqueados persisten
- [ ] Estadísticas para logros persisten

### UX/UI
- [ ] Barras de recursos se actualizan visualmente
- [ ] Botones se deshabilitan cuando no hay recursos
- [ ] Mensajes de error son claros
- [ ] Notificaciones no se superponen
- [ ] Colores cambian según tipo de Regenmon

### Test de Juego
- [ ] Juega 30 minutos: debe ser entretenido, no tedioso
- [ ] Puedes alcanzar primera evolución en tiempo razonable
- [ ] Hay decisiones interesantes (¿compro poción o comida?)
- [ ] Siempre hay algo que hacer (no quedas bloqueado)

**¿Todos marcados?** 🎉 ¡Completaste la Sesión 3!

---

## 🔗 Puente a Sesión 4

### Lo Que Lograste

Ahora tienes:
- ✅ Un juego con profundidad estratégica real
- ✅ Sistemas de economía y recursos balanceados
- ✅ Mecánicas de progresión complejas (evoluciones, logros)
- ✅ Feedback visual constante

### La Limitación Actual

Tu Regenmon es increíble, pero tiene problemas críticos de escalabilidad:

**1. localStorage No Escala:**
- Máximo ~10MB de datos
- Solo en un navegador específico
- No sincroniza entre dispositivos
- Se borra si limpias cookies

**2. Sin Usuarios Separados:**
- Todos comparten el mismo Regenmon
- Sin privacidad ni cuentas individuales

**3. Sin Funciones Multijugador:**
- No puedes ver Regenmon de amigos
- No puedes comparar progreso
- No hay leaderboards o rankings

**¿Por qué? Falta una Base de Datos.**

### Lo Que Viene en Sesión 4

Migrarás de localStorage a **Supabase (base de datos real)**:

🗄️ **Base de Datos en la Nube**
- Datos persistentes para siempre
- Sincronización entre dispositivos
- Capacidad ilimitada de almacenamiento

👥 **Sistema de Autenticación**
- Cada usuario tiene su cuenta
- Login con email o Google
- Datos privados y seguros

🔗 **Funciones Avanzadas**
- Leaderboard global (top 10 Regenmon)
- Compartir tu Regenmon con amigos
- Eventos globales (todos participan)

### Analogía

**Sesión 3**: Juego single-player complejo
**Sesión 4**: Juego online con persistencia real

Es la diferencia entre un juego offline vs un MMO.

### Prerequisitos para Sesión 4

Antes de empezar:
- [ ] Sesión 3 completada con economía funcionando
- [ ] Cuenta de Supabase creada ([Quick Start](./05-quick-start.md))
- [ ] Entendimiento de localStorage (se migrará a Supabase)
- [ ] Familiaridad con APIs (de Sesión 2)

**Tiempo recomendado entre sesiones**: 2-3 días para asimilar game design.

---

## 📖 Recursos de Referencia Rápida

### Balance Cheatsheet

```typescript
// Tiempo objetivo para milestones
const BALANCE_TARGETS = {
  firstShopItem: 10 * 60, // 10 minutos en segundos
  firstEvolution: 30 * 60, // 30 minutos
  maxLevel: 4 * 60 * 60, // 4 horas
};

// Regeneración de energía
const ENERGY_FULL_REGEN_TIME = 10 * 60; // 10 minutos
const ENERGY_REGEN_RATE = 100 / (ENERGY_FULL_REGEN_TIME / 30); // 1 cada 30s

// Economía
const COINS_PER_HOUR = 100;
const SHOP_ITEM_COSTS = {
  cheap: COINS_PER_HOUR * 0.1, // 10 monedas (6 min)
  medium: COINS_PER_HOUR * 0.5, // 50 monedas (30 min)
  expensive: COINS_PER_HOUR * 2, // 200 monedas (2 horas)
};
```

### Fórmulas Útiles

```typescript
// XP necesario por nivel (escalamiento 1.5x)
const xpForLevel = (level: number) => Math.floor(100 * Math.pow(1.5, level - 1));

// Monedas por hora de juego
const coinsPerHour = (coinsPerAction: number, energyCost: number, regenRate: number) => {
  const actionsPerHour = (60 / (energyCost / regenRate));
  return coinsPerAction * actionsPerHour;
};

// Tiempo para objetivo
const timeToGoal = (currentCoins: number, goalCost: number, coinsPerHour: number) => {
  const coinsNeeded = goalCost - currentCoins;
  return (coinsNeeded / coinsPerHour) * 60; // en minutos
};
```

---

## 🎓 Reflexión Final

### Lo Que Aprendiste

Ahora puedes:
- ✅ Diseñar economías de juego balanceadas
- ✅ Implementar sistemas de progresión complejos
- ✅ Crear feedback loops positivos y negativos
- ✅ Balancear dificultad y recompensas
- ✅ Diseñar trade-offs estratégicos

**Esto te pone al nivel de game designers profesionales.**

### Mentalidad de Game Design

Aprendiste que crear juegos adictivos no es accidental - es:
1. **Balance matemático** - Economía con números precisos
2. **Psicología** - Loops que mantienen engagement
3. **Feedback constante** - El jugador siempre sabe qué está pasando
4. **Decisiones significativas** - Escasez crea estrategia

Este conocimiento se aplica a CUALQUIER producto (apps, servicios, negocios).

### Próximos Pasos

1. **Juega tu juego** - Dedica 1 hora a jugar y tomar notas
2. **Ajusta balance** - Usa las fórmulas para optimizar
3. **Comparte** - Pide a amigos que prueben (feedback externo es oro)
4. **Prepara** - Configura Supabase para Sesión 4 ([Quick Start](./05-quick-start.md))

---

**¡Felicidades por completar la Sesión 3!** 🎉

Tu Regenmon pasó de ser un chat simple a un juego complejo con profundidad estratégica.

**Siguiente paso:** [Sesión 4 - Base de Datos →](./09-sesion-4.md)

---

*Última actualización: Febrero 2025*
*Tiempo de lectura: 35 minutos*
*Tiempo de implementación: 3-4 horas*
