# 🎯 Tickets de Mejora - Documentación VibeCoding

**Fecha**: 2 de febrero de 2026
**Prioridad**: Alta
**Objetivo**: Elevar comprensibilidad para Vibecoders de 7.5/10 a 9/10

---

## 🔴 PRIORIDAD CRÍTICA (Implementar PRIMERO)

### Ticket #1: Agregar Glosario Rápido en Sidebar
**Problema**: Términos técnicos aparecen sin definición previa
**Impacto**: Confusión y frustración en Vibecoders
**Esfuerzo**: 2-3 horas

**Solución**:
Crear nuevo componente `GlossaryModal.tsx` accesible desde sidebar

**Archivo a crear**: `src/components/doc/GlossaryModal.tsx`

**Contenido del Glosario**:
```markdown
### 📖 Glosario Rápido para Vibecoders

#### Términos de Desarrollo
- **Deploy / Desplegar**: Subir tu app a internet para que funcione 24/7
- **Producción**: Tu app funcionando en internet, accesible para todos
- **Localhost**: Tu app funcionando solo en tu computadora (nadie más puede verla)
- **URL**: Dirección web de tu app (ej: miapp.vercel.app)

#### Términos de Datos
- **localStorage**: Memoria en tu navegador (se borra si limpias cookies)
- **Base de datos**: Memoria en internet (permanente, no se borra)
- **API**: Puente que conecta tu app con servicios externos (como Claude)
- **API Key**: Contraseña especial para usar servicios de IA

#### Términos de IA
- **Prompt**: Instrucciones que le das a la IA
- **Contexto**: Lo que la IA recuerda de conversaciones anteriores
- **Multimodal**: IA que entiende texto + imágenes al mismo tiempo
- **Temperatura**: Qué tan creativa es la IA (0=precisa, 1=creativa)

#### Términos de Interfaz
- **UI (User Interface)**: Todo lo que ves en pantalla
- **Componente**: Una pieza reutilizable de tu interfaz (ej: botón, tarjeta)
- **Estado (State)**: Información que cambia en tu app (ej: nivel de felicidad)
- **Props**: Información que pasas de un componente a otro

#### Términos de Usuario
- **Auth / Autenticación**: Sistema de login (quién eres)
- **Sesión**: El tiempo que estás logueado en la app
- **Token**: Pase temporal que prueba que ya hiciste login
- **Permisos**: Qué puedes y no puedes hacer en la app
```

**Criterios de Aceptación**:
- [ ] Botón "📖 Glosario" visible en sidebar
- [ ] Modal con todos los términos definidos
- [ ] Búsqueda rápida dentro del glosario
- [ ] Links desde términos en documentación al glosario

---

### Ticket #2: Crear Puentes Entre Sesiones
**Problema**: Saltos conceptuales entre sesiones (especialmente 1→2)
**Impacto**: Vibecoders se pierden en transiciones
**Esfuerzo**: 3-4 horas

**Archivos a modificar**:
- `src/pages/doc/Session1.tsx`
- `src/pages/doc/Session2.tsx`
- `src/pages/doc/Session3.tsx`
- `src/pages/doc/Session4.tsx`

#### Sesión 1 - Agregar sección final:

```tsx
{/* Puente hacia Sesión 2 */}
<div className="glass-card p-8 mt-12 border-2 border-orange-400/30">
  <h2 className="text-2xl font-bold text-orange-400 mb-4">
    🔌 Preparando el siguiente paso
  </h2>
  <p className="text-foreground text-lg mb-4">
    Hasta ahora tu Regenmon es <strong>visual</strong> (tiene cara, stats, botones).
    En la siguiente sesión le darás un <strong>cerebro</strong> (IA conversacional).
  </p>

  <div className="glass-card p-6 mb-4">
    <h3 className="text-xl font-semibold text-orange-400 mb-3">
      ¿Qué necesitas antes de Sesión 2?
    </h3>
    <ul className="space-y-2 text-foreground">
      <li className="flex items-start gap-3">
        <span className="text-orange-400 font-bold">1.</span>
        <span>Una <strong>API Key de Claude</strong> (como una contraseña para usar IA)</span>
      </li>
      <li className="flex items-start gap-3">
        <span className="text-orange-400 font-bold">2.</span>
        <span>Entender que la IA no está en tu app, está en internet (por eso necesitas la "llave")</span>
      </li>
      <li className="flex items-start gap-3">
        <span className="text-orange-400 font-bold">3.</span>
        <span>Saber que cada vez que tu Regenmon "habla", le pide ayuda a Claude</span>
      </li>
    </ul>
  </div>

  <div className="bg-orange-400/10 border border-orange-400/30 rounded-lg p-4">
    <p className="text-foreground text-sm">
      <strong>💡 Analogía:</strong> Imagina que tu Regenmon es un muñeco de ventrílocuo.
      En Sesión 1 construiste el muñeco. En Sesión 2 le darás la voz (Claude es el ventrílocuo).
    </p>
  </div>
</div>
```

