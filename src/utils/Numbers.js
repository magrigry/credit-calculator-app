/**
 *
 * @param {Number|number} number
 * @param {int} digits
 */
export function nFormatter(number, digits = 2) {
    const lookup = [
        { value: 1, symbol: "" },
        { value: 1e3, symbol: "k" },
        { value: 1e6, symbol: "M" },
        { value: 1e9, symbol: "G" },
        { value: 1e12, symbol: "T" },
        { value: 1e15, symbol: "P" },
        { value: 1e18, symbol: "E" }
    ];
    const regexp = /\.0+$|(?<=\.[0-9]*[1-9])0+$/;
    const item = lookup.findLast(item => number >= item.value);
    return item ? (number / item.value).toFixed(digits).replace(regexp, "").concat(item.symbol) : "0";
}