import React from 'react';
import Card from "./components/Card/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
    const arr = [
        {title: "Мужские Кроссовки Nike Blazer Mid Suede", price: "12 999 руб.", imageUrl: "/img/sneakers/1.jpg"},
        {title: "Мужские Кроссовки Nike Air Max 270", price: "12 999 руб.", imageUrl: "/img/sneakers/2.jpg"},
        {title: "Мужские Кроссовки Nike Blazer Mid Suede", price: "8 499 руб.", imageUrl: "/img/sneakers/3.jpg"},
        {title: "Кроссовки Puma X Aka Boku Future Rider", price: "8 999 руб.", imageUrl: "/img/sneakers/4.jpg"},
    ]
    return (
        <div className="wrapper clear">

            <Drawer/>
            <Header/>

            <div className="content p-40">
                <div className="d-flex align-center justify-between mb-40">
                    <h1 className="">Все кросовки</h1>
                    <div className="search-block">
                        <img src="/img/search.svg" alt="Search"/>
                        <input placeholder="Поиск..."/>
                    </div>
                </div>

                <div className="d-flex">
                    {
                        arr.map(obg => {
                           return <Card title={obg.title} price={obg.price} imageUrl={obg.imageUrl}/>
                        })
                    }
                </div>

            </div>
        </div>
    );
}

export default App;
