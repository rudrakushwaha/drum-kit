
function handleClick() {

    alert("hey!i got clicked");
}

for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;

        makesound(buttonInnerHTML)
        buttonAnimation(buttonInnerHTML)
        // var audio = new Audio("sounds/tom-1.mp3");
        // audio.play();
        // console.log(this.innerHTML)
    });

    document.addEventListener("keydown", function (rudi) {
        makesound(rudi.key);
        buttonAnimation(rudi.key)
        // console.log(rudi.key)
    })

    function makesound(key) {
        switch (key) {
            case "w":
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;
            case "a":
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;
            case "s":
                var tom3 = new Audio("sounds/tom-2.mp3");
                tom3.play();
                break;
            case "d":
                var tom4 = new Audio("sounds/tom-2.mp3");
                tom4.play();
                break;
            case "j":
                var snare = new Audio("sounds/snare.mp3");
                snare.play();
                break;
            case "k":
                var crash = new Audio("sounds/crash.mp3");
                crash.play();
                break;
            case "l":
                var kick = new Audio("sounds/kick-bass.mp3");
                kick.play();
                break;

            default: console.log(this.innerHTML)
                break;
        }
    }
    function buttonAnimation(current) {
        let animatedButton = document.querySelector("." + current)
        animatedButton.classList.add("pressed");

        setTimeout(function () {
            animatedButton.classList.remove("pressed")
        }, 100)
    }

}




/*(document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);
//upper line can also be written like this a s written blow
document.querySelectorAll(".drum")[i].addEventListener("click",function () {
    alert("hey!i got clicked");
});
//GENERAL STATEMENT
document.querySelectorAll(".drum")[i].addEventListener(INPUT1,INPUT2); input 1 is the type of event and input2 is that to do after the event has occured */

//NOW LETS LEARN ABOUT HIGHER ORDER FUCTIONS
/*function add(num1,num2) {
    return num1+num2;

}
function subtract(num1,num2) {
    return num1-um2;

}
function multiply(num1,num2) {
    return num1*num2;

}
function divide(num1,num2) {
    return num1/num2;

}
function calculator(num1,num2,rudra){  // a higher order funtion which takes other function as input
    return rudra(num1,num2);
}    */
// u can call calculkator fn like this ..=>  calcunator(4,5,multiply);