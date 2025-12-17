# 🚀 Opciones de Deployment - E-waste

## 1. 🐳 **Containerización (Docker)**

### Comandos básicos:
```bash
# Construir imagen
docker build -t e-waste .

# Correr localmente
docker run -p 3000:3000 e-waste

# Con docker-compose
docker-compose up -d
```

### Deploy en IBM Code Engine:
```bash
# Login a IBM Cloud
ibmcloud login

# Crear proyecto
ibmcloud ce project create --name e-waste-project

# Deploy desde GitHub
ibmcloud ce app create --name e-waste \
  --source https://github.com/Ceskard26/E-Waste \
  --strategy dockerfile \
  --port 3000
```

## 2. 🖥️ **Máquina Virtual**

### DigitalOcean Droplet ($5/mes):
```bash
# 1. Crear droplet Ubuntu 22.04
# 2. SSH al servidor
ssh root@your-server-ip

# 3. Instalar Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
apt-get install -y nodejs

# 4. Clonar y setup
git clone https://github.com/Ceskard26/E-Waste.git
cd E-Waste
npm install
npm run build

# 5. Instalar PM2 para producción
npm install -g pm2
pm2 start npm --name "e-waste" -- start
pm2 startup
pm2 save

# 6. Nginx como reverse proxy
apt install nginx
# Configurar nginx para puerto 80 -> 3000
```

### AWS EC2 (Free Tier):
```bash
# Similar a DigitalOcean pero en AWS
# t2.micro gratis por 12 meses
```

## 3. ☁️ **Serverless (Recomendado para hackathon)**

### Vercel (Gratis):
- Conectar GitHub repo
- Deploy automático
- SSL incluido
- CDN global

### Netlify (Gratis):
```bash
# Build command: npm run build
# Publish directory: out
# Requiere configuración para Next.js
```

## 📊 **Comparación de Costos:**

| Opción | Costo/mes | Setup | Mantenimiento | SSL | Escalabilidad |
|--------|-----------|-------|---------------|-----|---------------|
| Vercel | $0 | 2 min | Automático | ✅ | ✅ |
| DigitalOcean | $5 | 30 min | Manual | Manual | Manual |
| AWS EC2 | $0-15 | 45 min | Manual | Manual | Manual |
| Code Engine | $0-10 | 15 min | Automático | ✅ | ✅ |

## 🎯 **Recomendación por caso:**

### **Para Hackathon (Ahora):**
**Vercel** - Deploy en 2 minutos, gratis, profesional

### **Para Producción (Futuro):**
**Code Engine** - Escalable, profesional, IBM Cloud

### **Para Aprender DevOps:**
**DigitalOcean Droplet** - Control total, barato

## 🔧 **Scripts útiles:**

### Para VM:
```bash
# deploy.sh
#!/bin/bash
git pull origin main
npm install
npm run build
pm2 restart e-waste
```

### Para Docker:
```bash
# build-and-deploy.sh
#!/bin/bash
docker build -t e-waste .
docker stop e-waste-container || true
docker rm e-waste-container || true
docker run -d --name e-waste-container -p 3000:3000 e-waste
```