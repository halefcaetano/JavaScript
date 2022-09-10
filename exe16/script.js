function count(){
    let beg = document.getElementById('txtbeg')
    let end = document.getElementById('txtend')
    let step = document.getElementById('txtste')
    let res = document.getElementById('res')
    if (beg.value.length == 0 || end.value.length == 0 || step.value.length == 0){
        window.alert('ERROR')
    }
    else{
        res.innerHTML = 'Counting... <br>'
        var b = Number(beg.value)
        var e = Number(end.value)
        var s = Number(step.value)
        if(s == 0){
            s = 1
        }
        if (b < e){
            for (c = b; c <= e; c += s){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } else{
            for (c = b; c >= e; c -= s)
                res.innerHTML += ` ${c} \u{1F449}`
        }
        }
    res.innerHTML += ` \u{1F3C1}`
}
