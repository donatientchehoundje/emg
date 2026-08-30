# Site officiel — CPU ÉMERGENCE PLUS

Site vitrine du Collège Polytechnique et Universitaire ÉMERGENCE PLUS (Hévié, Abomey-Calavi, Bénin).

Stack : **Astro** + **Tailwind CSS** + **Decap CMS** (édition de contenu sans code), déployé sur **Netlify**.

## Commandes

| Commande            | Action                                             |
| :------------------- | :-------------------------------------------------- |
| `npm install`         | Installe les dépendances                            |
| `npm run dev`         | Lance le serveur local sur `localhost:4321`          |
| `npm run build`       | Génère le site statique dans `./dist/`               |
| `npm run preview`     | Prévisualise le build de production en local         |

## Structure du contenu

Tout le contenu éditable se trouve dans `src/content/` (fichiers Markdown) et `src/data/` (réglages généraux) :

- `src/content/filieres/` — les fiches filières du catalogue (~40, une par fichier)
- `src/content/classes-generales/` — Maternelle, Primaire, Secondaire (enseignement général, hors formation pro)
- `src/content/cycles/` — les 4 parcours de formation professionnelle
- `src/content/actualites/` — articles d'actualité
- `src/content/galerie/` — albums photos
- `src/data/site-settings.json` — coordonnées, réseaux sociaux, texte de la page d'accueil
- `src/data/admissions.json` — frais, conditions, calendrier des rentrées

Les photos uploadées (par le développeur ou via le CMS) vivent dans `public/uploads/`.

Les filières sans photo réelle affichent un visuel de substitution généré automatiquement (voir
`src/components/DomainPlaceholder.astro`) — mettre `imagePlaceholder: false` et renseigner `imagePrincipale`
dès qu'une vraie photo est disponible.

## Administration du contenu (Decap CMS)

Une fois le site déployé sur Netlify, l'équipe du CPU ÉMERGENCE PLUS peut éditer tout le contenu ci-dessus depuis
`https://<votre-domaine>/admin`, sans toucher au code :

1. Dans Netlify : **Site settings → Identity → Enable Identity**.
2. Toujours dans Identity : **Services → Git Gateway → Enable Git Gateway**.
3. Inviter les personnes qui doivent pouvoir éditer le site (**Identity → Invite users**), avec leur email.
4. La personne invitée reçoit un email, définit un mot de passe, puis se connecte sur `/admin`.

Chaque modification (nouvelle filière, actualité, photo...) crée automatiquement un commit Git et redéploie le
site en quelques minutes.

### Tester le CMS en local (développeur uniquement)

```sh
npx decap-server
# dans un second terminal :
npm run dev
```

Puis ouvrir `http://localhost:4321/admin`.

## Formulaire de contact

Le formulaire de pré-inscription (`/contact`) utilise **Netlify Forms** — aucune configuration supplémentaire
n'est nécessaire après le déploiement sur Netlify. Les soumissions sont visibles dans **Site settings → Forms**,
et une notification par email peut être configurée dans **Forms → Form notifications**.
