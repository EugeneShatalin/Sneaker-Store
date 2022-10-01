import React, {useEffect, useState} from 'react';
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import axios from "axios";
import Home from "./pages/Home";
import {Route, Routes} from "react-router-dom";
import Favorites from "./pages/Favorites";

function App() {
    const [cartOpened, setCartOpened] = useState(false)
    const [items, setItems] = useState([])
    const [cartItems, setCartItems] = useState([])
    const [favorites, setFavorites] = useState([])
    const [searchValue, setSearchValue] = useState('')


    useEffect(() => {
        axios.get('https://63300eb8591935f3c8891554.mockapi.io/items')
            .then((res) => {
                setItems(res.data)
            })
        axios.get('https://63300eb8591935f3c8891554.mockapi.io/cart')
            .then((res) => {
                setCartItems(res.data)
            })
        axios.get('https://63300eb8591935f3c8891554.mockapi.io/favorites')
            .then((res) => {
                setFavorites(res.data)
            })
    }, [])

    const onAddToCart = (obj) => {
        axios.post('https://63300eb8591935f3c8891554.mockapi.io/cart', obj)
        setCartItems((prev) => [...prev, obj])
    }

    const onRemoveItem = (id) => {
        axios.delete(`https://63300eb8591935f3c8891554.mockapi.io/cart/${id}`)
        setCartItems((prev) => prev.filter(item => item.id !== id))
    }

    const onAddToFavorite = async (obj) => {
        try {
            if(favorites.find(item => item.id === obj.id)) {
                axios.delete(`https://63300eb8591935f3c8891554.mockapi.io/favorites/${obj.id}`)
                setCartItems((prev) => prev.filter(item => item.id !== obj.id))
            } else {
                const {data} = await axios.post('https://63300eb8591935f3c8891554.mockapi.io/favorites', obj)
                setFavorites((prev) => [...prev, data])
            }
        } catch (e) {
            alert("Не удалось добавить в Избраное")
        }

    }

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value)
    }

    const onClearSearch = () => {
        setSearchValue('')
    }

    return (
        <div className="wrapper clear">

            {cartOpened && <Drawer onClose={() => setCartOpened(false)} items={cartItems} onRemove={onRemoveItem}/>}
            <Header onClickCart={() => setCartOpened(true)}/>


            <Routes>
                <Route path="/" element={<Home
                    items={items}
                    searchValue={searchValue}
                    onChangeSearchInput={onChangeSearchInput}
                    onAddToFavorite={onAddToFavorite}
                    onAddToCart={onAddToCart}
                    onClearSearch={onClearSearch} />}
                />

                <Route path="/favorites" element={<Favorites items={favorites} onAddToFavorite={onAddToFavorite}/>}/>

            </Routes>

        </div>
    );
}

export default App;
