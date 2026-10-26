// Données du restaurant : URL, NAP, horaires, liens. Modifier ici, tout le site suit
// (pages, pied de page, JSON-LD, statut « ouvert / fermé »).
export const SITE = {
  // URL provisoire : à remplacer après déploiement (et dans astro.config.mjs, public/robots.txt, public/llms.txt)
  url: 'https://ldelice-95.vercel.app',
  nom: 'Ldelice 95',
  autreNom: "L'Délice 95",
  adresse: { rue: '2 rue René Cassin', cp: '95350', ville: 'Saint-Brice-sous-Forêt', region: "Val-d'Oise", pays: 'FR' },
  telAffiche: '07 61 52 48 64',
  telLien: '+33761524864',
  note: '4,7',
  noteNum: 4.7,
  nbAvis: 79,
  itineraire: 'https://www.google.com/maps/dir/?api=1&destination=Ldelice%2095%2C%202%20rue%20Ren%C3%A9%20Cassin%2C%2095350%20Saint-Brice-sous-For%C3%AAt',
  carte: 'https://www.google.com/maps?q=2%20rue%20Ren%C3%A9%20Cassin%2C%2095350%20Saint-Brice-sous-For%C3%AAt&output=embed',
  // Réseaux sociaux / fiches : [À CONFIRMER] (voir A_COMPLETER.md). Ajouter ici les URL quand elles sont connues.
  sameAs: [] as string[],
  voisines: ['Groslay', 'Montmorency', 'Sarcelles', 'Deuil-la-Barre', 'Montmagny', 'Domont', 'Ézanville'],
};

// Horaires. jour : 0 = dimanche … 6 = samedi. Format 24 h "HH:MM". Jour fermé : ouvre = null.
// Pour une coupure midi, ajouter un 2e créneau dans `creneaux`.
export const HORAIRES: { jour: number; nom: string; creneaux: [string, string][] }[] = [
  { jour: 2, nom: 'Mardi', creneaux: [['12:00', '21:00']] },
  { jour: 3, nom: 'Mercredi', creneaux: [['12:00', '21:00']] },
  { jour: 4, nom: 'Jeudi', creneaux: [['12:00', '21:00']] },
  { jour: 5, nom: 'Vendredi', creneaux: [['12:00', '21:00']] },
  { jour: 6, nom: 'Samedi', creneaux: [['12:00', '21:00']] },
  { jour: 0, nom: 'Dimanche', creneaux: [] },
  { jour: 1, nom: 'Lundi', creneaux: [] },
];

export const fmtHeure = (h: string) => h.replace(':00', 'h').replace(':', 'h');

// Les 5 extraits d'avis fournis (Avis Google). Ne pas en ajouter d'inventés.
export const AVIS = [
  "Ce qui, au premier abord, ne payait pas de mine, s'est révélé être le meilleur bokit que nous avons eu l'opportunité de manger en Île-de-France !",
  "Ça fait longtemps que je n'ai pas mangé de bokit aussi bon (la dernière fois c'était en Guadeloupe).",
  'Un plat de griot complet riz et banane avec le pikliz : c\'était un délice, le pikliz était frais.',
  'Très bon accueil du gérant qui y travaille seul. Tout est fait maison !',
  "Les apparences sont trompeuses : on ne vient pas pour l'esthétique de l'extérieur mais pour la nourriture.",
];
