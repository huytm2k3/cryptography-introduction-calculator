export const inverse = (number: number, n: number) => {
    // using extended euclide to find inverse of number
    let a = number;
    let b = n;
    let x = 0;
    let y = 1;
    let u = 1;
    let v = 0;
    while (a !== 0) {
        let q = Math.floor(b / a);
        let r = b % a;
        let m = x - u * q;
        let n = y - v * q;
        b = a;
        a = r;
        x = u;
        y = v;
        u = m;
        v = n;
    }
    x = x % n;
    if (x < 0) {
        x = (x + n) % n;
    }
    return x;
}

export const detA = (a: number[][]) => {
    return a[0][0] * a[1][1] - a[0][1] * a[1][0]
}

export const inversedMatrix = (a: number[][]) => {
    const det = 1;
    // console.log(detA(a));
    
    
    const result = [[0, 0], [0, 0]]
    result[0][0] = a[1][1] / det;
    result[0][1] = -a[0][1] / det;
    result[1][0] = -a[1][0] / det;
    result[1][1] = a[0][0] / det;
    return result;
}

export const shiftCypherEncode = (text: string, key: number) => {
    const result = text.split('').map((char) => {
        const charCode = char.charCodeAt(0)
        if (charCode >= 65 && charCode <= 90) {
            return String.fromCharCode((charCode - 65 + key) % 26 + 65)
        } else if (charCode >= 97 && charCode <= 122) {
            return String.fromCharCode((charCode - 97 + key) % 26 + 97)
        } else {
            return char
        }
    }).join('')
    return result;
}

export const shiftCypherDecode = (text: string, key: number) => {
    const result = text.split('').map((char) => {
        const charCode = char.charCodeAt(0)
        if (charCode >= 65 && charCode <= 90) {
            return String.fromCharCode((charCode - 65 - key + 26) % 26 + 65)
        } else if (charCode >= 97 && charCode <= 122) {
            return String.fromCharCode((charCode - 97 - key + 26) % 26 + 97)
        } else {
            return char
        }
    }).join('')
    return result;
}

export const affineEncode = (text: string, a: number, b: number) => {
    const result = text.split('').map((char) => {
        const charCode = char.charCodeAt(0)
        if (charCode >= 65 && charCode <= 90) {
            return String.fromCharCode(((charCode - 65) * a + b) % 26 + 65)
        } else if (charCode >= 97 && charCode <= 122) {
            return String.fromCharCode(((charCode - 97) * a + b) % 26 + 97)
        } else {
            return char
        }
    }).join('')
    return result;
}

export const affineDecode = (text: string, a: number, b: number) => {
    const result = text.split('').map((char) => {
        const charCode = char.charCodeAt(0)


        if (charCode >= 65 && charCode <= 90) {
            if (charCode - 65 - b < 0) {
                return String.fromCharCode((inverse(a, 26) * (charCode - 65 - b + 26)) % 26 + 65)
            } else
                return String.fromCharCode((inverse(a, 26) * (charCode - 65 - b)) % 26 + 65)
        } else if (charCode >= 97 && charCode <= 122) {
            console.log(charCode - 97 - b);
            if (charCode - 97 - b < 0) {
                return String.fromCharCode((inverse(a, 26) * (charCode - 97 - b + 26)) % 26 + 97)
            } else
                return String.fromCharCode((inverse(a, 26) * (charCode - 97 - b)) % 26 + 97)
        } else {
            return char
        }
    }).join('')
    return result;
}

export const vigenereEncode = (text: string, key: string) => {
    const result = text.split('').map((char, index) => {
        const charCode = char.charCodeAt(0)
        const keyCode = key.charCodeAt(index % key.length)
        if (charCode >= 65 && charCode <= 90) {
            return String.fromCharCode((charCode - 65 + keyCode - 65) % 26 + 65)
        } else if (charCode >= 97 && charCode <= 122) {
            return String.fromCharCode((charCode - 97 + keyCode - 97) % 26 + 97)
        } else {
            return char
        }
    }).join('')
    return result;
}

