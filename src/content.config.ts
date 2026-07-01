import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const DOMAINES = [
  "Mode & Artisanat",
  "Hôtellerie & Restauration",
  "Beauté",
  "Agriculture",
  "Bâtiment & BTP",
  "Communication & Numérique",
  "Administration",
  "Santé",
  "Génie électrique",
  "Génie thermique",
  "Métallurgie & Mécanique",
] as const;

// Les images de contenu (fournies par le client via Decap CMS ou par le développeur)
// vivent dans public/uploads et sont référencées en simples chemins ("/uploads/...").
// On évite volontairement le helper image() d'Astro ici : il attend des fichiers dans
// src/ traités par Vite, ce qui casse l'aperçu image dans l'éditeur Decap CMS.

const filieres = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/filieres" }),
  schema: z.object({
    titre: z.string(),
    domaine: z.enum(DOMAINES),
    imagePrincipale: z.string().optional(),
    imagePlaceholder: z.boolean().default(false),
    descriptionCourte: z.string(),
    duree: z.string(),
    certification: z.array(z.enum(["CQM", "CQP", "CAP", "DTI", "BAC pro", "DFP", "Attestation"])),
    niveauAdmission: z.string(),
    debouches: z.array(z.string()).default([]),
    miseEnAvant: z.boolean().default(false),
    ordreAffichage: z.number().default(99),
  }),
});

const classesGenerales = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/classes-generales" }),
  schema: z.object({
    titre: z.string(),
    cycle: z.enum(["Maternelle", "Primaire", "Secondaire"]),
    niveaux: z.array(z.string()).default([]),
    series: z.array(z.string()).default([]),
    description: z.string(),
    image: z.string().optional(),
    ordreAffichage: z.number().default(99),
  }),
});

const cycles = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/cycles" }),
  schema: z.object({
    titre: z.string(),
    slug: z.string(),
    description: z.string(),
    image: z.string().optional(),
    programme: z.array(z.string()).default([]),
    debouches: z.array(z.string()).default([]),
    duree: z.string(),
    ordreAffichage: z.number().default(99),
  }),
});

const actualites = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/actualites" }),
  schema: z.object({
    titre: z.string(),
    datePublication: z.coerce.date(),
    dateEvenement: z.coerce.date().optional(),
    imagePrincipale: z.string().optional(),
    chapo: z.string(),
    categorie: z.enum(["Événement", "Partenariat", "Vie de l'école", "Session de formation courte"]),
    lienPreInscription: z.string().optional(),
    publie: z.boolean().default(true),
  }),
});

const galerie = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/galerie" }),
  schema: z.object({
    titreAlbum: z.string(),
    categorie: z.enum(["Remise de diplômes", "Excursions", "Ateliers & Filières", "Village de vacances", "Vie de l'école"]),
    images: z.array(
      z.object({
        src: z.string(),
        legende: z.string().optional(),
      })
    ),
    date: z.coerce.date(),
  }),
});

export const collections = { filieres, classesGenerales, cycles, actualites, galerie };
