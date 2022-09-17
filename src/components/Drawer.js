import React from "react";

function Header() {
    return   <div style={{display: 'none'}} className="overlay">
        <div className="drawer d-flex flex-column">
            <h2 className="mb-30 d-flex justify-between ">Корзина <img className="cu-p" src="/img/remove.svg"
                                                                       alt="Remove"/></h2>

            <div className="items flex">
                <div className="cartItem d-flex align-center mb-20">
                    <div style={{backgroundImage: 'url(/img/sneakers/1.jpg)'}}
                         className="cartItemImg"
                    >
                    </div>
                    <div className="mr-20 flex">
                        <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                        <b>12 999 руб.</b>
                    </div>
                    <img className="removeBtn" src="/img/remove.svg" alt="Remove"/>
                </div>

                <div className="cartItem d-flex align-center mb-20">
                    <div style={{backgroundImage: 'url(/img/sneakers/2.jpg)'}}
                         className="cartItemImg"
                    >
                    </div>
                    <div className="mr-20 flex">
                        <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                        <b>12 999 руб.</b>
                    </div>
                    <img className="removeBtn" src="/img/remove.svg" alt="Remove"/>
                </div>

                <div className="cartItem d-flex align-center mb-20">
                    <div style={{backgroundImage: 'url(/img/sneakers/3.jpg)'}}
                         className="cartItemImg"
                    >
                    </div>
                    <div className="mr-20 flex">
                        <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                        <b>12 999 руб.</b>
                    </div>
                    <img className="removeBtn" src="/img/remove.svg" alt="Remove"/>
                </div>

                <div className="cartItem d-flex align-center mb-20">
                    <div style={{backgroundImage: 'url(/img/sneakers/4.jpg)'}}
                         className="cartItemImg"
                    >
                    </div>
                    <div className="mr-20 flex">
                        <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                        <b>12 999 руб.</b>
                    </div>
                    <img className="removeBtn" src="/img/remove.svg" alt="Remove"/>
                </div>

                <div className="cartItem d-flex align-center mb-20">
                    <div style={{backgroundImage: 'url(/img/sneakers/1.jpg)'}}
                         className="cartItemImg"
                    >
                    </div>
                    <div className="mr-20 flex">
                        <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                        <b>12 999 руб.</b>
                    </div>
                    <img className="removeBtn" src="/img/remove.svg" alt="Remove"/>
                </div>
            </div>
            <div className="cartTotalBlock">
                <ul>
                    <li className="d-flex">
                        <span>Итого: </span>
                        <div></div>
                        <b>21 498 руб. </b>
                    </li>
                    <li className="d-flex">
                        <span>Налог 5%: </span>
                        <div></div>
                        <b>1074 руб. </b>
                    </li>
                </ul>
                <button className="greenButton">
                    Оформить заказ
                    <img src="/img/arrow.svg" alt="Arrow"/>
                </button>
            </div>

        </div>
    </div>
}

export default Header;