import React, {createContext, useEffect, useState} from 'react';
import Header from "./components/Header";
import Drawer from "./components/Drawer/Drawer";
import axios from "axios";
import Home from "./pages/Home";
import {Route, Routes} from "react-router-dom";
import Favorites from "./pages/Favorites";
import Orders from "./pages/Orders";

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
            try {
                const [cartResponse, favoritesResponse, itemsResponse] = await Promise.all([
                    axios.get('https://63300eb8591935f3c8891554.mockapi.io/cart'),
                    axios.get('https://63300eb8591935f3c8891554.mockapi.io/favorites'),
                    axios.get('https://63300eb8591935f3c8891554.mockapi.io/items')
                ])

                setIsLoading(false)

                setCartItems(cartResponse.data)
                setFavorites(favoritesResponse.data)
                setItems(itemsResponse.data)
            } catch (e) {
                alert('Ошибка при запросе данных')
                console.log(e)
            }
        }

        fetchData()
    }, [])

    const onAddToCart = async (obj) => {
        try {
            const findItem = cartItems.find(item => Number(item.parentId) === Number(obj.parentId))
            if (findItem) {
                await axios.delete(`https://63300eb8591935f3c8891554.mockapi.io/cart/${findItem.id}`)
            } else {
                await axios.post('https://63300eb8591935f3c8891554.mockapi.io/cart', obj)
            }
            const { data } = await axios.get('https://63300eb8591935f3c8891554.mockapi.io/cart')
            setCartItems((prev) => [...data])
        } catch (e) {
            alert('Ошибка при добавлении в корзину')
            console.log(e)
        }

    }

    const onRemoveItem = (id) => {
        try {
            axios.delete(`https://63300eb8591935f3c8891554.mockapi.io/cart/${id}`)
            setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(id)))
        } catch (e) {
            alert('Ошибка при удалении из корзины')
            console.log(e)
        }

    }

    const onAddToFavorite = async (obj) => {
        try {
            const findItem = favorites.find(item => Number(item.parentId) === Number(obj.parentId))

            if (findItem) {
                await axios.delete(`https://63300eb8591935f3c8891554.mockapi.io/favorites/${findItem.id}`)
            } else {
                await axios.post('https://63300eb8591935f3c8891554.mockapi.io/favorites', obj)
            }
            const { data } = await axios.get('https://63300eb8591935f3c8891554.mockapi.io/favorites')
            setFavorites((prev) => [...data])
        } catch (e) {
            alert("Не удалось добавить в Избраное")
            console.log(e)
        }
    }

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value)
    }

    const onClearSearch = () => {
        setSearchValue('')
    }

    const isItemAdded = (id) => {
        return cartItems.some(obj => Number(obj.parentId) === Number(id))
    }

    return (
        <AppContext.Provider value={{
            items,
            cartItems,
            favorites,
            isItemAdded,
            setCartOpened,
            setCartItems,
            onAddToFavorite,
            onAddToCart
        }}>
            <div className="wrapper clear">

                <Drawer onClose={() => setCartOpened(false)}
                        onRemove={onRemoveItem}
                        opened={cartOpened}/>
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
                           element={<Favorites/>}/>

                    <Route path="/orders"
                           element={<Orders/>}/>

                </Routes>

            </div>
        </AppContext.Provider>
    );
}

export default App;
