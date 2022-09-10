var age = 34
console.log(`Your age is ${age} years old.`)
if (age < 16){
    console.log("You can't vote.")
}else if(age < 18 || age > 65){
    console.log('You can choose to vote.')
}else {
    console.log('You have to vote.')
}