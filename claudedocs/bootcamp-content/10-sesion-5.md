# Sesión 5: Social y Público - El Juego Compartido

## Resumen

**Objetivo**: Transformar tu juego individual en una experiencia social y pública, añadiendo perfiles de usuario, sistema de visitas, interacciones sociales (like, compartir), feed global y preparación para el lanzamiento público.

**Progreso del Bootcamp**:
- ✅ Sesión 1: Primera app funcional con React y localStorage
- ✅ Sesión 2: Integración con IA (Claude/Gemini)
- ✅ Sesión 3: Sistema de economía y recursos completo
- ✅ Sesión 4: Migración a Supabase con autenticación
- 🎯 **Sesión 5: Sistema social y preparación para lanzamiento público**

**Conceptos Principales**:
- **Perfil Público**: Tu identidad visible para otros jugadores
- **Sistema de Visitas**: Explorar y descubrir otros jugadores
- **Feed Global**: Ver actividad de la comunidad en tiempo real
- **Interacciones Sociales**: Likes, compartir, comentar
- **Leaderboard Social**: Rankings con contexto social
- **Preparación Pública**: Consideraciones para lanzar tu juego

**Duración estimada**: 90-120 minutos

---

## Prerequisites

Antes de empezar la Sesión 5, debes tener:

### ✅ Completado
- ✅ Sesión 4 completa con Supabase configurado
- ✅ Sistema de autenticación funcionando (login, registro, Google OAuth)
- ✅ Migración de datos a Supabase completada
- ✅ RLS policies configuradas correctamente
- ✅ Leaderboard conectado a base de datos

### 🔧 Herramientas Necesarias
- Cuenta de Supabase activa y configurada
- Proyecto desplegado en Vercel
- Variables de entorno configuradas (VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY)
- Editor de código (VS Code recomendado)

### 📚 Conocimientos Previos
- SQL básico para crear nuevas tablas
- React hooks (useState, useEffect, useContext)
- Supabase queries y RLS
- Conceptos de autenticación y autorización

---

## Prompt Completo para v0

### Prompt Principal: Sistema Social Completo

