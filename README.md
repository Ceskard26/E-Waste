# E-waste - Reconoce residuos electrónicos con una foto

![E-waste Logo](https://via.placeholder.com/200x100/22c55e/ffffff?text=E-waste)

## 🌍 Problema y Solución

### El Problema
- Las empresas y hogares desechan e-waste sin información clara y segura
- Se pierde valor recuperable (metales y componentes) por mala segregación  
- Falta una guía simple: qué es, qué contiene y qué hacer con ello

### Nuestra Solución
Aplicación web que identifica residuos electrónicos desde una foto y proporciona:
- **Clasificación automática** del tipo de e-waste
- **Información de materiales** y componentes
- **Tiempo de degradación estimado**
- **Nivel de riesgo ambiental**
- **Guías accionables** para reciclaje y reutilización

## 🚀 Cómo correr el proyecto

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Instalación
```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/e-waste.git
cd e-waste

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`

### Scripts disponibles
```bash
npm run dev      # Desarrollo
npm run build    # Construcción para producción
npm run start    # Servidor de producción
npm run lint     # Linting
```

## 🎯 Demo vs Futuro Real

### Versión Actual (Hackathon - Mock Demo)
- **Clasificación simulada** - No hay modelo de ML real
- **4 categorías soportadas**: Pilas/baterías, cables, discos duros, partes de servidores
- **Datos hardcodeados** para materiales, degradación y guías
- **Confianza aleatoria** entre 78-96%
- **Almacenamiento local** para formularios

### Versión Futura (Roadmap)
- **Modelo de ML real** entrenado con dataset de e-waste
- **15+ categorías** de residuos electrónicos
- **API de clasificación** con confianza real
- **Base de datos** de centros de reciclaje por ubicación
- **Dashboard empresarial** con métricas ambientales
- **Integración con gestores** de residuos autorizados

## 📋 Entregables del Hackathon

Accede a todos los entregables directamente desde la aplicación:

- **[Canvas del proyecto](http://localhost:3000/canvas)** - Modelo de negocio Lean Canvas
- **[One Pager](http://localhost:3000/one-pager)** - Resumen ejecutivo del proyecto  
- **[Roadmap](http://localhost:3000/roadmap)** - Plan de desarrollo a 6+ meses
- **[Equipo](http://localhost:3000/equipo)** - Perfiles y responsabilidades
- **[Demo funcional](http://localhost:3000/app)** - Prototipo interactivo

## 🔬 Validación del Problema

### Metodología
- **10 entrevistas** en profundidad con empresas y personas
- **30 respuestas** de encuesta online
- **Tasa de validación**: 85%

### Hallazgo Clave
> "La mayoría no sabe cómo desechar pilas y partes de PC/servidor de forma segura"

### Evidencia
- 78% no conoce centros de acopio especializados
- 65% mezcla e-waste con basura común
- 89% estaría dispuesto a usar una guía digital

## 🛣️ Roadmap y Próximos Pasos

### Fase 1 (0-1 mes) - Validación ✅
- [x] Demo mock funcional
- [x] Validación del problema
- [x] Landing page y formularios
- [x] Entregables del hackathon

### Fase 2 (1-3 meses) - MVP Real
- [ ] Modelo de ML para clasificación
- [ ] Ampliación a 10+ categorías
- [ ] API de clasificación
- [ ] Dashboard básico para empresas

### Fase 3 (3-6 meses) - Escalabilidad
- [ ] Alianzas con empresas y municipios
- [ ] Métricas ambientales (CO₂, materiales)
- [ ] Sistema de trazabilidad
- [ ] Certificaciones ESG

### Fase 4 (6+ meses) - Impacto
- [ ] Modelo SaaS consolidado
- [ ] Marketplace de componentes
- [ ] Expansión LATAM
- [ ] Impacto medible en economía circular

## 🎯 Objetivos de Desarrollo Sostenible

- **ODS 12**: Producción y consumo responsables
- **ODS 13**: Acción por el clima

## 🏗️ Arquitectura Técnica

### Stack Tecnológico
- **Frontend**: Next.js 14, React, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui
- **Animaciones**: Framer Motion
- **Iconos**: Lucide React
- **Almacenamiento**: localStorage (temporal)
- **Despliegue**: Vercel (recomendado)

### Estructura del Proyecto
```
├── app/                 # App Router de Next.js
│   ├── (pages)/        # Páginas principales
│   └── globals.css     # Estilos globales
├── components/         # Componentes reutilizables
│   ├── ui/            # Componentes base (shadcn/ui)
│   ├── sections/      # Secciones de landing
│   └── demo/          # Componentes del demo
├── lib/               # Utilidades y configuración
├── hooks/             # Custom hooks
└── public/            # Assets estáticos
```

## 🤝 Limitaciones Actuales

### Técnicas
- No hay modelo de ML real (clasificación simulada)
- Datos hardcodeados para materiales y guías
- Sin backend ni base de datos
- Almacenamiento solo en localStorage

### De Negocio
- Validación limitada a mercado local
- Sin alianzas con gestores de residuos
- Modelo de ingresos no validado
- Métricas de impacto estimadas

## 👥 Equipo

- **César Carrasco** - PM/Pitch, Backend, Marketing
- **Brenda Mendoza** - ML/Data, Frontend, Investigación de impacto

## 📞 Contacto

- **Email**: team@e-waste.com
- **LinkedIn**: [Perfil del proyecto](#)
- **GitHub**: [Repositorio](#)

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

---

**¿Te interesa colaborar?** Estamos abiertos a mentorías, alianzas y oportunidades de crecimiento. ¡Contáctanos!

## 🙏 Agradecimientos

- Hackathon ISC por la oportunidad
- Mentores y jurados por su feedback
- Comunidad open source por las herramientas
- Empresas entrevistadas por su tiempo y honestidad