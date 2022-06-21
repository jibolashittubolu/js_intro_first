var name = window.prompt("Enter your name: ")
document.getElementById('name').innerHTML= `Name: ${name}`
while(!name){
    name = window.prompt('Enter your name:')
    document.getElementById('name').innerHTML = `Name: ${name}`
}

var height = window.prompt('Enter your height:')
document.getElementById('height').innerHTML = `Height: ${height}`
while(!height){
    height = window.prompt('Enter your height:')
    document.getElementById('height').innerHTML = `Height: ${height}`
}

var country = window.prompt('Enter your Country:')
document.getElementById('country').innerHTML = `Country: ${country}`
while(!country){
    country = window.prompt('Enter your Country:')
    document.getElementById('country').innerHTML = `Country: ${country}`
}

document.getElementById('reload').onclick = (() => {return location.reload()})
