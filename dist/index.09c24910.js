"use strict";
const curoselBtn = document.querySelectorAll(".features__btn"); // gets all btns that have this class name
const courselPicture = document.querySelectorAll(".features__card");
const dropdownBtn = document.querySelectorAll(".dropdown__question");
const dropdownQn = document.querySelectorAll(".dropdown__paragragh");
curoselBtn.forEach((btn)=>{
    // listens for event on each btn
    btn.addEventListener("click", (e)=>{
        e.preventDefault();
        // returns if button already conatins this particular class
        if (btn.classList.contains("features__btn--active")) {
            console.log("Already showing..");
            return;
        }
        // if button doesn't contain the active class it is added
        if (!btn.classList.contains("features__btn--active")) {
            btn.classList.add("features__btn--active");
            // loops through all the buttons to check for the current button being clicked
            for(let i = 0; i < curoselBtn.length; i++)// if the button at position curosel[i] button is not the button clicked the active class is removed
            // only the clicked btn can have the active class
            if (curoselBtn[i] !== btn) {
                curoselBtn[i].classList.remove("features__btn--active");
                // checks if current description has active class and removes if has
                courselPicture[i].classList.remove("features__card--active");
            } else // checks if current description doesn't have active class and adds if has
            courselPicture[i].classList.add("features__card--active");
        }
    });
});
// dropdown
// for each element that has .dropdown__question class this function will be called.
dropdownBtn.forEach((btn)=>{
    btn.addEventListener("click", (e)=>{
        e.preventDefault();
        if (btn.parentNode.querySelector(".dropdown__paragragh")) btn.parentNode.querySelector(".dropdown__paragragh").classList.toggle("closed");
    });
});

//# sourceMappingURL=index.09c24910.js.map
