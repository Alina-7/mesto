/*переменные для попап Edit*/
const buttonEdit = document.querySelector(".profile__button-edit");
const popupEditProfile = document.querySelector(".popup-edit");
const buttonCloseEdit = document.querySelector(".popup__button-close-edit");
const formElementEdit = document.querySelector(".popup__form-edit");
const nameInput = document.querySelector(".popup__input_type_name");
const jobInput = document.querySelector(".popup__input_type_job");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");

/*переменные для попап Add*/
const buttonAdd = document.querySelector(".profile__button-add");
const popupAddCard = document.querySelector(".popup-add");
const placeInput = document.querySelector(".popup__input_type_place");
const linkInput = document.querySelector(".popup__input_type_link");
const buttonCloseAdd = document.querySelector(".popup__button-close-add");
const formElementAdd = document.querySelector(".popup__form-add");
const elements = document.querySelector('.elements');
const elementTemplate = document.querySelector('#element').content.querySelector('.element');
const formName = document.querySelector('[name="input-place"]');
const formLink = document.querySelector('[name="input-link"]');

/* переменные для попап фото */
const popupCardPhoto = document.querySelector('.popup_photo-card');
const pupupContainerCard = document.querySelector('popup__container-card');
const popupImageCard = document.querySelector('.popup__img-card');
const popupTitleCard = document.querySelector('.popup__title-card');
const popupButtonClosePhoto = document.querySelector(".popup__button-close-photo");

const popupContainer = document.querySelector(".popup");

/*функция открытия попап*/
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEsc); 
  popup.addEventListener("mousedown",closeOverlay);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEsc);
  popup.removeEventListener("mousedown",closeOverlay);
}


  
/*функция открытия попап Edit*/
buttonEdit.addEventListener('click', function () {
  openPopup(popupEditProfile)
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
});

/*функция закрытия попап Edit*/
buttonCloseEdit.addEventListener('click', function () {
  closePopup(popupEditProfile)
});

/*функция открытия для попап фото*/
popupImageCard.addEventListener('click', function () {
  openPopup(popupCardPhoto)
});

/*функция закрытия для попап фото*/
popupButtonClosePhoto.addEventListener('click', function () {
  closePopup(popupCardPhoto)
});

/*функция открытия попап Add*/
buttonAdd.addEventListener('click', function () {
  openPopup(popupAddCard)
});

/*функция закрытия попап Add*/
buttonCloseAdd.addEventListener('click', function () {
  closePopup(popupAddCard)
});

/* функция заполнения попап edit */
formElementEdit.addEventListener('submit', submitEditProfileForm);

function submitEditProfileForm(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  closePopup(popupEditProfile)
};

/* функция заполнения попап add */
function createElement(card) {
  const elementClone = elementTemplate.cloneNode(true);
  const elementImg = elementClone.querySelector('.element__img');
  const elementTitle = elementClone.querySelector('.element__title');
  const elementDeleteButton = elementClone.querySelector('.element__button-delete');
  const elementLikeButton = elementClone.querySelector('.element__button-like');

  elementImg.src = card.link;
  elementImg.alt = card.name;
  elementTitle.textContent = card.name;

  function handlePreviewImg() {
    popupImageCard.src = card.link;
    popupImageCard.alt = card.name;
    popupTitleCard.textContent = card.name;
    openPopup(popupCardPhoto);
  }
  // Обработчики кликов для кнопок лайка и удаления 
  elementDeleteButton.addEventListener('click', handleDeleteButtonClick)
  elementLikeButton.addEventListener('click', handleLikeButtonClick)
  elementImg.addEventListener('click', handlePreviewImg);
  return elementClone;
}
const handleLikeButtonClick = (e) => {
  e.target.classList.toggle('element__button-like_is_active')
}
const handleDeleteButtonClick = (e) => {
  e.target.closest('.element').remove()
}

// Функция делает две вещи - создает элемент (вызывая createElement) и добавляет его на страницу 
// card - объект с данными elementClone 
// elements - элемент, в который добавится наш новый elementClone 
const renderElementClone = (card, elements) => {
  const element = createElement(card)
  elements.prepend(element);
}
initialCards.forEach(function (card) {
  renderElementClone(card, elements)
})

const submitAddCardForm = (e) => {
  e.preventDefault()
  // здесь мы сами создаем объект, который будем передавать в elementClone 
  const elementClone = {
    name: formName.value ,
    link: formLink.value
  }
  renderElementClone(elementClone, elements);
  e.target.reset(); // очистили поле ввода
  disableButton(e.submitter, settings);
  closePopup(popupAddCard);
}

formElementAdd.addEventListener('submit', submitAddCardForm)

// функция закрытия попапа кликом вне попапа
function closeOverlay(evt) {
  const eventTarget = evt.target;
  if(eventTarget.classList.contains('popup_opened')) {
    eventTarget.classList.remove("popup_opened");
  }
};


// функция закрытия попапа esc
function closeByEsc(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup); 
  }
}  


