import Card from "../components/Card/Card";
import React, {useEffect, useState} from "react";
import axios from "axios";

function Orders() {

    const [orders, setOrders] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        try {
            (async () => {
                const {data} = await axios.get('https://63300eb8591935f3c8891554.mockapi.io/orders')
                setOrders(data.map((obj) => obj.items).flat())
            })()
        } catch (e) {
            alert("Ошибка при запросе заказов")
            console.log(e)
        }
        setIsLoading(false)
    }, [])

    return (
        <div className="content p-40">
            <div className="d-flex align-center justify-between mb-40">
                <h1 className="">Мои заказы</h1>
            </div>

            <div className="d-flex flex-wrap">{
                (isLoading ? [...Array(8)] : orders).map((item, index) => (
                    <Card
                        key={index}
                        loading={isLoading}
                        {...item}
                    />
                ))
            }
            </div>

        </div>
    )
}

export default Orders;