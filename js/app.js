// Making sure the script work after the whole page is loaded
document.addEventListener("DOMContentLoaded", function() {
    let text = document.querySelector('#text_1');  //targeting the element in which the increase and decrease function works
    let initialFontSize = window.getComputedStyle(text).fontSize; //Getting the initial fontsize 
    let announcementTitle = document.querySelector('.text-2-container');
    // Getting All the Buttons which will change the background-color
    let blackButton1 = document.getElementById('black_btn1');
    let whiteButton1 = document.getElementById('white_btn1');
    let yellowButton1 = document.getElementById('yellow_btn1');
    let blueButton1 = document.getElementById('blue_btn1');
    let blackButton2 = document.getElementById('black_btn2');
    let whiteButton2 = document.getElementById('white_btn2');
    let yellowButton2 = document.getElementById('yellow_btn2');
    let blueButton2 = document.getElementById('blue_btn2');
    // Getting All the Buttons which will change the font-size
    let increaseFontBtn1 = document.getElementById('increase_font1');
    let resetFontBtn1 = document.getElementById('reset_font1');
    let decreaseFontBtn1 = document.getElementById('decrease_font1');
    let increaseFontBtn2 = document.getElementById('increase_font2');
    let resetFontBtn2 = document.getElementById('reset_font2');
    let decreaseFontBtn2 = document.getElementById('decrease_font2');
  
    // Function to change background color
    function changeBackgroundColor(color) {
        document.body.style.backgroundColor = color;
    }
  
    // Add event listeners to color buttons
    blackButton1.addEventListener('click', function() { changeBackgroundColor("black"); });
    whiteButton1.addEventListener('click', function() { changeBackgroundColor("white"); });
    yellowButton1.addEventListener('click', function() { changeBackgroundColor("yellow"); });
    blueButton1.addEventListener('click', function() { changeBackgroundColor("blue"); });
    blackButton2.addEventListener('click', function() { changeBackgroundColor("black"); });
    whiteButton2.addEventListener('click', function() { changeBackgroundColor("white"); });
    yellowButton2.addEventListener('click', function() { changeBackgroundColor("yellow"); });
    blueButton2.addEventListener('click', function() { changeBackgroundColor("blue"); });
  
    // Function to change font size
    function changeFontSize(size) {
        text.style.fontSize = size + "px";
    }
  
    // Function that will increase the Font-Size
    increaseFontBtn1.addEventListener('click', function() {
        let currentFontSize = window.getComputedStyle(text).fontSize; //Getting the Current Font Size 
        let currentFontSizeNumber = parseFloat(currentFontSize); //converting it into a single digit number
        let newFontSize = currentFontSizeNumber + 12; //storing the new font size (by increasing it)
        changeFontSize(newFontSize); //Applying the stored font size
    });
  
    increaseFontBtn2.addEventListener('click', function() {
        let currentFontSize = window.getComputedStyle(text).fontSize; //Getting the Current Font Size 
        let currentFontSizeNumber = parseFloat(currentFontSize); //converting it into a single digit number
        let newFontSize = currentFontSizeNumber + 12; //storing the new font size (by increasing it)
        changeFontSize(newFontSize); //Applying the stored font size
    });
  
    // Function that will Reset the Font-Size
    resetFontBtn1.addEventListener('click', function() {
        changeFontSize(parseFloat(initialFontSize)); //setting the initial font size on reset
    });
  
    resetFontBtn2.addEventListener('click', function() {
        changeFontSize(parseFloat(initialFontSize)); //setting the initial font size on reset
    });
  
    // Function that will Decrease the Font-Size
    decreaseFontBtn1.addEventListener('click', function() {
        let currentFontSize = window.getComputedStyle(text).fontSize; //Getting the Current Font Size 
        let currentFontSizeNumber = parseFloat(currentFontSize); //converting it into a single digit number
        let newFontSize = currentFontSizeNumber - 12; //storing the new font size (by decreasing it)
        changeFontSize(newFontSize); //Applying the stored font size
    });
  
    decreaseFontBtn2.addEventListener('click', function() {
        let currentFontSize = window.getComputedStyle(text).fontSize; //Getting the Current Font Size 
        let currentFontSizeNumber = parseFloat(currentFontSize); //converting it into a single digit number
        let newFontSize = currentFontSizeNumber - 12; //storing the new font size (by decreasing it)
        changeFontSize(newFontSize); //Applying the stored font size
    });
  
    // Function to pause the marquee
    function pauseMarquee() {
        let marquee = document.querySelector('marquee');
        marquee.stop();
    }
  
    // Function to resume the marquee
    function resumeMarquee() {
        let marquee = document.querySelector('marquee');
        marquee.start();
    }
  
    // Add event listeners to the text-2-container
    announcementTitle.addEventListener('mouseover', pauseMarquee);
    announcementTitle.addEventListener('mouseout', resumeMarquee);
  
  

  
  
  
  
  });
  
