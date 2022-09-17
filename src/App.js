import React from 'react';
import Card from "./components/Card";

function App() {
    return (
        <div className="wrapper clear">

            <div style={{display: 'none'}} className="overlay">
                <div className="drawer d-flex flex-column">
                    <h2 className="mb-30 d-flex justify-between ">Корзина <img className="cu-p" src="/img/remove.svg" alt="Remove"/></h2>

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
                        <ul >
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

            <header className="d-flex justify-between align-center p-40">
                <div className="d-flex align-center">
                    <img width={40} height={40} src='img/logo.png'/>
                    <div>
                        <h3 className="text-uppercase">REACT SNEAKERS</h3>
                        <p className="opacity-5">Магазин лучших кроссовок</p>
                    </div>
                </div>
                <ul className="d-flex">
                    <li className="mr-30">
                        <img width={18} height={18} src='img/cart.svg'/>
                        <span>1205 р.</span>
                    </li>
                    <li>
                        <img width={18} height={18} src='img/user.svg'/>
                    </li>
                </ul>
            </header>

            <div className="content p-40">
                <div className="d-flex align-center justify-between mb-40">
                    <h1 className="">Все кросовки</h1>
                    <div className="search-block">
                        <img src="/img/search.svg" alt="Search"/>
                        <input placeholder="Поиск..."/>
                    </div>
                </div>

                <div className="d-flex">
                    <Card/>
                </div>

            </div>
        </div>
    );
}

export default App;
