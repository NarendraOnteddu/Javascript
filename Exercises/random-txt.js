
function showRandomText(){
    let texts=[
    "Have a GOOD day!",
    "Have a BAD day!"
    ];
    let randomTextVar=document.getElementById('randomText');
    randomTextVar.innerHTML = texts[Math.floor(Math.random()*texts.length)];
    randomTextVar.style.fontWeight = 'bold';
    randomTextVar.style.fontSize="large";

}