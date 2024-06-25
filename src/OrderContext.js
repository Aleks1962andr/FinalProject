import React, { createContext, useState } from 'react';

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
    const [order, setOrder] = useState([]);

    const addToOrder = (dish) => {
        setOrder((prevOrder) => {
            const existingDish = prevOrder.find((item) => item.id === dish.id);
            if (existingDish) {
                return prevOrder.map((item) =>
                    item.id === dish.id ? { ...item, quantity: item.quantity + dish.quantity } : item
                );
            }
             return [...prevOrder, { ...dish, quantity: dish.quantity }];
        });
    };

    const removeFromOrder = (id) => {
        setOrder((prevOrder) => prevOrder.filter((item) => item.id !== id));
    };

    const updateOrder = (id, updateFunc) => {
        setOrder((prevOrder) =>
            prevOrder.map((item) =>
                item.id === id ? { ...item, quantity: updateFunc(item.quantity) } : item
            )
        );
    };

    return (
        <OrderContext.Provider value={{ order, addToOrder, removeFromOrder, updateOrder }}>
            {children}
        </OrderContext.Provider>
    );
};