```
Necesito añadir un sistema social completo a mi juego Regenmon en React + TypeScript + Supabase.

CONTEXT:
Tengo una app de juego tipo Tamagotchi con:
- Autenticación con Supabase (login, registro, Google OAuth)
- Base de datos con tablas: regenmons, action_history, leaderboard
- Sistema de evolución, recursos (coins, energy), tienda
- Leaderboard global existente

NUEVAS FUNCIONALIDADES REQUERIDAS:

1. PERFIL PÚBLICO DE USUARIO:
   - Página de perfil con URL única (/profile/:userId)
   - Mostrar: username, avatar, bio, fecha de registro
   - Estadísticas públicas: total regenmons, nivel promedio, achievements desbloqueados
   - Colección de regenmons del usuario (solo nombres y etapas, no stats sensibles)
   - Botones: Editar perfil (solo dueño), Seguir/Dejar de seguir, Compartir perfil

2. SISTEMA DE VISITAS Y EXPLORACIÓN:
   - Sección "Explorar" que muestre usuarios aleatorios o recientes
   - Filtros: más activos, nuevos usuarios, por nivel promedio de regenmons
   - Card de usuario con: avatar, username, stats básicas, botón "Visitar perfil"
   - Sistema de búsqueda por username

3. FEED GLOBAL DE ACTIVIDAD:
   - Feed en homepage que muestre actividad reciente de todos los usuarios
   - Tipos de eventos:
     * Usuario evolucionó un regenmon (con imagen del regenmon)
     * Usuario alcanzó un nuevo logro
     * Usuario subió de posición en leaderboard
   - Cada evento con: timestamp, username (clickable a perfil), descripción, avatar
   - Sistema de "Me gusta" en eventos (heart icon)
   - Paginación o infinite scroll

4. INTERACCIONES SOCIALES:
   - Sistema de likes/reacciones en eventos del feed
   - Compartir logros en el feed automáticamente
   - Notificaciones básicas (nuevos seguidores, likes en tus logros)
   - Badge de "Usuario Activo" para quien jugó hoy

5. LEADERBOARD SOCIAL MEJORADO:
   - Mostrar avatares en el leaderboard
   - Clickable a perfiles de usuarios
   - Mostrar "tus amigos" en el leaderboard (usuarios que sigues)
   - Filtros: Global, Amigos, Esta semana

ESQUEMA DE BASE DE DATOS REQUERIDO:

```sql
-- Tabla de perfiles públicos
CREATE TABLE public.user_profiles (
  id UUID REFERENCES auth.users PRIMARY KEY,
  username TEXT UNIQUE NOT NULL,
  avatar_url TEXT,
  bio TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabla de seguidores
CREATE TABLE public.follows (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  follower_id UUID REFERENCES auth.users NOT NULL,
  following_id UUID REFERENCES auth.users NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(follower_id, following_id),
  CHECK (follower_id != following_id)
);

-- Tabla de eventos del feed
CREATE TABLE public.feed_events (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users NOT NULL,
  event_type TEXT NOT NULL, -- 'evolution', 'achievement', 'leaderboard'
  event_data JSONB NOT NULL, -- info específica del evento
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabla de likes
CREATE TABLE public.event_likes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  event_id UUID REFERENCES feed_events ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(event_id, user_id)
);

-- Tabla de notificaciones
CREATE TABLE public.notifications (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users NOT NULL,
  type TEXT NOT NULL, -- 'new_follower', 'event_liked', 'achievement'
  data JSONB NOT NULL,
  read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

RLS POLICIES NECESARIAS:

```sql
-- user_profiles: todos pueden leer, solo dueño puede editar
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Perfiles públicos legibles" ON user_profiles FOR SELECT USING (true);
CREATE POLICY "Usuario puede actualizar su perfil" ON user_profiles FOR UPDATE USING (auth.uid() = id);

-- follows: todos pueden leer, usuario autenticado puede crear/eliminar sus propios follows
ALTER TABLE follows ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Follows públicos legibles" ON follows FOR SELECT USING (true);
CREATE POLICY "Usuario puede seguir a otros" ON follows FOR INSERT WITH CHECK (auth.uid() = follower_id);
CREATE POLICY "Usuario puede dejar de seguir" ON follows FOR DELETE USING (auth.uid() = follower_id);

-- feed_events: todos pueden leer, sistema crea eventos automáticamente
ALTER TABLE feed_events ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Feed público legible" ON feed_events FOR SELECT USING (true);
CREATE POLICY "Sistema puede crear eventos" ON feed_events FOR INSERT WITH CHECK (auth.uid() = user_id);

-- event_likes: todos pueden leer, usuario puede dar like/unlike
ALTER TABLE event_likes ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Likes públicos legibles" ON event_likes FOR SELECT USING (true);
CREATE POLICY "Usuario puede dar like" ON event_likes FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Usuario puede quitar like" ON event_likes FOR DELETE USING (auth.uid() = user_id);

-- notifications: solo el usuario puede ver sus notificaciones
ALTER TABLE notifications ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Usuario ve sus notificaciones" ON notifications FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Sistema puede crear notificaciones" ON notifications FOR INSERT WITH CHECK (true);
CREATE POLICY "Usuario puede marcar como leídas" ON notifications FOR UPDATE USING (auth.uid() = user_id);
```

COMPONENTES REACT NECESARIOS:

1. ProfilePage.tsx - Página de perfil público
2. EditProfileModal.tsx - Modal para editar perfil
3. ExplorePage.tsx - Exploración de usuarios
4. FeedGlobal.tsx - Feed de actividad
5. FeedEventCard.tsx - Card de evento individual
6. UserCard.tsx - Card de usuario para exploración
7. FollowButton.tsx - Botón de seguir/dejar de seguir
8. NotificationBell.tsx - Icono de notificaciones con badge
9. SocialLeaderboard.tsx - Leaderboard mejorado con social

FUNCIONALIDADES TÉCNICAS:

- Crear perfil automáticamente al registrarse (trigger o función)
- Generar eventos del feed automáticamente cuando:
  * Usuario evoluciona regenmon → INSERT INTO feed_events
  * Usuario desbloquea logro → INSERT INTO feed_events
  * Usuario sube en leaderboard → INSERT INTO feed_events
- Queries optimizadas con JOINS para mostrar feed con datos de usuario
- Infinite scroll o paginación en feed (usar offset/limit)
- Caché de avatares y usernames para rendimiento
- Validación de username (único, 3-20 caracteres, solo alfanumérico)

ESTILO Y UX:
- Usar shadcn/ui para componentes (Card, Avatar, Button, Badge)
- Iconos de lucide-react: Heart, Share2, User, Users, Bell
- Animaciones suaves con framer-motion para likes y follows
- Loading skeletons mientras carga el feed
- Empty states cuando no hay actividad
- Toast notifications para acciones exitosas

PRIORIDADES:
1. Primero: perfiles públicos + sistema de follows
2. Segundo: feed global con eventos automáticos
3. Tercero: sistema de likes y notificaciones
4. Cuarto: exploración y búsqueda de usuarios

IMPORTANTE:
- Todas las operaciones deben respetar RLS policies
- No exponer información sensible (email, password)
- Validar username único al crear/editar perfil
- Optimizar queries con índices en columnas frecuentes (user_id, created_at)
- Manejo de errores y estados de carga en todas las operaciones
```

### Prompt Adicional: Funciones de Base de Datos

```
Necesito funciones SQL en Supabase para automatizar la creación de eventos en el feed.

1. FUNCIÓN: Crear perfil automáticamente al registrarse

```sql
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.user_profiles (id, username, avatar_url)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'username', 'User' || substr(NEW.id::text, 1, 8)),
    COALESCE(NEW.raw_user_meta_data->>'avatar_url', 'https://api.dicebear.com/7.x/avataaars/svg?seed=' || NEW.id)
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();
```

2. FUNCIÓN: Crear evento de evolución automáticamente

```sql
CREATE OR REPLACE FUNCTION public.create_evolution_event()
RETURNS TRIGGER AS $$
BEGIN
  -- Solo si cambió la etapa del regenmon
  IF NEW.stage > OLD.stage THEN
    INSERT INTO public.feed_events (user_id, event_type, event_data)
    VALUES (
      NEW.user_id,
      'evolution',
      jsonb_build_object(
        'regenmon_name', NEW.name,
        'old_stage', OLD.stage,
        'new_stage', NEW.stage,
        'regenmon_id', NEW.id
      )
    );
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_regenmon_evolution
  AFTER UPDATE ON public.regenmons
  FOR EACH ROW
  EXECUTE FUNCTION public.create_evolution_event();
```

3. FUNCIÓN: Obtener feed con datos completos (optimizada)

```sql
CREATE OR REPLACE FUNCTION public.get_feed_with_users(
  limit_count INT DEFAULT 20,
  offset_count INT DEFAULT 0
)
RETURNS TABLE (
  event_id UUID,
  event_type TEXT,
  event_data JSONB,
  created_at TIMESTAMPTZ,
  user_id UUID,
  username TEXT,
  avatar_url TEXT,
  likes_count BIGINT,
  user_liked BOOLEAN
) AS $$
BEGIN
  RETURN QUERY
  SELECT
    fe.id AS event_id,
    fe.event_type,
    fe.event_data,
    fe.created_at,
    fe.user_id,
    up.username,
    up.avatar_url,
    COUNT(DISTINCT el.id) AS likes_count,
    EXISTS(
      SELECT 1 FROM event_likes
      WHERE event_id = fe.id AND user_id = auth.uid()
    ) AS user_liked
  FROM feed_events fe
  JOIN user_profiles up ON fe.user_id = up.id
  LEFT JOIN event_likes el ON fe.id = el.event_id
  GROUP BY fe.id, up.username, up.avatar_url
  ORDER BY fe.created_at DESC
  LIMIT limit_count
  OFFSET offset_count;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
```

4. FUNCIÓN: Crear notificación cuando te siguen

```sql
CREATE OR REPLACE FUNCTION public.notify_new_follower()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.notifications (user_id, type, data)
  VALUES (
    NEW.following_id,
    'new_follower',
    jsonb_build_object(
      'follower_id', NEW.follower_id,
      'follower_username', (SELECT username FROM user_profiles WHERE id = NEW.follower_id)
    )
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_new_follow
  AFTER INSERT ON public.follows
  FOR EACH ROW
  EXECUTE FUNCTION public.notify_new_follower();
```

Implementa estas funciones en el SQL Editor de Supabase y usa get_feed_with_users() desde React para obtener el feed optimizado.
```

### Prompt Adicional: Exploración y Búsqueda

```
Necesito componentes para explorar usuarios y buscar por username en mi app Regenmon.

COMPONENTE: ExplorePage

Requisitos:
- Tabs para filtrar: "Recientes", "Más activos", "Búsqueda"
- En "Recientes": mostrar últimos 20 usuarios registrados
- En "Más activos": usuarios ordenados por cantidad de acciones hoy
- En "Búsqueda": input de búsqueda por username con debounce
- Grid responsive de UserCards (2 cols móvil, 4 cols desktop)
- Loading state y empty state

COMPONENTE: UserCard

Props: user (id, username, avatar_url, regenmon_count, avg_level)

Contenido:
- Avatar grande (80x80)
- Username en negrita
- Stats: "5 Regenmons · Nivel promedio 3"
- Botón "Ver perfil" que navega a /profile/:userId
- Badge "Activo hoy" si jugó en las últimas 24h

QUERIES NECESARIAS:

```typescript
// Obtener usuarios recientes
const { data: recentUsers } = await supabase
  .from('user_profiles')
  .select(`
    id,
    username,
    avatar_url,
    created_at,
    regenmons(count)
  `)
  .order('created_at', { ascending: false })
  .limit(20);

// Obtener usuarios más activos (con más acciones hoy)
const { data: activeUsers } = await supabase
  .from('user_profiles')
  .select(`
    id,
    username,
    avatar_url,
    action_history(count)
  `)
  .gte('action_history.created_at', new Date().toISOString().split('T')[0])
  .order('action_history(count)', { ascending: false })
  .limit(20);

// Búsqueda por username (case-insensitive)
const { data: searchResults } = await supabase
  .from('user_profiles')
  .select('id, username, avatar_url')
  .ilike('username', `%${searchTerm}%`)
  .limit(10);
```

ESTILO:
- Usar Tabs de shadcn/ui para filtros
- Input de búsqueda con icono de lupa (Search de lucide-react)
- Grid con gap-4
- UserCard con hover:scale-105 transition
- Empty state con mensaje amigable y sugerencia

UX:
- Debounce de 300ms en búsqueda para no saturar DB
- Mostrar skeleton loaders mientras carga
- Si búsqueda no encuentra nada: "No encontramos usuarios con ese nombre"
- Click en cualquier parte del UserCard navega al perfil
```

---

## Entregable

Al finalizar la Sesión 5, debes tener:

### ✅ Funcionalidades Implementadas

**1. Sistema de Perfiles Públicos**
- [x] Página de perfil accesible por URL única (/profile/:userId)
- [x] Perfil muestra: username, avatar, bio, fecha de registro
- [x] Estadísticas públicas: total regenmons, nivel promedio, logros
- [x] Colección de regenmons visible (nombres y etapas)
- [x] Botón "Editar perfil" solo visible para el dueño
- [x] Modal de edición con validación de username único
- [x] Perfil se crea automáticamente al registrarse (trigger)

**2. Sistema de Follows**
- [x] Botón "Seguir" / "Dejar de seguir" en perfiles
- [x] Contador de seguidores y siguiendo
- [x] Lista de usuarios que sigues
- [x] Notificación cuando alguien te sigue
- [x] RLS policies correctas para proteger follows

**3. Feed Global de Actividad**
- [x] Feed en homepage con actividad de todos los usuarios
- [x] Eventos automáticos cuando:
  - Usuario evoluciona un regenmon
  - Usuario desbloquea un logro
  - Usuario sube en el leaderboard
- [x] Cada evento muestra: avatar, username, descripción, timestamp
- [x] Username clickeable que navega al perfil
- [x] Sistema de likes con corazón (puede dar like/unlike)
- [x] Contador de likes visible en cada evento
- [x] Paginación o infinite scroll para cargar más eventos

**4. Sistema de Exploración**
- [x] Página "Explorar" con tabs: Recientes, Más activos, Búsqueda
- [x] Grid de UserCards responsive (2-4 columnas)
- [x] Cada UserCard muestra: avatar, username, stats básicas
- [x] Búsqueda por username con debounce
- [x] Click en card navega al perfil del usuario
- [x] Badge "Activo hoy" para usuarios que jugaron recientemente

**5. Leaderboard Social**
- [x] Leaderboard muestra avatares de usuarios
- [x] Usernames clickeables a perfiles
- [x] Filtros: Global, Amigos (usuarios que sigues), Esta semana
- [x] Highlighting de tu posición en el ranking
- [x] Stats detalladas en cada entrada del leaderboard

**6. Sistema de Notificaciones**
- [x] Icono de campana con badge de notificaciones no leídas
- [x] Dropdown con lista de notificaciones
- [x] Tipos: nuevo seguidor, like en tu logro, logro desbloqueado
- [x] Marcar como leídas al abrir dropdown
- [x] Click en notificación navega a contenido relevante

### 📦 Base de Datos

**Nuevas Tablas Creadas**:
```sql
✅ user_profiles (id, username, avatar_url, bio, created_at, updated_at)
✅ follows (id, follower_id, following_id, created_at)
✅ feed_events (id, user_id, event_type, event_data, created_at)
✅ event_likes (id, event_id, user_id, created_at)
✅ notifications (id, user_id, type, data, read, created_at)
```

**RLS Policies Configuradas**:
- ✅ user_profiles: todos leen, solo dueño edita
- ✅ follows: todos leen, usuario crea/elimina sus propios follows
- ✅ feed_events: todos leen, sistema crea eventos
- ✅ event_likes: todos leen, usuario da like/unlike
- ✅ notifications: usuario solo ve las suyas

**Funciones y Triggers**:
- ✅ handle_new_user() - Crea perfil al registrarse
- ✅ create_evolution_event() - Evento cuando evoluciona regenmon
- ✅ notify_new_follower() - Notificación de nuevo seguidor
- ✅ get_feed_with_users() - Query optimizada para feed

### 🎨 Componentes React

**Nuevos Componentes Creados**:
```
src/components/social/
├── ProfilePage.tsx          # Página de perfil público
├── EditProfileModal.tsx     # Modal de edición de perfil
├── FeedGlobal.tsx          # Feed de actividad global
├── FeedEventCard.tsx       # Card de evento individual
├── UserCard.tsx            # Card de usuario (exploración)
├── ExplorePage.tsx         # Página de exploración
├── FollowButton.tsx        # Botón seguir/dejar de seguir
├── NotificationBell.tsx    # Campana con notificaciones
└── SocialLeaderboard.tsx   # Leaderboard con social
```

### 🚀 Preparación para Lanzamiento

**Consideraciones de Privacidad**:
- [x] Validar que no se expone información sensible (email, password)
- [x] RLS policies revisadas y testeadas
- [x] Solo datos públicos visibles en perfiles
- [x] Usuarios pueden controlar qué se comparte

**Optimizaciones de Rendimiento**:
- [x] Queries optimizadas con JOINs en lugar de múltiples queries
- [x] Índices creados en columnas frecuentes (user_id, created_at)
- [x] Caché de avatares y usernames para reducir requests
- [x] Paginación implementada en feed y exploración
- [x] Debounce en búsqueda para no saturar DB

**UX y Polish**:
- [x] Loading states en todas las operaciones async
- [x] Empty states cuando no hay contenido
- [x] Toast notifications para acciones exitosas
- [x] Animaciones suaves en likes y follows
- [x] Responsive design funcionando en móvil

### 📸 Evidencia Visual

**Capturas de Pantalla Requeridas**:
1. Página de perfil público con stats y colección
2. Modal de edición de perfil
3. Feed global con varios tipos de eventos
4. Página de exploración con grid de usuarios
5. Leaderboard social con filtro "Amigos"
6. Dropdown de notificaciones con badge
7. Vista móvil del feed y exploración

**Video Demo (Opcional pero Recomendado)**:
- Recorrido completo del flujo social (2-3 minutos)
- Mostrar: crear perfil → explorar usuarios → seguir → dar likes → ver notificaciones

### 🎉 Logros Desbloqueados

Al completar esta sesión, habrás logrado:

- 🌍 **Juego Público**: Tu app ya no es solo para ti, es una experiencia compartida
- 👥 **Comunidad Activa**: Sistema de follows y feed para conectar jugadores
- 🏆 **Competencia Social**: Leaderboard con contexto social (amigos, global)
- 🔔 **Engagement**: Notificaciones que mantienen a usuarios regresando
- 📱 **App Completa**: Desde localStorage hasta sistema social completo en 5 sesiones

---

## Material de Apoyo

### 1. Conceptos de Sistemas Sociales

#### ¿Qué es un "Perfil Público"?

Un perfil público es la identidad visible de un usuario en tu aplicación. Incluye:

**Componentes Básicos**:
- **Username**: Identificador único y memorable
- **Avatar**: Imagen representativa del usuario
- **Bio**: Descripción corta (opcional)
- **Stats Públicas**: Información que otros pueden ver

**Privacidad y Control**:
```typescript
// ❌ NO exponer información sensible
type PublicProfile = {
  email: string;        // ❌ NUNCA público
  password: string;     // ❌ NUNCA accesible
  apiKeys: string[];    // ❌ Datos sensibles
}

// ✅ Solo información pública
type PublicProfile = {
  id: string;           // ✅ UUID público
  username: string;     // ✅ Identificador
  avatar_url: string;   // ✅ Imagen pública
  bio?: string;         // ✅ Descripción opcional
  created_at: Date;     // ✅ Fecha de registro
  // Stats derivadas (no sensibles)
  regenmon_count: number;
  avg_level: number;
  achievements_count: number;
}
```

**Buenas Prácticas**:
- Username único y validado (3-20 caracteres, alfanumérico)
- Avatar por defecto generado automáticamente (dicebear.com)
- Bio opcional con límite de caracteres (200 max)
- No permitir HTML en bio (prevenir XSS)

#### Sistema de Follows (Seguidores)

**Modelos Comunes**:

1. **Unidireccional** (Twitter/X):
   - Puedes seguir a alguien sin que te siga de vuelta
   - Relación asimétrica: follower → following
   - Usado en: apps donde hay "creadores" y "audiencia"

2. **Bidireccional** (Facebook):
   - Ambos deben aceptar la conexión
   - Relación simétrica: friends (amigos)
   - Usado en: redes sociales más privadas

Para este bootcamp usamos **modelo unidireccional** porque:
- Es más simple de implementar
- No requiere sistema de "aceptación"
- Fomenta exploración libre de la comunidad

**Implementación en SQL**:
```sql
CREATE TABLE follows (
  follower_id UUID,   -- quien sigue
  following_id UUID,  -- a quien sigue
  CHECK (follower_id != following_id)  -- no puedes seguirte a ti mismo
);
```

**Queries Comunes**:
```typescript
// ¿Usuario A sigue a Usuario B?
const { data: isFollowing } = await supabase
  .from('follows')
  .select('id')
  .eq('follower_id', userA)
  .eq('following_id', userB)
  .single();

// Contar seguidores de un usuario
const { count } = await supabase
  .from('follows')
  .select('*', { count: 'exact', head: true })
  .eq('following_id', userId);

// Obtener lista de usuarios que sigo
const { data: following } = await supabase
  .from('follows')
  .select('following_id, user_profiles(*)')
  .eq('follower_id', myUserId);
```

#### Feed de Actividad

Un feed muestra acciones recientes de usuarios en orden cronológico inverso (más reciente primero).

**Tipos de Eventos Comunes**:
- **Acciones del usuario**: evolucionó regenmon, desbloqueó logro
- **Cambios de estado**: subió en ranking, nuevo récord
- **Interacciones sociales**: dio like, comentó, compartió

**Estructura de Evento**:
```typescript
type FeedEvent = {
  id: string;
  user_id: string;
  event_type: 'evolution' | 'achievement' | 'leaderboard';
  event_data: {
    // Información específica del evento
    regenmon_name?: string;
    achievement_id?: string;
    old_position?: number;
    new_position?: number;
  };
  created_at: Date;
  // Enriquecido con datos de usuario
  user: {
    username: string;
    avatar_url: string;
  };
  // Enriquecido con stats sociales
  likes_count: number;
  user_liked: boolean;  // ¿el usuario actual dio like?
}
```

**Optimización de Feed**:

Problema común: N+1 queries
```typescript
// ❌ MAL: 1 query por evento para obtener datos de usuario
for (const event of events) {
  const user = await supabase
    .from('user_profiles')
    .select('*')
    .eq('id', event.user_id)
    .single();
  // Esto hace 20 queries si hay 20 eventos
}

// ✅ BIEN: 1 sola query con JOIN
const { data: events } = await supabase
  .from('feed_events')
  .select(`
    *,
    user_profiles(username, avatar_url),
    event_likes(count)
  `)
  .order('created_at', { ascending: false })
  .limit(20);
```

**Paginación en Feed**:
```typescript
// Patrón de infinite scroll
const loadMoreEvents = async (offset: number) => {
  const { data } = await supabase
    .from('feed_events')
    .select('*')
    .order('created_at', { ascending: false })
    .range(offset, offset + 19);  // Cargar 20 más

  setEvents(prev => [...prev, ...data]);
  setOffset(prev => prev + 20);
};

// Detectar scroll al final
useEffect(() => {
  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
      loadMoreEvents(offset);
    }
  };
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, [offset]);
```

#### Sistema de Likes/Reacciones

**Implementación Básica**:
```typescript
// Dar like
const likeEvent = async (eventId: string) => {
  const { error } = await supabase
    .from('event_likes')
    .insert({ event_id: eventId, user_id: session.user.id });

  if (error) {
    // Manejar error (ej: ya dio like - violación de UNIQUE constraint)
    console.error('Ya diste like a este evento');
  }
};

// Quitar like
const unlikeEvent = async (eventId: string) => {
  await supabase
    .from('event_likes')
    .delete()
    .match({ event_id: eventId, user_id: session.user.id });
};

// Toggle like (optimista UI)
const toggleLike = async (eventId: string) => {
  // Actualizar UI inmediatamente (optimista)
  setLiked(prev => !prev);
  setLikesCount(prev => liked ? prev - 1 : prev + 1);

  try {
    if (liked) {
      await unlikeEvent(eventId);
    } else {
      await likeEvent(eventId);
    }
  } catch (error) {
    // Revertir si falla
    setLiked(prev => !prev);
    setLikesCount(prev => liked ? prev + 1 : prev - 1);
  }
};
```

**Optimistic UI**:
Técnica donde actualizas la UI inmediatamente antes de que el servidor confirme, asumiendo que tendrá éxito. Si falla, reviertes el cambio.

Ventajas:
- ✅ App se siente más rápida y responsive
- ✅ Mejor UX en acciones comunes (like, follow)

Desventajas:
- ⚠️ Debes manejar fallos y revertir cambios
- ⚠️ Posibles inconsistencias temporales

### 2. Conceptos Técnicos Avanzados

#### Triggers y Funciones en PostgreSQL

**¿Qué es un Trigger?**

Un trigger es código que se ejecuta automáticamente cuando ocurre un evento en una tabla (INSERT, UPDATE, DELETE).

**Ejemplo: Crear perfil al registrarse**

```sql
-- 1. Crear la función que se ejecutará
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO user_profiles (id, username, avatar_url)
  VALUES (
    NEW.id,  -- NEW es el nuevo registro insertado
    'User' || substr(NEW.id::text, 1, 8),  -- username default
    'https://api.dicebear.com/7.x/avataaars/svg?seed=' || NEW.id
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 2. Crear el trigger que llama a la función
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users  -- Después de insertar en auth.users
  FOR EACH ROW                -- Por cada fila insertada
  EXECUTE FUNCTION handle_new_user();
```

**Explicación**:
- `TRIGGER`: Evento que activa la función
- `AFTER INSERT`: Se ejecuta después de insertar
- `FOR EACH ROW`: Se ejecuta por cada fila afectada
- `NEW`: Variable especial que contiene el nuevo registro
- `OLD`: Variable especial que contiene el registro anterior (en UPDATE/DELETE)
- `SECURITY DEFINER`: Ejecuta con permisos del creador del trigger, no del usuario

**Casos de Uso Comunes**:
- Crear registros relacionados automáticamente
- Validar datos antes de insertar
- Actualizar timestamps (updated_at)
- Crear eventos de auditoría
- Generar notificaciones

#### Funciones SQL para Queries Complejas

Cuando una query es compleja (múltiples JOINs, agregaciones), crear una función SQL la hace reutilizable y más rápida.

**Ejemplo: Feed con datos completos**

```sql
CREATE OR REPLACE FUNCTION get_feed_with_users(
  limit_count INT DEFAULT 20,
  offset_count INT DEFAULT 0
)
RETURNS TABLE (
  event_id UUID,
  event_type TEXT,
  event_data JSONB,
  created_at TIMESTAMPTZ,
  user_id UUID,
  username TEXT,
  avatar_url TEXT,
  likes_count BIGINT,
  user_liked BOOLEAN
) AS $$
BEGIN
  RETURN QUERY
  SELECT
    fe.id,
    fe.event_type,
    fe.event_data,
    fe.created_at,
    fe.user_id,
    up.username,
    up.avatar_url,
    COUNT(DISTINCT el.id) AS likes_count,
    EXISTS(
      SELECT 1 FROM event_likes
      WHERE event_id = fe.id AND user_id = auth.uid()
    ) AS user_liked
  FROM feed_events fe
  JOIN user_profiles up ON fe.user_id = up.id
  LEFT JOIN event_likes el ON fe.id = el.event_id
  GROUP BY fe.id, up.username, up.avatar_url
  ORDER BY fe.created_at DESC
  LIMIT limit_count
  OFFSET offset_count;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
```

**Uso desde React**:
```typescript
const { data: feed } = await supabase.rpc('get_feed_with_users', {
  limit_count: 20,
  offset_count: 0
});
```

**Ventajas**:
- ✅ Lógica compleja centralizada en DB
- ✅ Más rápida que múltiples queries desde cliente
- ✅ Reutilizable en toda la app
- ✅ Más fácil de testear y mantener

#### Índices en Base de Datos

Un índice es una estructura de datos que mejora la velocidad de búsqueda en una tabla.

**¿Cuándo crear índices?**

Crear índices en columnas que:
- Se usan frecuentemente en WHERE, JOIN, ORDER BY
- Tienen alta cardinalidad (muchos valores distintos)
- Se consultan más de lo que se actualizan

**Ejemplo: Índices para sistema social**

```sql
-- Índice para buscar eventos por usuario
CREATE INDEX idx_feed_events_user_id ON feed_events(user_id);

-- Índice para ordenar por fecha (usado en feed)
CREATE INDEX idx_feed_events_created_at ON feed_events(created_at DESC);

-- Índice compuesto para follows (buscar relación específica)
CREATE INDEX idx_follows_follower_following ON follows(follower_id, following_id);

-- Índice para buscar por username (usado en exploración)
CREATE INDEX idx_user_profiles_username ON user_profiles(username);

-- Índice para búsqueda case-insensitive
CREATE INDEX idx_user_profiles_username_lower ON user_profiles(LOWER(username));
```

**Impacto de Índices**:

Sin índice:
```sql
-- Escanea TODA la tabla (slow)
SELECT * FROM feed_events WHERE user_id = 'abc-123';
-- Tiempo: 500ms (con 100k registros)
```

Con índice:
```sql
-- Usa el índice para ir directo a las filas (fast)
SELECT * FROM feed_events WHERE user_id = 'abc-123';
-- Tiempo: 5ms (misma cantidad de datos)
```

**Trade-offs**:
- ✅ Queries más rápidas (especialmente SELECT)
- ❌ Inserts/Updates más lentos (debe actualizar índice)
- ❌ Ocupan espacio en disco

Regla general: Crea índices en columnas que consultas frecuentemente, pero no en todas las columnas (overhead innecesario).

#### Optimización de Queries

**1. Usar SELECT específico, no `SELECT *`**

```typescript
// ❌ MAL: Trae todas las columnas (más datos transferidos)
const { data } = await supabase
  .from('user_profiles')
  .select('*');

// ✅ BIEN: Solo las columnas necesarias
const { data } = await supabase
  .from('user_profiles')
  .select('id, username, avatar_url');
```

**2. Limitar resultados con LIMIT**

```typescript
// ❌ MAL: Trae todos los eventos (puede ser miles)
const { data } = await supabase
  .from('feed_events')
  .select('*')
  .order('created_at', { ascending: false });

// ✅ BIEN: Solo los primeros 20
const { data } = await supabase
  .from('feed_events')
  .select('*')
  .order('created_at', { ascending: false })
  .limit(20);
```

**3. Usar COUNT solo cuando necesites**

```typescript
// ❌ MAL: Cuenta todos los registros (lento)
const { count } = await supabase
  .from('follows')
  .select('*', { count: 'exact' })
  .eq('following_id', userId);

// ✅ BIEN: Si solo necesitas saber si existe
const { data } = await supabase
  .from('follows')
  .select('id')
  .eq('follower_id', userA)
  .eq('following_id', userB)
  .limit(1);

if (data && data.length > 0) {
  // Ya está siguiendo
}
```

**4. Caché de datos estáticos**

```typescript
// Datos que no cambian frecuentemente
const [userCache, setUserCache] = useState<Map<string, User>>(new Map());

const getUserData = async (userId: string) => {
  // Revisar caché primero
  if (userCache.has(userId)) {
    return userCache.get(userId);
  }

  // Si no está, consultar DB
  const { data } = await supabase
    .from('user_profiles')
    .select('*')
    .eq('id', userId)
    .single();

  // Guardar en caché
  setUserCache(prev => new Map(prev).set(userId, data));
  return data;
};
```

### 3. UX y Mejores Prácticas

#### Empty States (Estados Vacíos)

Cuando no hay contenido que mostrar, no dejes la página en blanco.

**Ejemplos de Empty States**:

```tsx
// Feed vacío (nuevo usuario)
<div className="flex flex-col items-center justify-center py-12 text-center">
  <Users className="h-16 w-16 text-muted-foreground mb-4" />
  <h3 className="text-lg font-semibold mb-2">Tu feed está vacío</h3>
  <p className="text-muted-foreground mb-4">
    Sigue a otros jugadores para ver su actividad aquí
  </p>
  <Button asChild>
    <Link to="/explore">Explorar Usuarios</Link>
  </Button>
</div>

// No hay notificaciones
<div className="p-4 text-center text-muted-foreground">
  <Bell className="h-8 w-8 mx-auto mb-2 opacity-50" />
  <p>No tienes notificaciones</p>
</div>

// Búsqueda sin resultados
<div className="text-center py-8">
  <p className="text-muted-foreground">
    No encontramos usuarios con ese nombre
  </p>
  <p className="text-sm text-muted-foreground mt-2">
    Intenta con otro término de búsqueda
  </p>
</div>
```

**Principios de Empty States**:
1. Explica por qué está vacío
2. Sugiere una acción concreta
3. Usa iconos para claridad visual
4. Mantén tono positivo y alentador

#### Loading States (Estados de Carga)

**Skeleton Loaders vs Spinners**:

```tsx
// ❌ Spinner genérico (menos informativo)
{isLoading && <Spinner />}

// ✅ Skeleton loader (muestra estructura esperada)
{isLoading ? (
  <div className="space-y-4">
    {[...Array(3)].map((_, i) => (
      <div key={i} className="flex items-center gap-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="flex-1">
          <Skeleton className="h-4 w-32 mb-2" />
          <Skeleton className="h-3 w-48" />
        </div>
      </div>
    ))}
  </div>
) : (
  <FeedEvents events={events} />
)}
```

**Ventajas de Skeleton Loaders**:
- ✅ Usuario sabe qué esperar
- ✅ Percepción de carga más rápida
- ✅ Menos "salto" visual cuando carga el contenido
- ✅ Más profesional y pulido

#### Debouncing en Búsqueda

Evitar hacer una query a la DB en cada keystroke.

**Implementación**:

```typescript
import { useState, useEffect } from 'react';

const ExplorePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedTerm, setDebouncedTerm] = useState('');

  // Debounce: actualiza debouncedTerm 300ms después del último cambio
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  // Query se ejecuta solo cuando debouncedTerm cambia
  useEffect(() => {
    if (debouncedTerm.length >= 2) {
      searchUsers(debouncedTerm);
    }
  }, [debouncedTerm]);

  return (
    <Input
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Buscar usuarios..."
    />
  );
};
```

**Resultado**:
- Usuario escribe "john"
- En lugar de 4 queries (j, jo, joh, john)
- Solo hace 1 query después de 300ms de inactividad

#### Animaciones Suaves

**Micro-interacciones con Framer Motion**:

```tsx
import { motion } from 'framer-motion';

