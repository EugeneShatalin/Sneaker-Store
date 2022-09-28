import React, {useEffect, useState} from 'react';
import Card from "./components/Card/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import axios from "axios";

function App() {
    const [cartOpened, setCartOpened] = useState(false)
    const [items, setItems] = useState([])
    const [cartItems, setCartItems] = useState([])
    const [searchValue, setSearchValue] = useState('')


    useEffect(() => {
        axios.get('https://63300eb8591935f3c8891554.mockapi.io/items')
            .then((res) => {
                setItems(res.data)
            })
    }, [])

    const onAddToCart = (obj) => {
        axios.post('https://63300eb8591935f3c8891554.mockapi.io/cart', obj)
        setCartItems((prev) => [...prev, obj])
    }

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value)
    }

    const onClearSearch = () => {
        setSearchValue('')
    }

    return (
        <div className="wrapper clear">

            {cartOpened && <Drawer onClose={() => setCartOpened(false)} items={cartItems}/>}
            <Header onClickCart={() => setCartOpened(true)}/>

            <div className="content p-40">
                <div className="d-flex align-center justify-between mb-40">
                    <h1 className="">{searchValue ? `Поисе по запросу: ${searchValue}` : `Все кросовки`}</h1>
                    <div className="search-block">
                        <img src="/img/search.svg" alt="Search"/>
                        {searchValue &&
                            <img className="clear cu-p" src="/img/remove.svg" alt="Clear" onClick={onClearSearch}/>}
                        <input
                            onChange={onChangeSearchInput}
                            placeholder="Поиск..."
                            value={searchValue}
                        />
                    </div>
                </div>

                <div className="d-flex flex-wrap">
                    {
                        items
                            .filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
                            .map((item, index) => {
                                return <Card
                                    key={index}
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
