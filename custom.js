const inputField = document.getElementById('inputField')

function display(num){
    console.log(num);
    inputField.value += num
}

function calculate(){
    try{
        inputField.value = eval(inputField.value)
    }
    catch(err){
        alert('Invalid')
    }
}
function clear(){
     inputField.value = ''
}
