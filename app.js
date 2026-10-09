/* NETIVAXIS — shared interactions for the local multi-page site. */
const EMAILJS_CONFIG = {
  publicKey: "CNFLeLMhgcOWyM9Gs",
  serviceId: "service_9tce41d",
  templateId: "template_0em5lym",
  destination: "magulfredyshelton@gmail.com",
};

const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) => [
  ...parent.querySelectorAll(selector),
];

const translations = {
  pt: {
    "nav.about": "Sobre Nós",
    "nav.services": "Nossos Serviços",
    "nav.contact": "Contacto",
    "footer.about": "Quem somos?",
    "footer.values": "Visão, missão e valores",
    "footer.work": "Trabalhos realizados",
    "footer.services": "Nossos serviços",
    "footer.contact": "Contacto",
    "footer.talk": "Entre em contacto",
    "map.title": "Mercados ligados. Oportunidades partilhadas.",
    "map.copy": "Do Índico ao Atlântico, ligamos pessoas, negócios e destinos a partir de Maputo.",
    "map.countries": "países ligados",
    "map.link": "Conexão ativa",
    "map.hub": "Sede (Maputo)",
    "map.city": "Cidade ligada",
    "city.joburg": "Joanesburgo",
    "c.ao": "Angola", "c.na": "Namíbia", "c.bw": "Botswana", "c.zw": "Zimbabwe",
    "c.zm": "Zâmbia", "c.mz": "Moçambique", "c.za": "África do Sul",
    "footer.back": "Voltar ao início",
    "footer.networkLabel": "NETIVAXIS / REDE DO SUL DE ÁFRICA",
    "home.eyebrow": "NETIVAXIS",
    "home.title": "Visão global.\nPossibilidades sem fronteiras",
    "home.copy":
      "Consultoria personalizada que fortalece serviços e posiciona a sua marca com credibilidade",
    "home.cta": "Sobre nós",
    "home.scroll": "SCROLL",
    "home.valuesEyebrow": "O que nos orienta",
    "home.valuesTitle":
      "A confiança do nosso cliente é o nosso ponto de partida",
    "home.servicesEyebrow": "Nossos serviços",
    "home.servicesTitle": "Soluções com direção. Cuidado em cada detalhe.",
    "home.servicesCta": "Ver todos os serviços",
    "home.aboutEyebrow": "Sobre nós",
    "home.aboutTitle": "Uma visão ampla. Um compromisso próximo.",
    "home.aboutCopy":
      "A NETIVAXIS liga desenvolvimento de negócio, gestão de propriedades e turismo numa abordagem integrada. Acreditamos que as melhores soluções começam por compreender as pessoas, os seus desafios e o lugar onde querem chegar.",
    "home.aboutCta": "Conheça a NETIVAXIS",
    "home.contactTitle": "Conhecer o seu projeto é o nosso primeiro passo.",
    "home.contactCta": "Enviar uma mensagem",
    "values.innovation.title": "Inovação",
    "values.innovation.copy":
      "Promovemos soluções criativas e tecnológicas que antecipam tendências e impulsionam resultados.",
    "values.integrity.title": "Integridade",
    "values.integrity.copy":
      "Atuamos com rigor, ética e excelência em cada projeto, garantindo credibilidade e confiança.",
    "values.cultural.title": "Perspectiva cultural",
    "values.cultural.copy":
      "Valorizamos a diversidade e a identidade local, integrando diferentes culturas para enriquecer experiências.",
    "values.global.title": "Visão global",
    "values.global.copy":
      "Conectamos mercados e oportunidades, posicionando cada projeto com alcance internacional.",
    "services.business.title": "Desenvolvimento de negócio",
    "services.business.titlePlain": "Desenvolvimento de negócio",
    "services.business.copy":
      "Transformar ambição em direção. Estratégia, oportunidades e relações para crescer com clareza.",
    "services.house.title": "House management",
    "services.house.titlePlain": "House Management",
    "services.house.copy":
      "Cuidar do seu espaço com tranquilidade. Gestão atenta às necessidades da propriedade.",
    "services.tourism.title": "Turismo",
    "services.tourism.copy":
      "Descobrir com um novo olhar. Experiências que ligam interesses à identidade de cada destino.",
    "services.explore": "Explorar o serviço",
    "about.eyebrow": "Sobre nós",
    "about.title":
      "Uma abordagem integrada para ligar os seus objetivos a novas possibilidades.",
    "about.copy":
      "A NETIVAXIS reúne desenvolvimento de negócio, house management e turismo numa visão comum: criar soluções relevantes, com atenção às pessoas e ao seu contexto.",
    "about.cta": "Fale com a nossa equipa",
    "about.ctaTitle": "Conhecer o seu projeto é o nosso primeiro passo.",
    "about.missionEyebrow": "O que nos move",
    "about.mission": "Nossa missão",
    "about.missionCopy":
      "Criar soluções cuidadas em negócio, gestão de propriedades e turismo, para que cada cliente possa avançar com segurança e clareza.",
    "about.vision": "Nossa visão",
    "about.visionCopy":
      "Ser uma ponte entre pessoas, negócios e destinos, promovendo relações de confiança e abrindo espaço a novas oportunidades.",
    "about.values": "Nossos valores",
    "about.workEyebrow": "Trabalhos realizados",
    "about.workTitle": "Ligamos pessoas, negócios e lugares.",
    "about.workCopy":
      "Cada projeto é acompanhado de perto, com uma visão ampla e uma atenção rigorosa aos detalhes.",
    "services.eyebrow": "Nossos serviços",
    "services.title": "Soluções com direção. Cuidado em cada detalhe.",
    "services.copy":
      "Negócios, propriedades e experiências. Três áreas complementares, com a mesma atenção aos seus objetivos.",
    "services.business.heading": "Desenvolvimento de negócio",
    "services.business.body":
      "Uma perspetiva estratégica para transformar ideias em oportunidades. Apoiamos a definição de prioridades, a exploração de mercados e a construção de relações relevantes.",
    "services.house.heading": "House management",
    "services.house.body":
      "O seu património merece atenção, mesmo quando está longe. Uma abordagem cuidada à gestão da propriedade, que articula necessidades, manutenção e acompanhamento.",
    "services.tourism.heading": "Turismo",
    "services.tourism.body":
      "Há mais num destino do que um lugar no mapa. Apoiamos o planeamento de experiências que respeitam o seu ritmo e valorizam a cultura, a paisagem e a identidade local.",
    "services.detailCta": "Fale-nos do seu projeto",
    "business.eyebrow": "Desenvolvimento de negócio",
    "business.title":
      "Uma perspetiva estratégica para transformar ideias em oportunidades.",
    "business.copy":
      "Apoiamos a definição de prioridades, a exploração de mercados e a construção de relações relevantes.",
    "business.strategy": "Estratégia e posicionamento",
    "business.strategyCopy":
      "Clarificar objetivos e desenhar um caminho de desenvolvimento.",
    "business.market": "Oportunidades e mercados",
    "business.marketCopy":
      "Explorar contextos e identificar possibilidades de expansão.",
    "business.relations": "Relações e parcerias",
    "business.relationsCopy":
      "Aproximar interlocutores e apoiar novas ligações de negócio.",
    "house.eyebrow": "House management",
    "house.title": "O seu património merece atenção, mesmo quando está longe.",
    "house.copy":
      "Uma abordagem cuidada à gestão da propriedade, que articula necessidades, manutenção e acompanhamento.",
    "house.monitor": "Acompanhamento da propriedade",
    "house.monitorCopy":
      "Organização das necessidades e atenção regular ao espaço.",
    "house.maintenance": "Coordenação de manutenção",
    "house.maintenanceCopy":
      "Articulação de intervenções e serviços de conservação.",
    "house.preparation": "Preparação e apoio à utilização",
    "house.preparationCopy":
      "Cuidado com os detalhes para uma chegada tranquila.",
    "tourism.eyebrow": "Turismo",
    "tourism.title": "Há mais num destino do que um lugar no mapa.",
    "tourism.copy":
      "Apoiamos o planeamento de experiências que respeitam o seu ritmo e valorizam a cultura, a paisagem e a identidade local.",
    "tourism.planning": "Planeamento personalizado",
    "tourism.planningCopy":
      "Roteiros ajustados aos seus interesses e à forma como viaja.",
    "tourism.discovery": "Experiências e descoberta",
    "tourism.discoveryCopy":
      "Uma seleção atenta à cultura e ao contexto de cada destino.",
    "tourism.support": "Articulação e acompanhamento",
    "tourism.supportCopy":
      "Apoio à organização para desfrutar com maior tranquilidade.",
    "process.eyebrow": "Como trabalhamos",
    "process.title": "Do primeiro contacto ao próximo passo.",
    "process.copy":
      "Um processo claro, construído consigo e ajustado às necessidades do seu projeto.",
    "process.listen": "Escutar",
    "process.listenCopy":
      "Compreender o seu contexto, as prioridades e a ambição.",
    "process.design": "Desenhar",
    "process.designCopy": "Definir uma abordagem e alinhar o caminho a seguir.",
    "process.connect": "Articular",
    "process.connectCopy":
      "Coordenar os recursos e as ligações de que o projeto precisa.",
    "process.follow": "Acompanhar",
    "process.followCopy": "Manter a proximidade e rever os próximos passos.",
    "contact.eyebrow": "Contacto",
    "contact.title": "Toda a possibilidade começa numa conversa.",
    "contact.phone": "Telefone",
    "contact.email": "E-mail",
    "contact.address": "Endereço",
    "contact.hintsTitle":
      "Algumas indicações para tornar o primeiro contacto mais simples.",
    "contact.hint1Title": "1. O que devo incluir na mensagem?",
    "contact.hint1Copy":
      "Descreva o que procura, a área de interesse e os principais objetivos. Se existir um prazo ou contexto específico, inclua essa informação.",
    "contact.hint2Title": "2. Posso contactar para propor uma parceria?",
    "contact.hint2Copy":
      "Sim. Selecione a opção de parceria no assunto e apresente a sua organização, a área de atuação e a ideia de colaboração.",
    "contact.hint3Title": "3. Se ainda não souber de que serviço preciso?",
    "contact.hint3Copy":
      "Conte-nos o que procura. Ajudamos a clarificar o melhor ponto de partida.",
    "contact.formTitle": "Envie uma mensagem",
    "form.name": "*Nome",
    "form.email": "*E-mail",
    "form.subject": "*Assunto",
    "form.subjectChoose": "Selecione a área de interesse",
    "form.partner": "Parceiro / colaboração",
    "form.other": "Outro",
    "form.otherLabel": "Especifique o assunto",
    "form.message": "*Mensagem",
    "form.submit": "Enviar uma mensagem",
    "form.namePlaceholder": "O seu nome",
    "form.emailPlaceholder": "O seu e-mail",
    "form.otherPlaceholder": "Sobre o que quer falar?",
    "form.messagePlaceholder": "Como podemos ajudar? Fale mais do seu projeto.",
    "form.required": "*Campos obrigatórios",
    "feedback.ready": "Formulário pronto — falta ligar o serviço de email.",
    "feedback.sent": "Mensagem enviada. Obrigado pela conversa.",
    "feedback.error": "Não foi possível enviar agora.",
  },
  en: {
    "nav.about": "About Us",
    "nav.services": "Our Services",
    "nav.contact": "Contact",
    "footer.about": "Who we are",
    "footer.values": "Vision, mission and values",
    "footer.work": "Selected work",
    "footer.services": "Our services",
    "footer.contact": "Contact",
    "footer.talk": "Get in touch",
    "map.title": "Connected markets. Shared opportunities.",
    "map.copy": "From the Indian Ocean to the Atlantic, we connect people, business and destinations from Maputo.",
    "map.countries": "countries connected",
    "map.link": "Active link",
    "map.hub": "Headquarters (Maputo)",
    "map.city": "Connected city",
    "city.joburg": "Johannesburg",
    "c.ao": "Angola", "c.na": "Namibia", "c.bw": "Botswana", "c.zw": "Zimbabwe",
    "c.zm": "Zambia", "c.mz": "Mozambique", "c.za": "South Africa",
    "footer.back": "Back to top",
    "footer.networkLabel": "NETIVAXIS / SOUTHERN AFRICA NETWORK",
    "home.eyebrow": "NETIVAXIS",
    "home.title": "Global vision.\nPossibilities without borders",
    "home.copy":
      "Personalised consulting that strengthens services and positions your brand with credibility.",
    "home.cta": "About us",
    "home.scroll": "SCROLL",
    "home.valuesEyebrow": "What guides us",
    "home.valuesTitle": "Our client's trust is our starting point",
    "home.servicesEyebrow": "Our services",
    "home.servicesTitle": "Solutions with direction. Care in every detail.",
    "home.servicesCta": "View all services",
    "home.aboutEyebrow": "About us",
    "home.aboutTitle": "A broad view. A close commitment.",
    "home.aboutCopy":
      "NETIVAXIS connects business development, property management and tourism through an integrated approach. The best solutions begin by understanding people, their challenges and where they want to go.",
    "home.aboutCta": "Meet NETIVAXIS",
    "home.contactTitle": "Understanding your project is our first step.",
    "home.contactCta": "Send a message",
    "values.innovation.title": "Innovation",
    "values.innovation.copy":
      "We promote creative and technological solutions that anticipate trends and drive results.",
    "values.integrity.title": "Integrity",
    "values.integrity.copy":
      "We act with rigour, ethics and excellence in every project, building credibility and trust.",
    "values.cultural.title": "Cultural perspective",
    "values.cultural.copy":
      "We value diversity and local identity, integrating different cultures to enrich experiences.",
    "values.global.title": "Global vision",
    "values.global.copy":
      "We connect markets and opportunities, positioning each project with international reach.",
    "services.business.title": "Business development",
    "services.business.titlePlain": "Business development",
    "services.business.copy":
      "Turn ambition into direction. Strategy, opportunities and relationships for clear growth.",
    "services.house.title": "House management",
    "services.house.titlePlain": "House Management",
    "services.house.copy":
      "Care for your space with confidence. Attentive management for your property needs.",
    "services.tourism.title": "Tourism",
    "services.tourism.copy":
      "Discover with a new perspective. Experiences that connect interests with each destination's identity.",
    "services.explore": "Explore the service",
    "about.eyebrow": "About us",
    "about.title":
      "An integrated approach to connect your goals to new possibilities.",
    "about.copy":
      "NETIVAXIS brings together business development, house management and tourism through a shared vision: creating relevant solutions with attention to people and context.",
    "about.cta": "Talk to our team",
    "about.ctaTitle": "Understanding your project is our first step.",
    "about.missionEyebrow": "What moves us",
    "about.mission": "Our mission",
    "about.missionCopy":
      "Create thoughtful solutions in business, property management and tourism so every client can move forward with confidence and clarity.",
    "about.vision": "Our vision",
    "about.visionCopy":
      "Be a bridge between people, businesses and destinations, promoting trusted relationships and opening space for new opportunities.",
    "about.values": "Our values",
    "about.workEyebrow": "Selected work",
    "about.workTitle": "We connect people, businesses and places.",
    "about.workCopy":
      "Every project is followed closely, with a broad view and rigorous attention to detail.",
    "services.eyebrow": "Our services",
    "services.title": "Solutions with direction. Care in every detail.",
    "services.copy":
      "Business, properties and experiences. Three complementary areas, with the same attention to your objectives.",
    "services.business.heading": "Business development",
    "services.business.body":
      "A strategic perspective to turn ideas into opportunities. We support priorities, market exploration and relevant relationships.",
    "services.house.heading": "House management",
    "services.house.body":
      "Your property deserves attention, even when you are away. A thoughtful approach to management, maintenance and follow-up.",
    "services.tourism.heading": "Tourism",
    "services.tourism.body":
      "There is more to a destination than a place on a map. We plan experiences that value culture, landscape and local identity.",
    "services.detailCta": "Tell us about your project",
    "business.eyebrow": "Business development",
    "business.title":
      "A strategic perspective to turn ideas into opportunities.",
    "business.copy":
      "We support priorities, market exploration and the construction of relevant relationships.",
    "business.strategy": "Strategy and positioning",
    "business.strategyCopy":
      "Clarify objectives and design a development path.",
    "business.market": "Opportunities and markets",
    "business.marketCopy":
      "Explore contexts and identify possibilities for expansion.",
    "business.relations": "Relationships and partnerships",
    "business.relationsCopy":
      "Bring stakeholders closer and support new business connections.",
    "house.eyebrow": "House management",
    "house.title": "Your property deserves attention, even when you are away.",
    "house.copy":
      "A thoughtful approach to property management that connects needs, maintenance and follow-up.",
    "house.monitor": "Property follow-up",
    "house.monitorCopy":
      "Organise needs and give regular attention to the space.",
    "house.maintenance": "Maintenance coordination",
    "house.maintenanceCopy":
      "Coordinate interventions and conservation services.",
    "house.preparation": "Preparation and use support",
    "house.preparationCopy": "Care for the details so every arrival is calm.",
    "tourism.eyebrow": "Tourism",
    "tourism.title": "There is more to a destination than a place on a map.",
    "tourism.copy":
      "We plan experiences that respect your pace and value culture, landscape and local identity.",
    "tourism.planning": "Personalised planning",
    "tourism.planningCopy":
      "Routes adjusted to your interests and the way you travel.",
    "tourism.discovery": "Experiences and discovery",
    "tourism.discoveryCopy":
      "A thoughtful selection of the culture and context of each destination.",
    "tourism.support": "Coordination and support",
    "tourism.supportCopy":
      "Help with organisation so you can travel with greater ease.",
    "process.eyebrow": "How we work",
    "process.title": "From the first contact to the next step.",
    "process.copy":
      "A clear process, built with you and adjusted to your project's needs.",
    "process.listen": "Listen",
    "process.listenCopy": "Understand your context, priorities and ambition.",
    "process.design": "Design",
    "process.designCopy": "Define an approach and align the way forward.",
    "process.connect": "Connect",
    "process.connectCopy":
      "Coordinate the resources and links your project needs.",
    "process.follow": "Follow through",
    "process.followCopy": "Stay close and review the next steps.",
    "contact.eyebrow": "Contact",
    "contact.title": "Every possibility starts with a conversation.",
    "contact.phone": "Phone",
    "contact.email": "Email",
    "contact.address": "Address",
    "contact.hintsTitle": "A few notes to make the first contact simpler.",
    "contact.hint1Title": "1. What should I include in my message?",
    "contact.hint1Copy":
      "Describe what you are looking for, the area of interest and your main objectives. Include any specific deadline or context.",
    "contact.hint2Title": "2. Can I contact you about a partnership?",
    "contact.hint2Copy":
      "Yes. Select partnership in the subject and introduce your organisation, area of activity and collaboration idea.",
    "contact.hint3Title": "3. What if I do not know which service I need?",
    "contact.hint3Copy":
      "Tell us what you are looking for. We will help clarify the best starting point.",
    "contact.formTitle": "Send a message",
    "form.name": "*Name",
    "form.email": "*Email",
    "form.subject": "*Subject",
    "form.subjectChoose": "Select an area of interest",
    "form.partner": "Partner / collaboration",
    "form.other": "Other",
    "form.otherLabel": "Specify the subject",
    "form.message": "*Message",
    "form.submit": "Send a message",
    "form.namePlaceholder": "Your name",
    "form.emailPlaceholder": "Your email",
    "form.otherPlaceholder": "What would you like to discuss?",
    "form.messagePlaceholder": "How can we help? Tell us about your project.",
    "form.required": "*Required fields",
    "feedback.ready": "The form is ready — connect the email service to send.",
    "feedback.sent": "Message sent. Thank you for the conversation.",
    "feedback.error": "We could not send this now.",
  },
};

