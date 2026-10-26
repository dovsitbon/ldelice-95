# À compléter avec le restaurant

Chaque point correspond à un marqueur « [À CONFIRMER] » visible sur le site, ou à une donnée volontairement absente.

## Carte (`src/data/carte.json`)
- [ ] Prix de chaque plat (aucun prix confirmé). Le bokit poulet a été cité à 6 € par un client il y a un an : à vérifier.
- [ ] Liste des bokits et de leurs garnitures (seul le bokit poulet est connu).
- [ ] Composition de l’assiette de poulet.
- [ ] Boissons et prix.
- [ ] Prix moyen : « autour de 15 € » vient d’un annuaire en ligne, à valider ou retirer.
- [ ] Autres plats haïtiens éventuels (le site ne cite que ceux mentionnés par les clients).

## Accueil
- [ ] Garnitures du moment (section « Le bokit »).
- [ ] Salle intérieure : un avis dit qu’il n’y en a pas. À confirmer (FAQ « Peut-on manger sur place ? »).
- [ ] Traiteur : tarifs, délai de commande, quantité minimale.

## Données de l’entreprise
- [ ] Raison sociale, forme juridique, SIRET, n° TVA.
- [ ] E-mail de contact (mentions légales et confidentialité).
- [ ] Nom du directeur de la publication.
- [ ] Prénom du chef, s’il souhaite apparaître (non utilisé pour l’instant).

## SEO local
- [ ] Coordonnées GPS (`geo`) : non renseignées dans le JSON-LD faute de source fiable. Les ajouter dans `src/layouts/Base.astro` (latitude, longitude du 2 rue René Cassin).
- [ ] Réseaux sociaux et fiche Google Business Profile : ajouter les URL dans `SITE.sameAs` (`src/data/site.ts`).
- [ ] URL définitive du site (voir README).
- [ ] Vérifier que la fiche Google indique bien les mêmes nom, adresse, téléphone et horaires que le site.

## Photos
- [ ] Voir `PHOTOS_A_PRENDRE.md` (4 emplacements).
