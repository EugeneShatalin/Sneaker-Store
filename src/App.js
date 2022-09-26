import React, {useEffect, useState} from 'react';
import Card from "./components/Card/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
    const [cartOpened, setCartOpened] = useState(false)
    const [items, setItems] = useState([])
    const [cartItems, setCartItems] = useState([])



    useEffect(() => {
        fetch('https://63300eb8591935f3c8891554.mockapi.io/items')
            .then((res) => {
                return res.json();
            })
            .then((json) => {
                setItems(json)
            })
    }, [])

    const onAddToCart = (obj) => {
        setCartItems([...cartItems, obj])
        console.log(cartItems)
    }

    return (
        <div className="wrapper clear">

            {cartOpened && <Drawer onClose={() => setCartOpened(false)} items={cartItems}/>}
            <Header onClickCart={() => setCartOpened(true)}/>

            <div className="content p-40">
                <div className="d-flex align-center justify-between mb-40">
                    <h1 className="">Все кросовки</h1>
                    <div className="search-block">
                        <img src="/img/search.svg" alt="Search"/>
                        <input placeholder="Поиск..."/>
                    </div>
                </div>

                <div className="d-flex flex-wrap">
                    {
                        items.map(item => {
                            return <Card
                                title={item.title}
                                price={item.price}
                                imageUrl={item.imageUrl}
                                onFavorite={() => console.log("Избранное")}
                                onPlus={(obg) => onAddToCart(obg)}
                            />
                        })
                    }
                </div>

            </div>
        </div>
    );
}

export default App;
