/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
    return /^(https?:|mailto:|tel:)/.test(path);
}

export const hexToRgba = (hex, opacity) => {
    let rgbaColor = '';
    const reg = /^#[\da-f]{6}$/i;
    if (reg.test(hex)) {
        rgbaColor = `rgba(${parseInt('0x' + hex.slice(1, 3))},${parseInt(
            '0x' + hex.slice(3, 5)
        )},${parseInt('0x' + hex.slice(5, 7))},${opacity})`;
    }
    return rgbaColor;
};
export function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; // 含最大值，含最小值
}

export function getData(step, arr = []) {
    for (let i = 0; i < step; i++) {
        let num = getRandomIntInclusive(20, 50);
        num = parseInt(num, 10);
        arr.push(num);
    }
    return arr;
}

export const getDaysArray = (year, month) => {
    const monthIndex = month - 1;
    // const names = Object.freeze(['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']);
    const date = new Date(year, monthIndex, 1);
    const result = [];
    while (date.getMonth() === monthIndex) {
        // result.push(`${date.getDate()}-${names[date.getDay()]}`);
        result.push(date.getDate());
        date.setDate(date.getDate() + 1);
    }
    return result;
};
