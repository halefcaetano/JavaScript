function multiplication(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0){
        window.alert('ERROR')
    } else{
        tab.innerHTML = ''
        let n = Number(num.value)
        let x = 1
        while (x <= 10){
            let item = document.createElement('option')
            item.text = `${n} x ${x} = ${n*x}`
            item.value = `tab${x}`
            tab.appendChild(item)
            x++
        }
    }
}
