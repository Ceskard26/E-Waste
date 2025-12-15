# 🚀 Guía de Deploy - E-waste

## Preparación para Deploy

### 1. Verificar que todo funciona localmente
```bash
npm run build
npm run start
```

### 2. Actualizar URLs en el código
- Cambiar `http://localhost:3000` por tu dominio final
- Actualizar enlaces en README.md

### 3. Variables de entorno (si las necesitas)
```bash
# En Vercel, agregar en Settings > Environment Variables
NEXT_PUBLIC_APP_URL=https://tu-dominio.vercel.app
```

## Deploy en Vercel (Recomendado)

### Paso 1: Preparar GitHub
1. Asegúrate de que tu código esté en GitHub
2. Haz commit de todos los cambios

### Paso 2: Deploy en Vercel
1. Ve a [vercel.com](https://vercel.com)
2. Haz clic en "Sign up" con GitHub
3. Importa tu repositorio `E-Waste`
4. Vercel detectará automáticamente que es Next.js
5. Haz clic en "Deploy"

### Paso 3: Configuración (opcional)
- **Dominio personalizado**: Settings > Domains
- **Variables de entorno**: Settings > Environment Variables
- **Analytics**: Settings > Analytics

## URLs después del deploy

Tu app estará disponible en:
- **Vercel**: `https://e-waste-[tu-usuario].vercel.app`
- **Páginas principales**:
  - Landing: `/`
  - Demo: `/app`
  - Canvas: `/canvas`
  - One Pager: `/one-pager`
  - Roadmap: `/roadmap`
  - Equipo: `/equipo`

## Actualizaciones automáticas

Una vez configurado:
1. Haces cambios en tu código local
2. `git push` a GitHub
3. Vercel automáticamente redeploya
4. Tu app se actualiza en ~2 minutos

## Monitoreo

Vercel te da:
- **Analytics** de visitantes
- **Logs** de errores
- **Performance** metrics
- **Uptime** monitoring

## Costos

- **Vercel Free**: 
  - 100GB bandwidth/mes
  - Unlimited sitios estáticos
  - Perfecto para tu hackathon

- **Vercel Pro** ($20/mes):
  - Solo si necesitas más bandwidth
  - Funciones serverless ilimitadas

## Dominio personalizado (opcional)

Si quieres `ewaste.com` en lugar de `*.vercel.app`:
1. Compra dominio en Namecheap/GoDaddy (~$10/año)
2. Agrégalo en Vercel Settings > Domains
3. Configura DNS según instrucciones de Vercel

## Backup y seguridad

- ✅ Código en GitHub (backup automático)
- ✅ SSL automático (HTTPS)
- ✅ CDN global (velocidad)
- ✅ DDoS protection incluido