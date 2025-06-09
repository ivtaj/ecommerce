import React, { useEffect, useState } from 'react';

const AdminPanel = () => {
    const [products, setProducts] = useState([]);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetchProducts();
        fetchOrders();
    }, []);

    const fetchProducts = async () => {
        const response = await fetch('/api/products');
        const data = await response.json();
        setProducts(data);
    };

    const fetchOrders = async () => {
        const response = await fetch('/api/orders');
        const data = await response.json();
        setOrders(data);
    };

    const handleDeleteProduct = async (id) => {
        await fetch(`/api/products/${id}`, {
            method: 'DELETE',
        });
        fetchProducts();
    };

    return (
        <div className="admin-panel">
            <h1 className="text-2xl font-bold">Admin Panel</h1>
            <section className="products">
                <h2 className="text-xl">Products</h2>
                <ul>
                    {products.map(product => (
                        <li key={product.id} className="flex justify-between items-center">
                            <span>{product.name}</span>
                            <button onClick={() => handleDeleteProduct(product.id)} className="text-red-500">Delete</button>
                        </li>
                    ))}
                </ul>
            </section>
            <section className="orders">
                <h2 className="text-xl">Orders</h2>
                <ul>
                    {orders.map(order => (
                        <li key={order.id}>
                            <span>Order ID: {order.id}</span>
                            <span>Status: {order.status}</span>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default AdminPanel;