let arr = [] 
function randomArr(count, n, m){
    for(let i = 0; i < count; i++)
        arr.push(Math.floor(Math.random() * (m - n)) + n)
}

randomArr(100, 50, 40)
console.log(arr)