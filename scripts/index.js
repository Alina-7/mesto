// console.log("привет!")


const buttonOpenPopup = document.querySelector(".profile__edit-button")
const buttonClosePopup = document.querySelector(".popup__close-icon")
const popup = document.querySelector(".popup")

const popupToggle = (event) => {
    popup.classList.toggle("popup_opened")
}


buttonOpenPopup.addEventListener("click", popupToggle)
buttonClosePopup.addEventListener("click", popupToggle)




let formElement = querySelector(".popup__form") 
function formSubmitHandler (evt) {
    evt.preventDefault();

    let nameInput = document.querySelector('#your-name');
    let jobInput = document.querySelector('#about-you');

    nameInput.value;
    jobInput.value;


    document.querySelector('.profile__title').textContent = nameInput.value
    document.querySelector('.profile__subtitle').textContent += jobInput.value


}

formElement.addEventListener('submit', formSubmitHandler);

