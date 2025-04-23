function Dashboard() {
    try {
        const stats = {
            todaySales: formatCurrency(45250),
            monthSales: formatCurrency(1250000),
            totalProducts: 145,
            lowStock: 12
        };

        const recentTransactions = [
            { id: 1, amount: 2500, items: 3, time: '10:30 AM', cashier: 'Clinton Weisei' },
            { id: 2, amount: 1800, items: 2, time: '10:15 AM', cashier: 'Jane Smith' },
            { id: 3, amount: 3200, items: 4, time: '10:00 AM', cashier: 'Peter Kamau' }
        ];

        return (
            <div data-name="dashboard" className="p-6">
                <h2 className="text-2xl font-bold mb-6 text-indigo-700">Dashboard Overview</h2>
                <div className="grid grid-cols-4 gap-6 mb-8">
                    <div className="grid grid-cols-4 gap-6 mb-8">
    <div className="p-6 rounded-lg shadow-md bg-gradient-to-br from-green-100 to-green-300 border-l-4 border-green-600">
        <div className="flex justify-between items-center">
            <div>
                <p className="text-green-800 font-semibold">Today's Sales</p>
                <p className="text-2xl font-bold">{stats.todaySales}</p>
            </div>
            <div className="text-3xl text-green-600">
                <i className="fas fa-cash-register"></i>
            </div>
        </div>
    </div>
    <div className="p-6 rounded-lg shadow-md bg-gradient-to-br from-blue-100 to-blue-300 border-l-4 border-blue-600">
        <div className="flex justify-between items-center">
            <div>
                <p className="text-blue-800 font-semibold">Monthly Sales</p>
                <p className="text-2xl font-bold">{stats.monthSales}</p>
            </div>
            <div className="text-3xl text-blue-600">
                <i className="fas fa-calendar-alt"></i>
            </div>
        </div>
    </div>
    <div className="p-6 rounded-lg shadow-md bg-gradient-to-br from-purple-100 to-purple-300 border-l-4 border-purple-600">
        <div>
            <p className="text-purple-800 font-semibold">Total Products</p>
            <p className="text-2xl font-bold">{stats.totalProducts}</p>
        </div>
        <div className="text-3xl text-purple-600 mt-2">
            <i className="fas fa-boxes"></i>
        </div>
    </div>
    <div className="p-6 rounded-lg shadow-md bg-gradient-to-br from-red-100 to-red-300 border-l-4 border-red-600 animate-pulse">
        <div>
            <p className="text-red-800 font-semibold">Low Stock Alerts</p>
            <p className="text-2xl font-bold">{stats.lowStock}</p>
        </div>
        <div className="text-3xl text-red-600 mt-2">
            <i className="fas fa-exclamation-triangle"></i>
        </div>
    </div>

                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-green-700">Today's Sales</p>
                                <p className="text-2xl font-bold text-green-600">{stats.todaySales}</p>
                            </div>
                            <div className="text-green-500 text-3xl bg-green-100 p-3 rounded-full">
                                <i className="fas fa-chart-line"></i>
                            </div>
                        </div>
                    </div>
                    <div data-name="stats-card-month" className="dashboard-card p-6 bg-gradient-to-br from-blue-50 to-blue-100 border-l-4 border-blue-500">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-blue-700">Monthly Sales</p>
                                <p className="text-2xl font-bold text-blue-600">{stats.monthSales}</p>
                            </div>
                            <div className="text-blue-500 text-3xl bg-blue-100 p-3 rounded-full">
                                <i className="fas fa-calendar"></i>
                            </div>
                        </div>
                    </div>
                    <div data-name="stats-card-products" className="dashboard-card p-6 bg-gradient-to-br from-purple-50 to-purple-100 border-l-4 border-purple-500">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-purple-700">Total Products</p>
                                <p className="text-2xl font-bold text-purple-600">{stats.totalProducts}</p>
                            </div>
                            <div className="text-purple-500 text-3xl bg-purple-100 p-3 rounded-full">
                                <i className="fas fa-box"></i>
                            </div>
                        </div>
                    </div>
                    <div data-name="stats-card-alerts" className="dashboard-card p-6 bg-gradient-to-br from-red-50 to-red-100 border-l-4 border-red-500">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-red-700">Low Stock Alerts</p>
                                <p className="text-2xl font-bold text-red-600 animate-pulse">{stats.lowStock}</p>
                                <p className="text-sm text-red-500">Products below 5 units</p>   
                                <p className="font-bold text-red-700">{product.name}</p>
                                 <p className="text-sm text-red-600">Current Stock: {product.stock}</p>
                                <p className="text-sm text-red-600">Current Stock: {product.stock}</p>                             
                            </div>
                            <div className="text-red-500 text-3xl bg-red-100 p-3 rounded-full">
                                <i className="fas fa-exclamation-triangle"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                    <div className="p-6 bg-white rounded-lg shadow border-t-4 border-indigo-500">
    <h3 className="text-xl font-bold mb-4 text-indigo-700">
        <i className="fas fa-receipt mr-2 text-indigo-500"></i>
        Recent Transactions
    </h3>
    <div className="overflow-x-auto">
        <table className="w-full text-sm">
            <thead>
                <tr className="bg-indigo-50 text-indigo-600 text-left">
                    <th className="px-4 py-2">Time</th>
                    <th className="px-4 py-2">Amount</th>
                    <th className="px-4 py-2">Items</th>
                    <th className="px-4 py-2">Cashier</th>
                </tr>
            </thead>
            <tbody>
                {recentTransactions.map(tx => (
                    <tr key={tx.id} className="hover:bg-indigo-50 border-b border-gray-100">
                        <td className="px-4 py-2">{tx.time}</td>
                        <td className="px-4 py-2 text-green-700 font-medium">{formatCurrency(tx.amount)}</td>
                        <td className="px-4 py-2">{tx.items}</td>
                        <td className="px-4 py-2">{tx.cashier}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
                    </div>

                    <div data-name="low-stock-alerts" className="dashboard-card p-6 bg-white border-t-4 border-red-500">
                        <h3 className="text-lg font-bold mb-4 text-red-700">
                            <i className="fas fa-exclamation-circle mr-2 text-red-500"></i>
                            Low Stock Alerts
                        </h3>
                        <div className="space-y-4">
                            {PRODUCTS.filter(p => p.stock < 50).map(product => (
                                <div key={product.id} className="flex items-center justify-between p-3 bg-red-50 rounded-lg border border-red-100">
                                    <div>
                                        <p className="font-bold text-red-700">{product.name}</p>
                                        <p className="text-sm text-red-600">Current Stock: {product.stock}</p>
                                    </div>
                                    <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
                                        <i className="fas fa-plus mr-1"></i>
                                        Reorder
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Dashboard component error:', error);
        reportError(error);
        return null;
    }
}
