function Math(arr) {
    const exampleArr = [];
    if (arr.length === 0) return alert (`Пустой массив`);
    for (let i = 0; i < arr.length; i++) {
        if ( arr[i] > 0) {
            exampleArr.push(arr[i]);
        }
    }
    return alert(exampleArr.length === 0 ? null : exampleArr);
}
Math([1, 2, 3, -1, -2, -3]);
Math([]);
Math([-1, -2, -3]);