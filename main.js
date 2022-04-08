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
const IMG_no = document.querySelectorAll(".IMG__no")
const IMG_yes = document.querySelectorAll(".IMG__yes")
/*Регулярные выражения*/
const cyrillicpattern = /[A-Za-zА-Яа-яЁё]/;
const datepattern = /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/;
let Ticket = {
    city: 0,
    date: 0,
    amount: 0,
    addDate:0
};

/*Buying button*/
popup_buy.addEventListener("click", buyingButton)
/*Opening/clossing form*/
popup_button.addEventListener("click", openForm );
window.addEventListener("click", toHide);
popup_close.addEventListener("click", toHide)
popup_content.addEventListener("click", function(Event){
    Event.stopPropagation();
})
/*Checking values*/
popup_city.addEventListener("blur", checkCity);
popup_date.addEventListener("blur", checkDate);
popup_amount.addEventListener("blur",checkNumberRage);
popup_add_date.addEventListener("blur",checkAddDate);
/*Visible of second date*/
check_button.addEventListener("change", toggleOfDate );
/*Functions*/
function toHide (){
    popup_window.style.visibility = "hidden";
    body.style["overflow-y"] = "auto";
};
function toggleOfDate (Event){
    document.querySelector('.second__date').classList.toggle('hidden__div');
    Event.stopPropagation();
};
function openForm (Event) {
    popup_window.style.visibility = "visible";
    body.style["overflow-y"] = "hidden";
    Event.stopPropagation();
    IMG_yes[1].style.display = "flex";
    IMG_yes[3].style.display = "flex";
};
function buyingButton (Event){
    
    console.table(Ticket);
    Event.preventDefault();
};
function checkCity (){
    if(popup_city.validity.valueMissing) {
        popup_city.reportValidity();
        popup_city.setCustomValidity("Введите название города!");
        IMG_no[0].style.display = "flex";
        IMG_yes[0].style.display = "none";
        popup_city.style.border = '2x solid red';
		popup_city.style.boxShadow = '1px 1px 10px rgba(255,0,0, 0.2)';
    } else if (!cyrillicpattern.test(popup_city.value)){
        popup_city.reportValidity();
        popup_city.setCustomValidity('Только буквы!');
        IMG_no[0].style.display = "flex";
        IMG_yes[0].style.display = "none";
        popup_city.style.border = '2px solid red';
		popup_city.style.boxShadow = '1px 1px 10px rgba(255,0,0, 0.2)';
    } else if (popup_city.value.length < 2){
        popup_city.reportValidity();
        popup_city.setCustomValidity('Введите больше букв!');
        IMG_no[0].style.display = "flex";
        IMG_yes[0].style.display = "none";
        popup_city.style.border = '2px solid red';
		popup_city.style.boxShadow = '1px 1px 10px rgba(255,0,0, 0.2)';
	}else{
        IMG_no[0].style.display = "none";
        IMG_yes[0].style.display = "flex";
        popup_city.style.border = '2px solid green';
		popup_city.style.boxShadow = '1px 1px 10px rgba(0,255,0, 0.2)';
    }
    Ticket.city = popup_city.value;
};
function checkDate(){
    if (!datepattern.test(popup_date.value)){
        popup_date.reportValidity();
        popup_date.setCustomValidity('Введите дату!');
        IMG_no[1].style.display = "flex";
        IMG_yes[1].style.display = "none";
        popup_date.style.border = '2px solid red';
		popup_date.style.boxShadow = '1px 1px 10px rgba(255,0,0, 0.2)';
    }else{
        IMG_no[1].style.display = "none";
        IMG_yes[1].style.display = "flex";
        popup_date.style.border = '2px solid green';
		popup_date.style.boxShadow = '1px 1px 10px rgba(0,255,0, 0.2)';
    }
    Ticket.date = popup_date.value;
};
function checkNumberRage (){
    if(popup_amount.validity.rangeOverflow){
        popup_amount.reportValidity();
        popup_amount.setCustomValidity('Слишком много!');
        IMG_no[2].style.display = "flex";
        IMG_yes[2].style.display = "none";
        popup_amount.style.border = '2px solid red';
        popup_amount.style.boxShadow = '1px 1px 10px rgba(255,0,0, 0.2)';
    } else if(popup_amount.validity.rangeUnderflow){
        popup_amount.reportValidity();
        popup_amount.setCustomValidity('Слишком мало!');
        IMG_no[2].style.display = "flex";
        IMG_yes[2].style.display = "none";
        popup_amount.style.border = '2px solid red';
        popup_amount.style.boxShadow = '1px 1px 10px rgba(255,0,0, 0.2)';
    }
    else{
        IMG_no[2].style.display = "none";
        IMG_yes[2].style.display = "flex";
        popup_amount.style.border = '2px solid green';
        popup_amount.style.boxShadow = '1px 1px 10px rgba(0,255,0, 0.2)';
    }
    Ticket.amount = popup_amount.value;
};
function checkAddDate(){
    if (!datepattern.test(popup_add_date.value)){
        popup_add_date.reportValidity();
        popup_add_date.setCustomValidity('Введите дату!');
        IMG_no[3].style.display = "flex";
        IMG_yes[3].style.display = "none";
        popup_add_date.style.border = '2px solid red';
        popup_add_date.style.boxShadow = '1px 1px 10px rgba(255,0,0, 0.2)';
    }else{
        IMG_no[3].style.display = "none";
        IMG_yes[3].style.display = "flex";
        popup_add_date.style.border = '2px solid green';
        popup_add_date.style.boxShadow = '1px 1px 10px rgba(0,255,0, 0.2)';
    }
    Ticket.addDate = popup_add_date.value;
};