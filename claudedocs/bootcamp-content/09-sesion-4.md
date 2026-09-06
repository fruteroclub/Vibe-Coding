# Sesión 4 - Base de Datos y Autenticación 🗄️

> Migra de localStorage a Supabase con autenticación y datos en la nube.

---

## 📋 Tabla de Contenidos

1. [Resumen de la Sesión](#resumen-de-la-sesión)
2. [Prerequisitos](#prerequisitos)
3. [Configuración de Supabase](#configuración-de-supabase)
4. [Prompt Completo para v0](#prompt-completo-para-v0)
5. [Entregable de la Sesión](#entregable-de-la-sesión)
6. [Material de Apoyo](#material-de-apoyo)
7. [Errores Comunes y Soluciones](#errores-comunes-y-soluciones)
8. [Checklist de Validación](#checklist-de-validación)
9. [Puente a Sesión 5](#puente-a-sesión-5)

**Tiempo estimado**: 4-5 horas
**Dificultad**: ⭐⭐⭐ Avanzado
**Prerequisito**: [Sesión 3 completada](./08-sesion-3.md)

---

## 🎯 Resumen de la Sesión

### ¿Qué Aprenderás?

Esta sesión transforma tu juego de single-player a multi-user con base de datos real, autenticación, y funciones avanzadas.

**5 Conceptos Clave:**

1. **Bases de Datos SQL** - PostgreSQL, tablas, relaciones, queries
2. **Autenticación** - Login, registro, sesiones, tokens JWT
3. **Row Level Security (RLS)** - Cada usuario solo ve sus datos
4. **Migraciones** - De localStorage a base de datos sin perder datos
5. **Funciones Avanzadas** - Leaderboards, rankings, eventos globales

### ¿Qué Construirás?

Migrarás tu Regenmon a **arquitectura moderna con base de datos**:
- Sistema de login y registro (email/password o Google)
- Cada usuario tiene su propio Regenmon privado
- Datos persisten para siempre en la nube
- Sincronización entre dispositivos
- Leaderboard global (top 10 Regenmon por nivel)
- Perfil público compartible
- Historial completo de actividades

**Resultado final**: Una aplicación profesional con autenticación real, base de datos escalable, y funciones multi-usuario.

### ¿Por Qué Esta Sesión Es Importante?

> **"localStorage es un cuaderno. Una base de datos es una biblioteca."**

**Antes de Sesión 4**: Datos locales, un solo "usuario", se borran fácilmente
**Después de Sesión 4**: Datos en la nube, multi-usuario, persistencia garantizada

Aprendes la arquitectura que usan apps reales: Netflix, Instagram, cualquier app con login.

---

## 📚 Prerequisitos

### Antes de Empezar

**Técnicos:**
- [ ] Sesión 3 completada (economía y recursos funcionando)
- [ ] Cuenta de Supabase creada ([Quick Start](./05-quick-start.md))
- [ ] Familiaridad con conceptos de bases de datos básicos
- [ ] Entendimiento de APIs (de Sesión 2)

**Conceptuales:**
- ✅ Sabes qué es un usuario y una sesión
- ✅ Entiendes la diferencia entre frontend y backend
- ✅ Conoces el concepto de "tablas" (como Excel)
- ✅ Sabes qué es autenticación (login)

### Conceptos de Bases de Datos

Antes de programar, entiende estos conceptos:

**1. Base de Datos:**
Sistema que almacena datos de forma organizada y permanente.

```
localStorage (antes):
- Solo en tu navegador
- Se borra fácilmente
- Máximo ~10MB

Base de Datos (ahora):
- En servidores remotos
- Permanente y respaldada
- Capacidad ilimitada
```

**2. Tabla:**
Como una hoja de Excel con columnas y filas.

```
Tabla: regenmons
┌────┬────────┬───────┬───────┬──────┬────────────┐
│ id │ name   │ level │ xp    │ coins│ user_id    │
├────┼────────┼───────┼───────┼──────┼────────────┤
│ 1  │ Flamix │ 15    │ 450   │ 200  │ abc123     │
│ 2  │ Aqua   │ 8     │ 120   │ 50   │ def456     │
└────┴────────┴───────┴───────┴──────┴────────────┘
```

**3. Relación:**
Conexión entre tablas.

```
users (1) ←→ (muchos) regenmons
Un usuario puede tener muchos Regenmon
```

**4. Query:**
Pregunta que haces a la base de datos.

```sql
-- Dame todos los Regenmon de nivel > 10
SELECT * FROM regenmons WHERE level > 10;

-- Dame el Regenmon del usuario 'abc123'
SELECT * FROM regenmons WHERE user_id = 'abc123';
```

---

## ⚙️ Configuración de Supabase

### Paso 1: Crear Proyecto

1. Ve a [supabase.com](https://supabase.com)
2. Clic en "New Project"
3. Llena el formulario:
   - **Name**: `regenmon-app`
   - **Database Password**: Genera una segura y **guárdala**
   - **Region**: Elige el más cercano a ti
4. Espera 2-3 minutos mientras se crea

### Paso 2: Obtener Credenciales

1. Ve a **Settings** → **API**
2. Copia estos valores (los necesitarás):
   ```
   Project URL: https://xxxxx.supabase.co
   anon public key: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
   ```

**⚠️ IMPORTANTE**: Guarda estas credenciales en lugar seguro.

### Paso 3: Crear Tablas

1. Ve a **SQL Editor** en el panel izquierdo
2. Clic en **New Query**
3. Pega este SQL:

```sql
-- Tabla de Regenmons
CREATE TABLE regenmons (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users NOT NULL,

  -- Datos básicos
  name TEXT NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('fire', 'water', 'plant', 'normal')),
  level INTEGER DEFAULT 1 CHECK (level >= 1 AND level <= 50),
  xp INTEGER DEFAULT 0 CHECK (xp >= 0),
  happiness INTEGER DEFAULT 100 CHECK (happiness >= 0 AND happiness <= 100),

  -- Recursos (Sesión 3)
  coins INTEGER DEFAULT 100 CHECK (coins >= 0),
  energy INTEGER DEFAULT 100 CHECK (energy >= 0 AND energy <= 100),
  evolution_stage INTEGER DEFAULT 0 CHECK (evolution_stage >= 0 AND evolution_stage <= 2),

  -- Estadísticas
  total_xp_earned INTEGER DEFAULT 0,
  times_trained INTEGER DEFAULT 0,
  times_played INTEGER DEFAULT 0,
  times_fed INTEGER DEFAULT 0,
  messages_sent INTEGER DEFAULT 0,

  -- Logros
  achievements JSONB DEFAULT '[]'::jsonb,

  -- Timestamps
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  last_energy_regen TIMESTAMPTZ DEFAULT NOW()
);

-- Tabla de Historial de Acciones
CREATE TABLE action_history (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  regenmon_id UUID REFERENCES regenmons NOT NULL,
  user_id UUID REFERENCES auth.users NOT NULL,

  action_type TEXT NOT NULL,
  details JSONB DEFAULT '{}'::jsonb,

  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Tabla de Leaderboard (cache)
CREATE TABLE leaderboard (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  regenmon_id UUID REFERENCES regenmons UNIQUE NOT NULL,
  user_id UUID REFERENCES auth.users NOT NULL,

  name TEXT NOT NULL,
  level INTEGER NOT NULL,
  total_xp_earned INTEGER NOT NULL,
  type TEXT NOT NULL,

  rank INTEGER,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Índices para performance
CREATE INDEX idx_regenmons_user_id ON regenmons(user_id);
CREATE INDEX idx_action_history_regenmon ON action_history(regenmon_id);
CREATE INDEX idx_leaderboard_rank ON leaderboard(rank);

-- Trigger para actualizar updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_regenmons_updated_at
  BEFORE UPDATE ON regenmons
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
```

4. Clic en **Run** (abajo a la derecha)
5. Debe mostrar "Success. No rows returned"

### Paso 4: Configurar Row Level Security (RLS)

**¿Qué es RLS?**
Reglas que aseguran que cada usuario solo vea/edite SUS datos.

1. En SQL Editor, nueva query:

```sql
-- Habilitar RLS
ALTER TABLE regenmons ENABLE ROW LEVEL SECURITY;
ALTER TABLE action_history ENABLE ROW LEVEL SECURITY;
ALTER TABLE leaderboard ENABLE ROW LEVEL SECURITY;

-- Política: Usuarios solo ven sus Regenmon
CREATE POLICY "Users can view own regenmons"
  ON regenmons FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own regenmons"
  ON regenmons FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own regenmons"
  ON regenmons FOR UPDATE
  USING (auth.uid() = user_id);

-- Política: Historial privado
CREATE POLICY "Users can view own history"
  ON action_history FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own history"
  ON action_history FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Política: Leaderboard público (todos pueden ver)
CREATE POLICY "Anyone can view leaderboard"
  ON leaderboard FOR SELECT
  TO PUBLIC
  USING (true);

-- Solo usuarios autenticados pueden actualizar su rank
CREATE POLICY "Users can update own leaderboard"
  ON leaderboard FOR UPDATE
  USING (auth.uid() = user_id);
```

2. Run → Success

### Paso 5: Habilitar Autenticación

1. Ve a **Authentication** → **Providers**
2. Habilita **Email**:
   - Toggle ON
   - **Confirm email**: OFF (para desarrollo)
3. *Opcional*: Habilita **Google**:
   - Sigue instrucciones para obtener Client ID/Secret
   - Esto requiere crear proyecto en Google Cloud Console

### Paso 6: Variables de Entorno en Vercel

1. Ve a tu proyecto en Vercel Dashboard
2. **Settings** → **Environment Variables**
3. Agrega:
   ```
   VITE_SUPABASE_URL = https://xxxxx.supabase.co
   VITE_SUPABASE_ANON_KEY = eyJhbGciOiJIUzI1NiIsInR...
   ```
4. **Save** → **Redeploy** el proyecto

---

## 📝 Prompt Completo para v0

### Contexto para el Prompt

Este prompt migra tu aplicación de localStorage a Supabase con autenticación completa.

**IMPORTANTE**: Este es el prompt más complejo del bootcamp. Considera dividirlo en pasos si v0 tiene problemas.

### Prompt Principal

```
Migra mi aplicación Regenmon de localStorage a Supabase con autenticación completa, base de datos PostgreSQL, y funciones multi-usuario.

## INTEGRACIÓN CON CÓDIGO EXISTENTE

Mantener toda la funcionalidad de sesiones anteriores:
- Sistema base: nivel, felicidad, XP (Sesión 1)
- Chat con IA (Sesión 2)
- Economía y recursos: monedas, energía, tienda, evoluciones, logros (Sesión 3)

## NUEVA ARQUITECTURA

### 1. CONFIGURACIÓN DE SUPABASE

Instalar dependencias:
```bash
npm install @supabase/supabase-js
```

Crear cliente de Supabase:
```typescript
// lib/supabase.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
```

---

### 2. SISTEMA DE AUTENTICACIÓN

Implementar flujo completo de auth:

**Pantalla de Login/Registro:**

Interfaz:
- Input de email
- Input de password
- Botón "Iniciar Sesión"
- Botón "Registrarse"
- Botón "Continuar con Google" (opcional)
- Link "¿Olvidaste tu contraseña?"

Lógica de Registro:
```typescript
const handleSignUp = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    showNotification(error.message, 'error');
    return;
  }

  showNotification('¡Cuenta creada! Verifica tu email.', 'success');
};
```

Lógica de Login:
```typescript
const handleSignIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    showNotification('Email o contraseña incorrectos', 'error');
    return;
  }

  // Redirigir a la app
  navigate('/game');
};
```

Login con Google:
```typescript
const handleGoogleSignIn = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: window.location.origin + '/game'
    }
  });

  if (error) {
    showNotification('Error al conectar con Google', 'error');
  }
};
```

Logout:
```typescript
const handleSignOut = async () => {
  await supabase.auth.signOut();
  navigate('/login');
};
```

**Protección de Rutas:**

Verificar sesión antes de mostrar juego:
```typescript
useEffect(() => {
  supabase.auth.getSession().then(({ data: { session } }) => {
    if (!session) {
      navigate('/login');
    } else {
      loadRegenmon(session.user.id);
    }
  });

  // Listener para cambios de auth
  const { data: { subscription } } = supabase.auth.onAuthStateChange(
    (_event, session) => {
      if (!session) {
        navigate('/login');
      }
    }
  );

  return () => subscription.unsubscribe();
}, []);
```

---

### 3. MIGRACIÓN DE DATOS

Reemplazar localStorage con Supabase:

**Cargar Regenmon del Usuario:**
```typescript
const loadRegenmon = async (userId: string) => {
  const { data, error } = await supabase
    .from('regenmons')
    .select('*')
    .eq('user_id', userId)
    .single();

  if (error && error.code === 'PGRST116') {
    // No existe, crear nuevo
    await createNewRegenmon(userId);
    return;
  }

  if (data) {
    // Cargar datos en estado
    setName(data.name);
    setLevel(data.level);
    setXP(data.xp);
    setHappiness(data.happiness);
    setCoins(data.coins);
    setEnergy(data.energy);
    setEvolutionStage(data.evolution_stage);
    setAchievements(data.achievements);
    // ... más stats
  }
};
```

**Crear Nuevo Regenmon:**
```typescript
const createNewRegenmon = async (userId: string) => {
  const { data, error } = await supabase
    .from('regenmons')
    .insert({
      user_id: userId,
      name: 'Nuevo Regenmon',
      type: 'normal',
      level: 1,
      xp: 0,
      happiness: 100,
      coins: 100,
      energy: 100,
    })
    .select()
    .single();

  if (error) {
    showNotification('Error al crear Regenmon', 'error');
    return;
  }

  loadRegenmon(userId);
};
```

**Guardar Cambios:**
```typescript
// Auto-guardar cada vez que cambia algo importante
useEffect(() => {
  if (!regenmonId) return;

  const saveData = async () => {
    const { error } = await supabase
      .from('regenmons')
      .update({
        level,
        xp,
        happiness,
        coins,
        energy,
        evolution_stage: evolutionStage,
        achievements,
        times_trained,
        times_played,
        times_fed,
        messages_sent,
        updated_at: new Date().toISOString(),
      })
      .eq('id', regenmonId);

    if (error) {
      console.error('Error guardando:', error);
    }
  };

  // Debounce para no guardar en cada cambio mínimo
  const timer = setTimeout(saveData, 2000); // 2 segundos
  return () => clearTimeout(timer);
}, [level, xp, happiness, coins, energy, evolutionStage, achievements]);
```

**Migrar Datos Existentes de localStorage:**
```typescript
// Ejecutar UNA VEZ al hacer login por primera vez
const migrateFromLocalStorage = async (userId: string) => {
  const localData = localStorage.getItem('regenmonData');
  if (!localData) return;

  const parsed = JSON.parse(localData);

  // Verificar si ya tiene Regenmon en DB
  const { data: existing } = await supabase
    .from('regenmons')
    .select('id')
    .eq('user_id', userId)
    .single();

  if (existing) {
    // Ya migró antes, no hacer nada
    return;
  }

  // Crear Regenmon con datos de localStorage
  const { error } = await supabase
    .from('regenmons')
    .insert({
      user_id: userId,
      name: parsed.name,
      type: parsed.type || 'normal',
      level: parsed.level,
      xp: parsed.xp,
      happiness: parsed.happiness,
      coins: parsed.coins || 100,
      energy: parsed.energy || 100,
      // ... más campos
    });

  if (!error) {
    // Limpiar localStorage después de migrar
    localStorage.removeItem('regenmonData');
    showNotification('Datos migrados exitosamente! 🎉', 'success');
  }
};
```

---

### 4. FUNCIONES MULTI-USUARIO

**Leaderboard Global:**

UI:
- Modal o página dedicada "🏆 Ranking Global"
- Tabla con: Posición, Nombre, Nivel, XP Total, Tipo
- Botón "Actualizar Ranking"

Lógica:
```typescript
const loadLeaderboard = async () => {
  const { data, error } = await supabase
    .from('leaderboard')
    .select('*')
    .order('level', { ascending: false })
    .order('total_xp_earned', { ascending: false })
    .limit(10);

  if (error) {
    showNotification('Error cargando ranking', 'error');
    return;
  }

  setLeaderboardData(data);
};

// Actualizar ranking del usuario
const updateLeaderboard = async () => {
  const { error } = await supabase
    .from('leaderboard')
    .upsert({
      regenmon_id: regenmonId,
      user_id: userId,
      name,
      level,
      total_xp_earned: totalXPEarned,
      type,
      updated_at: new Date().toISOString(),
    });

  if (!error) {
    showNotification('Ranking actualizado!', 'success');
  }
};
```

**Historial de Actividades:**

Guardar todas las acciones en DB:
```typescript
const logAction = async (actionType: string, details: object) => {
  await supabase
    .from('action_history')
    .insert({
      regenmon_id: regenmonId,
      user_id: userId,
      action_type: actionType,
      details,
    });
};

// Uso
const performAction = async (action: string) => {
  // ... lógica de la acción

  // Registrar en historial
  await logAction(action, {
    coins_gained: REWARDS[action].coins,
    xp_gained: REWARDS[action].xp,
    energy_spent: COSTS[action].energy,
  });
};
```

Mostrar historial:
```typescript
const loadHistory = async () => {
  const { data } = await supabase
    .from('action_history')
    .select('*')
    .eq('regenmon_id', regenmonId)
    .order('created_at', { ascending: false })
    .limit(20);

  setHistory(data);
};
```

**Perfil Público:**

URL compartible: `/profile/:userId`

```typescript
const loadPublicProfile = async (userId: string) => {
  const { data } = await supabase
    .from('regenmons')
    .select('name, level, type, evolution_stage, total_xp_earned, created_at')
    .eq('user_id', userId)
    .single();

  // Mostrar stats públicas (NO monedas, energía, logros privados)
  setPublicProfile(data);
};
```

---

### 5. VALIDACIONES Y SEGURIDAD

**Validación de Inputs:**
```typescript
const validateEmail = (email: string): boolean => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

const validatePassword = (password: string): string | null => {
  if (password.length < 6) return 'Mínimo 6 caracteres';
  if (!/\d/.test(password)) return 'Debe contener al menos un número';
  return null; // válida
};
```

**Manejo de Errores de Supabase:**
```typescript
const handleSupabaseError = (error: any) => {
  if (error.code === 'PGRST116') {
    return 'Registro no encontrado';
  }
  if (error.code === '23505') {
    return 'Email ya registrado';
  }
  if (error.message.includes('JWT')) {
    return 'Sesión expirada. Inicia sesión de nuevo.';
  }
  return error.message || 'Error desconocido';
};
```

**Rate Limiting (Prevenir Spam):**
```typescript
const lastActionTime = useRef(0);

const performActionWithRateLimit = async (action: string) => {
  const now = Date.now();
  if (now - lastActionTime.current < 1000) {
    showNotification('Espera 1 segundo', 'warning');
    return;
  }

  lastActionTime.current = now;
  await performAction(action);
};
```

---

## ESPECIFICACIONES TÉCNICAS

### Estructura de Tablas (Resumen)

**regenmons:**
- Datos del Regenmon de cada usuario
- Relación: 1 usuario → muchos Regenmon (futuro)
- RLS: Solo dueño puede ver/editar

**action_history:**
- Log de todas las acciones
- Para analytics y debugging
- RLS: Solo dueño puede ver

**leaderboard:**
- Cache del ranking global
- Actualizado por usuarios
- RLS: Todos pueden ver, solo dueño edita su entrada

### Variables de Entorno

```env
# .env.local
VITE_SUPABASE_URL=https://xxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### Tipos TypeScript

```typescript
interface RegenmonData {
  id: string;
  user_id: string;
  name: string;
  type: 'fire' | 'water' | 'plant' | 'normal';
  level: number;
  xp: number;
  happiness: number;
  coins: number;
  energy: number;
  evolution_stage: number;
  total_xp_earned: number;
  times_trained: number;
  times_played: number;
  times_fed: number;
  messages_sent: number;
  achievements: string[];
  created_at: string;
  updated_at: string;
  last_energy_regen: string;
}

interface LeaderboardEntry {
  rank: number;
  name: string;
  level: number;
  total_xp_earned: number;
  type: string;
}
```

---

## INTERFAZ Y DISEÑO

### Pantalla de Login

```
┌──────────────────────────────────┐
│   🥚 Regenmon                    │
│   Inicia Sesión                  │
│                                  │
│   Email:                         │
│   [_____________________]        │
│                                  │
│   Contraseña:                    │
│   [_____________________]        │
│                                  │
│   [  Iniciar Sesión  ]           │
│   [ Registrarse ]                │
│                                  │
│   --- o continúa con ---         │
│   [    🔗 Google     ]           │
│                                  │
│   ¿Olvidaste tu contraseña?      │
└──────────────────────────────────┘
```

### Pantalla Principal (Con Auth)

```
┌──────────────────────────────────┐
│ Header:                          │
│ [Logo] Regenmon  [User] [Logout] │
├──────────────────────────────────┤
│ [Tabs]                           │
│ Mi Regenmon | Ranking | Perfil   │
├──────────────────────────────────┤
│                                  │
│ [Contenido según tab]            │
│                                  │
└──────────────────────────────────┘
```

---

## VALIDACIONES Y LÓGICA

### Flujo de Autenticación

```
Usuario no autenticado → /login
  ↓
Login exitoso → Verificar sesión
  ↓
Cargar Regenmon de DB → Si no existe, crear nuevo
  ↓
Mostrar juego → Auto-guardar cambios cada 2s
  ↓
Logout → Limpiar sesión → Volver a /login
```

### Sincronización de Datos

```typescript
// Estrategia: Optimistic UI + Auto-save

// 1. Usuario hace acción
const handleTrain = () => {
  // Actualizar UI inmediatamente (optimistic)
  setXP(prev => prev + 20);
  setEnergy(prev => prev - 15);

  // Guardar en background (no bloquear UI)
  saveToSupabase({ xp: xp + 20, energy: energy - 15 });
};

// 2. Si falla guardar, revertir o reintentar
const saveToSupabase = async (updates: Partial<RegenmonData>) => {
  const { error } = await supabase
    .from('regenmons')
    .update(updates)
    .eq('id', regenmonId);

  if (error) {
    // Opción A: Reintentar
    setTimeout(() => saveToSupabase(updates), 5000);

    // Opción B: Notificar usuario
    showNotification('No se guardó. Revisa tu conexión.', 'warning');
  }
};
```

---

Asegúrate de que:
- El código maneje todos los casos de error
- La autenticación sea segura (nunca exponer secrets)
- RLS esté habilitado en todas las tablas
- La migración de localStorage funcione sin perder datos
- El leaderboard se actualice correctamente
- La UI muestre estados de loading/error claramente
```

### Prompt Simplificado (Paso a Paso)

Si el prompt completo es muy complejo, divide en fases:

**Fase 1: Solo Autenticación**
```
Agrega sistema de login/registro con Supabase:
- Pantalla de login con email/password
- Botón de registro
- Protección de rutas (solo usuarios logueados acceden al juego)
- Botón de logout

NO migres datos todavía, solo implementa autenticación.
```

**Fase 2: Crear Tabla y Cargar Datos (Después de Fase 1)**
```
Conecta con la tabla 'regenmons' en Supabase:
- Al hacer login, buscar Regenmon del usuario
- Si no existe, crear uno nuevo con valores por defecto
- Cargar datos en el estado de React
- Mostrar nombre, nivel, XP del Regenmon cargado de DB
```

**Fase 3: Guardar Cambios (Después de Fase 2)**
```
Implementa auto-guardado:
- Cada vez que cambia nivel, XP, felicidad, etc., guardar en Supabase
- Usar debounce de 2 segundos (no guardar en cada cambio)
- Mostrar indicador de "Guardando..." mientras se guarda
```

**Fase 4: Leaderboard (Después de Fase 3)**
```
Agrega ranking global:
- Modal "🏆 Ranking" que muestra top 10 Regenmon por nivel
- Botón "Actualizar mi ranking" que sube los datos del usuario
- Tabla con: posición, nombre, nivel, tipo
```

---

## 📦 Entregable de la Sesión

### Criterios de Éxito

Tu proyecto debe cumplir con:

**Funcionalidad Mínima Viable (MVP):**
- [ ] Sistema de registro funcionando (email + password)
- [ ] Sistema de login funcionando
- [ ] Protección de rutas (no puedes acceder sin login)
- [ ] Cada usuario tiene su propio Regenmon en la base de datos
- [ ] Datos se guardan automáticamente en Supabase
- [ ] Datos persisten después de logout/login
- [ ] Leaderboard muestra top 10 Regenmon
- [ ] Botón de logout funcional
- [ ] Migración de localStorage funciona (no pierdes datos al migrar)

**Seguridad Básica:**
- [ ] Row Level Security (RLS) habilitado en todas las tablas
- [ ] Cada usuario solo ve sus datos
- [ ] Credenciales de Supabase en variables de entorno
- [ ] Validación de email y password en frontend

**Calidad Básica:**
- [ ] Estados de loading visibles (al cargar datos, al guardar)
- [ ] Errores de autenticación se muestran claramente
- [ ] No hay errores en consola
- [ ] La app funciona sin conexión (muestra mensaje adecuado)

**Deseable (No Obligatorio):**
- [ ] Login con Google funcionando
- [ ] Recuperación de contraseña (email reset)
- [ ] Historial de actividades visible
- [ ] Perfil público compartible
- [ ] Animaciones en transiciones de pantalla

### Formato de Entrega

Para validar tu proyecto, proporciona:

1. **URL de producción** - `tu-proyecto.vercel.app` con login funcionando
2. **Credenciales de prueba** - Email y password de una cuenta de test
3. **Captura de pantalla** - Dashboard de Supabase mostrando tabla con datos
4. **Test de multi-usuario**:
   - Crea 2 cuentas diferentes
   - Cada una debe tener su propio Regenmon
   - Verifica que no ves datos del otro usuario
5. **Test de persistencia**:
   - Haz cambios (entrena, gana monedas)
   - Logout
   - Login de nuevo
   - Cambios deben persistir

### Rúbrica de Evaluación

| Criterio | Puntos | Descripción |
|----------|--------|-------------|
| **Autenticación** | 25 pts | Login, registro, y logout funcionan correctamente |
| **Persistencia** | 25 pts | Datos se guardan y cargan desde Supabase |
| **Seguridad (RLS)** | 20 pts | Cada usuario solo ve sus datos |
| **Migración** | 15 pts | Datos de localStorage migran sin pérdida |
| **Leaderboard** | 10 pts | Ranking global funcional |
| **UX de Auth** | 5 pts | Estados de loading/error claros |

**Total**: 100 puntos
**Aprobado**: 70+ puntos

---

## 📚 Material de Apoyo

### Conceptos de Bases de Datos Explicados

#### 1. SQL y PostgreSQL

**¿Qué es SQL?**
Structured Query Language - Lenguaje para hablar con bases de datos.

**Operaciones Básicas:**
```sql
-- CREATE: Crear tabla
CREATE TABLE users (
  id UUID PRIMARY KEY,
  email TEXT UNIQUE NOT NULL
);

-- INSERT: Agregar dato
INSERT INTO users (id, email) VALUES ('abc123', 'user@example.com');

-- SELECT: Leer datos
SELECT * FROM users WHERE email = 'user@example.com';

-- UPDATE: Actualizar dato
UPDATE users SET email = 'new@example.com' WHERE id = 'abc123';

-- DELETE: Borrar dato
DELETE FROM users WHERE id = 'abc123';
```

**Por qué PostgreSQL:**
- Open source y gratis
- Muy confiable y rápido
- Usado por empresas grandes (Instagram, Spotify)
- Supabase lo usa por defecto

---

#### 2. Row Level Security (RLS)

**¿Qué es?**
Reglas que controlan quién puede ver/editar cada fila de la tabla.

**Sin RLS:**
```sql
SELECT * FROM regenmons;
-- Retorna TODOS los Regenmon de todos los usuarios ❌
```

**Con RLS:**
```sql
-- Política RLS
CREATE POLICY "Users see only their regenmons"
  ON regenmons
  FOR SELECT
  USING (auth.uid() = user_id);

-- Ahora SELECT solo retorna TUS regenmon ✅
SELECT * FROM regenmons;
```

**Cómo Funciona:**
```
Usuario A hace query → Supabase verifica auth.uid()
→ Si auth.uid() = 'abc123', solo ve filas donde user_id = 'abc123'
→ Automático, no puedes bypassear
```

**Políticas Comunes:**
```sql
-- Ver solo tus datos
USING (auth.uid() = user_id)

-- Editar solo tus datos
USING (auth.uid() = user_id)

-- Todos pueden ver (público)
USING (true)

-- Solo admin puede ver
USING (auth.jwt() ->> 'role' = 'admin')
```

---

#### 3. JWT (JSON Web Tokens)

**¿Qué es?**
"Pase" encriptado que prueba que estás autenticado.

**Estructura:**
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9. ← Header
eyJ1c2VyX2lkIjoiYWJjMTIzIiwicm9sZSI6InVzZXIifQ. ← Payload (datos)
SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c ← Signature (verificación)
```

**Cómo Funciona:**
```
1. Login exitoso → Supabase genera JWT
2. Frontend guarda JWT en localStorage
3. Cada request incluye JWT en header
4. Supabase verifica JWT y permite/niega acceso
```

**En Supabase:**
```typescript
// Login genera JWT automáticamente
const { data } = await supabase.auth.signInWithPassword({
  email, password
});

// JWT se guarda automáticamente
// Todas las queries usan JWT automáticamente
```

**Expiración:**
- JWT expira después de 1 hora (por defecto)
- Supabase renueva automáticamente (refresh token)
- Si expira y no se renueva → usuario debe hacer login de nuevo

---

#### 4. Relaciones Entre Tablas

**Tipos de Relaciones:**

**1. Uno a Uno (1:1):**
```
users ←→ profiles
Un usuario tiene un perfil
```

**2. Uno a Muchos (1:N):**
```
users (1) ←→ (muchos) regenmons
Un usuario tiene muchos Regenmon
```

**3. Muchos a Muchos (N:M):**
```
regenmons ←→ battles ←→ regenmons
Muchos Regenmon pueden pelear con muchos otros
```

**En SQL:**
```sql
-- Relación 1:N con Foreign Key
CREATE TABLE regenmons (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES auth.users NOT NULL
);

-- Al hacer query, puedes "joinear"
SELECT
  regenmons.*,
  auth.users.email
FROM regenmons
JOIN auth.users ON regenmons.user_id = auth.users.id;
```

**En Supabase JavaScript:**
```typescript
// Sin join
const { data } = await supabase
  .from('regenmons')
  .select('*');

// Con join (incluye datos de usuario)
const { data } = await supabase
  .from('regenmons')
  .select('*, users(email)');
```

---

#### 5. Índices y Performance

**¿Qué es un Índice?**
Como un índice de libro - ayuda a encontrar datos rápido.

**Sin Índice:**
```
Query: SELECT * FROM regenmons WHERE user_id = 'abc123';
→ Base de datos revisa TODAS las filas (lento si hay millones)
```

**Con Índice:**
```
Query: SELECT * FROM regenmons WHERE user_id = 'abc123';
→ Base de datos usa índice: salta directo a las filas correctas (rápido)
```

**Crear Índices:**
```sql
-- Índice en user_id (común para queries)
CREATE INDEX idx_regenmons_user_id ON regenmons(user_id);

-- Índice compuesto (múltiples columnas)
CREATE INDEX idx_leaderboard_rank ON leaderboard(level DESC, xp DESC);
```

**Cuándo Crear Índices:**
- Columnas que usas en WHERE frecuentemente
- Columnas que usas en ORDER BY
- Foreign keys (user_id, regenmon_id, etc.)

**Cuándo NO:**
- Tablas muy pequeñas (<1000 filas)
- Columnas que casi nunca consultas
- Índices consumen espacio y hacen INSERT más lento

---

### Migración de localStorage a Supabase

**Estrategia Paso a Paso:**

**1. Dual Write (Temporalmente escribir en ambos):**
```typescript
const saveData = async (data: RegenmonData) => {
  // Guardar en localStorage (old)
  localStorage.setItem('regenmonData', JSON.stringify(data));

  // Guardar en Supabase (new)
  await supabase
    .from('regenmons')
    .update(data)
    .eq('id', regenmonId);
};
```

**2. Migración One-Time:**
```typescript
const migrateToSupabase = async () => {
  // 1. Leer de localStorage
  const localData = localStorage.getItem('regenmonData');
  if (!localData) return;

  const parsed = JSON.parse(localData);

  // 2. Verificar si ya migró
  const { data: existing } = await supabase
    .from('regenmons')
    .select('id')
    .eq('user_id', userId)
    .single();

  if (existing) {
    console.log('Ya migrado antes');
    return;
  }

  // 3. Insertar en Supabase
  const { error } = await supabase
    .from('regenmons')
    .insert({
      user_id: userId,
      ...parsed
    });

  if (!error) {
    // 4. Limpiar localStorage
    localStorage.removeItem('regenmonData');
    showNotification('Migración exitosa! 🎉', 'success');
  }
};
```

**3. Read From Supabase Only:**
```typescript
const loadData = async () => {
  // Leer SOLO de Supabase (no localStorage)
  const { data } = await supabase
    .from('regenmons')
    .select('*')
    .eq('user_id', userId)
    .single();

  if (data) {
    setRegenmonData(data);
  }
};
```

---

### Autenticación Avanzada

**Password Reset (Recuperar Contraseña):**

```typescript
// 1. Usuario pide reset
const handlePasswordReset = async (email: string) => {
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: window.location.origin + '/reset-password'
  });

  if (!error) {
    showNotification('Email enviado. Revisa tu bandeja.', 'success');
  }
};

// 2. Usuario hace clic en link del email → redirige a /reset-password

// 3. En página /reset-password:
const handleUpdatePassword = async (newPassword: string) => {
  const { error } = await supabase.auth.updateUser({
    password: newPassword
  });

  if (!error) {
    showNotification('Contraseña actualizada!', 'success');
    navigate('/game');
  }
};
```

**Verificación de Email:**

```typescript
// Habilitar en Supabase Dashboard:
// Authentication → Settings → "Confirm email" = ON

// Al registrarse, Supabase envía email automáticamente
const { data, error } = await supabase.auth.signUp({
  email,
  password
});

// Usuario no puede hacer login hasta verificar email
```

**Roles y Permisos:**

```sql
-- Agregar campo role en tabla users
ALTER TABLE auth.users ADD COLUMN role TEXT DEFAULT 'user';

-- Política para admin
CREATE POLICY "Admins can see all regenmons"
  ON regenmons
  FOR SELECT
  USING (
    auth.jwt() ->> 'role' = 'admin'
    OR auth.uid() = user_id
  );
```

```typescript
// En frontend, verificar role
const { data: { user } } = await supabase.auth.getUser();
const isAdmin = user?.user_metadata?.role === 'admin';

{isAdmin && (
  <button onClick={viewAllRegenmons}>Ver todos (Admin)</button>
)}
```

---

### Recursos Adicionales

#### Documentación Oficial

- [Supabase Docs](https://supabase.com/docs) - Documentación completa
- [Supabase Auth](https://supabase.com/docs/guides/auth) - Guía de autenticación
- [PostgreSQL Tutorial](https://www.postgresqltutorial.com/) - Aprende SQL
- [Row Level Security](https://supabase.com/docs/guides/auth/row-level-security) - RLS en detalle

#### Videos Tutorial

- [Supabase Crash Course](https://youtube.com/results?search_query=supabase+crash+course) - Tutorial completo
- [React + Supabase Auth](https://youtube.com/results?search_query=react+supabase+authentication) - Autenticación paso a paso
- [PostgreSQL for Beginners](https://youtube.com/results?search_query=postgresql+for+beginners) - Fundamentos de SQL

#### Herramientas Útiles

- [Supabase Studio](https://supabase.com/docs/guides/platform/studio) - Dashboard visual
- [pgAdmin](https://www.pgadmin.org/) - Cliente de PostgreSQL
- [JWT.io](https://jwt.io/) - Decodifica y valida JWT
- [SQL Fiddle](http://sqlfiddle.com/) - Practica SQL en navegador

---

## 🔧 Errores Comunes y Soluciones

### Error 1: RLS Bloquea Todo ("No rows returned")

**Síntomas:**
- Queries retornan vacío aunque sabes que hay datos
- Error: "No rows returned"
- Funciona en SQL Editor pero no en app

**Causa:**
RLS está habilitado pero no hay políticas, o las políticas son muy restrictivas.

**Solución:**

```sql
-- 1. Verificar si RLS está habilitado
SELECT tablename, rowsecurity
FROM pg_tables
WHERE schemaname = 'public';

-- 2. Ver políticas existentes
SELECT * FROM pg_policies WHERE tablename = 'regenmons';

-- 3. Si no hay políticas, crearlas
CREATE POLICY "Users can view own regenmons"
  ON regenmons FOR SELECT
  USING (auth.uid() = user_id);

-- 4. Si políticas están mal, eliminar y recrear
DROP POLICY "nombre_de_politica" ON regenmons;
```

**Debug:**
```typescript
// Ver qué usuario está autenticado
const { data: { user } } = await supabase.auth.getUser();
console.log('User ID:', user?.id);

// Ver qué retorna la query
const { data, error } = await supabase
  .from('regenmons')
  .select('*');
console.log('Data:', data, 'Error:', error);
```

---

### Error 2: "JWT expired" o Sesión Expira Constantemente

**Síntomas:**
- Usuario debe hacer login cada vez que recarga
- Error: "JWT expired"
- Sesión se pierde aleatoriamente

**Causa:**
JWT expira y no se está renovando correctamente.

**Solución:**

```typescript
// 1. Listener para renovar sesión automáticamente
useEffect(() => {
  const { data: { subscription } } = supabase.auth.onAuthStateChange(
    async (event, session) => {
      if (event === 'TOKEN_REFRESHED') {
        console.log('Token renovado');
      }
      if (event === 'SIGNED_OUT') {
        navigate('/login');
      }
    }
  );

  return () => subscription.unsubscribe();
}, []);

// 2. Verificar que persistSession está habilitado
const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: true, // ← IMPORTANTE
    autoRefreshToken: true,
  }
});
```

**Validación:**
```typescript
// Ver cuándo expira el token
const { data: { session } } = await supabase.auth.getSession();
console.log('Expira:', new Date(session.expires_at * 1000));
```

---

### Error 3: Usuario No Puede Ver Sus Propios Datos

**Síntomas:**
- Creas Regenmon pero no aparece
- Query retorna vacío aunque acabas de insertar
- En Supabase Studio SÍ ves los datos

**Causa:**
`user_id` en la fila no coincide con `auth.uid()`.

**Solución:**

```typescript
// 1. Verificar user_id al insertar
const { data: { user } } = await supabase.auth.getUser();
console.log('Insertando con user_id:', user.id);

const { error } = await supabase
  .from('regenmons')
  .insert({
    user_id: user.id, // ← Asegúrate que sea correcto
    name: 'Flamix',
    // ... otros campos
  });

// 2. Verificar user_id después de insertar
const { data } = await supabase
  .from('regenmons')
  .select('user_id')
  .eq('name', 'Flamix');
console.log('User ID en DB:', data[0].user_id);
console.log('Auth user ID:', user.id);
// Deben ser iguales
```

**Debug en SQL Editor:**
```sql
-- Ver user_id de todas las filas
SELECT id, name, user_id FROM regenmons;

-- Ver tu user_id actual
SELECT auth.uid();

-- Deben coincidir para que RLS funcione
```

---

### Error 4: "anon key" vs "service_role key" Confusión

**Síntomas:**
- En desarrollo funciona, en producción falla
- Error: "Insufficient permissions"
- No sabes qué key usar

**Explicación:**

**anon key (pública):**
- Usar en frontend
- Respeta RLS
- Segura para exponer
- Usuarios solo ven sus datos

**service_role key (privada):**
- Usar SOLO en backend
- BYPASEA RLS (acceso total)
- NUNCA expongas en frontend
- Solo para admin/scripts internos

**Solución:**

```typescript
// ✅ Frontend - usar anon key
const supabase = createClient(
  VITE_SUPABASE_URL,
  VITE_SUPABASE_ANON_KEY // ← anon key (pública)
);

// ❌ NUNCA hagas esto en frontend
const supabase = createClient(
  url,
  SERVICE_ROLE_KEY // ← PELIGRO: acceso total
);
```

---

### Error 5: Migración Duplica Datos

**Síntomas:**
- Datos de localStorage se insertan múltiples veces
- Usuario tiene 2+ Regenmon idénticos
- Migración se ejecuta cada vez que hace login

**Causa:**
No verificas si ya migró antes de insertar.

**Solución:**

```typescript
const migrateFromLocalStorage = async (userId: string) => {
  const localData = localStorage.getItem('regenmonData');
  if (!localData) return;

  // ✅ Verificar si ya tiene Regenmon en DB
  const { data: existing } = await supabase
    .from('regenmons')
    .select('id')
    .eq('user_id', userId)
    .single();

  if (existing) {
    // Ya migró antes, limpiar localStorage y salir
    localStorage.removeItem('regenmonData');
    return;
  }

  // Ahora sí insertar
  const parsed = JSON.parse(localData);
  await supabase.from('regenmons').insert({ user_id: userId, ...parsed });
  localStorage.removeItem('regenmonData');
};
```

---

### Error 6: Leaderboard No Actualiza

**Síntomas:**
- Subes de nivel pero ranking no cambia
- Otros usuarios ven tu nivel antiguo
- "Actualizar Ranking" no hace nada

**Causa:**
No estás usando `upsert` correctamente o falta índice único.

**Solución:**

```sql
-- 1. Asegúrate que tabla tenga UNIQUE constraint
ALTER TABLE leaderboard
ADD CONSTRAINT leaderboard_regenmon_unique UNIQUE (regenmon_id);

-- 2. Crear índice para performance
CREATE INDEX idx_leaderboard_rank ON leaderboard(level DESC, total_xp_earned DESC);
```

```typescript
// 3. Usar upsert (INSERT o UPDATE según existe)
const updateLeaderboard = async () => {
  const { error } = await supabase
    .from('leaderboard')
    .upsert({
      regenmon_id: regenmonId, // ← UNIQUE key
      user_id: userId,
      name,
      level,
      total_xp_earned: totalXPEarned,
      type,
      updated_at: new Date().toISOString()
    }, {
      onConflict: 'regenmon_id' // ← Si existe, UPDATE; si no, INSERT
    });

  if (!error) {
    showNotification('Ranking actualizado!', 'success');
  }
};
```

---

### Error 7: Auto-Guardado Muy Lento o No Funciona

**Síntomas:**
- Cambios tardan mucho en guardarse
- Pierdes datos si cierras rápido después de cambiar algo
- No hay indicador de guardado

**Causa:**
Guardado sincrónico sin debounce o falta optimistic UI.

**Solución:**

```typescript
// 1. Debounce para no guardar en cada cambio
import { useDebounce } from 'use-debounce';

const [level, setLevel] = useState(1);
const [debouncedLevel] = useDebounce(level, 2000); // 2 segundos

useEffect(() => {
  if (!regenmonId) return;

  // Solo guarda cuando debouncedLevel cambia (después de 2s sin cambios)
  const saveData = async () => {
    setSaving(true);

    const { error } = await supabase
      .from('regenmons')
      .update({ level: debouncedLevel })
      .eq('id', regenmonId);

    setSaving(false);

    if (error) {
      showNotification('Error guardando', 'error');
    }
  };

  saveData();
}, [debouncedLevel, regenmonId]);

// 2. Indicador visual
{saving && <span className="text-gray-400">Guardando...</span>}
{!saving && <span className="text-green-400">✓ Guardado</span>}
```

---

### Error 8: Login con Google No Funciona

**Síntomas:**
- Botón "Continuar con Google" no hace nada
- Redirige a Google pero luego falla
- Error: "Invalid OAuth configuration"

**Causa:**
Configuración incorrecta en Google Cloud Console o Supabase.

**Solución:**

**1. En Google Cloud Console:**
```
1. Ve a console.cloud.google.com
2. Crea proyecto nuevo
3. APIs & Services → OAuth consent screen
   - User Type: External
   - Llena información básica
4. APIs & Services → Credentials → Create Credentials → OAuth Client ID
   - Application type: Web application
   - Authorized redirect URIs: https://xxxxx.supabase.co/auth/v1/callback
5. Copia Client ID y Client Secret
```

**2. En Supabase Dashboard:**
```
1. Authentication → Providers → Google
2. Enable = ON
3. Pega Client ID y Client Secret
4. Save
```

**3. En tu app:**
```typescript
const handleGoogleSignIn = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${window.location.origin}/game`,
      queryParams: {
        access_type: 'offline',
        prompt: 'consent',
      }
    }
  });

  if (error) {
    console.error('Google OAuth error:', error);
  }
};
```

---

### Error 9: Foreign Key Violation

**Síntomas:**
- Error: "violates foreign key constraint"
- No puedes insertar en tabla
- Código: `23503`

**Causa:**
Intentas insertar `user_id` que no existe en tabla `auth.users`.

**Solución:**

```typescript
// 1. Verificar que usuario está autenticado
const { data: { user }, error } = await supabase.auth.getUser();

if (!user) {
  showNotification('Debes estar logueado', 'error');
  return;
}

// 2. Usar user.id (NO user.email u otro campo)
const { error: insertError } = await supabase
  .from('regenmons')
  .insert({
    user_id: user.id, // ← user.id existe en auth.users
    name: 'Flamix'
  });

// 3. Si persiste, verificar en SQL
```

```sql
-- Ver user IDs en auth.users
SELECT id, email FROM auth.users;

-- Verificar foreign key constraint
SELECT
  tc.constraint_name,
  tc.table_name,
  kcu.column_name,
  ccu.table_name AS foreign_table_name,
  ccu.column_name AS foreign_column_name
FROM information_schema.table_constraints AS tc
JOIN information_schema.key_column_usage AS kcu
  ON tc.constraint_name = kcu.constraint_name
JOIN information_schema.constraint_column_usage AS ccu
  ON ccu.constraint_name = tc.constraint_name
WHERE tc.constraint_type = 'FOREIGN KEY'
  AND tc.table_name = 'regenmons';
```

---

### Debugging General de Supabase

**Herramientas:**

**1. Supabase Logs:**
```
Dashboard → Logs → API Logs
- Ve todos los requests en tiempo real
- Muestra errores con detalles
- Filter por tabla, usuario, error
```

**2. SQL Editor:**
```
Dashboard → SQL Editor
- Ejecuta queries directamente
- Verifica datos manualmente
- Testea políticas RLS
```

**3. Console.log Estratégico:**
```typescript
// Log TODAS las operaciones de Supabase
const supabase = createClient(url, key, {
  auth: {
    debug: true // Muestra logs en consola
  }
});

// Log manual
const { data, error } = await supabase.from('regenmons').select('*');
console.group('Supabase Query');
console.log('Data:', data);
console.log('Error:', error);
console.log('Count:', data?.length);
console.groupEnd();
```

**4. Network Tab:**
```
DevTools (F12) → Network → Filter: supabase
- Ve requests HTTP a Supabase
- Verifica headers (Authorization: Bearer ...)
- Ve response bodies
```

---

## ✅ Checklist de Validación

### Funcionalidad Core
- [ ] Puedo registrarme con email y password
- [ ] Puedo hacer login con credenciales correctas
- [ ] No puedo acceder al juego sin estar logueado
- [ ] Al hacer login, carga mi Regenmon de la base de datos
- [ ] Si no tengo Regenmon, se crea uno automáticamente
- [ ] Cambios se guardan automáticamente en Supabase
- [ ] Puedo hacer logout correctamente
- [ ] Después de logout y login, mis datos persisten

### Seguridad y Multi-Usuario
- [ ] RLS está habilitado en todas las tablas
- [ ] Cada usuario solo ve sus propios datos
- [ ] No puedo ver Regenmon de otros usuarios
- [ ] Credenciales de Supabase en variables de entorno (no en código)
- [ ] No hay service_role key en frontend

### Migración
- [ ] Datos de localStorage migran correctamente
- [ ] Migración no duplica datos
- [ ] localStorage se limpia después de migrar
- [ ] Si ya migré antes, no intenta migrar de nuevo

### Leaderboard y Social
- [ ] Leaderboard muestra top 10 Regenmon
- [ ] Mi ranking se actualiza al hacer clic en "Actualizar"
- [ ] Veo el ranking de otros usuarios correctamente
- [ ] Ranking se ordena por nivel y XP correctamente

### UX/UI
- [ ] Estados de loading visibles (al cargar, al guardar)
- [ ] Errores de login se muestran claramente
- [ ] Indicador de "Guardando..." cuando se guarda
- [ ] Sin conexión muestra mensaje apropiado
- [ ] No hay errores en consola del navegador

### Test Multi-Usuario
- [ ] Creo cuenta A, tiene Regenmon A
- [ ] Creo cuenta B, tiene Regenmon B distinto
- [ ] Cuenta A no ve Regenmon de cuenta B
- [ ] Ambos pueden aparecer en leaderboard
- [ ] Cambios en cuenta A no afectan cuenta B

**¿Todos marcados?** 🎉 ¡Completaste la Sesión 4!

---

## 🔗 Puente a Sesión 5

### Lo Que Lograste

Ahora tienes:
- ✅ Aplicación multi-usuario con autenticación real
- ✅ Base de datos en la nube con persistencia garantizada
- ✅ Seguridad a nivel empresarial (RLS)
- ✅ Funciones sociales (leaderboard, perfiles)
- ✅ Arquitectura escalable (puede crecer a millones de usuarios)

### La Única Limitación Que Queda

Tu Regenmon funciona perfectamente, pero:

**1. El Diseño Es Básico:**
- UI funcional pero no pulida
- Sin animaciones avanzadas
- Falta "juice" visual

**2. Experiencia de Usuario Mejorable:**
- Transiciones abruptas
- Sin micro-interacciones
- Falta feedback táctil

**3. No Se Siente "Profesional":**
- Parece prototipo, no producto final
- Sin branding coherente
- Falta personalidad visual

**¿Por qué? Falta UI/UX Polish.**

### Lo Que Viene en Sesión 5

Transformarás tu app en un **producto visual y profesional**:

🎨 **Diseño Avanzado**
- Sistema de diseño coherente
- Paleta de colores profesional
- Tipografía cuidada

✨ **Animaciones y Microinteracciones**
- Transiciones suaves
- Efectos hover deliciosos
- Feedback visual constante

🎯 **UX Optimizado**
- Flujos claros y directos
- Menos fricción en acciones
- Onboarding para nuevos usuarios

### Analogía

**Sesión 4**: Casa con estructura sólida (base de datos, autenticación)
**Sesión 5**: Casa decorada y amueblada (UI/UX profesional)

Es la diferencia entre una app que funciona vs una app que ENCANTA.

### Prerequisitos para Sesión 5

Antes de empezar:
- [ ] Sesión 4 completada con autenticación funcionando
- [ ] Familiaridad con CSS y diseño básico
- [ ] Ganas de hacer tu app verse increíble

**Tiempo recomendado entre sesiones**: 1-2 días para asimilar bases de datos.

---

## 📖 Recursos de Referencia Rápida

### SQL Cheatsheet

```sql
-- Crear tabla
CREATE TABLE nombre (
  id UUID PRIMARY KEY,
  columna1 TEXT NOT NULL,
  columna2 INTEGER DEFAULT 0
);

-- Insertar
INSERT INTO nombre (columna1, columna2) VALUES ('valor', 123);

-- Leer
SELECT * FROM nombre WHERE columna1 = 'valor';

-- Actualizar
UPDATE nombre SET columna2 = 456 WHERE id = 'uuid';

-- Borrar
DELETE FROM nombre WHERE id = 'uuid';

-- Join
SELECT a.*, b.columna FROM tabla_a a
JOIN tabla_b b ON a.id = b.tabla_a_id;
```

### Supabase JavaScript Cheatsheet

```typescript
// Crear cliente
import { createClient } from '@supabase/supabase-js';
const supabase = createClient(URL, KEY);

// Auth - Registro
await supabase.auth.signUp({ email, password });

// Auth - Login
await supabase.auth.signInWithPassword({ email, password });

// Auth - Logout
await supabase.auth.signOut();

// Auth - Usuario actual
const { data: { user } } = await supabase.auth.getUser();

// DB - Leer
const { data, error } = await supabase
  .from('tabla')
  .select('*')
  .eq('columna', 'valor');

// DB - Insertar
await supabase.from('tabla').insert({ columna: 'valor' });

// DB - Actualizar
await supabase.from('tabla').update({ columna: 'nuevo' }).eq('id', 'uuid');

// DB - Borrar
await supabase.from('tabla').delete().eq('id', 'uuid');

// DB - Upsert (INSERT o UPDATE)
await supabase.from('tabla').upsert({ id: 'uuid', columna: 'valor' });
```

---

## 🎓 Reflexión Final

### Lo Que Aprendiste

Ahora puedes:
- ✅ Diseñar schemas de bases de datos relacionales
- ✅ Implementar autenticación segura (email, Google)
- ✅ Configurar Row Level Security correctamente
- ✅ Migrar datos de localStorage a base de datos
- ✅ Construir funciones multi-usuario (leaderboards, perfiles)

**Esto te pone al nivel de full-stack developers profesionales.**

### Mentalidad de Arquitectura

Aprendiste que aplicaciones escalables requieren:
1. **Separación de Datos** - Base de datos independiente del frontend
2. **Autenticación Robusta** - Seguridad desde el inicio
3. **Aislamiento de Usuarios** - RLS para privacidad
4. **Persistencia Garantizada** - Backups y redundancia automáticos

Este conocimiento se aplica a CUALQUIER aplicación con usuarios.

### Próximos Pasos

1. **Explora tu Dashboard** - Ve estadísticas, logs, performance
2. **Prueba Multi-Usuario** - Crea 5 cuentas, ve cómo escala
3. **Optimiza Queries** - Usa SQL Editor para mejorar performance
4. **Prepara** - Sesión 5 es sobre hacer tu app verse INCREÍBLE

---

**¡Felicidades por completar la Sesión 4!** 🎉

Tu Regenmon pasó de ser un juego local a una aplicación cloud multi-usuario con autenticación profesional.

**Siguiente paso:** [Sesión 5 - UI/UX Final →](./10-sesion-5.md)

---

*Última actualización: Febrero 2025*
*Tiempo de lectura: 40 minutos*
*Tiempo de implementación: 4-5 horas*