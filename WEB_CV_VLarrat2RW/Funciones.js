
date = new Date();
year = date.getFullYear();
month = date.getMonth() + 1;
day = date.getDate();
document.getElementById("Fecha_Actual").innerHTML = "Fecha última actualización: "+ month + "/" + day + "/" + year;

const btnMenu = document.querySelector("#btnMenu");
const menu = document.querySelector("#menu");
btnMenu.addEventListener("click", function(){
    menu.classList.toggle("mostrar");
});

const submenubtn = document.querySelectorAll(".submenu-btn");
for(let i=0; i<submenubtn.length;i++){
    submenubtn[i].addEventListener("click",function(){
        if(window.innerWidth <1024){
        const submenu = this.nextElementSibling;
        const height = submenu.scrollHeight;
        
        if(submenu.classList.contains("desplegar")){
            submenu.classList.remove("desplegar");
            submenu.removeAttribute("style");
        } else{
            submenu.classList.add("desplegar");
            submenu.style.height = height + "px";
        }
     }  
    });
}