// Like button con animación
<motion.button
  whileTap={{ scale: 0.9 }}  // Escala al hacer click
  onClick={toggleLike}
>
  <Heart
    className={cn(
      "h-5 w-5 transition-colors",
      liked ? "fill-red-500 text-red-500" : "text-muted-foreground"
    )}
  />
</motion.button>

// Card de usuario con hover
<motion.div
  whileHover={{ scale: 1.02, y: -2 }}  // Sube y crece ligeramente
  transition={{ type: "spring", stiffness: 300 }}
  className="cursor-pointer"
  onClick={() => navigate(`/profile/${user.id}`)}
>
  <UserCard user={user} />
</motion.div>

// Feed event con entrada animada
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.3 }}
>
  <FeedEventCard event={event} />
</motion.div>
```

**Principios de Animación**:
1. Sutil y funcional, no decorativa
2. Duración corta (200-300ms)
3. Proporciona feedback visual de acciones
4. No abuses - puede cansar al usuario

#### Notificaciones Toast

**Uso con shadcn/ui**:

```tsx
import { useToast } from '@/components/ui/use-toast';

const ProfilePage = () => {
  const { toast } = useToast();

  const handleFollow = async () => {
    try {
      await followUser(userId);
      toast({
        title: "¡Éxito!",
        description: `Ahora sigues a ${username}`,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "No se pudo seguir al usuario",
        variant: "destructive",
      });
    }
  };
};
```

**Cuándo usar Toasts**:
- ✅ Confirmación de acciones exitosas
- ✅ Errores no críticos
- ✅ Notificaciones de fondo (ej: "Nuevo seguidor")
- ❌ No para información crítica (usa Dialog)
- ❌ No para errores de validación (mostrar inline)

### 4. Privacidad y Seguridad

#### Validación de Username

**Requisitos típicos**:
- 3-20 caracteres
- Solo letras, números, guiones bajos
- Sin espacios
- Único en toda la aplicación

**Implementación**:

```typescript
const validateUsername = (username: string): string | null => {
  if (username.length < 3) return "Username debe tener al menos 3 caracteres";
  if (username.length > 20) return "Username no puede exceder 20 caracteres";
  if (!/^[a-zA-Z0-9_]+$/.test(username)) return "Solo letras, números y guiones bajos";
  return null; // válido
};

