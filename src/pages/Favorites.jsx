import Card from "../components/Card/Card";
import React, {useContext} from "react";
import {AppContext} from "../App";

function Favorites({onAddToFavorite}) {

    const {favorites} = useContext(AppContext)

    return (
        <div className="content p-40">
            <div className="d-flex align-center justify-between mb-40">
                <h1 className="">Мои закладки</h1>
            </div>

            <div className="d-flex flex-wrap">{
                favorites.map((item, index) => {
                        return <Card
                            key={index}
                            favorited={true}
                            onFavorite={onAddToFavorite}
                            {...item}
                        />
                    })
            }
            </div>

        </div>
    )
}

export default Favorites;