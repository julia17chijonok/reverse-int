module.exports = function reverse (n) {
    if (n > 0) {
        let str = String(n);
        let arr = Array.from(str);
        let newArr = arr.reverse();
        let res = +newArr.join('');
        return res;
    } else {
        let str = String(n);
        let newStr = str.slice(1);
        let arr = Array.from(newStr);
        let newArr = arr.reverse();
        let res = +newArr.join('');
        return res;
    }
};

