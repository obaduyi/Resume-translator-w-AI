const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => { 
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelector('.menu li');
    const selected = dropdown.querySelector('.selected');

    select.addEventListener('click', () => {
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
    });
    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerText = option.innerText;
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');
            options.forEach(option => {
                option.classList.remove('active');
            });
            option.classList.add('active');
        });
    });
});

// Wait for DOM content to load
document.addEventListener('DOMContentLoaded', function() {

    // Get all elements with class "correct"
    let corrects = document.querySelectorAll('.correct');

    // Add event listeners to each correct button
    for (let i = 0; i < corrects.length; i++) {
        corrects[i].addEventListener('click', function() {

        // Set background color to green
        corrects[i].style.backgroundColor = 'Green';

        // Go to parent element of correct button and find the first element with class "feedback" which has that parent
        corrects[i].parentElement.querySelector('.feedback').innerHTML = 'Correct!';
        });
    }

    // When any incorrect answer is clicked, change color to red.
    let incorrects = document.querySelectorAll(".incorrect");
    for (let i = 0; i < incorrects.length; i++) {
        incorrects[i].addEventListener('click', function() {

            // Set background color to green
            incorrects[i].style.backgroundColor = 'Red';

            // Go to parent element of correct button and find the first element with class "feedback" which has that parent
            incorrects[i].parentElement.querySelector('.feedback').innerHTML = 'Incorrect';
        });
    }

    // Check free response submission
    document.querySelector('#check').addEventListener('click', function() {4
        let input = document.querySelector('input');
        if (input.value === 'left hand') {
            input.style.backgroundColor = 'green';
            input.parentElement.querySelector('.feedback').innerHTML = 'Correct!';
        }
        else {
            input.style.backgroundColor = 'red';
            input.parentElement.querySelector('.feedback').innerHTML = 'Incorrect';
        }
    });
});

const realFileBtn = document.getElementById("real-file");
const customBtn = document.getElementById("custom-button");
const customTxt = document.getElementById("custom-text");

customBtn.addEventListener("click", function() {
    realFileBtn.click();
});