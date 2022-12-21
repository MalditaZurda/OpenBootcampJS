const nombres = ["Agustin","Claudio" , "Blanca", "Nicolas", "Marta", "Gabriel"]


// Un nuevo set con los nombres de tu familia
const miSet = new Set(nombres);
console.log(miSet); // Set { 'Agustin', 'Claudio', 'Blanca', 'Nicolas', 'Marta', 'Gabriel' }

// modifica el set original añadiendo tu nombre ( duplicado)
miSet.add('Agustin');
console.log(miSet); // Set { 'Agustin', 'Claudio', 'Blanca', 'Nicolas', 'Marta', 'Gabriel' }

// modifica el set original añadiendo 'Javascript'
miSet.add('Javascript');
console.log(miSet); // Set { 'Agustin','Claudio','Blanca','Nicolas','Marta','Gabriel','Javascript' }


