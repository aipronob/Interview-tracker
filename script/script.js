let interviewCount = 0;
let rejectCount = 0;

const interviewTotal = document.getElementById("totalinterview");
const rejectTotal = document.getElementById("totalreject");


// INTERVIEW BUTTONS
const interviewButtons = document.querySelectorAll(".interviewBtn"); 

interviewButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const card = button.parentElement;
        const statusBtn = card.querySelector("button");
        if (statusBtn.innerText === "Interview") {
            return;
        }

        if (statusBtn.innerText === "Rejected") {
            rejectCount = Math.max(0, rejectCount - 1);
            rejectTotal.innerText = rejectCount;
        }

        interviewCount++;
        interviewTotal.innerText = interviewCount;

        statusBtn.innerText = "Interview";
        statusBtn.classList.remove("text-black", "text-red-600");
        statusBtn.classList.add("text-green-600");

    });

});


// Reject btn
   const rejectButtons= document.querySelectorAll(".rejectBtn");

    rejectButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const card = button.parentElement;
        const statusBtn = card.querySelector("button");
        if (statusBtn.innerText === "Reject"){
            return;
        }


        if (statusBtn.innerText === "Interview") {
            interviewCount = Math.max(0, interviewCount - 1);
            interviewTotal.innerText = interviewCount;
        }

        rejectCount++
       rejectTotal.innerText = rejectCount;

        statusBtn.innerText = "Reject";
        statusBtn.classList.remove("text-black", "text-green-600");
        statusBtn.classList.add("text-red-600");

    });

});