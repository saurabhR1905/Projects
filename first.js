//access the input filed by using getElementById function and store its value into the display variable
let display = document.getElementById("inputBox"); 

//select all buttons with the help of querySelectorAll
// let buttons=document.querySelector('button');
let buttons = document.querySelectorAll('button');


//To convert node into array we use Array.from (its value(node jya variable madhe store asnar to variable))
let buttonsArray = Array.from(buttons);

let displayValueStore = "";
   


buttonsArray.forEach(function (btn) {
    btn.addEventListener('click', (e) => {
        if (e.target.innerHTML == 'del') {
            displayValueStore = displayValueStore.substring(0, displayValueStore.length - 1);
            display.value = displayValueStore;
        }


        else if (e.target.innerHTML == 'C') {
            displayValueStore = "";
            display.value = displayValueStore;
        }

        else if (e.target.innerHTML == '=') {
            displayValueStore = eval(displayValueStore);
            display.value = displayValueStore;
        }

        else {
            displayValueStore += e.target.innerHTML;
            display.value = displayValueStore;
        }


    })
})
// console.log(e.target.innerHTML);