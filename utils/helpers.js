function generateBarcode() {
    return Math.floor(Math.random() * 9000000000000) + 1000000000000;
}

function generateReceiptNumber() {
    return `RCP${Date.now()}`;
}

function calculateTotal(items) {
    return items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

function calculateChange(total, amountPaid) {
    return amountPaid - total;
}

function getCurrentDateTime() {
    return new Date().toLocaleString('en-KE');
}

function checkLowStock(product) {
    return product.stock <= product.minStock;
}
