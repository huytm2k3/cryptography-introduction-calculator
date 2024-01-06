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

export const squareRoot2OfModulo = (a: number, p: number) => {
    let result: number[] = [];
    let arr = getMultiplicativeGroup(p);

    for (let i of arr) {
        let temp = (i * i) % p;
        
        if (temp == a) {
            result.push(i);
        }
    }

    return result;
}

export const gcd: (a: number, b: number) => number = (a: number, b: number) => {
    if (b === 0) {
        return a;
    }
    return gcd(b, a % b);
}

export const detA = (a: number[][]) => {
    return a[0][0] * a[1][1] - a[0][1] * a[1][0]
}

export const inversedMatrix = (a: number[][]) => {
    const det = detA(a);

    const result = [[0, 0], [0, 0]]
    result[0][0] = inverse(det, 26) * a[1][1];
    result[0][1] = inverse(det, 26) * -a[0][1];
    result[1][0] = inverse(det, 26) * -a[1][0];
    result[1][1] = inverse(det, 26) * a[0][0];
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

    return text;
}

export const mixColumns = (state: number[][]) => {
    const result = [[0, 0, 0, 0], [0, 0, 0, 0]]
    for (let i = 0; i < 4; i++) {
        result[0][i] = (state[0][i] * 2) ^ (state[1][i] * 3) ^ (state[2][i]) ^ (state[3][i])
        result[1][i] = (state[0][i]) ^ (state[1][i] * 2) ^ (state[2][i] * 3) ^ (state[3][i])
    }
    return result;
}

export const euler = (n: number) => {
    let result = n;
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) {
            while (n % i === 0) {
                n /= i;
            }
            result -= result / i;
        }
    }
    if (n > 1) {
        result -= result / n;
    }
    return result;
}

export const isCoprime = (a: number, b: number) => {
    while (a !== b) {
        if (a > b) {
            a -= b
        } else {
            b -= a
        }
    }
    return a === 1;
}

export const getMultiplicativeGroup = (n: number) => {
    const result = []
    for (let i = 1; i < n; i++) {
        if (isCoprime(i, n))
            result.push(i)
    }
    return result;
}

export const isGenerator = (number: number, n: number) => {
    const mG = getMultiplicativeGroup(n)
    const mgTemporary: any = []
    for (let i = 1; i < n; i++) {
        let temporary = exponentiationBySquaring(number, i, n)
        
        if (!mG.includes(temporary)) {
            console.log(temporary);
            
            return false
        }
        if (!mgTemporary.includes(temporary)) {
            mgTemporary.push(temporary)
        }
    }
    
    if (mgTemporary.length !== mG.length) return false;
    return true;
}

export const getGenerators = (n: number) => {
    let initialGenerator: number = 0;
    for (let i = 1; i < n; i++) {
        if (isGenerator(i, n)) {
            initialGenerator = i
            break;
        }
    }

    if (initialGenerator === 0) return [];

    const result: any = []
    const mG = getMultiplicativeGroup(euler(n))

    mG.map((element) => {
        result.push(exponentiationBySquaring(initialGenerator, element, n))
    })
    
    return result;
}

export const exponentiationBySquaring = (a: number, b: number, n: number) => {
    let result = 1;
    while (b > 0) {
        if (b % 2 === 1) {
            result = (result * a) % n;
        }
        a = (a * a) % n;
        b = Math.floor(b / 2);
    }
    return result;
}

export const RSAEncode = (plain: number, p: number, q: number, e: number) => {
    const n = p * q;

    const result = exponentiationBySquaring(plain, e, n)
    return result;
}

export const RSADecode = (cipher: number, p: number, q: number, d: number) => {
    const n = p * q;

    const result = exponentiationBySquaring(cipher, d, n)
    return result;
}

export const RabinEncode = (plain: number, p: number, q: number) => {
    const n = p * q;

    const result = exponentiationBySquaring(plain, 2, n)
    return result;
}

export const RabinDecode = (cipher: number, p: number, q: number) => {
    const n = p * q;

    const result = squareRoot2OfModulo(cipher, n)
    return result;
}

export const decToBin = (dec: number) => {
    let result = ''
    while (dec > 0) {
        result = (dec % 2) + result
        dec = Math.floor(dec / 2)
    }
    return result;
}

export const binToDec = (bin: string) => {
    let result = 0
    for (let i = 0; i < bin.length; i++) {
        result += parseInt(bin[i]) * Math.pow(2, bin.length - i - 1)
    }
    return result;
}

export const hexToBin = (hex: string) => {
    let result = ''
    for (let i = 0; i < hex.length; i++) {
        result += decToBin(parseInt(hex[i], 16))
    }
    return result;
}

export const binToHex = (bin: string) => {
    let result = ''
    for (let i = 0; i < bin.length; i += 4) {
        result += parseInt(bin.slice(i, i + 4), 2).toString(16)
    }
    return result;
}