
const buttonOpenPopup = document.querySelector(".profile__edit-button");
const buttonClosePopup = document.querySelector(".popup__close-icon");
const popup = document.querySelector(".popup");
const formElement = popup.querySelector(".popup__form");
let nameInput = document.querySelector(".popup__information_name");
let jobInput = document.querySelector(".popup__information_job");
let profileTitle =  document.querySelector(".profile__title");
let profileSubtitle = document.querySelector(".profile__subtitle");


function popupOpened () {
nameInput.value = profileTitle.textContent;
jobInput.value = profileSubtitle.textContent;
popup.classList.add("popup_opened");

}

function popupClosed () {
popup.classList.remove("popup_opened");

}


buttonOpenPopup.addEventListener("click", popupOpened);
buttonClosePopup.addEventListener("click", popupClosed);


function formSubmitHandler (evt) {
    evt.preventDefault();

   profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = jobInput.value;
    
    popupClosed();
}

formElement.addEventListener("submit", formSubmitHandler);

