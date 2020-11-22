function calculate (str) {
    var existing = []
    var sum = []

    for (let index = 0; index < str.length; index++) {
        if (existing.length === 0) {
            existing.push(str[index])
            sum.push(1)
        } else {
            var i = 0
            var exist = false
            while (i < existing.length) {
                if (str[index] == existing[i]) {
                    exist = true
                    break
                }
                i++
            }
            if (exist) {
                sum[i] += 1
            } else {
                existing.push(str[index])
                sum.push(1)
            }
        }
    }

    var out = ""
    var i = 0
    while (i < existing.length) {
        if (i+1 === existing.length) {
            out += `${existing[i]} = ${sum[i]}`
        } else {
            out += `${existing[i]} = ${sum[i]}, `
        }
        i++
    }
    return out
}

var ex = "aakiissaisk"
console.log(calculate(ex))