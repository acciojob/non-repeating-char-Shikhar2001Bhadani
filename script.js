function firstNonRepeatedChar(str) {

    const freq = {};
    for (const char of str) {
        freq[char] = (freq[char] || 0) + 1;
    }
    for (const char of str) {
        if (freq[char] === 1) {
            return char;
        }
    }
    return null;
}
	
}
//const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
