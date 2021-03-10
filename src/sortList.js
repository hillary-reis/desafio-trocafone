/**
 * Recebe uma matriz e ordena ela pelo conteúdo.
 * Considere que virão apenas listas de números ou palavras.
 * @param array list

 * referencias usadas:
 * 01 - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
 * 02 - https://www.w3schools.com/jsref/jsref_sort.asp
*/
function sortList (list) {
  list.sort(); // strings
  list.sort( (a, b) => {return a - b} ); // numbers

  return list;  
};

module.exports = sortList;