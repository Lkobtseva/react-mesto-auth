import React, { useEffect } from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import api from "../utils/Api.js";
import Footer from "./Footer.js";
import ImagePopup from "./ImagePopup.js";
import PopupWithForm from "./PopupWithForm.js";


function App() {
  // попап редактирования профиля
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  // попап добавления карточки
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  // попап изменения аватара
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  // попап удаления карточки
  const [isDeletePopupOpen, setIsDeletePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  // попап редактирования
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  //popupудаление
  function handleDeleteClick() {
    setIsDeletePopupOpen(true);
  }
  // попап добавления
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  // попап аватара
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleCardClick(card) {
    setSelectedCard(card);
  }
  // закрытие всех попапов
  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <div className="root">
      <div className="page">
        <Header />
        <Main
          onAddPlace={handleAddPlaceClick}
          onEditProfile={handleEditProfileClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          onDelete={handleDeleteClick}
        />
        <Footer />
        <PopupWithForm
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          title={"Новое место"}
          buttonText={"Создать"}
          name={"type_new-card"}
          form={"form_type_new-card"}
        >
          <input
            className="popup__input popup__input_type_name"
            type="text"
            name="name"
            id="card"
            autoComplete="off"
            placeholder="Название"
            minLength="2"
            maxLength="30"
            required
          />
          <span className="error" id="card-error"></span>
          <input
            className="popup__input popup__input_type_link"
            type="url"
            name="link"
            id="link"
            autoComplete="off"
            placeholder="Ссылка на картинку"
            required
          />
          <span className="error" id="link-error"></span>
        </PopupWithForm>
        <PopupWithForm
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          title={"Редактировать профиль"}
          buttonText={"Сохранить"}
          name={"type_edit"}
          form={"form_type_edit"}
        >
          <input
            className="popup__input popup__input_type_name"
            type="text"
            name="name"
            id="name"
            autoComplete="off"
            minLength="2"
            maxLength="40"
            required
            placeholder="Ваше имя"
          />
          <span className="error" id="name-error"></span>
          <input
            className="popup__input popup__input_type_about"
            type="text"
            name="about"
            id="about"
            autoComplete="off"
            minLength="2"
            maxLength="200"
            required
            placeholder="О себе"
          />
          <span className="error" id="about-error"></span>
        </PopupWithForm>
        <PopupWithForm
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          title={"Обновить аватар"}
          buttonText={"Сохранить"}
          name={"type_edit-avatar"}
          form={"form_type_edit-avatar"}
        >
          <input
            type="url"
            className="popup__input popup__input_type_avatar"
            name="avatar"
            placeholder="Ссылка на новый аватар"
            autoComplete="off"
            id="avatar="
            minLength="2"
            required
          />
          <span className="error" id="avatar-error"></span>
        </PopupWithForm>
        <PopupWithForm
          isOpen={isDeletePopupOpen}
          onClose={closeAllPopups}
          title={"Вы уверены?"}
          buttonText={"Да"}
          name={"type_delete-card"}
          form={"form_type_delete-card"}
        />
        <ImagePopup
          isOpen={selectedCard}
          card={selectedCard}
          onClose={closeAllPopups}
        />
      </div>
    </div>
  );
}

export default App;