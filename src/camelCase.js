/**
 * Deve receber uma string e retornar em camelCase
 * Ex: "an apple" deve retornar "anApple"
 * @see https://pt.wikipedia.org/wiki/CamelCase
 */
function camelCase ($inputString) {
	const inputStringCamelCase = $inputString;

  // transforma a string em um array de strings
  const arrayString = inputStringCamelCase.split(/(\W)/);

  // transforma todos os elementos em minúsculo
  arrayString.forEach( (eachString, index) => {
    const element = eachString.toLowerCase();
    
    arrayString[index] = element;
  });

  // verificando se a string é uma palavra
  const arrayFiltered = arrayString.filter((eachString) => /(\W)/.test(eachString) === false && eachString !== '');

  // transforma do segundo elemento em diante o primeiro caracter em maiusculo
  arrayFiltered.forEach( (eachString, index) => {
    if (index !== 0) {
      // primeira letra em maiusculo
      const firstLetter = eachString.charAt(0).toUpperCase();

      // resto da palavra em minusculo 
      const restOfTheWord = eachString.substr(1);

      // palavra toda
      arrayFiltered[index] = firstLetter + restOfTheWord;
    };
  });

  // concatena tudo em uma string só
  const newString = arrayFiltered.join('');
  
  return newString;
};

module.exports = camelCase; 