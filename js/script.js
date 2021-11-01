function math(arr) {
    const exampleArr = [];
    if (arr.length === 0) return `Пустой массив`;
    for (let i = 0; i < arr.length; i++) {
        if ( arr[i] > 0) {
            exampleArr.push(arr[i]);
        }
    }
    return exampleArr.length === 0 ? null : exampleArr;
}
alert(math([1, 2, 3, -1, -2, -3]));
alert(math([]));
alert(math([-1,-3,-2]))
