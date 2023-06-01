/*console.log('Esisto')

let products = fetch('../products.json')
    .then((response) => response.json());

let weapons = JSON.parse(products);

for (let i = 0; i < weapons.length; i++) {
  console.log('Id: ' + i + ' : ' + weapons[i]);
}
*/

console.log('Esisto');

let weapons = [];

fetch('../../products.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(products) {
    weapons = products; // Salva i dati JSON nella variabile "weapons"
    console.log(weapons); // Stampa la variabile "weapons" per verificare il contenuto

    for (let i = 0; i < weapons.length; i++) {
      console.log('Id: ' + i + ' : ' + weapons[i]);
    }
  })
  .catch(function(error) {
    console.error('Errore durante il caricamento del file JSON:', error);
  });



/*
for (let i = 0; i < weapons.length; i++) {
    let bookItem = document.createElement('li');
    let weaponImg = document.createElement('img');
    weaponImg.src = weapons[i].url;
    let bookInfo = document.createTextNode(weapons[i].title + ' by ' + weapons[i].author);
  
    bookItem.appendChild(bookInfo);
  
    bookList.appendChild(bookItem);

    bookItem.appendChild(weaponImg);

  
    if (weapons[i].alreadyRead === true) {
      bookItem.style.color = 'green';
    } else {
      bookItem.style.color = 'red';
    }
  }
*/

//crea id per ogni prodotto

  