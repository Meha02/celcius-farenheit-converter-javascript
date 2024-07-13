function convert(){
    const celcius=Number(document.getElementById("input").value)
    const fahrenheit=(celcius*9/5)+32
    const result=documet.getElementById("result")
    result.innerHTML=fahrenheit.toFixed(2)+"F"
}