const updateUsername = async (newUsername: string) => {
  const error = validateUsername(newUsername);
  if (error) {
    toast({ title: "Username inválido", description: error, variant: "destructive" });
    return;
  }

  // Verificar unicidad en DB
  const { data: existing } = await supabase
    .from('user_profiles')
    .select('id')
    .eq('username', newUsername)
    .single();

  if (existing) {
    toast({ title: "Username no disponible", description: "Ese username ya está en uso" });
    return;
  }

  // Actualizar
  const { error: updateError } = await supabase
    .from('user_profiles')
    .update({ username: newUsername })
    .eq('id', session.user.id);

  if (!updateError) {
    toast({ title: "¡Actualizado!", description: "Tu username ha sido cambiado" });
  }
};
```

#### Prevenir XSS (Cross-Site Scripting)

**Problema**: Usuario malicioso podría inyectar HTML/JavaScript en bio o username.

```typescript
// ❌ PELIGROSO: Renderizar HTML directamente
<div dangerouslySetInnerHTML={{ __html: user.bio }} />

// Si bio contiene: <script>alert('XSS')</script>
// Se ejecutaría código malicioso

// ✅ SEGURO: React escapa HTML automáticamente
<p>{user.bio}</p>
```

**Validación adicional en backend**:

```sql
-- En PostgreSQL, validar que no contenga HTML tags
CREATE OR REPLACE FUNCTION validate_bio()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.bio ~ '<[^>]*>' THEN
    RAISE EXCEPTION 'Bio no puede contener HTML';
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER validate_bio_trigger
  BEFORE INSERT OR UPDATE ON user_profiles
  FOR EACH ROW
  EXECUTE FUNCTION validate_bio();
