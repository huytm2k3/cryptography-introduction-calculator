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