#### Sesión 2 - Agregar sección final:

```tsx
{/* Puente hacia Sesión 3 */}
<div className="glass-card p-8 mt-12 border-2 border-orange-400/30">
  <h2 className="text-2xl font-bold text-orange-400 mb-4">
    🎭 Lo que viene: Identidad
  </h2>
  <p className="text-foreground text-lg mb-4">
    Tu Regenmon ya habla, pero <strong>no te reconoce</strong>. Cada vez que
    recargas la página, es como si fueras un extraño.
  </p>

  <div className="glass-card p-6">
    <h3 className="text-xl font-semibold text-orange-400 mb-3">
      En Sesión 3 aprenderás:
    </h3>
    <ul className="space-y-2 text-foreground">
      <li>• Cómo hacer que tu Regenmon sepa quién eres (login)</li>
      <li>• La diferencia entre TU mascota y la de otros usuarios</li>
      <li>• Cómo crear un sistema de monedas y recursos</li>
      <li>• Por qué necesitas una "base de datos" (memoria permanente)</li>
    </ul>
  </div>
</div>
```

#### Sesión 3 - Agregar sección final:

```tsx
{/* Puente hacia Sesión 4 */}
<div className="glass-card p-8 mt-12 border-2 border-orange-400/30">
  <h2 className="text-2xl font-bold text-orange-400 mb-4">
    📈 Lo que viene: Progreso
  </h2>
  <p className="text-foreground text-lg mb-4">
    Tu Regenmon ya sabe quién eres y guarda tu información. Ahora falta que
    <strong> crezca y evolucione</strong> según cómo lo cuides.
  </p>

  <div className="glass-card p-6">
    <h3 className="text-xl font-semibold text-orange-400 mb-3">
      En Sesión 4 implementarás:
    </h3>
    <ul className="space-y-2 text-foreground">
      <li>• Sistema de entrenamiento (subir fotos, ganar experiencia)</li>
      <li>• IA que evalúa imágenes (no solo texto)</li>
      <li>• Evoluciones (cambios visuales según nivel)</li>
      <li>• Recompensas por consistencia</li>
    </ul>
  </div>
</div>
```

#### Sesión 4 - Agregar sección final:

```tsx
{/* Puente hacia Sesión 5 */}
<div className="glass-card p-8 mt-12 border-2 border-orange-400/30">
  <h2 className="text-2xl font-bold text-orange-400 mb-4">
    🌍 El paso final: Comunidad
  </h2>
  <p className="text-foreground text-lg mb-4">
    Tu Regenmon funciona perfectamente... pero está solo. En la última sesión
    transformarás tu proyecto en una <strong>experiencia social</strong>.
  </p>

  <div className="glass-card p-6">
    <h3 className="text-xl font-semibold text-orange-400 mb-3">
      En Sesión 5 crearás:
    </h3>
    <ul className="space-y-2 text-foreground">
      <li>• Perfiles públicos (otros pueden ver tu Regenmon)</li>
      <li>• Sistema de visitas e interacciones</li>
      <li>• Feed comunitario (descubrir otros Regenmons)</li>
      <li>• Notificaciones sociales</li>
    </ul>
  </div>
</div>
```

**Criterios de Aceptación**:
- [ ] Cada sesión tiene sección "Puente" al final
- [ ] Explica QUÉ viene y POR QUÉ es necesario
- [ ] Mantiene estilo glass-card con borde naranja
- [ ] Usa analogías simples

---

### Ticket #3: Sección de Errores Comunes por Sesión
**Problema**: No hay guías de troubleshooting
**Impacto**: Vibecoders se atascan sin saber qué hacer
**Esfuerzo**: 4-5 horas

**Archivos a crear**:
- `src/pages/doc/session1/Troubleshooting.tsx`
- `src/pages/doc/session2/Troubleshooting.tsx`
- `src/pages/doc/session3/Troubleshooting.tsx`
- `src/pages/doc/session4/Troubleshooting.tsx`
- `src/pages/doc/session5/Troubleshooting.tsx`

**Estructura de cada archivo**:

