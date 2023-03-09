// Script for navigation bar
const bar = document.getElementById('bar')
const nav = document.getElementById('navbar')
const close = document.getElementById('close')

if(bar)
{
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}


if(close)
{
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}



// jquery for deleting cart item

$(document).ready(function () {
    $("a").click(function () {
        $("#cartItem").remove();
    });
});


// script for loader 

// function loader(){
//     document.querySelector('.loader').style.display = 'none';
// }

// function fadeOut(){
//     setInterval(loader, 2);
// }

// window.onload = fadeOut;

