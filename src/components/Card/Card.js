import React, {useState} from "react";
import styles from './Card.module.scss'

function Card({id, onFavorite, title, price, imageUrl, onPlus, favorited = false, added = false}) {
    const [isAdded, setIsAdded] = useState(added)
    const [isFavorite, setIsFavorite] = useState(favorited)

    const onClickPlus = () => {
        onPlus({id, title, price, imageUrl})
        setIsAdded(!isAdded)
    }

    const onClickFavorite = () => {
        setIsFavorite(!isFavorite)
        onFavorite({id, title, price, imageUrl})
    }


    return <div className={styles.card}>
        <div className={styles.favorite} onClick={onClickFavorite}>
            <img src={isFavorite ?  "/img/heart-liked.svg" : "/img/heart-unliked.svg"}
                 alt="Unliked"
            />
        </div>

        <img width={133} height={112} src={imageUrl} alt="Sneakers"/>
        <h5>{title}</h5>
        <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>{price} руб.</b>
            </div>
            <img
                className={styles.plus}
                src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"}
                alt="Plus"
                onClick={onClickPlus}/>
        </div>
    </div>
}

export default Card;