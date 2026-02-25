import React, { createContext, useContext, useState, useMemo, ReactNode } from 'react';

type Language = 'en' | 'es' | 'pt';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  es: {
    // Preloader
    preloaderText: "Cargando tu exito dulce...",
    
    // Sticky Bar
    stickyCtaText: "Quiero mi copia",
    priceIncreasesTo: "La oferta especial termina en",
    
    // Hero
    heroTitle: "Aprende a Hacer Galletas Estilo New York Perfectas — Gruesas, Altas y Cremosas Desde el Primer Intento",
    heroSubtitle: "27 recetas paso a paso con tiempos, temperaturas y tecnicas exactas para lograr un centro cremoso y acabado de pasteleria premium — incluso si eres principiante",
    
    // Effort Minimizers (Hormozi)
    effortMinimizer1: "Solo $30 para empezar",
    effortMinimizer2: "Sin equipo especial",
    effortMinimizer3: "2 horas tu primer lote",
    watchVideoPrompt: "Mira el Video Completo",
    heroCta: "Quiero mi copia ahora",
    instantDownload: "Descarga inmediata",
    beginnerFriendly: "Ideal para principiantes",
    secureCheckoutHotmart: "Pago seguro con Hotmart",

    // Pain Points
    painIdentity: "Hay dos tipos de mujeres que aman hornear: las que siguen recetas al azar y esperan lo mejor... y las que aprenden el metodo detras de resultados de pasteleria. Tu ya sabes cual quieres ser.",
    painEyebrow: "Te suena familiar?",
    painTitle: "Te pasa esto cuando intentas hacer galletas estilo New York?",
    painSubtitle: "Estas son las frustraciones mas comunes antes de dominar cookies gruesas, cremosas y de calidad premium.",
    painQ1: "Te quedan planas y se esparcen en vez de quedar altas y gruesas?",
    painQ2: "Terminas perdiendo el tiempo y malgastando ingredientes con recetas de internet?",
    painQ3: "El centro nunca queda cremoso — o queda crudo o queda seco?",
    painQ4: "Quieres cookies que salgan bien SIEMPRE, con resultados consistentes y de calidad premium?",
    painQ5: "Te cambia el resultado cada vez que repites la misma receta?",
    painQ6: "Cuando algo sale mal, no sabes que ajustar?",
    painBridge: "Eso no es falta de talento. Es falta de estructura.",
    painBridgeCta: "Este ebook te da el metodo exacto para lograr resultados estilo New York, siempre.",

    // Transformation Section (Brunson - Old Way vs New Way)
    transformEyebrow: "El Secreto Que Nadie Te Cuenta",
    transformTitle: "Hay Dos Formas de Aprender Cookies Estilo New York",
    transformSubtitle: "El camino frustrante... o el camino seguro",
    oldWayLabel: "El Camino Viejo",
    newWayLabel: "El Nuevo Camino",
    transform1Old: "Seguir recetas sueltas de internet y esperar que esta vez salgan bien",
    transform1New: "Saber exactamente que hacer — y sentirte segura desde tu primera hornada",
    transform2Old: "Adivinar que salio mal y seguir repitiendo los mismos errores",
    transform2New: "Entender el por que detras de cada paso para corregir cualquier cosa en minutos",
    transform3Old: "Pagar $500-$2000 en cursos esperando que alguien lo explique claro",
    transform3New: "Pasar de principiante a nivel pasteleria por menos de $10 — garantizado",
    transformCta: "Este es el metodo que convierte las dudas en confianza.",
    
    // What You Get
    wygTag: "TODO LO QUE INCLUYE",
    wygTitle: "Lo Que Recibiras Hoy (Y Podras Usar Desde Hoy)",
    wygSubtitle: "Un sistema completo de cookies estilo New York para lograr consistencia, confianza y resultados repetibles.",
    wyg1Title: "27 Recetas NY (Probadas y Vendibles)",
    wyg1Desc: "Galletas gruesas, suaves por dentro y con rellenos irresistibles - las que la gente compra sin pensarlo dos veces.",
    wyg2Title: "El Metodo NY Paso a Paso",
    wyg2Desc: "Tiempos, temperaturas y tecnicas exactas para lograr altura, textura y centro cremoso sin adivinar.",
    wyg3Title: "Plan de Ventas Desde Casa",
    wyg3Desc: "Que vender primero, como presentarlo y como conseguir tus primeras ventas con un plan simple y repetible.",
    wyg4Title: "Mapa Completo: Desde la Cocina hasta el Producto Premium",
    wyg4Desc: "Por que estas cookies se sienten de vitrina, como se ven y como se convierten en una oferta que hace a la gente volver.",
    wyg5Title: "Guia de Precios (Para Cobrar Bien)",
    wyg5Desc: "Como calcular, fijar precio y subir tu ticket sin miedo - con margenes reales y logica simple.",
    wyg6Title: "Guia de Proveedores y Sustituciones",
    wyg6Desc: "Como conseguir ingredientes de calidad en tu zona (y que usar si no encuentras alguno).",
    wyg7Title: "Guia de Empaque que Vende",
    wyg7Desc: "Presentacion que justifica precio premium y hace que tus galletas se vean regalables y compartibles.",
    wyg8Title: "Bases Para Empezar Sin Bloqueos",
    wyg8Desc: "Mentalidad + checklist de arranque para pasar de quiero a ya empece sin complicarte.",
    wyg9Title: "Coleccion de Cookies Tematicas",
    wyg9Desc: "Ideas por temporada y fechas clave para tener variedad y ventas todo el ano.",
    wyg10Title: "Personalizacion + Solucion de Problemas",
    wyg10Desc: "Rellenos, sabores y ajustes rapidos para corregir textura, altura y coccion en minutos.",
    wyg11Title: "Seccion Vegana Estilo New York (5 Recetas)",
    wyg11Desc: "Opciones veganas enfocadas en textura real - no en sustitutos al azar.",
    wyg12Title: "El Arte de Emprender (Sin Ser Vendedora)",
    wyg12Desc: "Costos, fotos, empaque y oferta: como vender sin rogar, sin insistir y sin sentirte incomoda.",
    wygBridgeTitle: "Y Si Decides Venderlas...",
    wygBridgeText: "Muchas mujeres empiezan haciendolas para casa. Luego amigas y vecinos empiezan a pedir cajas. Por eso, si quieres, tambien incluye:",

    // Bonuses
    bonusTag: "+ $135.96 EN BONOS",
    bonusesTitle: "Regalos Exclusivos Incluidos",
    bonusesSubtitle: "Bonos valorados en $135.96+, tuyos hoy sin costo adicional",
    bonus1Title: "Mini Recetario: Postres Saludables para Ninos",
    bonus1Desc: "15 recetas nutritivas y ricas que las mamas repiten (y recomiendan).",
    bonus1Value: "$27",
    bonus2Title: "Guia: Postres Sin Horno",
    bonus2Desc: "Opciones deliciosas sin horno, ideales para calor o poco equipo.",
    bonus2Value: "$17",
    bonus3Title: "Combinaciones de Sabores que Venden",
    bonus3Desc: "Combinaciones ganadoras + ideas de relleno/topping para pedidos repetidos.",
    bonus3Value: "$13",
    bonus4Title: "Enciclopedia de 200 Recetas Exclusivas",
    bonus4Desc: "200 ideas para ampliar tu menu sin quedarte sin opciones.",
    bonus4Value: "$24.99",
    bonus5Title: "Postres Veganos Hechos en Casa",
    bonus5Desc: "Recetas veganas con sabor real y buena textura.",
    bonus5Value: "$17.99",
    bonus6Title: "Postres Frios Reducidos en Azucar",
    bonus6Desc: "Postres frios mas ligeros, sin perder antojo.",
    bonus6Value: "$17.99",
    bonus7Title: "Arte y Ciencia de Vender",
    bonus7Desc: "Presentacion, nombres y oferta para que se sienta premium y claro.",
    bonus7Value: "$17.99",
    bonus8Title: "Postres Amigables para Personas Alergicas",
    bonus8Desc: "Guia de adaptaciones comunes. Siempre confirmar alergias especificas.",
    bonus8Value: "BONO EXTRA",
    bonusesTotalAmount: "$135.96+",
    value: "Valor:",
    yoursFree: "Tuyo GRATIS!",
    totalBonusValue: "Valor Total de Bonos",
    freeToday: "GRATIS cuando ordenas hoy!",
    
    // Price Drop - Active Countdown
    offerEndsIn: "Esta oferta especial termina en:",
    hours: "Horas",
    minutes: "Min",
    seconds: "Seg",
    originalPrice: "$27",
    currentPrice: "$6.97",
    priceNote: "Pago unico - Acceso instantaneo",
    priceDropReason: "Precio de lanzamiento activo hoy: se cierra despues de 7 compras.",
    priceDropTitle: "Oferta Especial por Tiempo Limitado",
    priceDropSubtitle: "Precio de lanzamiento activo - obtene tu copia antes de que se agote el tiempo",
    priceDropCta: "Quiero mi copia ahora",

    // Price Drop - Expired State (kept for compatibility)
    priceDropTitleExpired: "Oferta Especial por Tiempo Limitado",
    priceDropSubtitleExpired: "Obtene tu copia a precio de lanzamiento antes de que se agote.",
    offerExpiredMessage: "Oferta por tiempo limitado",
    
    // Pricing (legacy keys)
    pricingTitle: "Oferta Especial por Tiempo Limitado",
    pricingSubtitle: "Inversion accesible para comenzar tu negocio hoy",
    pricingBefore: "Precio regular",
    pricingToday: "Hoy solamente",
    getInstantAccess: "Quiero mi copia ahora",
    secureCheckout: "Pago Seguro",
    instantDelivery: "Entrega Instantanea",
    availableWorldwide: "Disponible en Todo el Mundo",
    
    // Delivery
    deliveryTitle: "Como Funciona",
    deliverySubtitle: "Acceso inmediato en 3 simples pasos",
    step: "Paso",
    deliveryStep1Title: "Completa tu compra Protegida",
    deliveryStep1Desc: "Procesamiento de pago 100% seguro por Hotmart",
    deliveryStep2Title: "Revisa tu email",
    deliveryStep2Desc: "Recibiras acceso instantaneo en tu bandeja de entrada",
    deliveryStep3Title: "Descarga y empieza",
    deliveryStep3Desc: "Sigue los pasos y hornea tu primer lote",
    deviceCompatibility: "Compatible con movil, tableta y PC",
    
    // Testimonials
    testimonialsTitle: "Mira Lo Que Dicen Otras Reposteras en Casa",
    testimonialsSubtitle: "Mujeres como tu que empezaron a hornear y no pararon",
    testimonial1: "Hice mi primera venta en solo 3 dias! Las recetas son claras y el plan de ventas me dio la confianza que necesitaba. Ya tengo clientas que repiten.",
    testimonial2: "Nunca pense que podria vender mis galletas. Ahora recibo pedidos cada fin de semana y mis hijos estan orgullosos de su mama emprendedora.",
    testimonial3: "Recupere el costo del ebook con mi primer lote. El metodo de horneado es oro puro.",
    testimonial4: "Empece con $25 en ingredientes y cero experiencia. Ahora mis galletas son las mas pedidas en mi zona.",
    testimonial5: "Estas recetas son increibles! La textura estilo NYC es exactamente lo que estaba buscando. Ya tengo 12 clientes que repiten cada semana.",
    testimonial6: "Empece como hobby vendiendo a vecinos. 4 meses despues se convirtio en mi actividad fija de fines de semana.",
    testimonial7: "Esta guia es brillante! El paso a paso lo hizo facilisimo. En mi primera semana ya tenia pedidos sin experiencia previa.",
    testimonial8: "Recetas increibles y un plan de negocio super claro! Ya recibo pedidos regulares y apenas empece hace 3 semanas.",
    testimonial9: "Por fin me siento segura vendiendo mis galletas. La guia de precios me ayudo a cobrar lo justo en vez de regalar mi trabajo.",
    
    // Country names
    countryMexico: "Mexico",
    countryColombia: "Colombia",
    countryPeru: "Peru",
    countryChile: "Chile",
    countryUSA: "Estados Unidos",
    countryCanada: "Canada",
    countryUK: "Reino Unido",
    countryBrazil: "Brasil",
    countryAustralia: "Australia",
    
    // Guarantee (Stronger Risk Reversal - Hotmart accurate)
    guaranteeTitle: "La Garantia de Confianza en la Primera Tanda",
    guaranteeSubtitle: "Tu No Arriesgas Nada",
    guaranteeText: "Descarga el ebook. Hornea las recetas. Sigue el metodo. Si no te sientes con confianza para hacer cookies estilo New York gruesas y cremosas en casa, solicita tu reembolso directamente en Hotmart — lo procesan en 24-48 horas. Sin preguntas, sin complicaciones. Tu no arriesgas nada.",
    guaranteeCta: "Quiero mi copia ahora",
    
    // FAQ
    faqTitle: "Preguntas Frecuentes",
    faq1Question: "Necesito experiencia previa en reposteria?",
    faq1Answer: "No. El metodo esta disenado para principiantes. Cada receta tiene instrucciones paso a paso con fotos y tips para evitar errores comunes.",
    faq2Question: "Incluye una guia para vender (opcional)?",
    faq2Answer: "Si. Primero aprendes el metodo y las recetas. Y si decides vender, incluye precios, ofertas simples, empaque y como conseguir tus primeros pedidos sin sentirte insistente.",
    faq3Question: "Es descarga inmediata?",
    faq3Answer: "Si. Una vez completada tu compra en Hotmart, recibes acceso instantaneo por email para descargar todo el contenido.",
    faq4Question: "Sirve en mi pais?",
    faq4Answer: "Absolutamente. Las recetas usan ingredientes disponibles en LATAM, USA, Canada, Espana y mas. Los principios de negocio son universales.",
    faq5Question: "Que equipo necesito?",
    faq5Answer: "Horno casero, bowls, batidora (manual o electrica), charolas para hornear. Equipo basico que ya tienes o es facil conseguir.",
    faq6Question: "Cuanto dinero necesito para empezar?",
    faq6Answer: "La inversion inicial en ingredientes es de aproximadamente $15-30 USD, dependiendo de tu ubicacion y lo que ya tengas en casa.",
    faq7Question: "Funciona con horno casero o necesito uno industrial?",
    faq7Answer: "Funciona perfectamente con horno casero. El metodo esta optimizado para hornos domesticos estandar.",
    faq8Question: "Como accedo a los bonos?",
    faq8Answer: "Todos los bonos estaran en tu email, disponibles para descarga inmediata junto con el ebook principal.",
    faq9Question: "Hay renovacion o cargos mensuales?",
    faq9Answer: "No. Es un pago unico. El contenido es tuyo para siempre, sin suscripciones ni cargos ocultos.",
    faq10Question: "Puedo vender las galletas online o solo localmente?",
    faq10Answer: "Ambos. Incluimos estrategias para ventas locales y como expandir a pedidos online con envios.",
    faq11Question: "Las recetas son aptas para venta comercial?",
    faq11Answer: "Si. Estan disenadas especificamente para produccion y venta. Incluye costeo y margenes de ganancia.",
    faq12Question: "Hay soporte si tengo dudas?",
    faq12Answer: "Si. Incluye acceso a email de soporte para preguntas sobre el contenido del ebook.",

    // Reassurance Section (Objection-Driven, Implicit)
    objectionsPill: "Para que compres con tranquilidad",
    objectionsTitle: "Todo esta pensado para que te salga bien",
    objectionsSubtitle: "Cada parte del EBook responde a las dudas mas comunes antes de empezar.",
    objectionsLead: "Aqui no improvisas. Sigues un sistema.",

    objection1Title: "Resultados claros desde el primer intento",
    objection1Body: "Sigues el metodo paso a paso, con medidas, tiempos y procesos exactos. No adivinas, no pruebas al azar: ejecutas.",
    objection1Inside: "Incluye: metodo completo + soluciones a errores comunes.",

    objection2Title: "Recetas que no te hacen perder tiempo ni ingredientes",
    objection2Body: "Cada receta esta escrita palabra por palabra para que repitas el resultado una y otra vez, sin desperdiciar nada.",
    objection2Inside: "Incluye: 27 recetas probadas + ajustes precisos.",

    objection3Title: "Un camino claro si decides vender",
    objection3Body: "No tienes que inventar nada. Si decides vender, sigues un plan simple para precios, oferta y primeros pedidos.",
    objection3Inside: "Incluye: guia de precios + plan de ventas.",

    objection4Title: "Variedad sin complicarte ni perder calidad",
    objection4Body: "Aprendes a crear opciones distintas sin tocar la base de la textura que hace que estas galletas se vendan.",
    objection4Inside: "Incluye: ideas tematicas + personalizacion.",

    objection5Title: "Opciones veganas con textura real",
    objection5Body: "El enfoque es lograr el mismo resultado visual y de mordida, sin usar sustituciones improvisadas.",
    objection5Inside: "Incluye: seccion vegana estilo New York (5 recetas).",

    objection6Title: "Compartir (o vender) con confianza",
    objection6Body: "Tus cookies hablaran por si solas. Aprende a presentarlas bonito — y si quieres vender, el plan viene incluido.",
    objection6Inside: "Incluye: fundamentos de marca, precios y presentacion.",

    // Final CTA
    finalCtaTitle: "En 2 Horas, Tu Primer Lote Estara Enfriandose en la Mesa",
    finalCtaSubtitle: "En 2 horas, tu primer lote de galletas de calidad profesional estara enfriandose en la mesa",
    finalCtaRecap: "Todo lo que necesitas por solo $6.97:",
    finalBenefit1: "27 recetas probadas y vendibles",
    finalBenefit2: "Metodo completo paso a paso",
    finalBenefit3: "8 regalos bonus exclusivos",
    finalBenefit4: "Acceso instantaneo y para siempre",
    finalBenefit5: "Guia opcional para vender incluida",
    finalCtaButton: "Quiero mi copia ahora",
    finalCtaNote: "Pago seguro - Acceso instantaneo - Garantia de 7 dias",
    choiceTitle: "Tienes dos opciones ahora mismo:",
    choiceA: "Cerrar esta pagina. Seguir viendo videos de reposteria. Decirte \"algun dia.\" En seis meses, nada ha cambiado.",
    choiceB: "Empieza hoy por $6.97. Hornea tu primer lote esta noche. Compartelas manana. El proximo fin de semana, todos te piden la receta.",
    choiceQuestion: "Cual suena mas como tu?",
    finalCtaPS: "P.D. Cuando descargues, ve directo al Capitulo 3 — ahi esta la receta mas popular. La mayoria hace ese primer lote esa misma noche.",
    futurePacingTitle: "Imagina Esto...",
    futurePacingText: "Es sabado por la manana. Tu cocina huele a chocolate caliente y vainilla. En la mesa, 36 cookies gruesas estilo New York se estan enfriando perfectas. Abres una — el centro esta suave y cremoso. Se ven como de pasteleria. No adivinaste. Seguiste el metodo. Asi podria verse tu primer fin de semana.",
    offerValidFor: "Oferta especial valida solo por",

    // Footer
    footerDisclaimer: "Este sitio no es parte de Facebook o Meta. Resultados individuales pueden variar. Este ebook es educativo y no garantiza ingresos especificos.",
    footerContact: "Contacto",
    footerCopyright: "2026 ECommerce Shop Cart. Todos los derechos reservados.",
    
    // Floating CTA
    floatingCta: "Quiero mi copia",
  },
  en: {
    // Preloader
    preloaderText: "Loading your sweet success...",

    // Sticky Bar
    stickyCtaText: "Get my copy",
    priceIncreasesTo: "Special offer ends in",

    // Hero
    heroTitle: "Learn to Make Perfect NY-Style Cookies — Thick, Tall, Gooey From Batch One",
    heroSubtitle: "27 step-by-step recipes with exact times, temperatures, and techniques for a creamy center and bakery-quality finish — even if you are a complete beginner",
    
    // Effort Minimizers (Hormozi)
    effortMinimizer1: "Just $30 to start",
    effortMinimizer2: "No special equipment",
    effortMinimizer3: "2 hours to first batch",
    watchVideoPrompt: "Watch the Full Video",
    heroCta: "Get my copy now",
    instantDownload: "Instant download",
    beginnerFriendly: "Beginner-friendly",
    secureCheckoutHotmart: "Secure checkout via Hotmart",

    // Pain Points
    painIdentity: "There are two kinds of women who love baking: those who follow random recipes and hope for the best... and those who learn the method behind bakery-quality results. You already know which one you want to be.",
    painEyebrow: "Sound familiar?",
    painTitle: "Does this happen when you try to make NY-style cookies?",
    painSubtitle: "These are the most common frustrations before mastering thick, gooey, bakery-quality cookies.",
    painQ1: "Do your cookies spread flat instead of staying tall and thick?",
    painQ2: "Have you wasted time and ingredients on random internet recipes?",
    painQ3: "Does the center never come out soft and gooey — it is either underbaked or dry?",
    painQ4: "Do you want cookies that work EVERY time — with consistent, bakery-quality results?",
    painQ5: "Do your results change every time you bake the same recipe?",
    painQ6: "When something goes wrong, do you have no idea what to fix?",
    painBridge: "That is not lack of talent. It is lack of structure.",
    painBridgeCta: "This ebook gives you the exact method behind consistent NY-style results.",

    // Transformation Section (Brunson - Old Way vs New Way)
    transformEyebrow: "The Secret No One Tells You",
    transformTitle: "There Are Two Ways to Learn NY-Style Cookies",
    transformSubtitle: "The frustrating way... or the confident way",
    oldWayLabel: "The Old Way",
    newWayLabel: "The New Way",
    transform1Old: "Follow random recipes and hope this time they work",
    transform1New: "Know exactly what to do — and feel confident from your very first batch",
    transform2Old: "Guess what went wrong and keep repeating the same mistakes",
    transform2New: "Understand the why behind every step — so you can fix anything in minutes",
    transform3Old: "Spend $500-$2000 on courses hoping someone finally explains it clearly",
    transform3New: "Go from beginner to bakery-quality cookies for under $10 — guaranteed",
    transformCta: "This is the method that turns guessing into knowing.",

    // What You Get
    wygTag: "EVERYTHING INCLUDED",
    wygTitle: "What You Will Get Today (And Use Right Away)",
    wygSubtitle: "A complete NY-style cookie system designed for consistency, confidence, and repeatable results.",
    wyg1Title: "27 NY-Style Recipes (Tested and Sellable)",
    wyg1Desc: "Thick cookies, soft centers, irresistible fillings - the kind people buy without overthinking it.",
    wyg2Title: "The NY Method (Step-by-Step)",
    wyg2Desc: "Exact times, temps, and techniques to get height, texture, and a gooey center - no guessing.",
    wyg3Title: "Sales Plan From Home",
    wyg3Desc: "What to sell first, how to present it, and how to get your first sales with a simple repeatable plan.",
    wyg4Title: "The Full Map: From Your Kitchen to a Premium Product",
    wyg4Desc: "Why these cookies feel bakery-level, how they should look, and how to turn them into an offer that brings people back.",
    wyg5Title: "Pricing Guide (So You Charge Well)",
    wyg5Desc: "How to calculate costs, set pricing, and raise your ticket confidently - with real margins and simple logic.",
    wyg6Title: "Suppliers + Smart Substitutions",
    wyg6Desc: "How to find quality ingredients locally (and what to use if you cannot find something).",
    wyg7Title: "Packaging That Sells",
    wyg7Desc: "Presentation that justifies premium pricing and makes your cookies giftable and share-worthy.",
    wyg8Title: "Start Without Overthinking",
    wyg8Desc: "Mindset + a launch checklist to go from I want to to I started without complicating things.",
    wyg9Title: "Themed Cookie Collection",
    wyg9Desc: "Seasonal ideas and key dates so you have variety and sales all year.",
    wyg10Title: "Customization + Troubleshooting",
    wyg10Desc: "Fillings, flavor upgrades, and quick fixes to correct texture, height, and bake in minutes.",
    wyg11Title: "NY-Style Vegan Section (5 Recipes)",
    wyg11Desc: "Vegan options focused on real texture - not random swaps.",
    wyg12Title: "Business Without Feeling Salesy",
    wyg12Desc: "Costs, photos, packaging, and offers - how to sell without begging, pushing, or feeling awkward.",
    wygBridgeTitle: "And If You Decide to Sell Them...",
    wygBridgeText: "Many women start baking these for home. Then friends start asking for boxes. So yes — the guide also includes:",

    // Bonuses
    bonusTag: "+ $135.96 IN BONUSES",
    bonusesTitle: "Exclusive Bonuses Included",
    bonusesSubtitle: "Bonuses valued at $135.96+ - yours today at no extra cost",
    bonus1Title: "Mini Recipe Book: Healthy Desserts for Kids",
    bonus1Desc: "15 nutritious, delicious recipes moms repeat (and recommend).",
    bonus1Value: "$27",
    bonus2Title: "No-Bake Desserts Guide",
    bonus2Desc: "Delicious options without an oven - great for hot weather or minimal equipment.",
    bonus2Value: "$17",
    bonus3Title: "Flavor Combos That Sell",
    bonus3Desc: "Winning combos + filling/topping ideas for repeat orders.",
    bonus3Value: "$13",
    bonus4Title: "Encyclopedia of 200 Exclusive Recipes",
    bonus4Desc: "200 ideas to expand your menu without running out of options.",
    bonus4Value: "$24.99",
    bonus5Title: "Homemade Vegan Desserts",
    bonus5Desc: "Vegan desserts with real flavor and great texture.",
    bonus5Value: "$17.99",
    bonus6Title: "Lower-Sugar Chilled Desserts",
    bonus6Desc: "Lighter cold desserts - without losing the crave factor.",
    bonus6Value: "$17.99",
    bonus7Title: "The Art and Science of Selling",
    bonus7Desc: "Presentation, naming, and offers so it feels premium and clear.",
    bonus7Value: "$17.99",
    bonus8Title: "Allergy-Friendly Dessert Ideas",
    bonus8Desc: "Common adaptations and swaps. Always verify specific allergies.",
    bonus8Value: "EXTRA BONUS",
    bonusesTotalAmount: "$135.96+",
    value: "Value:",
    yoursFree: "Yours FREE!",
    totalBonusValue: "Total bonus value",
    freeToday: "FREE when you order today!",

    // Price Drop - Active Countdown
    offerEndsIn: "This special offer ends in:",
    hours: "Hours",
    minutes: "Min",
    seconds: "Sec",
    originalPrice: "$27",
    currentPrice: "$6.97",
    priceNote: "One-time payment - Instant access",
    priceDropReason: "Launch price is active today - closes after 7 purchases.",
    priceDropTitle: "Limited-Time Special Offer",
    priceDropSubtitle: "Launch price is active - grab your copy before time runs out",
    priceDropCta: "Get my copy now",

    // Price Drop - Expired State (kept for compatibility)
    priceDropTitleExpired: "Limited-Time Special Offer",
    priceDropSubtitleExpired: "Grab your copy at the launch price before it's gone.",
    offerExpiredMessage: "Limited time offer",
    
    // Pricing (legacy keys)
    pricingTitle: "Limited-Time Special Offer",
    pricingSubtitle: "A small investment to start your business today",
    pricingBefore: "Regular price",
    pricingToday: "Today only",
    getInstantAccess: "Get my copy now",
    secureCheckout: "Secure checkout",
    instantDelivery: "Instant delivery",
    availableWorldwide: "Available worldwide",

    // Delivery
    deliveryTitle: "How It Works",
    deliverySubtitle: "Instant access in 3 simple steps",
    step: "Step",
    deliveryStep1Title: "Complete your purchase securely",
    deliveryStep1Desc: "100% secure checkout through Hotmart",
    deliveryStep2Title: "Check your email",
    deliveryStep2Desc: "You will receive instant access in your inbox",
    deliveryStep3Title: "Download and start",
    deliveryStep3Desc: "Follow the steps and bake your first batch",
    deviceCompatibility: "Works on phone, tablet, and PC",

    // Testimonials
    testimonialsTitle: "See What Other Home Bakers Are Saying",
    testimonialsSubtitle: "Women like you who started baking and never looked back",
    testimonial1: "I made my first sale in just 3 days! The recipes are clear, and the sales plan gave me the confidence I needed. I am already getting repeat orders.",
    testimonial2: "I never thought I could sell my cookies. Now I get orders every weekend and my kids are proud of their entrepreneur mom.",
    testimonial3: "I earned back the ebook cost on my very first batch. The baking method is pure gold.",
    testimonial4: "I started with $25 in ingredients and zero experience. Now my cookies are the most requested in my area.",
    testimonial5: "These recipes are incredible! The NYC texture is exactly what I was looking for. I already have 12 customers who order every week.",
    testimonial6: "I started as a hobby selling to neighbors. 4 months later it became my steady side income working only weekends.",
    testimonial7: "Brilliant guide! The step-by-step made it so easy. I got my first orders within the first week with no prior experience.",
    testimonial8: "Amazing recipes and a super clear business plan. I started getting regular orders within the first 3 weeks.",
    testimonial9: "I finally feel confident selling my cookies. The pricing guide helped me charge what they are worth instead of underpricing.",

    // Country names (no flags)
    countryMexico: "Mexico",
    countryColombia: "Colombia",
    countryPeru: "Peru",
    countryChile: "Chile",
    countryUSA: "United States",
    countryCanada: "Canada",
    countryUK: "United Kingdom",
    countryBrazil: "Brazil",
    countryAustralia: "Australia",

    // Guarantee (Stronger Risk Reversal - Hotmart accurate)
    guaranteeTitle: "The First-Batch Confidence Guarantee",
    guaranteeSubtitle: "You Risk Nothing",
    guaranteeText: "Download the ebook. Bake the recipes. Follow the method. If you do not feel confident making thick, gooey NY-style cookies at home, request your refund directly through Hotmart — they process it in 24-48 hours. No questions, no hassle. You risk nothing.",
    guaranteeCta: "Get my copy now",

    // FAQ
    faqTitle: "Frequently Asked Questions",
    faq1Question: "Do I need baking experience?",
    faq1Answer: "No. The method is beginner-friendly. Each recipe is step-by-step with tips to avoid common mistakes.",
    faq2Question: "Does it include a selling guide (optional)?",
    faq2Answer: "Yes. First you learn the cookie method and recipes. And if you decide to sell, the guide includes pricing, simple offers, packaging, and how to get your first orders without feeling pushy.",
    faq3Question: "Is it an instant download?",
    faq3Answer: "Yes. After purchase through Hotmart, you will receive instant access by email.",
    faq4Question: "Will it work in my country?",
    faq4Answer: "Yes. The recipes use common ingredients, and we include alternatives if needed. The business principles work anywhere.",
    faq5Question: "What equipment do I need?",
    faq5Answer: "A home oven, bowls, a mixer (hand or stand), and baking trays - basic tools you likely already have.",
    faq6Question: "How much money do I need to start?",
    faq6Answer: "Roughly $15-$30 USD in ingredients depending on your location and what you already have at home.",
    faq7Question: "Do I need an industrial oven?",
    faq7Answer: "No. The method is optimized for standard home ovens.",
    faq8Question: "How do I access the bonuses?",
    faq8Answer: "They are delivered with the ebook - available for instant download in the same email.",
    faq9Question: "Is there a subscription or monthly fee?",
    faq9Answer: "No. One-time payment. Yours forever - no hidden fees.",
    faq10Question: "Can I sell online or only locally?",
    faq10Answer: "Both. We cover local sales and how to expand to online orders and shipping.",
    faq11Question: "Are the recipes suitable for selling?",
    faq11Answer: "Yes. They are designed for production and sales, including cost and margin guidance.",
    faq12Question: "Is there support if I have questions?",
    faq12Answer: "Yes. You will get access to a support email for questions about the ebook.",

    // Reassurance (English version to match Spanish intent)
    objectionsPill: "So You can Confidently Buy",
    objectionsTitle: "Everything is built so you get results",
    objectionsSubtitle: "Each part of the ebook is designed around the most common doubts before starting.",
    objectionsLead: "No improvising. You follow a system.",

    objection1Title: "Clear results from your first batch",
    objection1Body: "Follow the method step-by-step with exact measurements, timing, and process. No guessing. No random tests - just execution.",
    objection1Inside: "Includes: full method + fixes for common mistakes.",

    objection2Title: "Recipes that do not waste ingredients or time",
    objection2Body: "Every recipe is written clearly so you can repeat the same result again and again - without waste.",
    objection2Inside: "Includes: 27 tested recipes + precise adjustments.",

    objection3Title: "A clear path if you decide to sell",
    objection3Body: "You do not have to invent anything. If you choose to sell, follow a simple plan for pricing, offers, and getting first orders.",
    objection3Inside: "Includes: pricing guide + sales plan.",

    objection4Title: "Variety without losing quality",
    objection4Body: "Learn to create different flavors and themes without changing the base texture that makes these cookies sell.",
    objection4Inside: "Includes: themed ideas + customization.",

    objection5Title: "Vegan options with real texture",
    objection5Body: "The focus is the same look and bite - not improvised substitutions.",
    objection5Inside: "Includes: NY-style vegan section (5 recipes).",

    objection6Title: "Share (or sell) with confidence",
    objection6Body: "Your cookies will speak for themselves. Learn to present them beautifully — and if you want to sell, the plan is included.",
    objection6Inside: "Includes: brand fundamentals, pricing, and presentation.",

    // Final CTA
    finalCtaTitle: "In 2 Hours, Your First Batch Will Be Cooling on the Counter",
    finalCtaSubtitle: "In 2 hours, your first batch of bakery-quality cookies will be cooling on the counter",
    finalCtaRecap: "Everything you need for just $6.97:",
    finalBenefit1: "27 tested, sellable recipes",
    finalBenefit2: "Complete step-by-step cookie method",
    finalBenefit3: "8 exclusive bonus gifts",
    finalBenefit4: "Instant access forever",
    finalBenefit5: "Optional selling roadmap included",
    finalCtaButton: "Get my copy now",
    finalCtaNote: "Secure payment - Instant access - 7-day guarantee",
    choiceTitle: "You have two choices right now:",
    choiceA: "Close this page. Keep scrolling through baking videos. Tell yourself \"maybe someday.\" Six months from now, nothing has changed.",
    choiceB: "Start today for $6.97. Bake your first batch tonight. Share them tomorrow. By next weekend, everyone wants the recipe.",
    choiceQuestion: "Which one sounds like you?",
    finalCtaPS: "P.S. Go straight to Chapter 3 first — that is where the most popular cookie recipe is. Most women bake that recipe the same evening.",
    futurePacingTitle: "Picture This...",
    futurePacingText: "It is Saturday morning. Your kitchen smells like warm chocolate and vanilla. On the counter, 36 thick NY-style cookies cool perfectly. You break one open — the center is soft and gooey. They look bakery-level. You did not guess. You followed the method. That is what this weekend could look like.",
    offerValidFor: "Special offer valid only for",

    // Footer
    footerDisclaimer: "This site is not part of Facebook or Meta. Individual results may vary. This ebook is educational and does not guarantee specific income.",
    footerContact: "Contact",
    footerCopyright: "2026 ECommerce Shop Cart. All rights reserved.",

    // Floating CTA
    floatingCta: "Get my copy",
  },
  pt: {
    // Preloader
    preloaderText: "Carregando seu sucesso doce...",

    // Sticky Bar
    stickyCtaText: "Quero minha copia",
    priceIncreasesTo: "A oferta especial termina em",

    // Hero
    heroTitle: "Aprenda a Fazer Cookies Estilo New York Perfeitos — Grossos, Altos e Cremosos Desde a Primeira Fornada",
    heroSubtitle: "27 receitas passo a passo com tempos, temperaturas e tecnicas exatas para um centro cremoso e acabamento de confeitaria premium — mesmo se voce for iniciante",
    
    // Effort Minimizers (Hormozi)
    effortMinimizer1: "Apenas $30 para comecar",
    effortMinimizer2: "Sem equipamento especial",
    effortMinimizer3: "2 horas para o primeiro lote",
    watchVideoPrompt: "Assista ao Video Completo",
    heroCta: "Quero minha copia agora",
    instantDownload: "Download imediato",
    beginnerFriendly: "Ideal para iniciantes",
    secureCheckoutHotmart: "Pagamento seguro com Hotmart",

    // Pain Points
    painIdentity: "Existem dois tipos de mulheres que amam assar: as que seguem receitas aleatorias e esperam o melhor... e as que aprendem o metodo por tras de resultados de confeitaria. Voce ja sabe qual quer ser.",
    painEyebrow: "Isso soa familiar?",
    painTitle: "Isso acontece quando voce tenta fazer cookies estilo New York?",
    painSubtitle: "Estas sao as frustracoes mais comuns antes de dominar cookies grossos, cremosos e de qualidade premium.",
    painQ1: "Seus cookies se espalham e ficam baixos em vez de altos e grossos?",
    painQ2: "Voce perde tempo e ingredientes testando receitas da internet que nao funcionam?",
    painQ3: "O centro nunca fica cremoso — ou fica cru ou fica seco?",
    painQ4: "Voce quer cookies que deem certo SEMPRE, com resultado consistente e cara de confeitaria?",
    painQ5: "O resultado muda toda vez que voce repete a mesma receita?",
    painQ6: "Quando algo da errado, voce nao sabe o que ajustar?",
    painBridge: "Isso nao e falta de talento. E falta de estrutura.",
    painBridgeCta: "Este ebook te da o metodo exato para repetir resultados estilo New York, sempre.",

    // Transformation Section (Brunson - Old Way vs New Way)
    transformEyebrow: "O Segredo Que Ninguem Te Conta",
    transformTitle: "Existem Duas Formas de Aprender Cookies Estilo New York",
    transformSubtitle: "O caminho frustrante... ou o caminho seguro",
    oldWayLabel: "O Caminho Antigo",
    newWayLabel: "O Novo Caminho",
    transform1Old: "Seguir receitas soltas da internet e esperar que desta vez de certo",
    transform1New: "Saber exatamente o que fazer — e se sentir confiante desde a primeira fornada",
    transform2Old: "Adivinhar o que deu errado e continuar repetindo os mesmos erros",
    transform2New: "Entender o porque por tras de cada passo para corrigir qualquer coisa em minutos",
    transform3Old: "Pagar $500-$2000 em cursos esperando que alguem explique direito",
    transform3New: "Ir de iniciante a qualidade de confeitaria por menos de $10 — garantido",
    transformCta: "Este e o metodo que transforma duvida em confianca.",

    // What You Get
    wygTag: "TUDO O QUE INCLUI",
    wygTitle: "O Que Voce Vai Receber Hoje (E Ja Pode Usar Hoje)",
    wygSubtitle: "Um sistema completo de cookies estilo New York para consistencia, confianca e resultados repetiveis.",
    wyg1Title: "27 Receitas Estilo NY (Testadas e Vendaveis)",
    wyg1Desc: "Cookies grossos, macios por dentro e com recheios irresistiveis - aqueles que as pessoas compram sem pensar duas vezes.",
    wyg2Title: "O Metodo NY Passo a Passo",
    wyg2Desc: "Tempos, temperaturas e tecnicas exatas para conseguir altura, textura e centro cremoso - sem adivinhar.",
    wyg3Title: "Plano de Vendas em Casa",
    wyg3Desc: "O que vender primeiro, como apresentar e como fazer as primeiras vendas com um plano simples e repetivel.",
    wyg4Title: "Mapa Completo: Da Sua Cozinha a um Produto Premium",
    wyg4Desc: "Por que esses cookies parecem de vitrine, como devem ficar e como virar uma oferta que faz o cliente voltar.",
    wyg5Title: "Guia de Precos (Para Cobrar Bem)",
    wyg5Desc: "Como calcular custos, definir preco e aumentar seu ticket com confianca - com margens reais e logica simples.",
    wyg6Title: "Guia de Fornecedores e Substituicoes",
    wyg6Desc: "Como encontrar ingredientes de qualidade na sua regiao (e o que usar se nao achar algum).",
    wyg7Title: "Embalagem Que Vende",
    wyg7Desc: "Apresentacao que justifica preco premium e deixa seus cookies com cara de presente e perfeitos para compartilhar.",
    wyg8Title: "Comece Sem Travar",
    wyg8Desc: "Mentalidade + checklist de inicio para ir do quero ao comecei sem complicar.",
    wyg9Title: "Colecao de Cookies Tematicos",
    wyg9Desc: "Ideias por temporada e datas-chave para ter variedade e vendas o ano todo.",
    wyg10Title: "Personalizacao + Solucao de Problemas",
    wyg10Desc: "Recheios, variacoes de sabor e ajustes rapidos para corrigir textura, altura e ponto em minutos.",
    wyg11Title: "Secao Vegana Estilo NY (5 Receitas)",
    wyg11Desc: "Opcoes veganas focadas em textura de verdade - nao em substituicoes aleatorias.",
    wyg12Title: "Empreender Sem Parecer Vendedora",
    wyg12Desc: "Custos, fotos, embalagem e oferta: como vender sem implorar, sem pressionar e sem ficar desconfortavel.",
    wygBridgeTitle: "E Se Voce Decidir Vender...",
    wygBridgeText: "Muita gente comeca fazendo em casa. Depois amigos comecam a pedir caixas. Por isso, se voce quiser, o guia tambem inclui:",

    // Bonuses
    bonusTag: "+ $135.96 EM BONUS",
    bonusesTitle: "Bonus Exclusivos Incluidos",
    bonusesSubtitle: "Bonus avaliados em $135.96+ - seus hoje, sem custo extra",
    bonus1Title: "Mini Livro de Receitas: Sobremesas Saudaveis para Criancas",
    bonus1Desc: "15 receitas nutritivas e gostosas que as maes repetem (e recomendam).",
    bonus1Value: "$27",
    bonus2Title: "Guia: Sobremesas Sem Forno",
    bonus2Desc: "Opcoes deliciosas sem forno - ideal para calor ou pouco equipamento.",
    bonus2Value: "$17",
    bonus3Title: "Combinacoes de Sabores Que Vendem",
    bonus3Desc: "Combinacoes campeas + ideias de recheio/cobertura para pedidos repetidos.",
    bonus3Value: "$13",
    bonus4Title: "Enciclopedia de 200 Receitas Exclusivas",
    bonus4Desc: "200 ideias para ampliar seu cardapio sem ficar sem opcoes.",
    bonus4Value: "$24.99",
    bonus5Title: "Sobremesas Veganas Feitas em Casa",
    bonus5Desc: "Receitas veganas com sabor real e otima textura.",
    bonus5Value: "$17.99",
    bonus6Title: "Sobremesas Geladas com Menos Acucar",
    bonus6Desc: "Sobremesas frias mais leves - sem perder a vontade de comer.",
    bonus6Value: "$17.99",
    bonus7Title: "A Arte e a Ciencia de Vender",
    bonus7Desc: "Apresentacao, nomes e oferta para parecer premium e ficar claro.",
    bonus7Value: "$17.99",
    bonus8Title: "Sobremesas Amigaveis para Alergicos",
    bonus8Desc: "Guia de adaptacoes comuns. Sempre confirme alergias especificas.",
    bonus8Value: "BONUS EXTRA",
    bonusesTotalAmount: "$135.96+",
    value: "Valor:",
    yoursFree: "GRATIS para voce!",
    totalBonusValue: "Valor total dos bonus",
    freeToday: "GRATIS quando voce compra hoje!",

    // Price Drop - Active Countdown
    offerEndsIn: "Esta oferta especial termina em:",
    hours: "Horas",
    minutes: "Min",
    seconds: "Seg",
    originalPrice: "$27",
    currentPrice: "$6.97",
    priceNote: "Pagamento unico - Acesso imediato",
    priceDropReason: "Preco de lancamento ativo hoje: fecha apos 7 compras.",
    priceDropTitle: "Oferta Especial por Tempo Limitado",
    priceDropSubtitle: "Preco de lancamento ativo - garanta sua copia antes que o tempo acabe",
    priceDropCta: "Quero minha copia agora",

    // Price Drop - Expired State (kept for compatibility)
    priceDropTitleExpired: "Oferta Especial por Tempo Limitado",
    priceDropSubtitleExpired: "Garanta sua copia a preco de lancamento antes que acabe.",
    offerExpiredMessage: "Oferta por tempo limitado",
    
    // Pricing (legacy keys)
    pricingTitle: "Oferta Especial por Tempo Limitado",
    pricingSubtitle: "Um investimento acessivel para comecar seu negocio hoje",
    pricingBefore: "Preco normal",
    pricingToday: "So hoje",
    getInstantAccess: "Quero minha copia agora",
    secureCheckout: "Pagamento seguro",
    instantDelivery: "Entrega imediata",
    availableWorldwide: "Disponivel no mundo todo",

    // Delivery
    deliveryTitle: "Como Funciona",
    deliverySubtitle: "Acesso imediato em 3 passos simples",
    step: "Passo",
    deliveryStep1Title: "Conclua sua compra com seguranca",
    deliveryStep1Desc: "Pagamento 100% seguro pela Hotmart",
    deliveryStep2Title: "Confira seu e-mail",
    deliveryStep2Desc: "Voce recebera acesso imediato na sua caixa de entrada",
    deliveryStep3Title: "Baixe e comece",
    deliveryStep3Desc: "Siga os passos e asse seu primeiro lote",
    deviceCompatibility: "Compativel com celular, tablet e PC",

    // Testimonials
    testimonialsTitle: "Veja o Que Outras Pessoas Que Assam em Casa Estao Dizendo",
    testimonialsSubtitle: "Mulheres como voce que comecaram a assar e nao pararam mais",
    testimonial1: "Fiz minha primeira venda em apenas 3 dias! As receitas sao claras e o plano de vendas me deu a confianca que eu precisava. Ja tenho clientes que repetem.",
    testimonial2: "Nunca pensei que conseguiria vender meus cookies. Agora recebo pedidos todo fim de semana e meus filhos estao orgulhosos da mamae empreendedora.",
    testimonial3: "Recuperei o custo do ebook no meu primeiro lote. O metodo de forno e ouro puro.",
    testimonial4: "Comecei com $25 em ingredientes e zero experiencia. Agora meus cookies sao os mais pedidos na minha regiao.",
    testimonial5: "Essas receitas sao incriveis! A textura estilo NYC era exatamente o que eu procurava. Ja tenho 12 clientes que pedem toda semana.",
    testimonial6: "Comecei como hobby vendendo para vizinhos. 4 meses depois virou minha atividade fixa de fim de semana.",
    testimonial7: "Guia brilhante! O passo a passo deixou tudo facil. Na primeira semana ja tinha pedidos sem experiencia previa.",
    testimonial8: "Receitas incriveis e um plano de negocios super claro! Ja recebo pedidos regulares e comecei ha apenas 3 semanas.",
    testimonial9: "Finalmente me sinto confiante vendendo meus cookies. O guia de precos me ajudou a cobrar o justo em vez de desvalorizar meu trabalho.",

    // Country names
    countryMexico: "Mexico",
    countryColombia: "Colombia",
    countryPeru: "Peru",
    countryChile: "Chile",
    countryUSA: "Estados Unidos",
    countryCanada: "Canada",
    countryUK: "Reino Unido",
    countryBrazil: "Brasil",
    countryAustralia: "Australia",

    // Guarantee (Stronger Risk Reversal - Hotmart accurate)
    guaranteeTitle: "A Garantia de Confianca na Primeira Fornada",
    guaranteeSubtitle: "Voce Nao Arrisca Nada",
    guaranteeText: "Baixe o ebook. Asse as receitas. Siga o metodo. Se voce nao se sentir confiante para fazer cookies estilo New York grossos e cremosos em casa, solicite seu reembolso diretamente na Hotmart — eles processam em 24-48 horas. Sem perguntas, sem complicacao. Voce nao arrisca nada.",
    guaranteeCta: "Quero minha copia agora",

    // FAQ
    faqTitle: "Perguntas Frequentes",
    faq1Question: "Preciso de experiencia em confeitaria?",
    faq1Answer: "Nao. O metodo e pensado para iniciantes. Cada receita e passo a passo com dicas para evitar erros comuns.",
    faq2Question: "Inclui um guia para vender (opcional)?",
    faq2Answer: "Sim. Primeiro voce aprende o metodo e as receitas. E se decidir vender, inclui precos, ofertas simples, embalagem e como conseguir os primeiros pedidos sem precisar insistir.",
    faq3Question: "E download imediato?",
    faq3Answer: "Sim. Depois da compra na Hotmart, voce recebe acesso imediato por e-mail.",
    faq4Question: "Funciona no meu pais?",
    faq4Answer: "Sim. As receitas usam ingredientes comuns e indicamos alternativas. Os principios de negocio funcionam em qualquer lugar.",
    faq5Question: "Que equipamentos eu preciso?",
    faq5Answer: "Forno caseiro, tigelas, batedeira (manual ou eletrica) e assadeiras. Equipamento basico.",
    faq6Question: "Quanto dinheiro preciso para comecar?",
    faq6Answer: "Aproximadamente $15-$30 USD em ingredientes, dependendo da sua regiao e do que voce ja tem em casa.",
    faq7Question: "Preciso de forno industrial?",
    faq7Answer: "Nao. O metodo e otimizado para fornos domesticos.",
    faq8Question: "Como acesso os bonus?",
    faq8Answer: "Eles vem junto com o ebook - download imediato no mesmo e-mail.",
    faq9Question: "Tem mensalidade ou assinatura?",
    faq9Answer: "Nao. Pagamento unico. O conteudo e seu para sempre.",
    faq10Question: "Posso vender online ou so localmente?",
    faq10Answer: "Os dois. Mostramos estrategias para vendas locais e como expandir para pedidos online e envios.",
    faq11Question: "As receitas sao para venda comercial?",
    faq11Answer: "Sim. Foram pensadas para producao e venda, incluindo orientacao de custos e margem.",
    faq12Question: "Tem suporte se eu tiver duvidas?",
    faq12Answer: "Sim. Voce tera acesso a um e-mail de suporte para duvidas sobre o conteudo do ebook.",

    // Reassurance Section
    objectionsPill: "Para comprar com tranquilidade",
    objectionsTitle: "Tudo foi pensado para dar certo",
    objectionsSubtitle: "Cada parte do ebook responde as duvidas mais comuns antes de comecar.",
    objectionsLead: "Sem improviso. Voce segue um sistema.",

    objection1Title: "Resultados claros desde a primeira fornada",
    objection1Body: "Siga o metodo passo a passo com medidas, tempo e processo exatos. Sem adivinhacao. Sem testes aleatorios - so execucao.",
    objection1Inside: "Inclui: metodo completo + correcoes de erros comuns.",

    objection2Title: "Receitas que nao desperdicam tempo nem ingredientes",
    objection2Body: "Cada receita e escrita com clareza para voce repetir o mesmo resultado sempre - sem desperdicio.",
    objection2Inside: "Inclui: 27 receitas testadas + ajustes precisos.",

    objection3Title: "Um caminho claro se voce decidir vender",
    objection3Body: "Voce nao precisa inventar nada. Se decidir vender, siga um plano simples de precos, oferta e primeiros pedidos.",
    objection3Inside: "Inclui: guia de precos + plano de vendas.",

    objection4Title: "Variedade sem complicar nem perder qualidade",
    objection4Body: "Aprenda a criar sabores diferentes sem mexer na textura base que faz esses cookies venderem.",
    objection4Inside: "Inclui: ideias tematicas + personalizacao.",

    objection5Title: "Opcoes veganas com textura de verdade",
    objection5Body: "O foco e o mesmo visual e mordida - nao substituicoes improvisadas.",
    objection5Inside: "Inclui: secao vegana estilo NY (5 receitas).",

    objection6Title: "Compartilhar (ou vender) com confianca",
    objection6Body: "Seus cookies falam por si. Aprenda a apresentar bonito — e se quiser vender, o plano esta incluido.",
    objection6Inside: "Inclui: fundamentos de marca, precos e apresentacao.",

    // Final CTA
    finalCtaTitle: "Em 2 Horas, Sua Primeira Fornada Estara Esfriando na Mesa",
    finalCtaSubtitle: "Em 2 horas, seu primeiro lote de cookies de qualidade profissional estara esfriando na mesa",
    finalCtaRecap: "Tudo que voce precisa por apenas $6.97:",
    finalBenefit1: "27 receitas testadas e vendaveis",
    finalBenefit2: "Metodo completo passo a passo",
    finalBenefit3: "8 bonus exclusivos",
    finalBenefit4: "Acesso imediato para sempre",
    finalBenefit5: "Guia opcional para vender incluido",
    finalCtaButton: "Quero minha copia agora",
    finalCtaNote: "Pagamento seguro - Acesso imediato - Garantia de 7 dias",
    choiceTitle: "Voce tem duas escolhas agora:",
    choiceA: "Fechar esta pagina. Continuar assistindo videos de confeitaria. Dizer \"um dia eu comeco.\" Daqui a seis meses, nada mudou.",
    choiceB: "Comece hoje por $6.97. Asse seu primeiro lote hoje a noite. Compartilhe amanha. No proximo fim de semana, todo mundo quer a receita.",
    choiceQuestion: "Qual soa mais como voce?",
    finalCtaPS: "P.S. Quando baixar, va direto ao Capitulo 3 — la esta a receita mais popular. A maioria faz o primeiro lote naquela mesma noite.",
    futurePacingTitle: "Imagine Isso...",
    futurePacingText: "E sabado de manha. Sua cozinha cheira a chocolate quente e baunilha. Na mesa, 36 cookies grossos estilo New York estao esfriando perfeitos. Voce abre um — o centro fica macio e cremoso. Parece de confeitaria. Voce nao adivinhou. Voce seguiu o metodo. Assim pode ser o seu primeiro fim de semana.",
    offerValidFor: "Oferta especial valida apenas por",

    // Footer
    footerDisclaimer: "Este site nao faz parte do Facebook ou da Meta. Resultados podem variar. Este ebook e educativo e nao garante ganhos especificos.",
    footerContact: "Contato",
    footerCopyright: "2026 ECommerce Shop Cart. Todos os direitos reservados.",

    // Floating CTA
    floatingCta: "Quero minha copia",
  },
} as const;

