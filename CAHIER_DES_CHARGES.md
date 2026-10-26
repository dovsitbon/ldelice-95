# Prompt Claude Code : site « Ldelice 95 » (bokits et cuisine haïtienne, Saint-Brice-sous-Forêt)

Tu es un développeur front-end et directeur artistique senior. Crée le site vitrine complet de **Ldelice 95**. Objectif business : faire connaître **« le meilleur bokit d'Île-de-France »** (dixit les clients) au-delà du bouche-à-oreille, montrer la carte haïtienne, et générer des commandes à emporter par téléphone. Le lieu « ne paie pas de mine » vu de l'extérieur : le site doit **rassurer avant la visite** et transformer ce point faible en charme.

## Fiche d'identité (informations vérifiées)
- **Nom** : Ldelice 95 (parfois écrit « L'Délice 95 »)
- **Type** : restaurant caribéen : **bokits** et **cuisine haïtienne**, 100 % fait maison, cuisiné sous vos yeux
- **Adresse** : 2 rue René Cassin, 95350 Saint-Brice-sous-Forêt
- **Téléphone** : 07 61 52 48 64
- **Horaires** : mardi au samedi 12h00–21h00 · dimanche et lundi fermés
- **Note Google** : 4,7/5 sur 79 avis
- **Format** : petite maison avec **terrasse** (pas de salle intérieure selon un avis), vente à emporter, traiteur, réservations acceptées
- **Le chef** : travaille souvent seul, souriant, « un véritable chef » d'après les clients ; changement de propriétaire il y a environ 4 ans
- **Pratique** : parking gratuit et stationnement facile, accessible en fauteuil roulant
- **Paiements** : CB, sans contact
- **Prix** : bokit poulet cité à 6 € par un client (il y a un an) → `[À CONFIRMER]` ; prix moyen ~15 € selon un annuaire
- **Schema.org** : `Restaurant` (servesCuisine : Caribbean, Haitian)

## Ce que disent les clients
Plats cités : **bokit poulet** (pâte croustillante, poulet bien assaisonné et bien garni), **griot** (porc), **riz djondjon**, **banane pesée**, **pikliz** frais, pickles, poulet. Portions copieuses, très bon rapport qualité/prix, ambiance décontractée avec bonne musique, « ça rappelle l'ambiance au pays ».

Extraits d'avis utilisables (« Avis Google ») :
- « Ce qui, au premier abord, ne payait pas de mine, s'est révélé être le meilleur bokit que nous avons eu l'opportunité de manger en Île-de-France ! »
- « Ça fait longtemps que je n'ai pas mangé de bokit aussi bon (la dernière fois c'était en Guadeloupe). »
- « Un plat de griot complet riz et banane avec le pikliz : c'était un délice, le pikliz était frais. »
- « Très bon accueil du gérant qui y travaille seul. Tout est fait maison ! »
- « Les apparences sont trompeuses : on ne vient pas pour l'esthétique de l'extérieur mais pour la nourriture. »

## Direction artistique (angle : « la petite case qui ne paie pas de mine »)
- Assumer avec humour : « De l'extérieur, on ne paie pas de mine. Dans l'assiette, c'est une autre histoire. » Inspiration : **enseignes peintes à la main des lolos antillais et des tap-taps haïtiens**, couleurs vives mais maîtrisées, motif **madras** dessiné en SVG (original).
- Palette : jaune soleil, vert feuille, rouge piment, sur fond blanc chaux ; texte noir.
- Typo : une display ronde et grasse façon peinture d'enseigne (ex. Bricolage Grotesque en très gras ou Lilita One) + une sans lisible (ex. Nunito Sans).
- Idée signature : la **carte présentée comme une enseigne peinte** (planches de bois, lettres peintes), et un bandeau défilant lent « Bokit · Griot · Pikliz · Banane pesée · Riz djondjon » (arrêté si `prefers-reduced-motion`).

## Structure
1. **Accueil** : « Le bokit dont tout Saint-Brice parle », note 4,7/5, boutons « Commander par téléphone » + « Voir la carte », statut ouvert/fermé.
2. **Le bokit** : explication pour ceux qui ne connaissent pas (pain frit antillais garni), garnitures `[À CONFIRMER]`.
3. **La cuisine haïtienne** : griot, riz djondjon, banane pesée, pikliz, poulet… + petit lexique.
4. **La carte** : `src/data/carte.json`, prix `[À CONFIRMER]`.
5. **Ne vous fiez pas à la façade** : la petite maison, la terrasse, le chef qui cuisine devant vous (photos à prendre).
6. **Avis** : 5 extraits + 4,7/5.
7. **Traiteur & commandes groupées** : contact téléphone.
8. **Infos pratiques** : horaires, adresse rue René Cassin, parking gratuit, carte.

---

## Règles communes (à respecter strictement)

### 1. Avant de coder
- Liste les skills et plugins disponibles dans ta session et **utilise toutes celles qui s'appliquent** : design frontend (ex. `frontend-design`), tests navigateur / captures (Playwright, `webapp-testing`), images, déploiement, etc. Dis-moi lesquelles tu utilises.
- Propose-moi en 10 lignes max la direction artistique (palette en hex, 2 polices, ambiance, 1 idée de mise en page signature) **puis enchaîne sans attendre ma validation**.