```tsx
import { DocLayout } from '@/components/doc/DocLayout';
import { DocContent } from '@/components/doc/DocContent';
import { Link } from 'react-router-dom';

const Session1Troubleshooting = () => {
  return (
    <DocLayout>
      <DocContent>
        <h1 className="gradient-text text-4xl font-bold mb-4">
          🚨 Errores Comunes - Sesión 1
        </h1>
        <p className="text-muted-foreground text-lg mb-8">
          Si algo no funciona, aquí están las soluciones a los problemas más frecuentes.
        </p>

        {/* Error 1 */}
        <div className="glass-card p-6 mb-6">
          <div className="flex items-start gap-4 mb-4">
            <span className="text-4xl">❌</span>
            <div>
              <h2 className="text-2xl font-bold text-orange-400 mb-2">
                "Mi Regenmon no aparece en pantalla"
              </h2>
              <p className="text-muted-foreground mb-4">
                Creaste tu mascota pero no se ve nada, solo pantalla en blanco.
              </p>
            </div>
          </div>

          <div className="bg-orange-400/10 border border-orange-400/30 rounded-lg p-4 mb-4">
            <h3 className="font-bold text-orange-400 mb-2">✅ Soluciones:</h3>
            <ol className="space-y-2 text-foreground">
              <li>1. Verifica que el <strong>nombre tenga al menos 3 letras</strong></li>
              <li>2. Revisa que hayas <strong>seleccionado un tipo</strong> (Fuego/Agua/Planta)</li>
              <li>3. Abre la consola del navegador (F12) y busca errores en rojo</li>
              <li>4. Refresca la página (F5) y vuelve a intentar</li>
            </ol>
          </div>

          <div className="bg-blue-400/10 border border-blue-400/30 rounded-lg p-4">
            <h3 className="font-bold text-blue-400 mb-2">💡 Por qué pasa:</h3>
            <p className="text-foreground text-sm">
              Tu app espera cierta información antes de mostrar el Regenmon. Si falta
              algo (nombre, tipo, imagen), no sabe qué mostrar y se queda en blanco.
            </p>
          </div>
        </div>

        {/* Error 2 */}
        <div className="glass-card p-6 mb-6">
          <div className="flex items-start gap-4 mb-4">
            <span className="text-4xl">⏳</span>
            <div>
              <h2 className="text-2xl font-bold text-orange-400 mb-2">
                "La página no carga después de hacer deploy"
              </h2>
              <p className="text-muted-foreground mb-4">
                Hiciste deploy a Vercel pero el link muestra error 404 o carga infinita.
              </p>
            </div>
          </div>

          <div className="bg-orange-400/10 border border-orange-400/30 rounded-lg p-4 mb-4">
            <h3 className="font-bold text-orange-400 mb-2">✅ Soluciones:</h3>
            <ol className="space-y-2 text-foreground">
              <li>1. <strong>Espera 2-3 minutos</strong> - Vercel tarda en procesar</li>
              <li>2. Refresca la página varias veces (Ctrl + F5)</li>
              <li>3. Abre el link en <strong>ventana incógnito</strong> para evitar caché</li>
              <li>4. Verifica en tu dashboard de Vercel que el deploy diga "Ready"</li>
            </ol>
          </div>

          <div className="bg-blue-400/10 border border-blue-400/30 rounded-lg p-4">
            <h3 className="font-bold text-blue-400 mb-2">💡 Por qué pasa:</h3>
            <p className="text-foreground text-sm">
              Vercel necesita tiempo para construir tu app, subirla a servidores y
              distribuirla globalmente. No es instantáneo, pero una vez listo funciona 24/7.
            </p>
          </div>
        </div>

        {/* Error 3 */}
        <div className="glass-card p-6 mb-6">
          <div className="flex items-start gap-4 mb-4">
            <span className="text-4xl">🖼️</span>
            <div>
              <h2 className="text-2xl font-bold text-orange-400 mb-2">
                "La imagen de mi Regenmon no se ve"
              </h2>
              <p className="text-muted-foreground mb-4">
                Todo funciona pero aparece un cuadro roto donde debería estar la imagen.
              </p>
            </div>
          </div>

          <div className="bg-orange-400/10 border border-orange-400/30 rounded-lg p-4 mb-4">
            <h3 className="font-bold text-orange-400 mb-2">✅ Soluciones:</h3>
            <ol className="space-y-2 text-foreground">
              <li>1. Revisa que la URL de la imagen sea válida (cópiala y ábrela en nueva pestaña)</li>
              <li>2. Asegúrate de usar <strong>imágenes públicas</strong> (no de Google Drive privado)</li>
              <li>3. Usa servicios como imgur.com o similares para hospedar imágenes</li>
              <li>4. Verifica que la URL termine en .png, .jpg o .webp</li>
            </ol>
          </div>

          <div className="bg-blue-400/10 border border-blue-400/30 rounded-lg p-4">
            <h3 className="font-bold text-blue-400 mb-2">💡 Por qué pasa:</h3>
            <p className="text-foreground text-sm">
              Las imágenes necesitan estar en un servidor público. Si la URL requiere
              login o permisos especiales, tu app no puede accederlas.
            </p>
          </div>
        </div>

        {/* Ayuda Adicional */}
        <div className="glass-card p-6 bg-gradient-to-r from-orange-400/10 to-pink-400/10 border-2 border-orange-400/30">
          <h2 className="text-2xl font-bold text-orange-400 mb-4">
            🆘 ¿Ninguna solución funcionó?
          </h2>
          <p className="text-foreground mb-4">
            Si después de probar todo sigue sin funcionar:
          </p>
          <ol className="space-y-3 text-foreground mb-6">
            <li className="flex items-start gap-3">
              <span className="font-bold text-orange-400">1.</span>
              <span>Copia el mensaje de error completo (si hay)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-orange-400">2.</span>
              <span>Toma screenshot de tu pantalla</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-orange-400">3.</span>
              <span>Comparte el link de tu proyecto en v0</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-orange-400">4.</span>
              <span>Contacta al equipo de VibeCoding: <a href="mailto:brian@frutero.club" className="text-orange-400 underline">brian@frutero.club</a></span>
            </li>
          </ol>
          <p className="text-sm text-muted-foreground">
            Tiempo de respuesta: 24-48 horas hábiles
          </p>
        </div>

        {/* Navigation */}
        <div className="mt-16 flex items-center justify-between border-t border-border/50 pt-8">
          <Link
            to="/doc/session-1/prompt"
            className="flex items-center gap-2 text-muted-foreground hover:text-doc-primary transition-colors"
          >
            <span>←</span>
            <div>
              <div className="text-xs text-muted-foreground">Anterior</div>
              <div className="font-semibold">Prompt</div>
            </div>
          </Link>

          <Link
            to="/doc/session-2"
            className="flex items-center gap-2 text-muted-foreground hover:text-doc-primary transition-colors text-right"
          >
            <div>
              <div className="text-xs text-muted-foreground">Siguiente</div>
              <div className="font-semibold">Sesión 2</div>
            </div>
            <span>→</span>
          </Link>
        </div>
      </DocContent>
    </DocLayout>
  );
};

export default Session1Troubleshooting;
```

