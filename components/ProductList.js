function ProductList({ cart, setCart }) {
    try {
        const [searchTerm, setSearchTerm] = React.useState('');
        const [selectedCategory, setSelectedCategory] = React.useState('All');
        const [isScanning, setIsScanning] = React.useState(false);

        const filteredProducts = PRODUCTS.filter(product => 
            (selectedCategory === 'All' || product.category === selectedCategory) &&
            (product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
             product.barcode.includes(searchTerm))
        );

        const addToCart = (product) => {
            const existingItem = cart.find(item => item.id === product.id);
            if (existingItem) {
                setCart(cart.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                ));
            } else {
                setCart([...cart, { ...product, quantity: 1 }]);
            }
            setSearchTerm('');
        };

        const handleBarcodeSearch = (e) => {
            e.preventDefault();
            const product = PRODUCTS.find(p => p.barcode === searchTerm);
            if (product) {
                addToCart(product);
                setIsScanning(false);
            } else {
                alert('Product not found!');
            }
        };

        return (
            <div data-name="product-list" className="flex-1">
                <div className="mb-4 flex gap-4">
                    <form onSubmit={handleBarcodeSearch} className="flex-1 flex gap-2">
                        <input
                            type="text"
                            placeholder={isScanning ? "Scanning barcode..." : "Search products or scan barcode..."}
                            className="w-full p-2 border rounded"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            onFocus={() => setIsScanning(true)}
                            onBlur={() => setIsScanning(false)}
                        />
                        <button 
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded"
                        >
                            <i className="fas fa-barcode mr-2"></i>
                            Scan
                        </button>
                    </form>
                    <select
                        className="p-2 border rounded"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        <option>All</option>
                        {CATEGORIES.map(category => (
                            <option key={category}>{category}</option>
                        ))}
                    </select>
                </div>
                <div className="grid grid-cols-3 gap-4">
                    {filteredProducts.map(product => (
                        <div
                            key={product.id}
                            data-name={`product-card-${product.id}`}
                            className="product-card bg-white p-4 rounded shadow-sm cursor-pointer"
                            onClick={() => addToCart(product)}
                        >
                            <h3 className="font-bold">{product.name}</h3>
                            <p className="text-gray-600">{formatCurrency(product.price)}</p>
                            <p className="text-sm text-gray-500">Stock: {product.stock}</p>
                            <p className="text-xs text-gray-400">{product.barcode}</p>
                        </div>
                    ))}
                </div>
            </div>
        );
    } catch (error) {
        console.error('ProductList component error:', error);
        reportError(error);
        return null;
    }
}
