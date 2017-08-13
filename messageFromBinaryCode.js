function messageFromBinaryCode(code) {
    var result = ''
    for(var i =0; i*8<code.length; i++){
        var b = parseInt(code.substring(i*8,i*8+8),2);
        result+= String.fromCharCode(b)
    }
    return result;
}
