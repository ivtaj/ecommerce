import React, { useEffect, useState } from 'react';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('/api/products');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map(product => (
                <div key={product.id} className="border rounded-lg p-4">
                    <h2 className="text-lg font-bold">{product.name}</h2>
                    <p>{product.description}</p>
                    <p className="text-xl font-semibold">${product.price}</p>
                    <button className="mt-2 bg-blue-500 text-white py-1 px-4 rounded">
                        Add to Cart
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ProductList;