export type Locale = 'es' | 'en'

export const translations = {
  es: {
    // Navigation
    home: 'Inicio',
    demo: 'Demo',
    canvas: 'Canvas',
    onePager: 'One Pager',
    roadmap: 'Roadmap',
    team: 'Equipo',
    tryDemo: 'Probar demo',
    
    // Hero
    heroHeadline: 'Reconoce residuos electrónicos con una foto.',
    heroSubheadline: 'Identifica el tipo de e-waste, sus materiales, cuánto tarda en degradarse y cómo reciclar o reutilizarlo (demo simulada).',
    circularEconomy: 'Economía Circular',
    educationalPrototype: 'Prototipo educativo',
    enterpriseFocus: 'Enfoque empresas',
    viewOnePager: 'Ver One Pager',
    
    // Problem
    theProblem: 'El problema',
    problemBullet1: 'Las empresas y hogares desechan e-waste sin información clara y segura.',
    problemBullet2: 'Se pierde valor recuperable (metales y componentes) por mala segregación.',
    problemBullet3: 'Falta una guía simple: qué es, qué contiene y qué hacer con ello.',
    
    // How it works
    howItWorks: 'Cómo funciona',
    step1Title: '1) Sube una foto',
    step1Desc: 'Toma una foto del residuo (pila, cable, disco, servidor).',
    step2Title: '2) Clasificación (mock)',
    step2Desc: 'La demo simula el reconocimiento y muestra un resultado con confianza.',
    step3Title: '3) Guía accionable',
    step3Desc: 'Materiales, degradación estimada, riesgo e ideas de reciclaje/reutilización.',
    
    // MVP
    mvpTitle: 'MVP (hackathon)',
    batteries: 'Pilas / baterías',
    cables: 'Cables',
    hardDrives: 'Discos duros',
    serverParts: 'Partes de servidores',
    
    // Impact
    impactTitle: 'Impacto (objetivo)',
    correctlySorted: 'E-waste segregado correctamente',
    recoverableValue: 'Valor recuperable identificado',
    environmentalAwareness: 'Conciencia y educación ambiental',
    responsibleConsumption: 'Producción y consumo responsables',
    climateAction: 'Acción por el clima',
    
    // Validation
    validationTitle: 'Validación (problema)',
    validationNote: 'En esta etapa presentamos validación del problema (entrevistas/encuesta). La clasificación por imagen está en modo demo simulada.',
    keyFinding: 'La mayoría no sabe cómo desechar pilas y partes de PC/servidor de forma segura.',
    
    // Forms
    joinList: 'Únete a la lista',
    quickFeedback: 'Feedback rápido',
    name: 'Nombre',
    email: 'Correo',
    iAm: 'Soy',
    individual: 'Persona',
    company: 'Empresa',
    signUp: 'Registrarme',
    whatDiscard: '¿Qué desechas más?',
    mainDifficulty: 'Principal dificultad',
    comment: 'Comentario (opcional)',
    send: 'Enviar',
    
    // Demo
    uploadPhoto: 'Subir foto',
    selectExample: 'Seleccionar ejemplo',
    analyzing: 'Analizando...',
    confidence: 'Confianza',
    materials: 'Materiales',
    degradationTime: 'Tiempo de degradación',
    riskLevel: 'Nivel de riesgo',
    reuseIdeas: 'Ideas de reutilización',
    recycleIdeas: 'Ideas de reciclaje',
    years: 'años',
    high: 'Alto',
    medium: 'Medio',
    low: 'Bajo',
    
    // Disclaimers
    disclaimer1: 'La degradación es una estimación y varía por condiciones.',
    disclaimer2: 'Esta versión es un prototipo educativo con demo simulada.',
  },
  en: {
    // Navigation
    home: 'Home',
    demo: 'Demo',
    canvas: 'Canvas',
    onePager: 'One Pager',
    roadmap: 'Roadmap',
    team: 'Team',
    tryDemo: 'Try demo',
    
    // Hero
    heroHeadline: 'Recognize electronic waste with a photo.',
    heroSubheadline: 'Identify e-waste type, materials, estimated degradation time, and how to recycle or reuse it (mock demo).',
    circularEconomy: 'Circular Economy',
    educationalPrototype: 'Educational prototype',
    enterpriseFocus: 'Enterprise focus',
    viewOnePager: 'View One Pager',
    
    // Problem
    theProblem: 'The problem',
    problemBullet1: 'Companies and households dispose of e-waste without clear, safe guidance.',
    problemBullet2: 'Recoverable value (metals/components) is lost due to poor sorting.',
    problemBullet3: 'People need a simple guide: what it is, what it contains, and what to do next.',
    
    // How it works
    howItWorks: 'How it works',
    step1Title: '1) Upload a photo',
    step1Desc: 'Take a photo of the item (battery, cable, drive, server part).',
    step2Title: '2) Classification (mock)',
    step2Desc: 'The demo simulates recognition and shows a result with confidence.',
    step3Title: '3) Actionable guide',
    step3Desc: 'Materials, estimated degradation, risk, and recycling/reuse ideas.',
    
    // MVP
    mvpTitle: 'MVP (hackathon)',
    batteries: 'Batteries',
    cables: 'Cables',
    hardDrives: 'Hard drives',
    serverParts: 'Server parts',
    
    // Impact
    impactTitle: 'Impact (goal)',
    correctlySorted: 'Correctly sorted e-waste',
    recoverableValue: 'Identified recoverable value',
    environmentalAwareness: 'Environmental awareness',
    responsibleConsumption: 'Responsible consumption and production',
    climateAction: 'Climate action',
    
    // Validation
    validationTitle: 'Validation (problem)',
    validationNote: 'At this stage we validate the problem (interviews/survey). Image classification is currently a mock demo.',
    keyFinding: 'Most users don\'t know how to safely dispose batteries and PC/server parts.',
    
    // Forms
    joinList: 'Join the list',
    quickFeedback: 'Quick feedback',
    name: 'Name',
    email: 'Email',
    iAm: 'I am',
    individual: 'Individual',
    company: 'Company',
    signUp: 'Sign up',
    whatDiscard: 'What do you discard most?',
    mainDifficulty: 'Main difficulty',
    comment: 'Comment (optional)',
    send: 'Send',
    
    // Demo
    uploadPhoto: 'Upload photo',
    selectExample: 'Select example',
    analyzing: 'Analyzing...',
    confidence: 'Confidence',
    materials: 'Materials',
    degradationTime: 'Degradation time',
    riskLevel: 'Risk level',
    reuseIdeas: 'Reuse ideas',
    recycleIdeas: 'Recycle ideas',
    years: 'years',
    high: 'High',
    medium: 'Medium',
    low: 'Low',
    
    // Disclaimers
    disclaimer1: 'Degradation time is an estimate and varies by conditions.',
    disclaimer2: 'This is an educational prototype with a mock demo.',
  }
}

export function getTranslation(locale: Locale, key: keyof typeof translations.es): string {
  return translations[locale][key] || translations.es[key]
}