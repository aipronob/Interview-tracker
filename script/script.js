let interviewCount = 0;
let rejectCount = 0;

const interviewTotal = document.getElementById("totalinterview");
const rejectTotal = document.getElementById("totalreject");


// INTERVIEW BUTTONS
const interviewButtons = document.querySelectorAll(".interviewBtn"); // As ID dia ekta ekta dhora jay, onek interview button ase, tai queryselectorall use kora 

interviewButtons.forEach(function(button) {
    button.addEventListener("click", function() {

        interviewCount++;
        interviewTotal.innerText = interviewCount;
        rejectCount --;
        rejectTotal.innerText = rejectCount;
        if (rejectCount = 0){
          return;
        }

        // find status button inside same card
        const card = button.parentElement;
        const statusBtn = card.querySelector("button");

        statusBtn.innerText = "Interview";
        statusBtn.classList.remove("text-black");
        statusBtn.classList.add("text-green-600");

    });
});


// Reject btn
const rejectButtons = document.querySelectorAll(".rejectBtn"); // reject button gulo dhore rejectButtons e store

rejectButtons.forEach(function(button) {                       // ekta ekta kore dhre click function apply
    button.addEventListener("click", function() {

        rejectCount ++;
        rejectTotal.innerText = rejectCount;
        
        interviewCount--;
        interviewTotal.innerText = interviewCount;

        const card = button.parentElement;
        const statusBtn = card.querySelector("button");

        statusBtn.innerText = "Rejected";
        statusBtn.classList.remove("text-black");
        statusBtn.classList.add("text-red-600");

    });
});