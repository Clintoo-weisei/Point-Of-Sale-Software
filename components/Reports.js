

function exportCSV(data, filename) {
    const csv = [
        Object.keys(data[0]).join(','),
        ...data.map(row => Object.values(row).join(','))
    ].join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();
}




function Reports() {
    try {
        const [reportType, setReportType] = React.useState('sales');
        const [dateRange, setDateRange] = React.useState('today');

        const salesData = {
            today: [
                { time: '08:00', amount: 12500 },
                { time: '10:00', amount: 18900 },
                { time: '12:00', amount: 25600 },
                { time: '14:00', amount: 15700 },
                { time: '16:00', amount: 22400 }
            ]
        };

        const inventoryMovement = [
            { id: 1, product: 'Milk 500ml', initial: 100, received: 50, sold: 30, current: 120 },
            { id: 2, product: 'Bread', initial: 50, received: 100, sold: 75, current: 75 },
            { id: 3, product: 'Rice 2kg', initial: 75, received: 25, sold: 40, current: 60 }
        ];

        return (
            <div data-name="reports" className="p-6">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">Reports</h2>
                    <div className="flex gap-4">
                        <select
                            className="p-2 border rounded"
                            value={reportType}
                            onChange={(e) => setReportType(e.target.value)}
                        >
                            <option value="sales">Sales Report</option>
                            <option value="inventory">Inventory Movement</option>
                            <option value="cashier">Cashier Performance</option>
                        </select>
                        <select
                            className="p-2 border rounded"
                            value={dateRange}
                            onChange={(e) => setDateRange(e.target.value)}
                        >
                            <option value="today">Today</option>
                            <option value="week">This Week</option>
                            <option value="month">This Month</option>
                        </select>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded">
                            <i className="fas fa-download mr-2"></i>
                            Export
                        </button>
                    </div>
                </div>

                {reportType === 'sales' && (
                    <div className="grid grid-cols-2 gap-6">
                        <div className="dashboard-card p-6">
                            <h3 className="text-lg font-bold mb-4">Sales Overview</h3>
                            <div className="space-y-4">
                                {salesData.today.map((data, index) => (
                                    <div key={index} className="flex justify-between items-center">
                                        <span>{data.time}</span>
                                        <span className="font-bold">{formatCurrency(data.amount)}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="dashboard-card p-6">
                            <h3 className="text-lg font-bold mb-4">Top Selling Products</h3>
                            <div className="space-y-4">
                                {PRODUCTS.slice(0, 5).map(product => (
                                    <div key={product.id} className="flex justify-between items-center">
                                        <span>{product.name}</span>
                                        <span className="font-bold">{product.stock} units</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {reportType === 'inventory' && (
                    <div className="dashboard-card overflow-hidden">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-gray-50">
                                    <th className="px-4 py-2 text-left">Product</th>
                                    <th className="px-4 py-2 text-left">Initial Stock</th>
                                    <th className="px-4 py-2 text-left">Received</th>
                                    <th className="px-4 py-2 text-left">Sold</th>
                                    <th className="px-4 py-2 text-left">Current Stock</th>
                                </tr>
                            </thead>
                            <tbody>
                                {inventoryMovement.map(item => (
                                    <tr key={item.id} className="border-t">
                                        <td className="px-4 py-2">{item.product}</td>
                                        <td className="px-4 py-2">{item.initial}</td>
                                        <td className="px-4 py-2 text-green-500">+{item.received}</td>
                                        <td className="px-4 py-2 text-red-500">-{item.sold}</td>
                                        <td className="px-4 py-2 font-bold">{item.current}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {reportType === 'cashier' && (
                    <div className="dashboard-card p-6">
                        <h3 className="text-lg font-bold mb-4">Cashier Performance</h3>
                        <div className="space-y-4">
                            {CASHIERS.map(cashier => (
                                <div key={cashier.id} className="flex justify-between items-center p-4 bg-gray-50 rounded">
                                    <div>
                                        <p className="font-bold">{cashier.name}</p>
                                        <p className="text-sm text-gray-600">ID: {cashier.code}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-bold">{formatCurrency(Math.random() * 50000)}</p>
                                        <p className="text-sm text-gray-600">{Math.floor(Math.random() * 50)} transactions</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        );
    } catch (error) {
        console.error('Reports component error:', error);
        reportError(error);
        return null;
    }
}
