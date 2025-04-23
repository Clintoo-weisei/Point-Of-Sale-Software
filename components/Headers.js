function Header() {
    try {
        return (
            <header data-name="main-header" className="bg-white shadow-sm">
            <div className="flex justify-between items-center px-6 py-3">
                <h1 className="text-2xl font-bold">
                
                    </h1>
                    <div className="flex items-center gap-4">
                        <span className="text-gray-600">
                            <i className="fas fa-user mr-2"></i>
                            Cashier: Clinton Weisei
                        </span>
                        <span className="text-gray-600">
                            <i className="fas fa-clock mr-2"></i>
                            {new Date().toLocaleTimeString()}
                        </span>
                    </div>
                </div>
            </header>
        );
    } catch (error) {
        console.error('Header component error:', error);
        reportError(error);
        return null;
    }
}