let language = localStorage.getItem("netivaxis-language") || "pt";

function translate(nextLanguage = language) {
  language = nextLanguage;
  localStorage.setItem("netivaxis-language", language);
  const dictionary = translations[language];
  $$("[data-i18n]").forEach((element) => {
    const value = dictionary[element.dataset.i18n];
    if (value !== undefined) element.textContent = value;
  });
  $$("[data-i18n-placeholder]").forEach((element) => {
    const value = dictionary[element.dataset.i18nPlaceholder];
    if (value !== undefined) element.placeholder = value;
  });
  const label = $("#languageLabel");
  if (label) label.textContent = language.toUpperCase();
  $$("[data-language]").forEach((button) =>
    button.classList.toggle("selected", button.dataset.language === language),
  );
  document.documentElement.lang = language;
}

function setupShell() {
  const languageTrigger = $("#languageTrigger");
  const languageMenu = $("#languageMenu");
  languageTrigger?.addEventListener("click", () => {
    const open = languageMenu.hidden;
    languageMenu.hidden = !open;
    languageTrigger.setAttribute("aria-expanded", String(open));
  });
  $$("[data-language]").forEach((button) =>
    button.addEventListener("click", () => {
      translate(button.dataset.language);
      if (languageMenu) languageMenu.hidden = true;
      languageTrigger?.setAttribute("aria-expanded", "false");
    }),
  );
  const mobileMenu = $("#mobileMenu");
  const mobileNav = $("#mobileNav");
  const setMenu = (open) => {
    if (!mobileNav || !mobileMenu) return;
    mobileNav.hidden = !open;
    mobileMenu.setAttribute("aria-expanded", String(open));
    mobileMenu.innerHTML = `<i data-lucide="${open ? "x" : "menu"}" aria-hidden="true"></i><span class="sr-only">${open ? "Fechar menu" : "Abrir menu"}</span>`;
    window.lucide?.createIcons();
    document.body.classList.toggle("menu-open", open);
  };
  mobileMenu?.addEventListener("click", () => setMenu(mobileNav.hidden));
  $$(".mobile-nav a").forEach((link) => link.addEventListener("click", () => setMenu(false)));
  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    if (mobileNav && !mobileNav.hidden) setMenu(false);
    if (languageMenu && !languageMenu.hidden) {
      languageMenu.hidden = true;
      languageTrigger?.setAttribute("aria-expanded", "false");
    }
  });
  document.addEventListener("click", (event) => {
    if (languageMenu && !languageMenu.hidden && !event.target.closest(".language-picker")) {
      languageMenu.hidden = true;
      languageTrigger?.setAttribute("aria-expanded", "false");
    }
  });
  // se o ecrã alargar (rodar o telemóvel/tablet), fecha o menu móvel
  window.matchMedia("(min-width: 901px)").addEventListener?.("change", (e) => e.matches && setMenu(false));
  const header = $("#siteHeader");
  window.addEventListener(
    "scroll",
    () => header?.classList.toggle("is-stuck", window.scrollY > 70),
    { passive: true },
  );
}