### 2. Stack technique
- **Astro + Tailwind CSS**, site statique, zéro framework JS lourd côté client (îlots JS seulement si nécessaire).
- Polices auto-hébergées (`@fontsource`), pas d'appel Google Fonts.
- Images en AVIF/WebP via `astro:assets`, `loading="lazy"` sauf la première image.
- Déploiement prévu sur **Vercel** (ajoute la config si besoin). Si un accès Vercel est connecté dans ta session, fais un déploiement **preview** et donne-moi l'URL.
- Objectif Lighthouse : ≥ 95 sur les 4 scores, mobile.

### 3. Design qui NE FAIT PAS « site généré par IA » (priorité n°1)
Interdit :
- dégradés violet/bleu, « glassmorphism », blobs flous en fond, néons, ombres molles partout ;
- la grille « 3 cartes avec une icône + titre + 2 lignes » ;
- les emojis comme icônes, les icônes génériques type Heroicons/Lucide posées partout ;
- Inter/Poppins/Montserrat seules, tout centré, tout arrondi en `rounded-2xl` ;
- les phrases creuses : « Bienvenue chez… », « Découvrez… », « Plongez dans… », « Votre partenaire de confiance », « Une expérience unique », « Notre passion, votre satisfaction » ;
- les fausses stats (« +500 clients satisfaits »), les faux témoignages, les photos de banque d'images clichés (poignée de main, personnes en costume qui sourient).

À faire :
- une **identité propre au lieu** (voir la direction artistique plus haut), avec un ou deux partis pris forts : typographie éditoriale, mise en page asymétrique, détails réels (ardoise, ticket, plaque, carte routière, numéro de rue en très grand…) ;
- des textes **courts, concrets, à la voix du commerçant**, avec de vrais détails (horaires, plats, adresses, noms de rues, parkings) ;
- du rythme : alterner sections pleines et aérées, une grande typo, des espaces généreux ;
- des micro-interactions sobres (hover, apparition légère au scroll), rien de plus ;
- `prefers-reduced-motion` respecté.

### 4. Contenu : zéro invention
- Utilise **uniquement** les informations fournies dans ce prompt.
- Tout ce qui manque (prix, plats exacts, photos, nom du gérant, SIRET…) = un marqueur visible **`[À CONFIRMER]`** et une entrée dans le fichier `A_COMPLETER.md` à la racine.
- Avis clients : n'utilise **que** les extraits fournis, attribués « Avis Google ». Jamais d'avis inventé, jamais de nom inventé.

### 5. Photos
- **Ne télécharge pas et n'intègre pas** de photos Google Maps / Facebook / Instagram (droits d'auteur des clients et du commerce).
- Mets des emplacements propres (bloc couleur + légende du cliché attendu, pas de gris « placeholder ») et crée `PHOTOS_A_PRENDRE.md` : la liste précise des photos à faire (cadrage, lumière, format), pour que je les prenne moi-même chez le commerçant.

### 6. SEO local (indispensable)
- `<html lang="fr">`, title + meta description uniques, Open Graph, favicon.
- **JSON-LD schema.org** adapté (type indiqué plus haut) avec nom, adresse, téléphone, horaires `openingHoursSpecification`, géolocalisation, `sameAs` (réseaux sociaux).
- Nom / adresse / téléphone identiques partout (NAP), pied de page compris.
- Carte : iframe Google Maps chargée **au clic** (façade légère) pour ne pas plomber la perf.
- `sitemap.xml`, `robots.txt`, URLs propres, H1 unique, balises `alt` descriptives.
- Mots-clés locaux naturels : la ville + les communes voisines (Groslay, Montmorency, Saint-Brice-sous-Forêt, Sarcelles, Deuil-la-Barre, Montmagny, Domont, Ézanville).

### 7. Conversion et mobile
- Mobile d'abord. **Bouton d'appel fixe en bas d'écran sur mobile** (`tel:`), + bouton itinéraire (lien Google Maps).
- Horaires lisibles, avec indication « Ouvert maintenant / Fermé » calculée en JS léger (fuseau Europe/Paris).
- Accessibilité AA : contrastes, focus visibles, navigation clavier, tailles de cibles ≥ 44 px.

### 8. Légal
- Page **Mentions légales** (éditeur, hébergeur Vercel, SIRET `[À CONFIRMER]`) et **Politique de confidentialité**.
- Pas de traceur, donc pas de bandeau cookies. Si un formulaire existe : consentement RGPD + envoi via un service sans backend (ex. Formspree / Web3Forms, clé `[À CONFIRMER]`).

### 9. Livraison
1. `npm run build` sans erreur ni warning.
2. Captures Playwright **mobile (390 px) et desktop (1440 px)** de chaque page ; regarde-les toi-même et corrige ce qui fait « template » ou « IA » avant de me rendre la main.
3. Un `README.md` court : lancer en local, déployer, où changer textes / photos / horaires.
4. Les fichiers `A_COMPLETER.md` et `PHOTOS_A_PRENDRE.md`.
5. Un résumé final de 10 lignes max : ce qui est fait, ce qui manque.