**Modificar DocSidebar.tsx** para agregar troubleshooting:

```tsx
subItems: [
  { title: t('doc.quickStartPage.subsections.supportMaterial'), href: '/doc/session-1/support' },
  { title: t('doc.quickStartPage.subsections.deliverable'), href: '/doc/session-1/deliverable' },
  { title: t('doc.quickStartPage.subsections.prompt'), href: '/doc/session-1/prompt' },
  { title: '🚨 Errores Comunes', href: '/doc/session-1/troubleshooting' }, // NUEVO
]
```

**Criterios de Aceptación**:
- [ ] 5 archivos de troubleshooting creados (uno por sesión)
- [ ] Cada archivo tiene al menos 3 errores documentados
- [ ] Formato: Error → Soluciones → Por qué pasa
- [ ] Sección de ayuda adicional con contacto
- [ ] Integrado en sidebar y rutas

---

## 🟡 PRIORIDAD ALTA (Implementar DESPUÉS de críticos)

### Ticket #4: Corregir Inconsistencia de Número de Sesiones
**Problema**: Documentación dice "6 sesiones" pero solo hay 5
**Impacto**: Confusión sobre estructura del bootcamp
**Esfuerzo**: 30 minutos

**Archivos a modificar**:
- `src/pages/doc/Introduction.tsx` (o equivalente de página principal)

**Cambio específico**:

**Antes**:
```tsx
<p>
  Aquí encontrarás todo lo que necesitas para completar las 6 sesiones...
</p>
```

**Después**:
```tsx
<p>
  Aquí encontrarás todo lo que necesitas para completar las <strong>5 sesiones</strong> del
  bootcamp (más la configuración inicial en Quick Start)...
</p>
```

**Criterios de Aceptación**:
- [ ] Todas las referencias a "6 sesiones" actualizadas a "5 sesiones"
- [ ] Aclaración de que Quick Start es configuración inicial
- [ ] Búsqueda global de "6" o "seis" en archivos de doc

---

### Ticket #5: Agregar Timeline Visual de Progresión
**Problema**: No hay expectativas claras de tiempo por sesión
**Impacto**: Vibecoders no saben cómo planificar
**Esfuerzo**: 2-3 horas

**Archivo a modificar**: `src/pages/doc/Introduction.tsx`

**Agregar sección**:

