

var blackbtn = document.getElementById("black_btn");
blackbtn.addEventListener("click",function(){
    
    document.body.style.backgroundColor="black";
})

var whitebtn = document.getElementById("white_btn");
whitebtn.addEventListener("click",function(){
    
    document.body.style.backgroundColor="white";
})


var yellowbtn = document.getElementById("yellow_btn");
yellowbtn.addEventListener("click",function(){
    
    document.body.style.backgroundColor="yellow";
})


var bluebtn = document.getElementById("blue_btn");
bluebtn.addEventListener("click",function(){
    
    document.body.style.backgroundColor="blue";
})




var blackbtn1 = document.getElementById("black_btn2");
blackbtn1.addEventListener("click",function(){
    
    document.body.style.backgroundColor="black";
})

var whitebtn1 = document.getElementById("white_btn2");
whitebtn1.addEventListener("click",function(){
    
    document.body.style.backgroundColor="white";
})


var yellowbtn1 = document.getElementById("yellow_btn2");
yellowbtn1.addEventListener("click",function(){
    
    document.body.style.backgroundColor="yellow";
})


var bluebtn1 = document.getElementById("blue_btn2");
bluebtn1.addEventListener("click",function(){
    
    document.body.style.backgroundColor="blue";
})


var text_one = document.getElementById("text_1");




var initial_fontSize = window.getComputedStyle(document.body).fontSize;
console.log(initial_fontSize);
function changeFontSize(size) {
    document.body.style.fontSize = size + "px";
}

var increase_font = document.getElementById("increase_font");
increase_font.addEventListener("click",function(){
    var currentFontSize = window.getComputedStyle(document.body).fontSize;
    var currentFontSizeNumber = parseFloat(currentFontSize);
    var newFontSize = currentFontSizeNumber + 12;
    changeFontSize(newFontSize);
    console.log(changeFontSize);
})


var reset_font = document.getElementById("reset_font");
reset_font.addEventListener("click",function(){
   changeFontSize(parseFloat(initial_fontSize) );
})

var decrease_font = document.getElementById("decrease_font");
decrease_font.addEventListener("click",function(){
    var currentFontSize = window.getComputedStyle(document.body).fontSize;
    var currentFontSizeNumber = parseFloat(currentFontSize);
    var newFontSize = currentFontSizeNumber - 12;
    changeFontSize(newFontSize);
 
})
