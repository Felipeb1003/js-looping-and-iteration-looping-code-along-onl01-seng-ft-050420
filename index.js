// Code your solutions in this file



function writeCards(names, birthday) {
  let cards = []
  for (let i = 0; i < names.legth; i++) {
    cards.push(`Thank you, ${names[i]}, for the wonderful ${birthday} gift!`);
  }
 return cards
}
