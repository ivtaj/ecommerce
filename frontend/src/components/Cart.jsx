import React, { useEffect, useState } from 'react';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(storedCart);
        calculateTotal(storedCart);
    }, []);

    const calculateTotal = (items) => {
        const totalAmount = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
        setTotal(totalAmount);
    };

    const handleRemoveItem = (itemId) => {
        const updatedCart = cartItems.filter(item => item.id !== itemId);
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        calculateTotal(updatedCart);
    };

    const handleCheckout = () => {
        // Implement checkout logic here
        alert('Proceeding to checkout');
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    <ul>
                        {cartItems.map(item => (
                            <li key={item.id} className="flex justify-between items-center mb-4">
                                <span>{item.name} (x{item.quantity})</span>
                                <span>${item.price * item.quantity}</span>
                                <button 
                                    onClick={() => handleRemoveItem(item.id)} 
                                    className="text-red-500 hover:text-red-700"
                                >
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div className="flex justify-between font-bold mt-4">
                        <span>Total:</span>
                        <span>${total}</span>
                    </div>
                    <button 
                        onClick={handleCheckout} 
                        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
                    >
                        Checkout
                    </button>
                </div>
            )}
        </div>
    );
};

export default Cart;