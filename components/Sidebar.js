function Sidebar({ currentPage, setCurrentPage }) {
    try {
        const menuItems = [
            { id: 'pos', icon: 'fa-cash-register', label: 'POS' },
            { id: 'inventory', icon: 'fa-boxes', label: 'Inventory' },
            { id: 'reports', icon: 'fa-chart-bar', label: 'Reports' },
            { id: 'settings', icon: 'fa-cog', label: 'Settings' }
        ];

        return (
            <div data-name="sidebar" className="w-64 bg-white shadow-md">
                <nav className="mt-8">
                    {menuItems.map(item => (
                        <div
                            key={item.id}
                            data-name={`sidebar-item-${item.id}`}
                            className={`sidebar-item px-6 py-3 cursor-pointer ${
                                currentPage === item.id ? 'bg-gray-100' : ''
                            }`}
                            onClick={() => setCurrentPage(item.id)}
                        >
                            <i className={`fas ${item.icon} mr-3`}></i>
                            {item.label}
                        </div>
                    ))}
                </nav>
                <div className="flex items-center justify-center mt-8">
                    <img
                        src="/images/logo.png"
                        alt="TeamSales Logo"
                        className="w-24 h-24 object-cover"
                    />
                    </div>
            </div>
        );
    } catch (error) {
        console.error('Sidebar component error:', error);
        reportError(error);
        return null;
    }
}
