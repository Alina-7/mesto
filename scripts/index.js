const buttonOpenPopup = document.querySelector(".profile__edit-button");
const buttonClosePopup = document.querySelector(".popup__close-icon");
const closeAddCards = document.querySelector(".popup__close-icon_card");
const popup = document.querySelector(".popup");
const formElement = popup.querySelector(".popup__form");
let nameInput = document.querySelector(".popup__information_type_name");
let jobInput = document.querySelector(".popup__information_type_job");
let profileTitle =  document.querySelector(".profile__title");
let profileSubtitle = document.querySelector(".profile__subtitle");


const openPopupCards = document.querySelector(".profile__add-button");
const popupCards = document.querySelector(".popup_card");
let titleInput = document.querySelector(".popup__card-title");
let imageInput = document.querySelector(".popup__card-image");
let cardTitle = document.querySelector(".element__text");
const cardForm = popupCards.querySelector(".popup__form");
const popupImage = document.querySelector(".popup__image");

const elementImage = document.querySelector(".element__image");

const elementsContainer = document.querySelector('.elements');
const template = document.querySelector('.template')
const element = template.querySelectorAll('.element');
const popupPreview = document.querySelector('.popup_picture');
const imagePopupPreview = popupPreview.querySelector('.popup__image');
const namePopupPreview = popupPreview.querySelector('.popup__image-name');
const buttonClosePopupPreview = popupPreview.querySelector('.popup__close-icon_image');

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
  
];





function popupOpened () {
nameInput.value = profileTitle.textContent;
jobInput.value = profileSubtitle.textContent;
popup.classList.add("popup_opened");
};


function popupClosed () {
popup.classList.remove("popup_opened");
};

function formSubmitHandler (evt) {
  evt.preventDefault();

 profileTitle.textContent = nameInput.value;
 profileSubtitle.textContent = jobInput.value;
popupClosed();
};

function popupOpenedCards () {
  popupCards.classList.add("popup_opened");
  };

  function popupCloseCards () {
    popupCards.classList.remove("popup_opened");
  };

  

buttonOpenPopup.addEventListener("click", popupOpened); 
buttonClosePopup.addEventListener("click", popupClosed);

formElement.addEventListener("submit", formSubmitHandler);



  function deleteCard(node){
    node.remove();
      };



 function getCardItem (cardDetails) {
  const cardElement = template.cloneNode(true).content;
  const cardTitle = cardElement.querySelector('.element__text');
  const cardImage = cardElement.querySelector('.element__image');

  cardImage.addEventListener('click', () => handlerImagePreview(cardDetails));
  
  cardTitle.textContent = cardDetails.name; 
  cardImage.src = cardDetails.link;
  
  cardElement.querySelector('.element__button-delete').addEventListener('click', function(evt){
    const theTarget = evt.target.closest('.element');
    deleteCard(theTarget);
    });
  return cardElement;
 };
 


const cardSubmitHandler = (evt) =>  {
  evt.preventDefault();
  const cardItem = getCardItem({
    name: titleInput.value,
    link: imageInput.value
  });
  
  elementsContainer.prepend(cardItem);  
    popupCloseCards();
  };

const bindListeners = () => {
  openPopupCards.addEventListener("click", popupOpenedCards);
  closeAddCards.addEventListener("click", popupCloseCards);
  cardForm.addEventListener('submit', cardSubmitHandler);  
};
bindListeners();

initialCards.forEach((data) => {
  const cardItem = getCardItem(data);
  elementsContainer.append(cardItem)
});

elementsContainer.addEventListener('click', function(evt){
  evt.target.classList.toggle('element__button_active');
  });



const handlerImagePreview = (details) => {
  imagePopupPreview.src = details.link;
  imagePopupPreview.alt = `Изображение ${details.name}`;
  namePopupPreview.textContent = details.name;

  openPopupPreview();
}

  function openPopupPreview() {
    popupPreview.classList.add('popup_opened');
  }
  

  function closePopupPreview() {
    popupPreview.classList.remove('popup_opened');
  };

  buttonClosePopupPreview.addEventListener('click', closePopupPreview);
 

