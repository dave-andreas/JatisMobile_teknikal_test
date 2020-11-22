function piramida (T, N) {
    if (check(N) && N < 30 && T > 0) {
        var out = ""
        for (let i = 0; i < T; i++) {
            out += `${newBaris(N, i)}\n`
        }
        return out
    } else {
        return "tidak dapat diproses, N harus bilangan prima dan dibawah 30, minimal 1 baris"
    } 
}

function check (int) {
    if (int === 1) {
        return false
    } else if (int === 2) {
        return true
    } else {
        for (let i = 2; i < int; i++) {
            if (int % i === 0) {
                return false
            }
        }
        return true
    }
}

function newBaris (int, baris) {
    var out = ""
    var cur = int
    for (let index = 0; index <= baris; index++) {
        if (index === 0) {
            out += int
        } else {
            var num = cur+1
            while (!check(num)) {
                num++
            }
            cur = num
            out += ` ${num}`
        }
    }
    return out
}

console.log(piramida(0,3))