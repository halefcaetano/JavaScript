var now = new Date()
var hours = now.getHours()
console.log(`It is ${hours} hours`)
if (hours < 12){
    console.log('Good morning.')
}else if (hours < 18){
    console.log('Good afternoon.')
}else{
    console.log('Good night.')
}