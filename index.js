const button = document.getElementById('randomFact');
button.addEventListener('click',function(){
    let statement=document.getElementById('statement');
    statement.textContent=statements[factGenerator()];
});

function factGenerator(){
    let randomNumber = Math.round(Math.random()*statements.length);
    return randomNumber;
}
let statements = [
    "My favorite anime is Bleach",
    "I am well versed in C/C++ programming language",
    "I have skills in 3D modelling and sculpting",
    "I have animation skills",
    "I am a deadly gamer!"
]