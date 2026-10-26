# Ldelice 95 : site vitrine

Site statique Astro 7 + Tailwind 4 du restaurant Ldelice 95 (bokits et cuisine haïtienne, 2 rue René Cassin, Saint-Brice-sous-Forêt).

## Lancer en local
```bash
npm install
npm run dev          # http://localhost:4321
npm run build        # génère dist/
npm run preview      # sert dist/ sur http://localhost:4409
npm run captures     # captures 390 px et 1440 px dans captures/ (après build)
npm run og           # régénère public/og.png et public/apple-touch-icon.png
```

## Déployer
Vercel détecte Astro tout seul : importer le dépôt GitHub dans Vercel, chaque push sur `main` redéploie.
Après le choix du domaine définitif, remplacer `https://ldelice-95.vercel.app` dans `src/data/site.ts`, `astro.config.mjs`, `public/robots.txt` et `public/llms.txt`.

## Où changer quoi
- **Téléphone, adresse, horaires, note Google, liens, réseaux sociaux** : `src/data/site.ts` (tout le site suit, JSON-LD et statut « ouvert / fermé » compris).
- **Carte et prix** : `src/data/carte.json` (`prix: null` affiche « [À CONFIRMER] » ; mettre par exemple `"6 €"`).
- **Avis** : `AVIS` dans `src/data/site.ts` (uniquement de vrais extraits d’avis Google).
- **Textes des sections** : `src/pages/index.astro`.
- **Photos** : les emplacements sont des composants `<Photo>` dans `src/pages/index.astro`. Déposer les fichiers dans `src/assets/` et les remplacer par `<Image>` d’`astro:assets` (voir `PHOTOS_A_PRENDRE.md`).
- **Mentions légales** : `src/pages/mentions-legales.astro`.