export const vigenereDecode = (text: string, key: string) => {
    const result = text.split('').map((char, index) => {
        const charCode = char.charCodeAt(0)
        const keyCode = key.charCodeAt(index % key.length)

        console.log(charCode - keyCode);
        
        if (charCode >= 65 && charCode <= 90) {
            if (charCode - keyCode < 0) {
                return String.fromCharCode((charCode - keyCode + 26) % 26 + 65)
            } else
                return String.fromCharCode((charCode - keyCode) % 26 + 65)
        } else if (charCode >= 97 && charCode <= 122) {
            if (charCode - keyCode < 0) {
                return String.fromCharCode((charCode - keyCode + 26) % 26 + 97)
            } else
                return String.fromCharCode((charCode - keyCode) % 26 + 97)
        } else {
            return char
        }
    }).join('')
    return result;
}

export const runningKeyEncode = (text: string, key: string) => {
    if (key.length < text.length) {
        key += text.slice(0, text.length - key.length)
    }
    
    const result = text.split('').map((char, index) => {
        const charCode = char.charCodeAt(0)
        const keyCode = key.charCodeAt(index)
        if (charCode >= 65 && charCode <= 90) {
            return String.fromCharCode((charCode - 65 + keyCode - 65) % 26 + 65)
        } else if (charCode >= 97 && charCode <= 122) {
            return String.fromCharCode((charCode - 97 + keyCode - 97) % 26 + 97)
        } else {
            return char
        }
    }).join('')
    
    return result;
}

let initialKey = ''
export const runningKeyDecode = (text: string, key: string) => {
    if (initialKey === '') {
        initialKey = key
    }
    let result = text.split('').map((char, index) => {
        const charCode = char.charCodeAt(0)
        const keyCode = key.charCodeAt(index)

        if (index >= key.length) {
            return ''
        }

        if (charCode >= 65 && charCode <= 90) {
            if (charCode - keyCode < 0) {
                return String.fromCharCode((charCode - keyCode + 26) % 26 + 65)
            } else
                return String.fromCharCode((charCode - keyCode) % 26 + 65)
        } else if (charCode >= 97 && charCode <= 122) {
            if (charCode - keyCode < 0) {
                return String.fromCharCode((charCode - keyCode + 26) % 26 + 97)
            } else
                return String.fromCharCode((charCode - keyCode) % 26 + 97)
        } else {
            return char
        }
    }).join('')
    

    if (result.length < text.length) {
        result = runningKeyDecode(text, initialKey + result)
    }

    initialKey = ''
    return result;
}

export const hillEncode = (text: string, key: number[][]) => {
    text = text.toUpperCase();
    let isOdd = false;
    
    if (text.length % 2 !== 0) {
        text += 'x'
        isOdd = true;
    }

    for (let i = 0; i < text.length; i += 2) {
        const char1 = text.charCodeAt(i) - 65;
        const char2 = text.charCodeAt(i + 1) - 65;
        
        const char1Code = (key[0][0] * char1 + key[1][0] * char2) % 26;
        const char2Code = (key[0][1] * char1 + key[1][1] * char2) % 26;
        text = text.slice(0, i) + String.fromCharCode(char1Code + 65) + String.fromCharCode(char2Code + 65) + text.slice(i + 2)
    }

    if (isOdd) {
        text = text.slice(0, text.length - 1)
    }

    return text;
}

export const hillDecode = (text: string, key: number[][]) => {
    text = text.toUpperCase();

    for (let i = 0; i < text.length; i += 2) {
        const char1 = text.charCodeAt(i) - 65;
        const char2 = text.charCodeAt(i + 1) - 65;
        
        
        const result1 = inversedMatrix(key)[0][0] * char1 + inversedMatrix(key)[1][0] * char2;
        const result2 = inversedMatrix(key)[0][1] * char1 + inversedMatrix(key)[1][1] * char2;
        
        const char1Code = result1 < 0 ? (26 - (-result1 % 26)) % 26 : result1 % 26;
        const char2Code = result2 < 0 ? (26 - (-result2 % 26)) % 26 : result2 % 26;
        
        text = text.slice(0, i) + String.fromCharCode(char1Code + 65) + String.fromCharCode(char2Code + 65) + text.slice(i + 2)
    }

    console.log(text);
    
    return text;
}