```tsx
{/* Timeline de Progresión */}
<div className="glass-card p-8 mt-12">
  <h2 className="text-3xl font-bold gradient-text mb-6">
    📅 Tu Viaje en VibeCoding
  </h2>
  <p className="text-muted-foreground mb-8">
    Así se ve una semana típica para completar el bootcamp. Puedes ir a tu propio ritmo.
  </p>

  {/* Semana 1 */}
  <div className="mb-8">
    <h3 className="text-2xl font-bold text-orange-400 mb-4">Semana 1</h3>
    <div className="space-y-4">
      <div className="glass-card p-4 border-l-4 border-orange-400">
        <div className="flex justify-between items-start mb-2">
          <span className="font-bold text-orange-400">Día 1</span>
          <span className="text-sm text-muted-foreground">3-4 horas</span>
        </div>
        <p className="text-foreground mb-2">Quick Start + Sesión 1 (Nacimiento)</p>
        <p className="text-sm text-muted-foreground">
          Tu primer Regenmon en internet
        </p>
      </div>

      <div className="glass-card p-4 border-l-4 border-orange-400">
        <div className="flex justify-between items-start mb-2">
          <span className="font-bold text-orange-400">Día 2-3</span>
          <span className="text-sm text-muted-foreground">4-5 horas</span>
        </div>
        <p className="text-foreground mb-2">Sesión 2 (Conversación)</p>
        <p className="text-sm text-muted-foreground">
          IA conversacional + personalidad
        </p>
      </div>

      <div className="glass-card p-4 border-l-4 border-orange-400">
        <div className="flex justify-between items-start mb-2">
          <span className="font-bold text-orange-400">Día 4-5</span>
          <span className="text-sm text-muted-foreground">4-5 horas</span>
        </div>
        <p className="text-foreground mb-2">Sesión 3 (Identidad)</p>
        <p className="text-sm text-muted-foreground">
          Login + sistema de recursos
        </p>
      </div>
    </div>
  </div>

  {/* Semana 2 */}
  <div className="mb-8">
    <h3 className="text-2xl font-bold text-orange-400 mb-4">Semana 2</h3>
    <div className="space-y-4">
      <div className="glass-card p-4 border-l-4 border-pink-400">
        <div className="flex justify-between items-start mb-2">
          <span className="font-bold text-pink-400">Día 6-7</span>
          <span className="text-sm text-muted-foreground">4-5 horas</span>
        </div>
        <p className="text-foreground mb-2">Sesión 4 (Evolución)</p>
        <p className="text-sm text-muted-foreground">
          IA multimodal + sistema de progreso
        </p>
      </div>

      <div className="glass-card p-4 border-l-4 border-pink-400">
        <div className="flex justify-between items-start mb-2">
          <span className="font-bold text-pink-400">Día 8-9</span>
          <span className="text-sm text-muted-foreground">4-5 horas</span>
        </div>
        <p className="text-foreground mb-2">Sesión 5 (Social)</p>
        <p className="text-sm text-muted-foreground">
          Comunidad + interacciones
        </p>
      </div>

      <div className="glass-card p-4 border-l-4 border-green-400">
        <div className="flex justify-between items-start mb-2">
          <span className="font-bold text-green-400">Día 10-14</span>
          <span className="text-sm text-muted-foreground">Variable</span>
        </div>
        <p className="text-foreground mb-2">Pulir y personalizar</p>
        <p className="text-sm text-muted-foreground">
          Mejoras visuales + características únicas
        </p>
      </div>
    </div>
  </div>

  {/* Resumen */}
  <div className="bg-orange-400/10 border border-orange-400/30 rounded-lg p-6">
    <h3 className="text-xl font-bold text-orange-400 mb-3">
      📊 En números
    </h3>
    <ul className="space-y-2 text-foreground">
      <li>• <strong>Total:</strong> 20-25 horas de construcción activa</li>
      <li>• <strong>Ritmo recomendado:</strong> 2-3 horas por día</li>
      <li>• <strong>Duración:</strong> 2 semanas a ritmo normal</li>
      <li>• <strong>Flexible:</strong> Puedes ir más rápido o más lento</li>
    </ul>
  </div>
</div>
```

**Criterios de Aceptación**:
- [ ] Timeline visible en página de Introducción
- [ ] Estimaciones de tiempo por sesión claras
- [ ] Código de colores (naranja=semana 1, rosa=semana 2)
- [ ] Flexibilidad mencionada explícitamente

---

### Ticket #6: Agregar Checkpoints de Comprensión
**Problema**: No hay forma de validar entendimiento antes de avanzar
**Impacto**: Vibecoders avanzan con conceptos mal entendidos
**Esfuerzo**: 3-4 horas

**Archivos a modificar**: `Session1.tsx` a `Session5.tsx`

**Agregar al final de cada sesión (antes de navegación)**:

