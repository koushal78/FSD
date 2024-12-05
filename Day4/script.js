
const isVAlidate = ()=>{
    const p =document.getElementsByClassName('P').value
    const N =document.getElementsByClassName('N').value
    const a = "admin"
    console.log(p,N)
     document.getElementById("res").innerHTML("valid")
    if(p == a && N == a){
        document.getElementById("res").innerHTML = "valid"
    }
    document.getElementById("res").innerHTML = "invalid"
}
