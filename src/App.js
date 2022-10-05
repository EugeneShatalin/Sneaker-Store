import React, {createContext, useEffect, useState} from 'react';
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import axios from "axios";
import Home from "./pages/Home";
import {Route, Routes} from "react-router-dom";
import Favorites from "./pages/Favorites";

export const AppContext = createContext({})

function App() {
    const [cartOpened, setCartOpened] = useState(false)
    const [items, setItems] = useState([])
    const [cartItems, setCartItems] = useState([])
    const [favorites, setFavorites] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        async function fetchData() {
            const cartResponse = await axios.get('https://63300eb8591935f3c8891554.mockapi.io/cart')
            const favoritesResponse = await axios.get('https://63300eb8591935f3c8891554.mockapi.io/favorites')
            const itemsResponse = await axios.get('https://63300eb8591935f3c8891554.mockapi.io/items')

            setIsLoading(false)

            setCartItems(cartResponse.data)
            setFavorites(favoritesResponse.data)
            setItems(itemsResponse.data)
        }

        fetchData()
    }, [])

    const onAddToCart = (obj) => {
        if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
            axios.delete(`https://63300eb8591935f3c8891554.mockapi.io/cart/${obj.id}`)
            setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)))
        } else {
            axios.post('https://63300eb8591935f3c8891554.mockapi.io/cart', obj)
            setCartItems((prev) => [...prev, obj])
        }
    }

    const onRemoveItem = (id) => {
        axios.delete(`https://63300eb8591935f3c8891554.mockapi.io/cart/${id}`)
        setCartItems((prev) => prev.filter((item) => item.id !== id))
    }

    const onAddToFavorite = async (obj) => {
        try {
            if (favorites.find(item => Number( item.id) === Number(obj.id))) {
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

    const isItemAdded = (id) => {
        return cartItems.some(obj => Number(obj.id) === Number(id))
    }

    return (
        <AppContext.Provider value={{items, cartItems, favorites, isItemAdded, setCartOpened, setCartItems}}>
            <div className="wrapper clear">

                {cartOpened && <Drawer onClose={() => setCartOpened(false)} onRemove={onRemoveItem}/>}
                <Header onClickCart={() => setCartOpened(true)}/>


                <Routes>
                    <Route path="/" element={
                        <Home
                            searchValue={searchValue}
                            setSearchValue={setSearchValue}
                            onChangeSearchInput={onChangeSearchInput}
                            onAddToFavorite={onAddToFavorite}
                            onAddToCart={onAddToCart}
                            onClearSearch={onClearSearch}
                            isLoading={isLoading}
                        />
                    }
                    />

                    <Route path="/favorites"
                           element={<Favorites onAddToFavorite={onAddToFavorite}/>}/>

                </Routes>

            </div>
        </AppContext.Provider>
    );
}

export default App;
