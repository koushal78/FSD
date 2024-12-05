function changePara(){
    let p1 = document.querySelector('p');
    p1.innerText = "I am updated";
    p1.style.backgroundColor = "red";
}
function changeLink(){
    let a = document.querySelector('a')
    a.setAttribute('href','https://aktu.ac.in/')
    a.innerText = "Aktu website"
}