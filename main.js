const popup_button = document.getElementById("modal__button");
const popup_window = document.querySelector(".popupF");
const check_button = document.getElementById("input__check");
const popup_content = document.querySelector(".popupF__content");
const popup_close = document.querySelector(".popupF__close");
const popup_city = document.getElementById(".input__city");

popup_button.addEventListener("click",function (Event) {
    popup_window.style.visibility = "visible";
    Event.stopPropagation();
})

window.addEventListener("click", toHide);
popup_close.addEventListener("click", toHide)
popup_content.addEventListener("click", function(Event){
    Event.stopPropagation();
})
console.log(popup_button);
console.log(popup_window);  
console.log(popup_content);
/*Visible of second date*/
check_button.addEventListener("change", function (Event){
    document.querySelector('.add__date').classList.toggle('hidden__div');
    Event.stopPropagation();
})
function toHide (){
    popup_window.style.visibility = "hidden";
}