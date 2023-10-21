import React from "react";
import Card from "./Card.js";
import api from "../utils/Api.js";

function Main(props) {
    const [userName, setUserName] = React.useState("Обновление...");
    const [userDescription, setUserDescription] = React.useState("Обновление...");
    const [userAvatar, setUserAvatar] = React.useState("");

    React.useEffect(() => {
        api
            .getProfileInfo()
            .then((info) => {
                setUserName(info.name);
                setUserDescription(info.about);
                setUserAvatar(info.avatar);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api
            .getInitialCards()
            .then((data) => {
                setCards(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className='Main'>
            <section className="profile">
                <div className="profile__block">
                    <div className="profile__container">
                        <img className="profile__avatar" src={userAvatar} alt="Аватар" />
                        <button className="profile__edit-avatar" onClick={props.onEditAvatar}></button>
                    </div>
                    <div className="profile__info">
                        <div className="profile__edit">
                            <h1 className="profile__title">{userName}</h1>
                            <button className="profile__edit-button" type="button" onClick={props.onEditProfile}></button>
                        </div>
                        <h2 className="profile__subtitle">{userDescription}</h2>
                    </div>
                </div>
                <button className="profile__button" type="button" onClick={props.onAddPlace}></button>
            </section>
            <section className="cards">
                <ul className="cards__list">
                    {cards.map((card) => (
                        <Card key={card._id} {...card} onCardClick={props.onCardClick} />
                    ))}
                </ul>
            </section>
        </div>
    );
}

export default Main;