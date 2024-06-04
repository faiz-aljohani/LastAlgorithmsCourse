export default function bs_list(haystack: number[], needle: number): boolean {
    let lo = 0;
    let hi = haystack.length;
    while (lo < hi) {
        const m = Math.floor(lo + (hi - lo) / 2);
        const v = haystack[m];
        if (v === needle) {
            return true;
        } else if (v > needle) {
            hi = m;
        } else {
            lo = m + 1;
        }
    }
    return false;
}

// for (let i = haystack.length / 2; i < haystack.length; i / 2) {
//   if (haystack[i] === needle) return true;
//   else if (haystack[i] < needle) i *= 3;
// }
// return false;
