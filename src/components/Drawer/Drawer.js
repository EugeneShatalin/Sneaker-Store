import React, {useState} from "react";
import axios from "axios";

import Info from "../Info";
import {useCart} from "../../hooks/useCart";

import styles from "./Drawer.module.scss"

function Drawer({onClose, onRemove = [], opened}) {

    const {cartItems, setCartItems, totalPrice} = useCart()

    const [orderId, setOrderId] = useState(null)
    const [isOrderComplete, setIsOrderComplete] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const onClickOrder = async () => {
        try {
            setIsLoading(true)
            const {data} = await axios.post('https://63300eb8591935f3c8891554.mockapi.io/orders', {items: cartItems})
            setOrderId(data.id)
            setIsOrderComplete(true)
            setCartItems([])

            for (let i = 0; i < cartItems.length; i++) {
                const item = cartItems[i];
                await axios.delete('https://63300eb8591935f3c8891554.mockapi.io/cart/' + item.id);
                await delay(1000);
            }
        }
        catch (e) {
            console.log(e)
            alert("Ошибка при создании заказа :(")
            console.log(e)
        }
        setIsLoading(false)
    }

    return (
        <div className={`${styles.overlay} ${opened ? styles.overlayVisible : ''}`}>
            <div className={styles.drawer}>
                <h2 className="d-flex justify-between mb-30">
                    Корзина <img onClick={onClose} className="cu-p" src="/img/remove.svg" alt="Close" />
                </h2>

                {cartItems.length > 0 ? (
                    <div className="flex flex-column d-flex">
                        <div className="items flex">
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
                                    <b>{totalPrice} руб. </b>
                                </li>
                                <li>
                                    <span>Налог 5%:</span>
                                    <div></div>
                                    <b>{(totalPrice*0.05).toFixed(2)} руб. </b>
                                </li>
                            </ul>
                            <button disabled={isLoading} onClick={onClickOrder} className="greenButton">
                                Оформить заказ <img src="/img/arrow.svg" alt="Arrow" />
                            </button>
                        </div>
                    </div>
                ) : (
                    <Info
                        image={isOrderComplete ? "/img/complete-order.jpg" : "/img/empty-cart.jpg"}
                        title={isOrderComplete ? "Заказ оформлен!" : "Корзина пустая"}
                        description={isOrderComplete ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке` : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."}
                    />
                )}
            </div>
        </div>
    );
}

export default Drawer;