```tsx
{/* Checkpoint de Comprensión */}
<div className="glass-card p-8 mt-12 bg-gradient-to-br from-purple-400/10 to-blue-400/10 border-2 border-purple-400/30">
  <h2 className="text-2xl font-bold text-purple-400 mb-4 flex items-center gap-3">
    <span>🎯</span>
    <span>Checkpoint: Verifica tu Entendimiento</span>
  </h2>
  <p className="text-muted-foreground mb-6">
    Antes de pasar a la siguiente sesión, asegúrate de poder responder estas preguntas:
  </p>

  <div className="space-y-4">
    {/* Pregunta 1 */}
    <div className="glass-card p-4">
      <label className="flex items-start gap-3 cursor-pointer">
        <input type="checkbox" className="mt-1 w-5 h-5 rounded border-2 border-purple-400" />
        <div>
          <p className="font-semibold text-foreground mb-1">
            ¿Qué 3 cosas básicas necesita tu Regenmon para "nacer"?
          </p>
          <p className="text-sm text-muted-foreground">
            Respuesta: nombre, tipo (fuego/agua/planta), imagen generada
          </p>
        </div>
      </label>
    </div>

    {/* Pregunta 2 */}
    <div className="glass-card p-4">
      <label className="flex items-start gap-3 cursor-pointer">
        <input type="checkbox" className="mt-1 w-5 h-5 rounded border-2 border-purple-400" />
        <div>
          <p className="font-semibold text-foreground mb-1">
            ¿Dónde está tu app ahora?
          </p>
          <p className="text-sm text-muted-foreground">
            Respuesta: en internet (Vercel), funcionando 24/7
          </p>
        </div>
      </label>
    </div>

    {/* Pregunta 3 */}
    <div className="glass-card p-4">
      <label className="flex items-start gap-3 cursor-pointer">
        <input type="checkbox" className="mt-1 w-5 h-5 rounded border-2 border-purple-400" />
        <div>
          <p className="font-semibold text-foreground mb-1">
            Si cierras tu navegador, ¿tu Regenmon sigue existiendo?
          </p>
          <p className="text-sm text-muted-foreground">
            Respuesta: SÍ, porque está en internet (no en tu computadora)
          </p>
        </div>
      </label>
    </div>

    {/* Pregunta 4 */}
    <div className="glass-card p-4">
      <label className="flex items-start gap-3 cursor-pointer">
        <input type="checkbox" className="mt-1 w-5 h-5 rounded border-2 border-purple-400" />
        <div>
          <p className="font-semibold text-foreground mb-1">
            ¿Qué significa "deploy"?
          </p>
          <p className="text-sm text-muted-foreground">
            Respuesta: subir tu app a internet para que todos puedan verla
          </p>
        </div>
      </label>
    </div>
  </div>

  <div className="mt-6 bg-purple-400/10 border border-purple-400/30 rounded-lg p-4">
    <p className="text-sm text-foreground">
      <strong>💡 Si no puedes responder alguna:</strong> Regresa a la sección
      "Material de Apoyo" de esta sesión y repasa los conceptos.
    </p>
  </div>
</div>
```

**Preguntas específicas por sesión**:

**Sesión 1**:
1. ¿Qué 3 cosas básicas necesita tu Regenmon para "nacer"?
2. ¿Dónde está tu app ahora?
3. Si cierras tu navegador, ¿tu Regenmon sigue existiendo?
4. ¿Qué significa "deploy"?

**Sesión 2**:
1. ¿Qué es una API Key y por qué la necesitas?
2. Cuando tu Regenmon habla, ¿quién genera las respuestas?
3. ¿Dónde están guardadas las conversaciones anteriores?
4. ¿Qué es el "contexto" en IA?

**Sesión 3**:
1. ¿Cuál es la diferencia entre localStorage y base de datos?
2. ¿Por qué necesitas un sistema de login?
3. ¿Qué pasa con tus monedas si borras el localStorage?
4. ¿Cómo sabe la app que TU Regenmon es diferente al de otros?

**Sesión 4**:
1. ¿Qué significa "multimodal" en IA?
2. ¿Cómo funciona la evaluación de fotos?
3. ¿Dónde se guarda el progreso de evolución?
4. ¿Qué hace que tu Regenmon suba de nivel?

**Sesión 5**:
1. ¿Cuál es la diferencia entre "ver" y "editar" en modo visita?
2. ¿Dónde se guardan las interacciones sociales?
3. ¿Cómo funciona el sistema de notificaciones?
4. ¿Qué hace que tu Regenmon sea parte de una "comunidad"?

**Criterios de Aceptación**:
- [ ] Checkpoint agregado a las 5 sesiones
- [ ] 4 preguntas por sesión con respuestas
- [ ] Checkboxes funcionales (aunque solo frontend)
- [ ] Link para regresar a Material de Apoyo

---

## 🟢 PRIORIDAD MEDIA (Mejoras adicionales)

### Ticket #7: Reordenar Sidebar para Flujo Pedagógico
**Problema**: Orden actual no sigue lógica de aprendizaje
**Impacto**: Menor, pero puede mejorar experiencia
**Esfuerzo**: 1 hora

**Archivo a modificar**: `src/components/doc/DocSidebar.tsx`

**Orden actual**:
1. Introducción
2. Inicio Rápido
3. Recursos
4. Las 5 Capas
5. Temario
6. Sesiones

**Orden propuesto**:
1. Introducción (motivación)
2. Las 5 Capas (marco conceptual)
3. Temario (qué aprenderás)
4. Inicio Rápido (setup técnico)
5. Recursos (herramientas)
6. Sesiones (construcción)

**Justificación**: Conceptos antes de herramientas

**Criterios de Aceptación**:
- [ ] Sidebar reordenado según flujo pedagógico
- [ ] Validar que no rompa rutas existentes
- [ ] Testing de navegación funcional

