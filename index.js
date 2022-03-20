var randomNum=Math.floor(Math.random()*6)+1;
var randomDice="dice"+randomNum+".png";
var randomDiceSrc="images/"+randomDice;
var image1=document.querySelector(".img1").setAttribute("src",randomDiceSrc);


var randomNum2=Math.floor(Math.random()*6)+1;
var randomDice2="dice"+randomNum2+".png";
var randomDiceSrc2="images/"+randomDice2;
var image2=document.querySelector(".img2").setAttribute("src",randomDiceSrc2);

if(randomNum>randomNum2){
    document.querySelector("h1").textContent=" 👑 Player1 Won";
}

else if(randomNum<randomNum2){
    document.querySelector("h1").textContent="Player2 Won  👑";
}

else if(randomNum=randomNum2){
    document.querySelector("h1").textContent=" 👑 Draw 👑 ";
}