```

#### RLS Policies: Revisión de Seguridad

**Checklist de Seguridad**:

```sql
-- ✅ Usuarios solo pueden editar SU PROPIO perfil
CREATE POLICY "Usuario edita su perfil"
  ON user_profiles FOR UPDATE
  USING (auth.uid() = id);

-- ✅ Usuarios solo pueden crear follows donde ellos son el follower
CREATE POLICY "Usuario puede seguir"
  ON follows FOR INSERT
  WITH CHECK (auth.uid() = follower_id);

-- ✅ Usuarios solo pueden eliminar SUS PROPIOS follows
CREATE POLICY "Usuario puede dejar de seguir"
  ON follows FOR DELETE
  USING (auth.uid() = follower_id);

-- ✅ Usuarios solo ven SUS PROPIAS notificaciones
CREATE POLICY "Usuario ve sus notificaciones"
  ON notifications FOR SELECT
  USING (auth.uid() = user_id);

-- ✅ Eventos solo pueden ser creados por el dueño
CREATE POLICY "Usuario crea sus eventos"
  ON feed_events FOR INSERT
  WITH CHECK (auth.uid() = user_id);
```

**Testing de RLS**:

```sql
-- Probar como usuario específico
SET ROLE authenticated;
SET request.jwt.claims.sub = 'user-id-aqui';

-- Intentar operaciones prohibidas
UPDATE user_profiles SET username = 'hacker' WHERE id != 'user-id-aqui';
-- Debe fallar con error de RLS

-- Intentar operaciones permitidas
UPDATE user_profiles SET username = 'nuevo_nombre' WHERE id = 'user-id-aqui';
-- Debe funcionar

-- Resetear
RESET ROLE;
```

### 5. Consideraciones para Lanzamiento Público

#### Pre-Launch Checklist

**1. Seguridad**:
- [ ] Todas las RLS policies implementadas y testeadas
- [ ] No se expone información sensible en APIs
- [ ] Variables de entorno configuradas en Vercel
- [ ] Rate limiting configurado (prevenir spam)
- [ ] Validación de inputs en cliente y servidor

**2. Performance**:
- [ ] Índices creados en columnas frecuentes
- [ ] Queries optimizadas (no N+1)
- [ ] Imágenes optimizadas y comprimidas
- [ ] Caché implementado donde sea posible
- [ ] Paginación en listas largas

**3. UX**:
- [ ] Loading states en todas las operaciones async
- [ ] Empty states para cuando no hay contenido
- [ ] Error handling con mensajes claros
- [ ] Toast notifications para feedback
- [ ] Responsive design funcionando en móvil

**4. Contenido**:
- [ ] Página de "About" o "Cómo jugar"
- [ ] Términos de servicio (básico)
- [ ] Política de privacidad (básico)
- [ ] FAQ con preguntas comunes

**5. Monitoring**:
- [ ] Logs configurados para errores críticos
- [ ] Analytics básico (Google Analytics o Vercel Analytics)
- [ ] Alertas para errores de servidor
- [ ] Monitoreo de uso de base de datos

#### Rate Limiting y Prevención de Spam

**Problema**: Usuario malicioso podría spamear likes, follows, o crear muchos eventos.

**Solución 1: Rate Limiting en Supabase**

```sql
-- Limitar follows: máximo 100 por día por usuario
CREATE OR REPLACE FUNCTION check_follow_rate_limit()
RETURNS TRIGGER AS $$
DECLARE
  follow_count INT;
BEGIN
  SELECT COUNT(*) INTO follow_count
  FROM follows
  WHERE follower_id = NEW.follower_id
    AND created_at > NOW() - INTERVAL '24 hours';

  IF follow_count >= 100 THEN
    RAISE EXCEPTION 'Rate limit exceeded: max 100 follows per day';
  END IF;

  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER enforce_follow_rate_limit
  BEFORE INSERT ON follows
  FOR EACH ROW
  EXECUTE FUNCTION check_follow_rate_limit();
```

**Solución 2: Debouncing en Cliente**

```typescript
// Prevenir múltiples likes rápidos (doble click)
const [isLiking, setIsLiking] = useState(false);

