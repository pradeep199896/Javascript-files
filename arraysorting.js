var num=[4,5,6,12,14,62];
num.sort();
console.log(num);
num.reverse()
console.log(num);
function vowelsAndConsonants(s) {
    const vowels = 'aeiou';
    var consonants = [];
    for (var i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
    console.log(s[i])
    } else {
        consonants+=s[i]+'\n'
    }
    }
    console.log(consonants);
}
vowelsAndConsonants("javascript loops")