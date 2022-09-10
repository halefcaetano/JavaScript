let num = document.querySelector('input#fnum')
let list = document.querySelector('select#flist')
let res = document.querySelector('div#res')
let numbers = []

function isNumeric(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else{
        return false
    }
}

function inList(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else{
        return false
    }
}

function add(){
    if(isNumeric(num.value) && !inList(num.value, numbers)){
        numbers.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `The number ${num.value} has been added.`
        list.appendChild(item)
        res.innerHTML = ''
    } else{
        window.alert('ERROR')
    }
    num.value = ''
    num.focus()
}

function final(){
    if (numbers.length == 0){
        window.alert('Enter a number')
    } else{
        let total = numbers.length
        let bigger = numbers[0]
        let smaller = numbers[0]
        let sum = 0
        let media = 0
        for(let pos in numbers){
            sum += numbers[pos]
            if(numbers[pos] > bigger
    )
                bigger
     = numbers[pos]
            if(numbers[pos] < smaller)
            smaller = numbers[pos]
        }
        media = sum / total
        res.innerHTML = ''
        res.innerHTML += `<p>There are ${total} numbers.</p>`
        res.innerHTML += `<p>The biggest number is ${bigger}.</p>`
        res.innerHTML += `<p>The smallest number is ${smaller}.</p>`
        res.innerHTML += `<p>The sum is ${sum}.</p>`
        res.innerHTML += `<p>The final media is ${media}</p>`
    }
}