const toggleLike = async () => {
  if (isLiking) return; // Ignorar si ya está procesando

  setIsLiking(true);
  try {
    await performLike();
  } finally {
    setTimeout(() => setIsLiking(false), 1000); // Cooldown de 1 segundo
  }
};
```

#### Moderación de Contenido

**Contenido Inapropiado**:

Estrategias básicas:
1. **Lista de palabras prohibidas**: Bloquear usernames/bios con palabras ofensivas
2. **Reportes de usuarios**: Botón "Reportar" en perfiles
3. **Revisión manual**: Al principio, revisar perfiles reportados manualmente

**Implementación de Reportes**:

```sql
CREATE TABLE user_reports (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  reporter_id UUID REFERENCES auth.users NOT NULL,
  reported_user_id UUID REFERENCES auth.users NOT NULL,
  reason TEXT NOT NULL,
  status TEXT DEFAULT 'pending', -- pending, reviewed, resolved
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

```tsx
const reportUser = async (userId: string, reason: string) => {
  await supabase.from('user_reports').insert({
    reporter_id: session.user.id,
    reported_user_id: userId,
    reason: reason
  });

  toast({ title: "Reporte enviado", description: "Revisaremos el perfil reportado" });
};
```

#### Analytics y Métricas

**Métricas Clave para Apps Sociales**:

1. **Engagement**:
   - DAU (Daily Active Users)
   - MAU (Monthly Active Users)
   - Sesiones por usuario
   - Tiempo promedio de sesión

2. **Retención**:
   - % usuarios que regresan día siguiente (Day 1 retention)
   - % usuarios que regresan en 7 días (Week 1 retention)
   - Churn rate (tasa de abandono)

3. **Viralidad**:
   - % usuarios que siguen a otros
   - Promedio de follows por usuario
   - Eventos compartidos / Total eventos

4. **Contenido**:
   - Eventos creados por día
   - Likes por evento (promedio)
   - Usuarios más activos

**Implementar con Vercel Analytics**:

```typescript
// En _app.tsx o App.tsx
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <>
      <YourApp />
      <Analytics />
    </>
  );
}
```

**Eventos Personalizados**:

```typescript
import { track } from '@vercel/analytics';

// Trackear acciones importantes
const handleFollow = async (userId: string) => {
  await followUser(userId);
  track('user_followed', { target_user_id: userId });
};

const handleLike = async (eventId: string) => {
  await likeEvent(eventId);
  track('event_liked', { event_id: eventId });
};
```

---

## Errores Comunes y Soluciones

### Error 1: Perfil no se crea automáticamente al registrarse

**Síntoma**:
```
Error: User profile not found for user xxx
```

**Causa**: El trigger `on_auth_user_created` no se ejecutó o falló.

**Solución**:

1. Verificar que el trigger existe:
```sql
SELECT * FROM pg_trigger WHERE tgname = 'on_auth_user_created';
```

2. Verificar que la función existe:
```sql
SELECT * FROM pg_proc WHERE proname = 'handle_new_user';
```

3. Si falló, crear perfil manualmente:
```typescript
const createProfile = async (userId: string) => {
  const { error } = await supabase.from('user_profiles').insert({
    id: userId,
    username: 'User' + userId.substring(0, 8),
    avatar_url: `https://api.dicebear.com/7.x/avataaars/svg?seed=${userId}`
  });

  if (error) console.error('Error creando perfil:', error);
};
```

4. Revisar logs de Supabase en Dashboard > Database > Logs para ver errores del trigger.

**Prevención**:
- Testear trigger con usuario de prueba antes de producción
- Tener función de "crear perfil" como fallback en cliente

---

### Error 2: Username duplicado (violación de UNIQUE constraint)

**Síntoma**:
```
Error: duplicate key value violates unique constraint "user_profiles_username_key"
```

**Causa**: Intentaste actualizar username a uno que ya existe.

**Solución**:

1. Verificar disponibilidad antes de actualizar:
```typescript
const isUsernameAvailable = async (username: string): Promise<boolean> => {
  const { data } = await supabase
    .from('user_profiles')
    .select('id')
    .eq('username', username)
    .single();

  return data === null;
};

const updateUsername = async (newUsername: string) => {
  if (!await isUsernameAvailable(newUsername)) {
    toast({
      title: "Username no disponible",
      description: "Ese username ya está en uso",
      variant: "destructive"
    });
    return;
  }

  // Proceder con actualización
  const { error } = await supabase
    .from('user_profiles')
    .update({ username: newUsername })
    .eq('id', session.user.id);
};
```

2. Agregar validación en frontend con debounce:
```tsx
const [usernameAvailable, setUsernameAvailable] = useState<boolean | null>(null);

useEffect(() => {
  const timer = setTimeout(async () => {
    if (username.length >= 3) {
      const available = await isUsernameAvailable(username);
      setUsernameAvailable(available);
    }
  }, 500);

  return () => clearTimeout(timer);
}, [username]);

// Mostrar indicador visual
{usernameAvailable === false && (
  <p className="text-red-500 text-sm">Username no disponible</p>
)}
{usernameAvailable === true && (
  <p className="text-green-500 text-sm">✓ Username disponible</p>
)}
```

**Prevención**:
- Siempre verificar disponibilidad antes de intentar actualizar
- Mostrar feedback visual en tiempo real
- Sugerir alternativas si username está tomado

---

### Error 3: No se pueden dar likes (RLS policy blocking)

**Síntoma**:
```
Error: new row violates row-level security policy for table "event_likes"
```

**Causa**: La RLS policy está mal configurada o falta.

**Solución**:

1. Verificar que existe la policy:
```sql
SELECT * FROM pg_policies WHERE tablename = 'event_likes';
```

2. Recrear policy correcta:
```sql
DROP POLICY IF EXISTS "Usuario puede dar like" ON event_likes;

CREATE POLICY "Usuario puede dar like"
  ON event_likes FOR INSERT
  WITH CHECK (auth.uid() = user_id);
```

3. Verificar que estás enviando el `user_id` correcto:
```typescript
const likeEvent = async (eventId: string) => {
  const { data: { session } } = await supabase.auth.getSession();

  if (!session) {
    toast({ title: "Error", description: "Debes estar logueado" });
    return;
  }

  const { error } = await supabase.from('event_likes').insert({
    event_id: eventId,
    user_id: session.user.id  // ✅ Usar ID de sesión actual
  });

  if (error) console.error('Error:', error);
};
```

**Prevención**:
- Testear todas las RLS policies con usuario autenticado
- Usar herramienta "RLS Policy Tester" en Supabase Dashboard

---

### Error 4: Feed muy lento (N+1 queries)

**Síntoma**: Feed tarda 5+ segundos en cargar.

**Causa**: Estás haciendo queries individuales por cada evento para obtener datos de usuario.

**Solución**:

1. Usar función SQL optimizada (ver Material de Apoyo sección 2):
```typescript
const { data: feed } = await supabase.rpc('get_feed_with_users', {
  limit_count: 20,
  offset_count: 0
});
```

2. Si no quieres usar función, al menos usa JOIN:
```typescript
const { data: feed } = await supabase
  .from('feed_events')
  .select(`
    *,
    user_profiles!inner(username, avatar_url),
    event_likes(count)
  `)
  .order('created_at', { ascending: false })
  .limit(20);
```

3. Crear índices en columnas de JOIN:
```sql
CREATE INDEX idx_feed_events_user_id ON feed_events(user_id);
CREATE INDEX idx_feed_events_created_at ON feed_events(created_at DESC);
```

**Prevención**:
- Siempre usar JOINs en lugar de queries anidadas
- Crear índices en columnas frecuentemente consultadas
- Testear con datos realistas (1000+ registros)

---

### Error 5: Búsqueda de usuarios no funciona bien (case-sensitive)

**Síntoma**: Buscar "John" no encuentra "john" o "JOHN".

**Causa**: PostgreSQL es case-sensitive por defecto.

**Solución**:

1. Usar `ilike` (case-insensitive LIKE):
```typescript
const searchUsers = async (term: string) => {
  const { data } = await supabase
    .from('user_profiles')
    .select('id, username, avatar_url')
    .ilike('username', `%${term}%`)  // ✅ ilike = case-insensitive
    .limit(10);

  return data;
};
```

2. Crear índice para búsqueda case-insensitive:
```sql
CREATE INDEX idx_user_profiles_username_lower
ON user_profiles(LOWER(username));
```

3. Si quieres búsqueda aún más flexible (typos, etc), usar full-text search:
```sql
-- Añadir columna de búsqueda
ALTER TABLE user_profiles ADD COLUMN search_vector tsvector;

-- Crear índice
CREATE INDEX idx_search_vector ON user_profiles USING GIN(search_vector);

-- Actualizar automáticamente
CREATE TRIGGER update_search_vector
  BEFORE INSERT OR UPDATE ON user_profiles
  FOR EACH ROW
  EXECUTE FUNCTION
    tsvector_update_trigger(search_vector, 'pg_catalog.english', username);
```

```typescript
// Usar full-text search
const { data } = await supabase
  .from('user_profiles')
  .select('*')
  .textSearch('search_vector', searchTerm);
```

**Prevención**:
- Siempre usar `ilike` para búsquedas de texto
- Testear búsqueda con diferentes variaciones (mayúsculas, minúsculas)

---

### Error 6: No se pueden seguir usuarios (ya estás siguiendo)

**Síntoma**:
```
Error: duplicate key value violates unique constraint "follows_follower_id_following_id_key"
```

**Causa**: Intentaste crear un follow que ya existe. Constraint UNIQUE lo previene.

**Solución**:

1. Verificar si ya sigues al usuario antes de intentar seguir:
```typescript
const isFollowing = async (userId: string): Promise<boolean> => {
  const { data } = await supabase
    .from('follows')
    .select('id')
    .eq('follower_id', session.user.id)
    .eq('following_id', userId)
    .single();

  return data !== null;
};