---

### Ticket #8: Agregar Sección "Traducción Técnica" Inline
**Problema**: Términos técnicos sin contexto inmediato
**Impacto**: Fricción leve en comprensión
**Esfuerzo**: 2-3 horas

**Estrategia**: Usar formato inline para introducir términos

**Patrón a seguir**:

**Antes**:
```tsx
<p>Necesitas una API Key para usar Claude</p>
```

**Después**:
```tsx
<p>
  Necesitas una <strong>API Key</strong> (contraseña especial para usar IA)
  para conectar con Claude
</p>
```

**Términos prioritarios para traducir**:
- API Key → (contraseña especial para usar IA)
- Deploy → (subir tu app a internet)
- Producción → (tu app funcionando 24/7 en internet)
- localStorage → (memoria del navegador)
- Base de datos → (memoria permanente en internet)
- Token → (pase temporal que prueba que hiciste login)
- Contexto → (lo que la IA recuerda de antes)
- Multimodal → (IA que entiende texto + imágenes)
- Componente → (pieza reutilizable de tu interfaz)
- Estado → (información que cambia en tu app)

**Archivos a modificar**: Todos los `Session[1-5].tsx`

**Criterios de Aceptación**:
- [ ] 10+ términos con traducción inline
- [ ] Formato consistente: **término** (explicación simple)
- [ ] No saturar con demasiadas traducciones por párrafo

---

### Ticket #9: Crear Componente de Analogías Visuales
**Problema**: Conceptos abstractos sin referentes concretos
**Impacto**: Dificulta comprensión para pensadores visuales
**Esfuerzo**: 3-4 horas

**Archivo a crear**: `src/components/doc/AnalogyCard.tsx`

```tsx
interface AnalogyCardProps {
  technical: string;
  analogy: string;
  explanation: string;
}

export const AnalogyCard = ({ technical, analogy, explanation }: AnalogyCardProps) => {
  return (
    <div className="glass-card p-6 bg-gradient-to-r from-blue-400/10 to-purple-400/10 border-2 border-blue-400/30">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-3xl">🔄</span>
        <h3 className="text-xl font-bold text-blue-400">Analogía</h3>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-muted-foreground mb-2">Concepto técnico:</p>
          <p className="font-semibold text-foreground">{technical}</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground mb-2">Como:</p>
          <p className="font-semibold text-orange-400">{analogy}</p>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-border/50">
        <p className="text-foreground text-sm">{explanation}</p>
      </div>
    </div>
  );
};
```

**Uso en sesiones**:

```tsx
<AnalogyCard
  technical="API Key para Claude"
  analogy="Llave de tu casa"
  explanation="Así como solo tú tienes la llave de tu casa, la API Key es tu 'llave personal' para usar los servicios de Claude. Sin ella, la puerta está cerrada."
/>

<AnalogyCard
  technical="Deploy a producción"
  analogy="Publicar un video en YouTube"
  explanation="Trabajaste en tu video (app) en tu computadora. Hacer deploy es como subirlo a YouTube (internet) para que todos puedan verlo cuando quieran."
/>

<AnalogyCard
  technical="Base de datos vs localStorage"
  analogy="Tu closet vs un almacén"
  explanation="localStorage es como tu closet personal (solo tú accedes, pero si te mudas lo pierdes). Base de datos es como un almacén profesional (siempre está ahí, desde cualquier lugar)."
/>
```

**Criterios de Aceptación**:
- [ ] Componente AnalogyCard creado y funcional
- [ ] Al menos 2 analogías por sesión
- [ ] Analogías validadas con personas no técnicas

---

### Ticket #10: Mejorar Sección de "Listo para empezar"
**Problema**: Transición débil entre teoría y práctica
**Impacto**: Falta de motivación para dar el primer paso
**Esfuerzo**: 1 hora

**Archivo a modificar**: `src/pages/doc/Introduction.tsx`

**Sección actual** (mejorar):
```tsx
<div>
  <h2>Listo para empezar?</h2>
  <p>Comienza por Quick Start para configurar tu entorno, luego ve directo a Sesión 1.
  En 2-3 horas tendrás tu primera app desplegada en internet.</p>
  <Link to="/doc/quick-start">Configuración Inicial</Link>
  <Link to="/doc/session-1">Ir a Sesión 1</Link>
</div>
```

