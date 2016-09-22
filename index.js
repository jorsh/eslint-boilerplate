String.prototype.palindrome = function () {
    var word = this;
    console.info(word.match(/[a-zA-Z]/g).join('') +' = '+ word.match(/[a-zA-Z]/g).reverse().join(''));
    return word.match(/[a-zA-Z]/g).join('') === word.match(/[a-zA-Z]/g).join('');
};

'Anaaaa'.palindrome();