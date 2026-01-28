# 🔍 Guía: Google Search Console Setup

## Paso 1: Acceder a Google Search Console

1. Ve a: https://search.google.com/search-console
2. Inicia sesión con tu cuenta de Google
3. Clic en "Agregar propiedad"

## Paso 2: Elegir Método de Verificación

Tienes varias opciones:

### **Opción A: Verificación HTML (Recomendada)**

1. Google te dará un archivo HTML como: `google1234567890abcdef.html`
2. Descarga ese archivo
3. Súbelo a la carpeta `public/` de tu proyecto
4. Haz deploy
5. Verifica que funcione visitando: `https://bootcamp.frutero.club/google1234567890abcdef.html`
6. En Google Search Console, clic en "Verificar"

### **Opción B: Verificación con Meta Tag**

1. Google te dará un meta tag como:
```html
<meta name="google-site-verification" content="1234567890abcdefghijk" />
```

2. Agrega este tag en tu `index.html` en la sección `<head>`:

```html
<!-- En index.html, después de las otras meta tags -->
<meta name="google-site-verification" content="TU_CODIGO_AQUI" />
```

3. Haz deploy
4. En Google Search Console, clic en "Verificar"

### **Opción C: Verificación con Google Analytics**

Si ya tienes Google Analytics instalado:
1. Selecciona "Google Analytics"
2. Asegúrate de que el tracking code esté en tu sitio
3. Clic en "Verificar"

### **Opción D: Verificación DNS**

Si tienes acceso al DNS de frutero.club:
1. Google te dará un registro TXT
2. Agrégalo a tu DNS en tu proveedor de dominio
3. Espera propagación DNS (5-30 minutos)
4. Clic en "Verificar"

## Paso 3: Después de Verificar

Una vez verificado:

### **1. Sube tu Sitemap**
1. En el menú lateral, ve a "Sitemaps"
2. Ingresa: `sitemap.xml`
3. Clic en "Enviar"

### **2. Solicita Indexación**
1. En "Inspección de URLs"
2. Pega: `https://bootcamp.frutero.club/`
3. Clic en "Solicitar indexación"

### **3. Configura Mejoras**
1. Ve a "Experiencia" → "Core Web Vitals"
2. Revisa métricas de velocidad
3. Corrige problemas si hay

### **4. Configura Alertas**
1. Ve a "Configuración"
2. Activa notificaciones por email
3. Te avisará de problemas

## Paso 4: Monitoreo Semanal

**Revisa cada semana:**

1. **Rendimiento:**
   - Clics totales
   - Impresiones
   - CTR promedio
   - Posición promedio

2. **Cobertura:**
   - Páginas indexadas
   - Páginas con errores
   - Páginas excluidas

3. **Mejoras:**
   - Usabilidad móvil
   - Core Web Vitals
   - Datos estructurados

4. **Enlaces:**
   - Enlaces externos (backlinks)
   - Enlaces internos

## Métricas a Monitorear

### **Semana 1-2:**
- Verificar que todas las páginas se indexen
- 10-50 impresiones esperadas

### **Mes 1:**
- 100-500 impresiones
- 1-10 clics
- Posición promedio: 50-100

### **Mes 3:**
- 1,000-5,000 impresiones
- 50-200 clics
- Posición promedio: 20-50

### **Mes 6:**
- 10,000+ impresiones
- 500+ clics
- Posición promedio: 10-30

## Troubleshooting

### **Problema: No se verifica el sitio**
- Asegúrate de que el archivo/tag esté en producción
- Limpia caché del navegador
- Espera 24-48 horas y vuelve a intentar

### **Problema: Páginas no se indexan**
- Verifica que `robots.txt` permita crawling
- Revisa que el sitemap esté correcto
- Solicita indexación manual

### **Problema: CTR muy bajo**
- Mejora tus títulos y descripciones
- Usa números y preguntas
- Agrega emojis (con moderación)

## Recursos Adicionales

- **Google Search Central:** https://developers.google.com/search
- **Ayuda de Search Console:** https://support.google.com/webmasters
- **Guía de SEO de Google:** https://developers.google.com/search/docs/beginner/seo-starter-guide