**Versión mejorada**:
```tsx
<div className="glass-card p-8 mt-12 bg-gradient-to-br from-orange-400/20 to-pink-400/20 border-2 border-orange-400">
  <h2 className="text-3xl font-bold gradient-text mb-6">
    🚀 Listo para crear tu primer Regenmon?
  </h2>

  <div className="grid md:grid-cols-2 gap-6 mb-8">
    <div className="glass-card p-6">
      <h3 className="text-xl font-bold text-orange-400 mb-3">
        📝 Paso 1: Quick Start (20 min)
      </h3>
      <p className="text-foreground mb-4">
        Configura tu entorno una sola vez. Crea cuentas en v0 y Vercel, conecta todo.
      </p>
      <Link
        to="/doc/quick-start"
        className="inline-flex items-center gap-2 bg-orange-400 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-500 transition-colors"
      >
        <span>Empezar Setup</span>
        <span>→</span>
      </Link>
    </div>

    <div className="glass-card p-6">
      <h3 className="text-xl font-bold text-pink-400 mb-3">
        🥚 Paso 2: Sesión 1 (2-3 horas)
      </h3>
      <p className="text-foreground mb-4">
        Construye tu primer Regenmon y publícalo en internet. Esta noche ya tendrás tu app funcionando.
      </p>
      <Link
        to="/doc/session-1"
        className="inline-flex items-center gap-2 bg-pink-400 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-500 transition-colors"
      >
        <span>Ir a Sesión 1</span>
        <span>→</span>
      </Link>
    </div>
  </div>

  <div className="bg-white/5 border border-white/10 rounded-lg p-6">
    <p className="text-foreground mb-4">
      <strong>💡 Recomendación:</strong>
    </p>
    <p className="text-muted-foreground mb-4">
      Si tienes 3-4 horas disponibles HOY, haz Quick Start + Sesión 1 seguidas.
      Vas a terminar con tu primera app en internet y ese momentum es CLAVE para
      mantener la motivación.
    </p>
    <p className="text-sm text-muted-foreground italic">
      "La mayoría de la gente que completa Sesión 1 el primer día termina todo el bootcamp.
      Los que lo dejan para mañana... a veces nunca empiezan." - Brian, creador de VibeCoding
    </p>
  </div>
</div>
```

**Criterios de Aceptación**:
- [ ] CTA más visual y atractivo
- [ ] Pasos numerados claramente
- [ ] Estimaciones de tiempo prominentes
- [ ] Motivación con quote o testimonio

---

## 📊 RESUMEN DE IMPACTO ESPERADO

### Antes de Implementar Tickets
- **Comprensibilidad**: 7.5/10
- **Tasa de abandono estimada**: 40-50% entre sesiones
- **Solicitudes de soporte**: Alta (términos confusos)

### Después de Implementar Tickets Críticos (#1-3)
- **Comprensibilidad**: 8.5/10
- **Tasa de abandono estimada**: 25-30%
- **Solicitudes de soporte**: Media-Baja

### Después de Implementar Todos los Tickets
- **Comprensibilidad**: 9/10
- **Tasa de abandono estimada**: 15-20%
- **Solicitudes de soporte**: Baja
- **NPS esperado**: 70-80 (promotores)

---

## 📋 CHECKLIST DE IMPLEMENTACIÓN

### Semana 1: Críticos
- [ ] Ticket #1: Glosario Rápido
- [ ] Ticket #2: Puentes entre sesiones
- [ ] Ticket #3: Errores comunes

### Semana 2: Altos
- [ ] Ticket #4: Corregir número de sesiones
- [ ] Ticket #5: Timeline visual
- [ ] Ticket #6: Checkpoints de comprensión

### Semana 3: Medios
- [ ] Ticket #7: Reordenar sidebar
- [ ] Ticket #8: Traducción técnica inline
- [ ] Ticket #9: Analogías visuales
- [ ] Ticket #10: Mejorar "Listo para empezar"

---

## 🎯 MÉTRICAS DE ÉXITO

**Objetivos cuantificables**:
1. ✅ Reducir tiempo promedio de soporte por usuario en 50%
2. ✅ Aumentar tasa de completación del bootcamp de 60% a 85%
3. ✅ Reducir preguntas repetitivas en comunidad en 60%
4. ✅ NPS (Net Promoter Score) sobre 70

**Cómo medir**:
- Encuesta post-sesión: "¿Entendiste todos los conceptos? (1-10)"
- Analytics: Tiempo en cada página de documentación
- Tracking: % que completa cada checkpoint
- Intercom/soporte: Número de tickets por categoría

---

## 💬 NOTAS FINALES

**Priorización**:
Los tickets #1, #2 y #3 son CRÍTICOS porque:
- Eliminan los 3 bloqueadores principales identificados
- Impactan a 100% de los Vibecoders
- ROI inmediato en reducción de soporte

**Mantenimiento**:
Una vez implementado, el sistema debe:
- Actualizarse con nuevos errores comunes (feedback loop)
- Refinarse según métricas de uso real
- Expandirse con más analogías según necesidad

**Colaboración**:
Ideal validar tickets #2 (puentes) y #9 (analogías) con 3-5 Vibecoders reales antes de implementar para garantizar efectividad.

---

**Generado**: 2 de febrero de 2026
**Contacto**: brian@frutero.club
**Repositorio**: c:\Users\Datos\Vibe-Coding
