import Card from "../components/Card/Card";
import React from "react";

function Home({items, searchValue, onChangeSearchInput, onAddToFavorite, onAddToCart, onClearSearch}) {
    return (
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
                                onFavorite={(obg) => onAddToFavorite(obg)}
                                onPlus={(obg) => onAddToCart(obg)}
                            />
                        })
                }
            </div>

        </div>
    )
}

export default Home;