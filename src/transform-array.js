module.exports = function transform(arr) {
    if (!Array.isArray(arr)) {
        throw 'Error';
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '--discard-next') {
            arr.splice(arr[i + 1], 1);
        } else if (arr[i] === '--discard-prev') {
            if (i === arr.length-1) {
                arr.splice(arr[i], 1);
            } else {
            arr.splice(arr[i - 1], 1);
        }
        } else if (arr[i] === '--double-next') {
            arr.splice(arr[i + 1], 0, arr[i]);
        } else if (arr[i] === '--double-prev') {
            arr.splice(arr[i - 1], 0, arr[i]);
        } else if (arr.length < 1) {
            return arr;
        }
        
    } return arr;
};