const LANGUAGE_STORAGE_KEY = 'preferred_lang';

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const inferLanguageFromBrowser = (): Language => {
    if (typeof navigator === 'undefined') return 'en';

    const langs = (navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language])
      .filter(Boolean)
      .map((l) => l.toLowerCase());

    const isSpanish = langs.some((l) => l === 'es' || l.startsWith('es-'));
    if (isSpanish) return 'es';

    const isPortuguese = langs.some((l) => l === 'pt' || l.startsWith('pt-'));
    if (isPortuguese) return 'pt';

    return 'en';
  };

  const getInitialLanguage = (): Language => {
    if (typeof window === 'undefined') return 'en';

    try {
      const saved = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
      if (saved === 'en' || saved === 'es' || saved === 'pt') return saved;
    } catch {
      // Ignore storage access errors and fall back to browser inference.
    }

    return inferLanguageFromBrowser();
  };

  const [language, _setLanguage] = useState<Language>(getInitialLanguage);

  const setLanguage = (lang: Language) => {
    _setLanguage(lang);
    try {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
    } catch {
      // Ignore storage write errors.
    }
  };

  const t = useMemo(() => {
    return (key: string): string => {
      const langTable = translations[language] as Record<string, string>;
      if (langTable && key in langTable) return String(langTable[key]);
      const fallback = translations.en as Record<string, string>;
      if (fallback && key in fallback) return String(fallback[key]);
      return key;
    };
  }, [language]);

  const value: LanguageContextType = useMemo(
    () => ({ language, setLanguage, t }),
    [language, t]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider');
  return ctx;
};
