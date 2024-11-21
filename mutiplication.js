function multiply() {
    
    let num1= document.getElementById('num1').value
    let num2 = document.getElementById('num2').value
    
 
    if (!isNaN(num1) && !isNaN(num2)) {
       
       let result = num1 * num2
        document.getElementById('result').textContent = `Result: ${result}`
    } 
    else {
       
        document.getElementById('result').textContent = 'Please enter valid numbers.'
    }
}

