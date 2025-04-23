function InventoryManager() {
    try {
        const [products, setProducts] = React.useState(PRODUCTS);
        const [showAddModal, setShowAddModal] = React.useState(false);
        const [newProduct, setNewProduct] = React.useState({
            name: '',
            price: '',
            category: '',
            stock: '',
            minStock: '',
            maxStock: '',
            barcode: ''
        });

        const handleAddProduct = () => {
            const product = {
                ...newProduct,
                id: `P${Math.floor(Math.random() * 1000)}`,
                barcode: newProduct.barcode || generateBarcode()
            };
            setProducts([...products, product]);
            setShowAddModal(false);
            setNewProduct({
                name: '',
                price: '',
                category: '',
                stock: '',
                minStock: '',
                maxStock: '',
                barcode: ''
            });
        };

        const handleStockUpdate = (productId, newStock) => {
            setProducts(products.map(p => 
                p.id === productId ? { ...p, stock: parseInt(newStock) } : p
            ));
        };

        return (
            <div data-name="inventory-manager" className="p-6">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">Inventory Management</h2>
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                        onClick={() => setShowAddModal(true)}
                    >
                        <i className="fas fa-plus mr-2"></i>
                        Add Product
                    </button>
                </div>

                <div className="dashboard-card overflow-hidden">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-gray-50">
                                <th className="px-4 py-2 text-left">Product</th>
                                <th className="px-4 py-2 text-left">Category</th>
                                <th className="px-4 py-2 text-left">Price</th>
                                <th className="px-4 py-2 text-left">Stock</th>
                                <th className="px-4 py-2 text-left">Status</th>
                                <th className="px-4 py-2 text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map(product => (
                                <tr key={product.id} className="border-t">
                                    <td className="px-4 py-2">
                                        <div>
                                            <p className="font-bold">{product.name}</p>
                                            <p className="text-sm text-gray-500">{product.barcode}</p>
                                        </div>
                                    </td>
                                    <td className="px-4 py-2">{product.category}</td>
                                    <td className="px-4 py-2">{formatCurrency(product.price)}</td>
                                    <td className="px-4 py-2">
                                        <input
                                            type="number"
                                            className="w-20 p-1 border rounded"
                                            value={product.stock}
                                            onChange={(e) => handleStockUpdate(product.id, e.target.value)}
                                        />
                                    </td>
                                    <td className="px-4 py-2">
                                        {product.stock < 50 ? (
                                            <span className="text-red-500">Low Stock</span>
                                        ) : (
                                            <span className="text-green-500">In Stock</span>
                                        )}
                                    </td>
                                    <td className="px-4 py-2">
                                        <button className="text-blue-500 mr-2">
                                            <i className="fas fa-edit"></i>
                                        </button>
                                        <button className="text-red-500">
                                            <i className="fas fa-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {showAddModal && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <div className="bg-white p-6 rounded-lg w-96">
                            <h3 className="text-lg font-bold mb-4">Add New Product</h3>
                            <div className="space-y-4">
                                <input
                                    type="text"
                                    placeholder="Product Name"
                                    className="w-full p-2 border rounded"
                                    value={newProduct.name}
                                    onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                                />
                                <input
                                    type="number"
                                    placeholder="Price"
                                    className="w-full p-2 border rounded"
                                    value={newProduct.price}
                                    onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
                                />
                                <select
                                    className="w-full p-2 border rounded"
                                    value={newProduct.category}
                                    onChange={(e) => setNewProduct({...newProduct, category: e.target.value})}
                                >
                                    <option value="">Select Category</option>
                                    {CATEGORIES.map(category => (
                                        <option key={category} value={category}>{category}</option>
                                    ))}
                                </select>
                                <input
                                    type="number"
                                    placeholder="Initial Stock"
                                    className="w-full p-2 border rounded"
                                    value={newProduct.stock}
                                    onChange={(e) => setNewProduct({...newProduct, stock: e.target.value})}
                                />
                                <input
                                    type="number"
                                    placeholder="Minimum Stock Level"
                                    className="w-full p-2 border rounded"
                                    value={newProduct.minStock}
                                    onChange={(e) => setNewProduct({...newProduct, minStock: e.target.value})}
                                />
                                <input
                                    type="number"
                                    placeholder="Maximum Stock Level"
                                    className="w-full p-2 border rounded"
                                    value={newProduct.maxStock}
                                    onChange={(e) => setNewProduct({...newProduct, maxStock: e.target.value})}
                                />
                                <input
                                    type="text"
                                    placeholder="Barcode (optional)"
                                    className="w-full p-2 border rounded"
                                    value={newProduct.barcode}
                                    onChange={(e) => setNewProduct({...newProduct, barcode: e.target.value})}
                                />
                            </div>
                            <div className="flex justify-end gap-2 mt-6">
                                <button
                                    className="px-4 py-2 bg-gray-200 rounded"
                                    onClick={() => setShowAddModal(false)}
                                >
                                    Cancel
                                </button>
                                <button
                                    className="px-4 py-2 bg-blue-500 text-white rounded"
                                    onClick={handleAddProduct}
                                >
                                    Add Product
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    } catch (error) {
        console.error('InventoryManager component error:', error);
        reportError(error);
        return null;
    }
}
