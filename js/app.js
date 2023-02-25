let firstSalery = + prompt("Enter your first month salary", '$$$')
let secondtSalery = + prompt("Enter your second month salary", '$$$')

let result=firstSalery+secondtSalery
alert(`Your salery for two month: ${result} `)
let bonus = result + 1 ;
alert (`You have extra bonus! Your total salary was: ${result}$. It's increase for 1$ and now it is : ${bonus}$`)
alert ( result >= 2000 && "I'm ready to work." || result < 2000 && "I'm out.") 