/* Gráfico "fantasma" do hero: curva de ganho de juros a subir de ponta a ponta do ecrã.
   Fica entre a fotografia e o texto (canvas z-index 1; texto z-index 2). */
function setupHeroGhost() {
  const canvas = $("#heroGhost");
  const hero = canvas?.closest(".home-hero");
  if (!canvas || !hero) return;
  const ctx = canvas.getContext("2d");
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const AQUA = "90, 201, 217";
  const CORAL = "230, 162, 127";
  const GHOST_OPACITY = 0.4; // 0 = invisível, 1 = muito forte (era ~1)
  const FINAL = 27.4; // % mostrado no fim da curva (ilustrativo)
  const DRAW = 6.8, HOLD = 2.4, FADE = 1.1, GAP = 0.5;
  let W = 0, H = 0, dpr = 1, raf = 0, start = 0, visible = true;

  const resize = () => {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = hero.clientWidth;
    H = hero.clientHeight;
    canvas.width = Math.round(W * dpr);
    canvas.height = Math.round(H * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };

  // juros compostos (exponencial) + um pouco de "mercado" que não altera o final
  const growth = (u) => {
    const exp = (Math.exp(2.3 * u) - 1) / (Math.exp(2.3) - 1);
    const lin = u;
    const wiggle = Math.sin(u * 19) * 0.016 * Math.sin(Math.PI * u) + Math.sin(u * 7.3 + 1) * 0.012 * Math.sin(Math.PI * u);
    return Math.min(1, Math.max(0, 0.62 * exp + 0.38 * lin + wiggle));
  };
  const yAt = (u) => {
    const yBottom = H * 0.9, yTop = H * 0.13;
    return yBottom - (yBottom - yTop) * growth(u);
  };
  const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
  const fmt = (v) => {
    const text = v.toFixed(1);
    return "+" + (document.documentElement.lang === "en" ? text : text.replace(".", ",")) + "%";
  };
  const label = () => (document.documentElement.lang === "en" ? "Interest gain" : "Ganho de juros");

  const frame = (now) => {
    raf = 0;
    if (!visible && !reduce) return;
    if (!start) start = now;
    const total = DRAW + HOLD + FADE + GAP;
    const t = reduce ? DRAW : ((now - start) / 1000) % total;
    let progress = ease(Math.min(1, t / DRAW));
    let alpha = 1;
    if (t > DRAW + HOLD) alpha = Math.max(0, 1 - (t - DRAW - HOLD) / FADE);
    if (t > DRAW + HOLD + FADE) alpha = 0;
    if (reduce) progress = 1;
    draw(progress, alpha, t);
    if (!reduce) raf = requestAnimationFrame(frame);
  };

  function draw(progress, alpha, t) {
    ctx.clearRect(0, 0, W, H);
    if (alpha <= 0) return;
    const small = W < 640;
    const headX = progress * W;
    const steps = Math.max(40, Math.round(W / 6));
    const uMax = progress;
    ctx.save();
    ctx.globalAlpha = alpha * GHOST_OPACITY;

    // linhas horizontais (valores em %) — só aparecem como "ecrã de terminal"
    ctx.font = `600 ${small ? 9 : 11}px Inter, Arial, sans-serif`;
    ctx.textAlign = "right";
    ctx.lineWidth = 1;
    for (let v = 5; v <= 25; v += 5) {
      // y correspondente a v% na escala da curva (growth normalizado por FINAL)
      const y = H * 0.9 - (H * 0.9 - H * 0.13) * (v / FINAL);
      ctx.strokeStyle = `rgba(${AQUA}, .08)`;
      ctx.setLineDash([2, 8]);
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillStyle = `rgba(${AQUA}, .38)`;
      ctx.fillText("+" + v + "%", W - 12, y - 5);
    }

    // barras (histograma de rendimento) que crescem quando a linha passa
    const gap = Math.min(34, Math.max(14, W / 48));
    const barW = gap * 0.46;
    for (let x = gap; x < headX - 2; x += gap) {
      const u = x / W;
      const y = yAt(u);
      const grow = Math.min(1, (headX - x) / (gap * 5));
      const h = (H * 0.98 - y) * grow;
      const g = ctx.createLinearGradient(0, H * 0.98 - h, 0, H * 0.98);
      g.addColorStop(0, `rgba(${AQUA}, .10)`);
      g.addColorStop(1, `rgba(${AQUA}, 0)`);
      ctx.fillStyle = g;
      ctx.fillRect(x - barW / 2, H * 0.98 - h, barW, h);
    }

    // área sob a curva
    ctx.beginPath();
    ctx.moveTo(0, H);
    for (let i = 0; i <= steps; i++) {
      const u = (i / steps) * uMax;
      ctx.lineTo(u * W, yAt(u));
    }
    ctx.lineTo(headX, H);
    ctx.closePath();
    const area = ctx.createLinearGradient(0, H * 0.1, 0, H);
    area.addColorStop(0, `rgba(${AQUA}, .09)`);
    area.addColorStop(1, `rgba(${AQUA}, 0)`);
    ctx.fillStyle = area;
    ctx.fill();

    // a linha de ganho (brilho suave)
    const stroke = ctx.createLinearGradient(0, 0, Math.max(headX, 1), 0);
    stroke.addColorStop(0, `rgba(${AQUA}, .05)`);
    stroke.addColorStop(0.6, `rgba(${AQUA}, .38)`);
    stroke.addColorStop(1, `rgba(190, 245, 250, .8)`);
    ctx.beginPath();
    for (let i = 0; i <= steps; i++) {
      const u = (i / steps) * uMax;
      i ? ctx.lineTo(u * W, yAt(u)) : ctx.moveTo(u * W, yAt(u));
    }
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.strokeStyle = stroke;
    ctx.lineWidth = small ? 2 : 2.6;
    ctx.shadowColor = `rgba(${AQUA}, .8)`;
    ctx.shadowBlur = 12;
    ctx.stroke();
    ctx.shadowBlur = 0;

    // cabeça da linha: ponto, guia vertical e etiqueta com o valor
    if (progress > 0.01) {
      const hy = yAt(uMax);
      const pulse = 0.5 + 0.5 * Math.sin(t * 5);
      ctx.strokeStyle = `rgba(${AQUA}, .28)`;
      ctx.setLineDash([3, 6]);
      ctx.beginPath(); ctx.moveTo(headX, hy); ctx.lineTo(headX, H); ctx.stroke();
      ctx.setLineDash([]);

      ctx.beginPath();
      ctx.arc(headX, hy, 9 + pulse * 6, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${CORAL}, ${0.18 - pulse * 0.08})`;
      ctx.fill();
      ctx.beginPath();
      ctx.arc(headX, hy, small ? 4 : 5, 0, Math.PI * 2);
      ctx.fillStyle = "#fff";
      ctx.shadowColor = `rgba(${CORAL}, .9)`;
      ctx.shadowBlur = 14;
      ctx.fill();
      ctx.shadowBlur = 0;

      const value = fmt(growth(uMax) * FINAL);
      ctx.font = `800 ${small ? 13 : 16}px Inter, Arial, sans-serif`;
      const vw = ctx.measureText(value).width;
      ctx.font = `600 ${small ? 8 : 9.5}px Inter, Arial, sans-serif`;
      const lw = ctx.measureText(label().toUpperCase()).width;
      const boxW = Math.max(vw, lw) + 24, boxH = small ? 40 : 48;
      let bx = headX - boxW - 16;
      if (bx < 8) bx = headX + 16;
      const by = Math.max(70, hy - boxH - 18);
      ctx.fillStyle = "rgba(8, 22, 46, .55)";
      ctx.strokeStyle = `rgba(${CORAL}, .65)`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.roundRect ? ctx.roundRect(bx, by, boxW, boxH, 8) : ctx.rect(bx, by, boxW, boxH);
      ctx.fill(); ctx.stroke();
      ctx.textAlign = "left";
      ctx.fillStyle = `rgba(${AQUA}, .85)`;
      ctx.font = `600 ${small ? 8 : 9.5}px Inter, Arial, sans-serif`;
      ctx.fillText(label().toUpperCase(), bx + 12, by + (small ? 14 : 17));
      ctx.fillStyle = "#fff";
      ctx.font = `800 ${small ? 13 : 16}px Inter, Arial, sans-serif`;
      ctx.fillText(value, bx + 12, by + (small ? 32 : 38));
    }
    ctx.restore();
  }

  resize();
  new ResizeObserver(() => { resize(); if (reduce) frame(0); }).observe(hero);
  if (reduce) { frame(0); return; }
  new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    if (visible && !raf) raf = requestAnimationFrame(frame);
  }).observe(hero);
  raf = requestAnimationFrame(frame);
}

function setupReveal() {
  const elements = $$(".reveal");
  if (!elements.length) return;
  const observer = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      }),
    { threshold: 0.12 },
  );
  elements.forEach((element) => observer.observe(element));
}

function setupCarousels() {
  $$(".detail-carousel").forEach((carousel) => {
    const track = $(".carousel-track", carousel);
    const slides = $$(".carousel-track img", carousel);
    const dots = $$(".carousel-dots button", carousel);
    if (!track || slides.length < 2) return;
    let index = 0;
    const goTo = (nextIndex) => {
      index = (nextIndex + slides.length) % slides.length;
      track.style.transform = `translateX(-${index * (100 / slides.length)}%)`;
      dots.forEach((dot, dotIndex) =>
        dot.classList.toggle("active", dotIndex === index),
      );
    };
    $(".carousel-control.prev", carousel)?.addEventListener("click", () =>
      goTo(index - 1),
    );
    $(".carousel-control.next", carousel)?.addEventListener("click", () =>
      goTo(index + 1),
    );
    dots.forEach((dot, dotIndex) =>
      dot.addEventListener("click", () => goTo(dotIndex)),
    );
    window.setInterval(() => goTo(index + 1), 6500);
  });
}

function setupContactForm() {
  const form = $("#contactForm");
  if (!form) return;
  const subject = $("#subjectSelect");
  const otherWrap = $("#otherSubjectWrap");
  const otherInput = $("#otherSubject");
  const queryService = new URLSearchParams(window.location.search).get(
    "service",
  );
  if (queryService && subject) {
    const option = [...subject.options].find(
      (item) => item.dataset.service === queryService,
    );
    if (option) subject.value = option.value;
  }
  subject?.addEventListener("change", () => {
    const isOther = subject.value === "Outro";
    otherWrap.hidden = !isOther;
    if (otherInput) otherInput.required = isOther;
  });
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const feedback = $("#formFeedback");
    if (!form.reportValidity()) return;
    const data = Object.fromEntries(new FormData(form).entries());
    if (
      EMAILJS_CONFIG.publicKey &&
      EMAILJS_CONFIG.serviceId &&
      EMAILJS_CONFIG.templateId &&
      window.emailjs
    ) {
      try {
        emailjs.init({ publicKey: EMAILJS_CONFIG.publicKey });
        await emailjs.send(
          EMAILJS_CONFIG.serviceId,
          EMAILJS_CONFIG.templateId,
          { ...data, destination: EMAILJS_CONFIG.destination },
        );
        feedback.textContent = translations[language]["feedback.sent"];
        form.reset();
        otherWrap.hidden = true;
      } catch {
        feedback.textContent = translations[language]["feedback.error"];
      }
    } else {
      feedback.textContent = translations[language]["feedback.ready"];
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  if (window.lucide) window.lucide.createIcons();
  translate(language);
  setupShell();
  setupReveal();
  setupHeroGhost();
  setupCarousels();
  setupContactForm();
});
