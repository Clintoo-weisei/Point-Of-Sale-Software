function App() {
    try {
        const [currentPage, setCurrentPage] = React.useState('pos');
        const [cart, setCart] = React.useState([]);
        const [showReceipt, setShowReceipt] = React.useState(false);

        return (
            <div data-name="app-container" className="flex h-screen bg-gray-100">
                <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />
                <div className="flex-1 flex flex-col overflow-hidden">
                    <Header />
                    <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-4">
                        {currentPage === 'pos' && (
                            <div className="flex gap-4">
                                <ProductList cart={cart} setCart={setCart} />
                                <Cart 
                                    cart={cart} 
                                    setCart={setCart}
                                    setShowReceipt={setShowReceipt}
                                />
                            </div>
                        )}
                        {currentPage === 'inventory' && <InventoryManager />}
                        {currentPage === 'reports' && <Reports />}
                        {currentPage === 'settings' && <Settings />}
                        {showReceipt && (
                            <Receipt 
                                cart={cart}
                                onClose={() => {
                                    setShowReceipt(false);
                                    setCart([]);
                                }}
                            />
                        )}
                    </main>
                </div>
            </div>
        );
    } catch (error) {
        console.error('App component error:', error);
        reportError(error);
        return null;
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
