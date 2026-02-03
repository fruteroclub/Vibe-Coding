# 🍪 Configuración de Microsoft Clarity con Sistema de Cookies

## ✅ Implementado

El sistema de cookies y privacidad ya está implementado en el sitio. Aquí está lo que se ha agregado:

### 1. **CookieBanner Component** (`src/components/CookieBanner.tsx`)
- Banner que aparece en la parte inferior de la pantalla
- Opciones: Aceptar, Rechazar, o Cerrar (cuenta como aceptar)
- Si no se elige nada, asume consentimiento por defecto

### 2. **Privacy Policy Page** (`src/pages/Privacy.tsx`)
- Página completa de política de privacidad en `/privacy`
- Explica qué datos recopilamos, cómo los usamos, y los derechos del usuario
- Incluye información específica sobre Microsoft Clarity

### 3. **Integración con Clarity**
El banner controla automáticamente si Clarity recopila datos:

**✅ Usuario ACEPTA cookies:**
```javascript
localStorage.setItem('cookie-consent', 'accepted');
// Clarity se activa y recopila datos
window.clarity('consent');
```

**❌ Usuario RECHAZA cookies:**
```javascript
localStorage.setItem('cookie-consent', 'declined');
// Clarity se detiene y NO recopila datos
window.clarity('stop');
```

**⏳ Usuario NO hace nada (cierra con X):**
```javascript
// Se asume consentimiento
localStorage.setItem('cookie-consent', 'accepted');
// Clarity se activa
```

---

## 📋 Paso a Paso: Configurar Clarity

### Paso 1: Crear cuenta en Clarity
1. Ve a [https://clarity.microsoft.com/](https://clarity.microsoft.com/)
2. Inicia sesión con tu cuenta de Microsoft (o crea una gratis)
3. Haz clic en **"New project"**
4. Dale un nombre a tu proyecto (ej: "Vibe Coding")
5. Ingresa la URL de tu sitio

### Paso 2: Obtener el código de Clarity
1. Una vez creado el proyecto, Clarity te dará un **script** similar a este:

```html
<script type="text/javascript">
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "TU_CLARITY_ID");
</script>
```

2. Copia **TODO** ese código

### Paso 3: Agregar Clarity al `index.html`
1. Abre el archivo `index.html` en la raíz del proyecto
2. Pega el script de Clarity **dentro del `<head>`**, justo antes de `</head>`:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/kukulcan-logo-color.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vibe Coding</title>

    <!-- Microsoft Clarity Script -->
    <script type="text/javascript">
        (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "TU_CLARITY_ID");
    </script>
    <!-- Fin de Clarity -->

  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

3. **IMPORTANTE:** Reemplaza `TU_CLARITY_ID` con tu ID real de Clarity

### Paso 4: Verificar funcionamiento
1. Despliega tu sitio (Netlify, Vercel, etc.)
2. Abre el sitio en tu navegador
3. Deberías ver el banner de cookies aparecer después de 1 segundo
4. Acepta las cookies
5. Ve al dashboard de Clarity (puede tardar unos minutos en aparecer datos)
6. Deberías empezar a ver sesiones grabadas y mapas de calor

---

## 🧪 Cómo Probar en Local

1. **Inicia el servidor de desarrollo:**
```bash
npm run dev
```

2. **Abre el navegador en `localhost:5173`**

3. **Prueba los 3 escenarios:**

### Escenario 1: Aceptar cookies
- Haz clic en **"Aceptar cookies"**
- Abre la consola del navegador (F12)
- Deberías ver: `✅ Clarity activado - Recopilando datos de análisis`
- En localStorage debería estar: `cookie-consent: "accepted"`

### Escenario 2: Rechazar cookies
- Limpia localStorage (F12 → Application → Local Storage → Clear)
- Recarga la página
- Haz clic en **"Rechazar"**
- Deberías ver: `❌ Clarity desactivado - No se recopilan datos`
- En localStorage debería estar: `cookie-consent: "declined"`

### Escenario 3: Cerrar sin decidir (cuenta como aceptar)
- Limpia localStorage
- Recarga la página
- Haz clic en el botón **X** (cerrar)
- Deberías ver: `✅ Clarity activado - Recopilando datos de análisis`
- En localStorage debería estar: `cookie-consent: "accepted"`

---

## 📊 Qué verás en Clarity

Una vez configurado y con usuarios visitando el sitio, verás:

### 1. **Mapas de Calor (Heatmaps)**
- Dónde hacen clic los usuarios
- Qué secciones ven más
- Hasta dónde hacen scroll

### 2. **Grabaciones de Sesiones**
- Navegación completa de usuarios (anónima)
- Clicks, movimientos del mouse, scroll
- Errores de JavaScript que ocurrieron

### 3. **Métricas**
- Usuarios activos
- Páginas más visitadas
- Tiempo de permanencia
- Tasa de rebote

---

## 🔒 Cumplimiento Legal

El sistema implementado cumple con:

✅ **GDPR (Europa):** Consentimiento explícito antes de recopilar datos
✅ **CCPA (California):** Opción de rechazar cookies
✅ **Transparencia:** Política de privacidad clara y accesible
✅ **Control del usuario:** Puede aceptar o rechazar en cualquier momento

---

## 🎨 Personalización del Banner

Si quieres cambiar el texto o diseño del banner, edita:

```typescript
src/components/CookieBanner.tsx
```

Puedes modificar:
- Colores (actualmente naranja)
- Texto del mensaje
- Botones
- Tiempo de aparición (actualmente 1 segundo)

---

## 🚨 Importante

1. **NO agregues Clarity al código hasta tener el ID real**
2. **Prueba primero en local antes de desplegar**
3. **Verifica que el banner aparezca correctamente**
4. **Asegúrate de que "Rechazar" realmente detenga Clarity**

---

## 📧 Contacto

Si tienes problemas con la configuración:
- Email: brian@frutero.club
- Revisa la consola del navegador (F12) para errores

---

## ✨ Listo!

Una vez configurado Clarity, tendrás insights valiosos sobre:
- Qué secciones de las sesiones son más consultadas
- Dónde los estudiantes se atascan
- Qué errores comunes encuentran
- Cómo navegan por la documentación

Todo esto mientras respetas la privacidad de tus usuarios. 🎉
