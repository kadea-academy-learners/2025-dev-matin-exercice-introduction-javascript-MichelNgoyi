let paul, marie, eric, clair, madameMukuna, joseph, sarah;
// Ecrivez votre code ici
let maison = 60000000;
let terrains = 40000000;
let liquidites = 20000000;
let heritageTotal = maison + terrains + liquidites;

// Distribution en pourcentage
let firstCategory = heritageTotal * 0.75;
let secondCategory = heritageTotal * 0.25;

// Calcul de la valeur de la première catégorie d'héritiers
let childrenPart = firstCategory / 3;
paul = childrenPart;
marie = childrenPart;
eric = (childrenPart / 2);
clair = (childrenPart / 2);

// Calcul de la valeur de la deuxième catégorie d'héritiers
let wifeAndSibllings = secondCategory / 3
madameMukuna = wifeAndSibllings;
joseph = wifeAndSibllings;
sarah = wifeAndSibllings;

// Affichage de tous les héritiens
console.log(paul)
console.log(marie)
console.log(eric)
console.log(clair)
console.log(madameMukuna)
console.log(joseph)
console.log(sarah)

// Ne pas modifier le code ci-dessous
module.exports = {
  paul,
  marie,
  eric,
  clair,
  madameMukuna,
  joseph,
  sarah,
};
