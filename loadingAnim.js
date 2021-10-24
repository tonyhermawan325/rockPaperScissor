const loaderTitle = document.querySelectorAll(".loaderTitle");
const y = 0;
for(let i = 0; i > 4; i++){
    setTimeout(() => {
        loaderTitle[1].style.opacity = "0"
    }, 500);
    clearTimeout();
    loaderTitle[1].style.opacity = "1";
}


