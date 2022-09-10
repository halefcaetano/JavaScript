function verify(){
    var data = new Date()
    var year = data.getFullYear()
    var fyear = document.getElementById('txtyear')
    var res = document.querySelector('div#res')
    if (fyear.value.length == 0 || (fyear.value) > year){
        window.alert('ERROR - Try again')
    }
    else{
        var fgender = document.getElementsByName('radgender')
        var age = year - Number(fyear.value)
        var gender = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'photo')
        if (fgender[0].checked){
            gender = 'Male'
            if (age >= 0 && age < 16){
                img.setAttribute('src', 'manbaby.png')
            }
            else if (age < 21){
                img.setAttribute('src', 'manteen.png')
            }
            else if(age < 65){
                img.setAttribute('src', 'adultman.png')
            }
            else{
                img.setAttribute('src', 'oldman.png')
            }
        }
        else if (fgender[1].checked){
            gender = 'Female'
            if (age >= 0 && age < 16){
                img.setAttribute('src', 'babywoman.png')
            }
            else if (age < 21){
                img.setAttribute('src', 'teengirl.png')
            }
            else if(age < 65){
                img.setAttribute('src', 'adultwoman.png')
            }
            else{
                img.setAttribute('src', 'oldwoman.png')
            }
            }
        res.innerHTML = `${gender} with ${age} years old`
        res.appendChild(img)
        res.style.textAlign= 'center'
        }
}