const snbMenu = document.querySelector("#snb .sub_menu");
const snbBtn = document.querySelector("#snb .btn_menu"); 
const harryP = document.querySelector(".harryP");

snbBtn.addEventListener("click", function(){
    console.log("!");
    if(snbMenu.classList.contains("hide")){
        snbMenu.classList.remove("hide");
    } else {
        snbMenu.classList.add("hide");
    }
});

harryP.onclick = function(){
    this.textContent ="Welcome to Hogwarts!";
    this.style.color="rgb(218,218,218)" ;
    this.style.textShadow="2px 2px 5px silver";
}
