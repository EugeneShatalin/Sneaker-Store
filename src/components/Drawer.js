import React, {useContext} from "react";
import {AppContext} from "../App";

function Drawer({onClose, onRemove = []}) {

    const {cartItems} = useContext(AppContext)

    return (
        <div className="overlay">
            <div className="drawer">
                <h2 className="d-flex justify-between mb-30">
                    Корзина <img onClick={onClose} className="cu-p" src="/img/remove.svg" alt="Close" />
                </h2>

                {cartItems.length > 0 ? (
                    <div className="flex flex-column d-flex">
                        <div className="items">
                            {cartItems.map((obj) => (
                                <div className="cartItem d-flex align-center mb-20">
                                    <div
                                        style={{ backgroundImage: `url(${obj.imageUrl})` }}
                                        className="cartItemImg"></div>

                                    <div className="mr-20 flex">
                                        <p className="mb-5">{obj.title}</p>
                                        <b>{obj.price} руб.</b>
                                    </div>
                                    <img
                                        onClick={() => onRemove(obj.id)}
                                        className="removeBtn"
                                        src="/img/remove.svg"
                                        alt="Remove"
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="cartTotalBlock">
                            <ul>
                                <li>
                                    <span>Итого:</span>
                                    <div></div>
                                    <b>21 498 руб. </b>
                                </li>
                                <li>
                                    <span>Налог 5%:</span>
                                    <div></div>
                                    <b>1074 руб. </b>
                                </li>
                            </ul>
                            <button className="greenButton">
                                Оформить заказ <img src="/img/arrow.svg" alt="Arrow" />
                            </button>
                        </div>
                    </div>
                ) : (
                    <div class="cartEmpty d-flex align-center justify-center flex-column flex">
                        <img class="mb-20" width="120px" height="120px" src="/img/empty-cart.jpg" alt="Empty" />
                        <h2>Корзина пустая</h2>
                        <p class="opacity-6">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
                        <button onClick={onClose} class="greenButton">
                            Вернуться назад
                            <img src="/img/arrow.svg" alt="Arrow" />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Drawer;