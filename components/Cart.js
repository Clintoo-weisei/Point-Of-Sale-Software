function Cart({ cart, setCart, setShowReceipt }) {
    try {
        const [discount, setDiscount] = React.useState(0);
        const [tax, setTax] = React.useState(0);
        const [amountPaid, setAmountPaid] = React.useState('');
        const total = calculateTotal(cart);
        const change = amountPaid ? calculateChange(total, parseFloat(amountPaid)) : 0;

        const removeFromCart = (productId) => {
            setCart(cart.filter(item => item.id !== productId));
        };

        const updateQuantity = (productId, newQuantity) => {
            setCart(cart.map(item =>
                item.id === productId
                    ? { ...item, quantity: Math.max(1, newQuantity) }
                    : item
            ));
        };

        const handleCheckout = () => {
            if (!amountPaid || parseFloat(amountPaid) < total) {
                alert('Please enter valid payment amount');
                return;
            }
            setShowReceipt(true);
        };

        return (
            <div data-name="cart" className="w-96 bg-white p-4 rounded shadow-sm">
                <h2 className="text-2xl font-extrabold text-blue-600 mb-4">
                    <i className="fas fa-shopping-cart mr-2"></i> Shopping Cart
                </h2>

                <div className="max-h-96 overflow-y-auto mb-4">
                    {cart.map(item => (
                        <div key={item.id} className="py-3 px-3 bg-white rounded-lg shadow-sm border border-gray-200 mb-2">
                            <div className="flex justify-between text-sm font-semibold text-gray-700">
                                <span>{item.name}</span>
                                <span>{formatCurrency(item.price * item.quantity)}</span>
                            </div>
                            <div className="flex justify-between text-xs text-gray-500 mt-1">
                                <span>{item.quantity} × {formatCurrency(item.price)}</span>
                                <div className="flex gap-2">
                                    <button
                                        className="px-2 py-1 bg-gray-200 rounded"
                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                    >
                                        -
                                    </button>
                                    <span>{item.quantity}</span>
                                    <button
                                        className="px-2 py-1 bg-gray-200 rounded"
                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                    >
                                        +
                                    </button>
                                    <button
                                        className="ml-2 text-red-500"
                                        onClick={() => removeFromCart(item.id)}
                                    >
                                        <i className="fas fa-trash"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="border-t pt-4">
                    <div className="flex justify-between mb-2">
                        <span>Total:</span>
                        <span className="font-bold">{formatCurrency(total)}</span>
                    </div>

                    <div className="flex justify-between mb-2">
                        <span>Discount (%):</span>
                        <input
                            type="number"
                            className="w-20 p-1 border rounded text-right"
                            value={discount}
                            onChange={(e) => setDiscount(e.target.value)}
                        />
                    </div>

                    <div className="flex justify-between mb-2">
                        <span>Discount Amount:</span>
                        <span>- {formatCurrency((total * discount) / 100)}</span>
                    </div>
                    <div className="flex justify-between mb-2 font-bold">
                        <span>Total After Discount:</span>
                        <span>{formatCurrency(total - (total * discount) / 100)}</span>
                    </div>

                    <input
                        type="number"
                        className="w-full p-2 border rounded mb-2"
                        placeholder="Amount Paid"
                        value={amountPaid}
                        onChange={(e) => setAmountPaid(e.target.value)}
                    />
                    {amountPaid && (
                        <div className="flex justify-between mb-4">
                            <span>Change:</span>
                            <span className="change-amount">{formatCurrency(change)}</span>
                        </div>
                    )}

                    <div className="grid grid-cols-2 gap-2">
                        <button
                            className="bg-yellow-500 text-white p-2 rounded"
                            onClick={() => alert('Transaction held')}
                        >
                            Hold
                        </button>
                        <button
                            className="bg-green-500 text-white p-2 rounded"
                            onClick={handleCheckout}
                        >
                            Checkout
                        </button>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Cart component error:', error);
        reportError(error);
        return null;
    }
}
