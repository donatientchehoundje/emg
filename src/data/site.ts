import settings from "./site-settings.json";

export const site = {
  nomPrincipal: "CPU ÉMERGENCE PLUS",
  nomComplet: "Collège Polytechnique et Universitaire ÉMERGENCE PLUS",
  devise: settings.devise,
  depuis: settings.depuis,
  telephones: settings.telephones,
  email: settings.email,
  adresse: settings.adresse,
  reseaux: {
    facebook: settings.facebook,
    tiktok: settings.tiktok,
  },
} as const;

export const hero = {
  titre: settings.heroTitre,
  sousTitre: settings.heroSousTitre,
  chiffresCles: settings.chiffresClés,
};

export const whatsappLink = (message = "Bonjour, je souhaite avoir des informations sur les formations du CPU ÉMERGENCE PLUS.") =>
  `https://wa.me/${settings.whatsappNumero}?text=${encodeURIComponent(message)}`;

export const navPrincipale = [
  { label: "Accueil", href: "/", icon: "home" },
  { label: "À propos", href: "/a-propos", icon: "info" },
  {
    label: "Formations",
    icon: "cap",
    children: [
      { label: "Enseignement général", href: "/enseignement-general", icon: "book", desc: "Maternelle, Primaire, Secondaire" },
      { label: "Formation professionnelle", href: "/formation-professionnelle", icon: "tool", desc: "Lycée pro, système dual, formations courtes" },
      { label: "Filières", href: "/filieres", icon: "grid", desc: "Le catalogue complet, 11 domaines" },
      { label: "Admissions", href: "/admissions", icon: "check", desc: "Conditions, frais, calendrier" },
    ],
  },
  {
    label: "Vie de l'école",
    icon: "news",
    children: [
      { label: "Actualités", href: "/actualites", icon: "news", desc: "Événements et sessions de formation" },
      { label: "Galerie", href: "/galerie", icon: "image", desc: "Photos de la vie au CPU" },
    ],
  },
  { label: "Contact", href: "/contact", icon: "mail" },
] as const;

// Liste à plat de toutes les pages (utilisée pour le footer / plan du site)
export const navFooter = navPrincipale.flatMap((item) =>
  "children" in item ? item.children : [item]
);
