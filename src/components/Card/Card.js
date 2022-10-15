import React, {useContext, useEffect, useState} from "react";
import styles from './Card.module.scss'
import ContentLoader from "react-content-loader"
import {AppContext} from "../../App";

function Card(
    {
        id,
        parentId,
        onFavorite,
        title,
        price,
        imageUrl,
        onPlus,
        loading = false,
    }) {

    const {isItemAdded, favorites} = useContext(AppContext)
    const [isFavorite, setIsFavorite] = useState(false)
    const [clickFavorite, setClickFavorite] = useState(true)


    useEffect(() => {
        const findItem = favorites.find(item => item.parentId === parentId)
        if(findItem) {
            setIsFavorite(true)
        }
    }, [favorites])


    const obj = {id, parentId: id, title, price, imageUrl}

    const onClickPlus = () => {
            onPlus(obj)
    }

    const onClickFavorite = () => {
            setIsFavorite(!isFavorite)
            onFavorite(obj)
    }

    return <div className={styles.card}>
        {loading ? (
            <ContentLoader
                speed={2}
                width={155}
                height={250}
                viewBox="0 0 155 265"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb">
                <rect x="1" y="0" rx="10" ry="10" width="155" height="155"/>
                <rect x="0" y="167" rx="5" ry="5" width="155" height="15"/>
                <rect x="0" y="187" rx="5" ry="5" width="100" height="15"/>
                <rect x="1" y="234" rx="5" ry="5" width="80" height="25"/>
                <rect x="124" y="230" rx="10" ry="10" width="32" height="32"/>
            </ContentLoader>
        ) : (
            <>
                {onFavorite && (<div className={clickFavorite ? styles.favorite : styles.favorite + styles.disableClick} onClick={onClickFavorite} >
                    <img src={isFavorite ? "/img/heart-liked.svg" : "/img/heart-unliked.svg"}
                         alt="Unliked"
                    />
                </div>)
                }
                <img width="100%" height={135} src={imageUrl} alt="Sneakers"/>
                <h5>{title}</h5>
                <div className="d-flex justify-between align-center">
                    <div className="d-flex flex-column">
                        <span>Цена:</span>
                        <b>{price} руб.</b>
                    </div>
                    {onPlus && (<img
                        className={styles.plus}
                        src={isItemAdded(id) ? "/img/btn-checked.svg" : "/img/btn-plus.svg"}
                        alt="Plus"
                        onClick={onClickPlus}/>)}
                </div>
            </>
        )}
    </div>
}

export default Card;