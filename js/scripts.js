var text = 'Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.',
animal = 'Zielone słonie',
animalUpperCased = animal.toUpperCase(),
textCharsAfter = text.replace('Papugi', animalUpperCased);
console.log(textCharsAfter.substring(0, textCharsAfter.length / 2));