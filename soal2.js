function deret (int) {
    var out = ""
    var cur = 1
    for (let index = 0; index < int; index++) {
        var num = cur*(index+1)
        var add = num.toString()
        out += `${add} `
        cur = num
    }
    return out
}

console.log(deret(10))