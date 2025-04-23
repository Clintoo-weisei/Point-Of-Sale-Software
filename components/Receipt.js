

import Barcode from "react-barcode";


function Receipt({ cart, onClose }) {
    try {
        const receiptRef = React.useRef();
        const subtotal = calculateTotal(cart);
        const VAT_RATE = 0.08; // 8% VAT
        const vat = subtotal * VAT_RATE;
        const total = subtotal + vat;
        const receiptNumber = generateReceiptNumber();
        const currentCashier = CASHIERS[0];

        const printReceipt = () => {
            const printContent = receiptRef.current.innerHTML;
            const printWindow = window.open('', '', 'height=600,width=800');
            printWindow.document.write('<html><head><title>Print Receipt</title>');
            printWindow.document.write('<link href="styles/receipt.css" rel="stylesheet">');
            printWindow.document.write('</head><body>');
            printWindow.document.write(printContent);
            printWindow.document.write('</body></html>');
            printWindow.document.close();
            printWindow.print();
        };

        return (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
<div className="bg-white p-8 rounded-lg max-w-md max-h-[90vh] overflow-y-auto" ref={receiptRef}>
<div className="receipt-header">

                        <div className="logo">
                        <img src="styles/teamsale.png" alt="TeamSales Logo" className="mx-auto mb-2 w-20 h-20 rounded-full shadow" />

                        <h2 className="text-2xl font-extrabold text-green-600">
                        <span className="logo-text-team">Team</span>
                        <span className="logo-text-sales text-red-500">Sales</span>
                        </h2>

                        </div>
                        <div className="store-info">
                            <p className="text-lg font-bold">{STORE_INFO.name}</p>
                            <p>{STORE_INFO.address}</p>
                            <p>Tel: {STORE_INFO.phone}</p>
                            <p>Email: {STORE_INFO.email}</p>
                            <p>Working Hours: {STORE_INFO.workingHours}</p>
                            <p>PIN: {STORE_INFO.taxId}</p>
                        </div>
                        <div className="receipt-details">
                            <p className="text-primary">Receipt #: {receiptNumber}</p>
                            <p>Date: {getCurrentDateTime()}</p>
                        </div>
                    </div>

                    <div className="receipt-divider">
                        <p className="text-center">*** SALES RECEIPT ***</p>
                    </div>

                    <div className="receipt-items">
                        <div className="item-header">
                            <span>Item Description</span>
                            <span>Amount</span>
                        </div>
                        <div className="items-list">
                            {cart.map(item => (
                                <div key={item.id} className="item">
                                    <div className="item-details">
                                        <p className="item-name">{item.name}</p>
                                        <p className="item-price">{item.quantity} × {formatCurrency(item.price)}</p>
                                    </div>
                                    <div className="item-total">
                                        {formatCurrency(item.price * item.quantity)}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="receipt-divider">
                        <p className="text-center">***********************</p>
                    </div>

                    <div className="receipt-summary">
                        <div className="summary-row">
                            <span>Subtotal:</span>
                            <span>{formatCurrency(subtotal)}</span>
                        </div>
                        <div className="summary-row">
                            <span>VAT (8%):</span>
                            <span>{formatCurrency(vat)}</span>
                        </div>
                        <div className="summary-row total">
                            <span>Total:</span>
                            <span>{formatCurrency(total)}</span>
                        </div>
                    </div>

                    <div className="receipt-footer">
                        <div className="served-by">
                            <p>You were served by: {currentCashier.name}</p>
                            <p>Cashier ID: {currentCashier.code}</p>
                        </div>
                        <div className="footer-messages">
                            <p className="thank-you">Thank you for shopping with us!</p>
                            <p className="welcome">Welcome again!</p>
                            <p className="vat-notice">Prices are VAT Inclusive</p>
                            <p className="registered">Registered to: {STORE_INFO.registeredTo}</p>
                            <p className="developer">System developed by Clinton weisei</p>
                        </div>
                    </div>

                    <div className="mt-4 flex justify-end gap-2">
                        <button
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                            onClick={printReceipt}
                        >
                            <i className="fas fa-print mr-2"></i>
                            Print Receipt
                        </button>
                        <button
                            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors"
                            onClick={onClose}
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Receipt component error:', error);
        reportError(error);
        return null;
    }
}
React.useEffect(() => {
    setTimeout(() => {
        window.print();
    }, 500);
}, []);
