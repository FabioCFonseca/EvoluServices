// Um palíndromo é uma palavra que pode ser lida da esquerda para a direita e vice-versa.
// Escreva uma função que verifica se a palavra dada é um palíndromo.
// Caracteres em caixa alta devem ser ignorados.
// Por exemplo, isPalindrome("Deleveled") deve retornar True, já que é um palíndromo por ser possível ser lido 
// nos dois sentidos.
// Utilize o esqueleto a seguir para implementar seu código:

// function isPalindrome(s) { // Seu código}

const isPalindrome = (s) => {
    s = s.toLowerCase();
    const aoContrario = s.split('').reverse().join('');

    if (s === aoContrario) {
      console.log("É um palindromo");
    } else {
      console.log('Não é um palindromo');
    }
}

isPalindrome('Deleveled')