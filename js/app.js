// =========================
// CODEX EDU BOT
// Main JavaScript
// =========================


// Page Loaded Message

document.addEventListener("DOMContentLoaded", () => {

    console.log("CODEX EDU BOT Loaded Successfully 🚀");


});




// Smooth Scroll

const links = document.querySelectorAll("a[href^='#']");


links.forEach(link => {

    link.addEventListener("click", function(e){

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            e.preventDefault();

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});




// Button Animation

const buttons = document.querySelectorAll(".btn-primary, .btn-secondary");


buttons.forEach(btn => {


    btn.addEventListener("mouseenter",()=>{

        btn.style.transform="scale(1.05)";

    });


    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="scale(1)";

    });


});




// Simple AI Demo Chat

function sendDemoMessage(){


    let input = document.getElementById("demoInput");


    let output = document.getElementById("demoOutput");



    if(input && output){


        let message=input.value;


        if(message===""){

            output.innerHTML="Please type a question.";

            return;

        }



        output.innerHTML =
        "🤖 AI Assistant: I will help you with your class information.";


        input.value="";


    }


}



// Console Branding

console.log(`
============================

 CODEX EDU BOT

 AI Education Platform

 Built by CODEX STUDIOS

============================
`);
