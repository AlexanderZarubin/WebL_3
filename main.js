const body = document.querySelector("body");
const popup_window = document.querySelector(".popupF");
const popup_content = document.querySelector(".popupF__content");
const popup_button = document.getElementById("modal__button");
const check_button = document.getElementById("input__check");
const popup_close = document.querySelector(".popupF__close");
const popup_buy = document.getElementById("popupF__buy");
const popup_city = document.querySelector("#input__city");
const popup_date = document.querySelector("#input__date");
const popup_amount = document.querySelector("#input__amount");
const popup_add_date = document.querySelector("#add__date");

let Ticket = {
    city: 0,
    date: 0,
    amount: 0,
    addDate:0
};

popup_button.addEventListener("click",function (Event) {
    popup_window.style.visibility = "visible";
    body.style["overflow-y"] = "hidden";
    Event.stopPropagation();
})
window.addEventListener("click", toHide);
popup_close.addEventListener("click", toHide)
popup_content.addEventListener("click", function(Event){
    Event.stopPropagation();
})
popup_buy.addEventListener("click", function(Event){
    Ticket.city = popup_city.value;
    Ticket.date = popup_date.value;
    Ticket.amount = popup_amount.value;
    Ticket.addDate = popup_add_date.value;
    console.table(Ticket);
    Event.preventDefault();
})
/*Visible of second date*/
check_button.addEventListener("change", function (Event){
    document.querySelector('.second__date').classList.toggle('hidden__div');
    Event.stopPropagation();
})
function toHide (){
    popup_window.style.visibility = "hidden";
    body.style["overflow-y"] = "auto";
}