const followUser = async (userId: string) => {
  if (await isFollowing(userId)) {
    toast({ title: "Ya sigues a este usuario" });
    return;
  }

  const { error } = await supabase.from('follows').insert({
    follower_id: session.user.id,
    following_id: userId
  });
};
```

2. O usar `upsert` (insert o ignore):
```typescript
// Supabase no tiene upsert nativo para esto, así que usa try-catch
const followUser = async (userId: string) => {
  const { error } = await supabase.from('follows').insert({
    follower_id: session.user.id,
    following_id: userId
  });

  // Ignorar error de duplicado
  if (error && error.code !== '23505') { // 23505 = unique violation
    console.error('Error siguiendo usuario:', error);
  }
};
```

3. Mejor opción: componente FollowButton con estado local:
```tsx
const FollowButton = ({ userId }: { userId: string }) => {
  const [following, setFollowing] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkFollowStatus();
  }, [userId]);

  const checkFollowStatus = async () => {
    const { data } = await supabase
      .from('follows')
      .select('id')
      .eq('follower_id', session.user.id)
      .eq('following_id', userId)
      .single();

    setFollowing(data !== null);
    setLoading(false);
  };

  const toggleFollow = async () => {
    if (following) {
      await supabase.from('follows').delete()
        .match({ follower_id: session.user.id, following_id: userId });
      setFollowing(false);
    } else {
      await supabase.from('follows').insert({
        follower_id: session.user.id,
        following_id: userId
      });
      setFollowing(true);
    }
  };

  if (loading) return <Skeleton className="h-10 w-24" />;

  return (
    <Button onClick={toggleFollow}>
      {following ? "Siguiendo" : "Seguir"}
    </Button>
  );
};
```

**Prevención**:
- Mantener estado local de "siguiendo" en componente
- Verificar antes de intentar follow/unfollow
- Manejar error gracefully si ocurre

---

### Error 7: Feed no se actualiza en tiempo real

**Síntoma**: Usuario evoluciona regenmon pero evento no aparece en feed hasta refrescar página.

**Causa**: Feed no está suscrito a cambios en tiempo real.

**Solución**:

1. Implementar suscripción a cambios de Supabase:
```typescript
const FeedGlobal = () => {
  const [events, setEvents] = useState<FeedEvent[]>([]);

  useEffect(() => {
    // Cargar eventos iniciales
    loadFeed();

    // Suscribirse a nuevos eventos
    const subscription = supabase
      .channel('feed_changes')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'feed_events' },
        (payload) => {
          // Agregar nuevo evento al principio del feed
          const newEvent = payload.new as FeedEvent;
          setEvents(prev => [newEvent, ...prev]);
        }
      )
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const loadFeed = async () => {
    const { data } = await supabase.rpc('get_feed_with_users', {
      limit_count: 20,
      offset_count: 0
    });
    setEvents(data);
  };
};
```

2. Problema: Nuevo evento no tiene datos de usuario. Solución:
```typescript
.on('postgres_changes', { event: 'INSERT', ... }, async (payload) => {
  const newEvent = payload.new;

  // Obtener datos completos del evento
  const { data: fullEvent } = await supabase
    .from('feed_events')
    .select('*, user_profiles(username, avatar_url)')
    .eq('id', newEvent.id)
    .single();

  setEvents(prev => [fullEvent, ...prev]);
})
```

**Prevención**:
- Implementar Realtime subscriptions para data que cambia frecuentemente
- Testear suscripciones en múltiples ventanas/dispositivos

---

### Error 8: Notificaciones no aparecen

**Síntoma**: Usuario te sigue pero no recibes notificación.

**Causa**: Trigger no está creando la notificación o no la estás consultando.

**Solución**:

1. Verificar que trigger existe:
```sql
SELECT * FROM pg_trigger WHERE tgname = 'on_new_follow';
```

2. Recrear trigger:
```sql
CREATE OR REPLACE FUNCTION notify_new_follower()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO notifications (user_id, type, data)
  VALUES (
    NEW.following_id,
    'new_follower',
    jsonb_build_object(
      'follower_id', NEW.follower_id
    )
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_new_follow
  AFTER INSERT ON follows
  FOR EACH ROW
  EXECUTE FUNCTION notify_new_follower();
```

3. Verificar que consultas incluyan datos de usuario:
```typescript
const { data: notifications } = await supabase
  .from('notifications')
  .select(`
    *,
    follower:data->follower_id(
      username,
      avatar_url
    )
  `)
  .eq('user_id', session.user.id)
  .order('created_at', { ascending: false })
  .limit(10);
```

4. Implementar polling o realtime para notificaciones:
```typescript
useEffect(() => {
  // Polling cada 30 segundos
  const interval = setInterval(() => {
    loadNotifications();
  }, 30000);

  // O mejor: Realtime subscription
  const sub = supabase
    .channel('notifications')
    .on('postgres_changes',
      { event: 'INSERT', schema: 'public', table: 'notifications', filter: `user_id=eq.${session.user.id}` },
      (payload) => {
        setNotifications(prev => [payload.new, ...prev]);
        setUnreadCount(prev => prev + 1);
      }
    )
    .subscribe();

  return () => {
    clearInterval(interval);
    sub.unsubscribe();
  };
}, []);
```

**Prevención**:
- Testear triggers manualmente antes de confiar en ellos
- Implementar Realtime subscriptions para feedback inmediato
- Tener fallback de polling si Realtime falla

---

### Error 9: Imágenes de avatar no cargan

**Síntoma**: Avatares muestran broken image icon o no cargan.

**Causa**: URL de avatar inválida o CORS bloqueando la carga.

**Solución**:

1. Validar URL de avatar antes de guardar:
```typescript
const isValidImageUrl = async (url: string): Promise<boolean> => {
  try {
    const response = await fetch(url, { method: 'HEAD' });
    return response.ok && response.headers.get('content-type')?.startsWith('image/');
  } catch {
    return false;
  }
};

const updateAvatar = async (avatarUrl: string) => {
  if (!await isValidImageUrl(avatarUrl)) {
    toast({ title: "URL de avatar inválida", variant: "destructive" });
    return;
  }

  await supabase
    .from('user_profiles')
    .update({ avatar_url: avatarUrl })
    .eq('id', session.user.id);
};
```

2. Usar componente Avatar con fallback:
```tsx
const UserAvatar = ({ src, alt }: { src: string; alt: string }) => {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <Avatar>
        <AvatarFallback>
          {alt.substring(0, 2).toUpperCase()}
        </AvatarFallback>
      </Avatar>
    );
  }

  return (
    <Avatar>
      <AvatarImage
        src={src}
        alt={alt}
        onError={() => setError(true)}
      />
      <AvatarFallback>
        {alt.substring(0, 2).toUpperCase()}
      </AvatarFallback>
    </Avatar>
  );
};
```

3. O usar servicio de avatares generados:
```typescript
// dicebear.com genera avatares únicos por seed
const getDefaultAvatar = (userId: string) => {
  return `https://api.dicebear.com/7.x/avataaars/svg?seed=${userId}`;
};
```

**Prevención**:
- Siempre tener fallback (iniciales o avatar generado)
- Validar URLs antes de guardar
- Usar CDN confiable para avatares

---

## Checklist de Validación

Antes de considerar la Sesión 5 completa, verifica:

### Base de Datos y Backend

- [ ] **Tabla `user_profiles` creada** con columnas: id, username, avatar_url, bio, created_at, updated_at
- [ ] **Tabla `follows` creada** con constraint UNIQUE(follower_id, following_id) y CHECK(follower_id != following_id)
- [ ] **Tabla `feed_events` creada** con event_type y event_data (JSONB)
- [ ] **Tabla `event_likes` creada** con constraint UNIQUE(event_id, user_id)
- [ ] **Tabla `notifications` creada** con type, data, read
- [ ] **Trigger `on_auth_user_created`** crea perfil automáticamente al registrarse
- [ ] **Trigger `on_regenmon_evolution`** crea evento en feed al evolucionar
- [ ] **Trigger `on_new_follow`** crea notificación al recibir seguidor
- [ ] **Función `get_feed_with_users()`** retorna feed con datos completos optimizado
- [ ] **RLS policies correctas** en todas las tablas nuevas
- [ ] **Índices creados** en: user_id, created_at, username

### Funcionalidad de Perfiles

- [ ] **Perfil público accesible** por /profile/:userId
- [ ] **Perfil muestra**: username, avatar, bio, fecha de registro
- [ ] **Estadísticas visibles**: total regenmons, nivel promedio, logros
- [ ] **Colección de regenmons** mostrada con nombres y etapas
- [ ] **Botón "Editar perfil"** visible solo para el dueño
- [ ] **Modal de edición** con validación de username único
- [ ] **Username validado**: 3-20 caracteres, solo alfanumérico
- [ ] **Avatar con fallback** si URL no carga

### Sistema de Follows

- [ ] **Botón "Seguir"** cambia a "Siguiendo" después de seguir
- [ ] **Estado de follow** se mantiene al recargar página
- [ ] **Contador de seguidores** actualizado en tiempo real
- [ ] **Contador de siguiendo** actualizado en tiempo real
- [ ] **No puedes seguirte a ti mismo** (validación)
- [ ] **Notificación creada** cuando alguien te sigue
- [ ] **Lista de seguidores** visible en perfil
- [ ] **Lista de siguiendo** visible en perfil

### Feed Global

- [ ] **Feed visible** en homepage o sección dedicada
- [ ] **Eventos de evolución** se crean automáticamente
- [ ] **Eventos de logros** se crean automáticamente (si implementado)
- [ ] **Cada evento muestra**: avatar, username, descripción, timestamp
- [ ] **Username es clickeable** y navega al perfil
- [ ] **Sistema de likes** funciona (toggle like/unlike)
- [ ] **Contador de likes** visible y actualizado
- [ ] **Paginación implementada** (load more o infinite scroll)
- [ ] **Loading state** mientras carga eventos
- [ ] **Empty state** cuando no hay eventos

### Exploración de Usuarios

- [ ] **Página "Explorar"** accesible desde navegación
- [ ] **Tabs funcionan**: Recientes, Más activos, Búsqueda
- [ ] **Grid responsive** (2 cols móvil, 4 cols desktop)
- [ ] **UserCard muestra**: avatar, username, stats
- [ ] **Click en card** navega al perfil
- [ ] **Búsqueda por username** con debounce (300ms)
- [ ] **Búsqueda case-insensitive** (ilike)
- [ ] **Badge "Activo hoy"** para usuarios recientes
- [ ] **Loading skeletons** mientras carga
- [ ] **Empty state** en búsqueda sin resultados

### Leaderboard Social

- [ ] **Avatares visibles** en leaderboard
- [ ] **Usernames clickeables** a perfiles
- [ ] **Filtros funcionan**: Global, Amigos, Esta semana
- [ ] **Tu posición destacada** visualmente
- [ ] **Stats detalladas** en cada entrada
- [ ] **Loading state** mientras carga
- [ ] **Empty state** si no hay datos

### Notificaciones

- [ ] **Icono de campana** visible en navegación
- [ ] **Badge con número** de notificaciones no leídas
- [ ] **Dropdown se abre** al hacer click
- [ ] **Lista de notificaciones** ordenada por fecha
- [ ] **Tipos de notificaciones**: nuevo seguidor, like, logro
- [ ] **Click en notificación** navega a contenido relevante
- [ ] **Marcar como leídas** al abrir dropdown
- [ ] **Contador actualizado** en tiempo real
- [ ] **Empty state** cuando no hay notificaciones

### UX y Polish

- [ ] **Loading states** en todas las operaciones async
- [ ] **Empty states** en todas las listas/feeds
- [ ] **Toast notifications** para acciones exitosas
- [ ] **Animaciones suaves** en likes y follows (framer-motion)
- [ ] **Responsive design** funciona en móvil
- [ ] **Skeleton loaders** en lugar de spinners genéricos
- [ ] **Error handling** con mensajes claros
- [ ] **Disabled states** en botones durante loading
- [ ] **Confirmación visual** de acciones (ej: corazón se llena)

### Performance

- [ ] **Queries optimizadas** con JOINs en lugar de N+1
- [ ] **Índices creados** en columnas frecuentes
- [ ] **Paginación implementada** en feed y exploración
- [ ] **Debounce en búsqueda** (no query en cada keystroke)
- [ ] **Caché de avatares** para reducir requests
- [ ] **Feed carga en < 1 segundo** con 100+ eventos
- [ ] **Búsqueda responde en < 500ms**

### Seguridad y Privacidad

- [ ] **RLS policies testeadas** con usuario autenticado
- [ ] **No se expone información sensible** (email, password)
- [ ] **Username único validado** en cliente y servidor
- [ ] **Bio no contiene HTML** (prevención XSS)
- [ ] **Rate limiting implementado** (opcional pero recomendado)
- [ ] **Solo datos públicos** visibles en perfiles
- [ ] **Usuario no puede seguirse a sí mismo**

### Preparación para Lanzamiento

- [ ] **Página "Cómo jugar"** o tutorial básico
- [ ] **Términos de servicio** (básico)
- [ ] **Política de privacidad** (básico)
- [ ] **FAQ con preguntas comunes**
- [ ] **Analytics configurado** (Vercel o Google)
- [ ] **Error logging** configurado
- [ ] **Variables de entorno** en Vercel
- [ ] **Build de producción funciona** sin errores

### Testing Manual

- [ ] **Crear cuenta nueva** → perfil se crea automáticamente
- [ ] **Editar perfil** → username y avatar actualizados
- [ ] **Seguir a 3 usuarios** → contador actualizado
- [ ] **Dejar de seguir** → contador disminuye
- [ ] **Evolucionar regenmon** → evento aparece en feed
- [ ] **Dar like a evento** → contador sube
- [ ] **Quitar like** → contador baja
- [ ] **Buscar usuario por nombre** → encuentra resultados
- [ ] **Ver perfil de otro usuario** → solo botón "Seguir" visible
- [ ] **Ver tu perfil** → botón "Editar perfil" visible
- [ ] **Recibir notificación** → badge con número aparece
- [ ] **Abrir notificaciones** → lista se muestra, badge desaparece
- [ ] **Click en notificación** → navega a perfil del seguidor
- [ ] **Filtrar leaderboard por "Amigos"** → solo usuarios que sigues
- [ ] **Scroll en feed** → carga más eventos automáticamente
- [ ] **Abrir en móvil** → layout responsive funciona

---

## Reflexión Final: El Viaje Completo

### Lo que has construido en 5 sesiones

Has pasado de **cero experiencia** a crear una **aplicación social completa y desplegada**. Revisemos el viaje:

**Sesión 1**: Primera App Funcional
- De: "No sé React"
- A: App funcionando con estado, ciclos de vida, localStorage

**Sesión 2**: Integración con IA
- De: "¿Qué es una API?"
- A: App que habla con Claude/Gemini, genera respuestas inteligentes

**Sesión 3**: Sistema de Economía
- De: "Solo tengo un botón"
- A: Juego completo con recursos, tienda, evoluciones, logros

**Sesión 4**: Base de Datos y Auth
- De: "Todo en localStorage"
- A: Supabase con PostgreSQL, autenticación, RLS, seguridad

**Sesión 5**: Sistema Social
- De: "Juego para mí solo"
- A: **App pública con usuarios, follows, feed, leaderboard, notificaciones**

### Habilidades que ahora tienes

**Frontend**:
- ✅ React con TypeScript
- ✅ Hooks (useState, useEffect, useContext, custom hooks)
- ✅ Routing (react-router-dom)
- ✅ UI components (shadcn/ui)
- ✅ Animaciones (framer-motion)
- ✅ Responsive design

**Backend**:
- ✅ Supabase (PostgreSQL, Auth, Realtime)
- ✅ SQL queries avanzadas (JOINs, agregaciones)
- ✅ RLS policies y seguridad
- ✅ Triggers y funciones SQL
- ✅ APIs RESTful

**Integración con IA**:
- ✅ Claude API / Google Gemini
- ✅ System prompts y context
- ✅ Serverless functions (Vercel)
- ✅ Streaming responses

**DevOps**:
- ✅ Vercel deployment
- ✅ Variables de entorno
- ✅ Git y GitHub
- ✅ CI/CD básico

**Game Design**:
- ✅ Sistemas de economía
- ✅ Progresión y balanceo
- ✅ Engagement loops
- ✅ Social features

**Profesional**:
- ✅ Debugging sistemático
- ✅ Lectura de documentación
- ✅ Testing y validación
- ✅ Consideraciones de seguridad
- ✅ Performance optimization

### Lo que viene después

**Siguientes Pasos Sugeridos**:

1. **Pulir tu app**:
   - Añade más tipos de eventos al feed
   - Implementa sistema de comentarios
   - Crea sistema de logros sociales ("Primer seguidor", "100 likes recibidos")
   - Añade personalización de perfil (banner, temas de color)

2. **Escalar**:
   - Implementa caching con Redis
   - Optimiza queries con materialized views
   - Añade CDN para assets estáticos
   - Implementa rate limiting más robusto

3. **Monetizar** (si quieres):
   - Sistema de membresías premium
   - Regenmons exclusivos para supporters
   - Customización avanzada de perfil (de pago)
   - Quitar ads con subscription

4. **Aprender más**:
   - **Next.js**: SSR, SSG, mejores prácticas de React
   - **tRPC**: Type-safe APIs entre frontend y backend
   - **Prisma**: ORM para queries más seguras
   - **Testing**: Vitest, Playwright para E2E
   - **Monitoring**: Sentry para error tracking

5. **Construir algo nuevo**:
   - Ahora tienes las bases para construir CUALQUIER app web
   - Ideas: E-commerce, red social temática, dashboard de analytics, plataforma educativa
   - El límite es tu imaginación

### Mensaje Final

**Has logrado algo extraordinario**. La mayoría de personas que empiezan a programar abandonan antes de llegar aquí. Tú no solo terminaste, sino que creaste algo **público y funcional** que otros pueden usar.

No subestimes lo que has aprendido. Cada concepto que dominaste (RLS, triggers, JOINs, Realtime subscriptions, RLS policies) son habilidades que profesionales con años de experiencia usan diariamente.

**Tu app no es perfecta, y eso está bien**. Las apps de producción nunca están "terminadas". Siempre hay bugs que arreglar, features que añadir, optimizaciones que hacer. Lo importante es que ahora tienes la base para **seguir construyendo e iterando**.

**Continúa aprendiendo**. La tecnología cambia constantemente, pero los fundamentos que aprendiste aquí (bases de datos, APIs, autenticación, UX) permanecen. Cada nuevo framework o herramienta será más fácil de aprender porque entiendes los conceptos subyacentes.

**Comparte tu trabajo**. Pon el link de tu app en tu LinkedIn, GitHub, portfolio. Es evidencia tangible de tus habilidades. Los empleadores valoran mucho más proyectos completos que cursos completados.

---

**¡Felicitaciones por completar el bootcamp! 🎉🚀**

De principiante a developer full-stack con app en producción en 5 sesiones. Eso es algo de lo que estar orgulloso.

Ahora ve y **construye cosas increíbles**. El mundo necesita más creadores como tú.

**— Fin del Bootcamp Regenmon —**

---

*¿Tienes feedback sobre el bootcamp? ¿Encontraste bugs en la documentación? Abre un issue en el repo o contáctanos. Tu feedback ayuda a mejorar la experiencia para futuros estudiantes.*
