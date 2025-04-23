function Settings() {
    try {
        const [settings, setSettings] = React.useState({
            storeName: STORE_INFO.name,
            address: STORE_INFO.address,
            phone: STORE_INFO.phone,
            email: STORE_INFO.email,
            taxId: STORE_INFO.taxId,
            currency: 'KSh',
            language: 'en',
            theme: 'light',
            receiptFooter: 'Thank you for shopping with us!',
            lowStockAlert: 50,
            backupFrequency: 'daily',
            printerType: 'thermal'
        });

        const handleSave = () => {
            alert('Settings saved successfully!');
        };

        const handleChange = (field, value) => {
            setSettings({ ...settings, [field]: value });
        };

        return (
            <div data-name="settings" className="p-6">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">Settings</h2>
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                        onClick={handleSave}
                    >
                        <i className="fas fa-save mr-2"></i>
                        Save Changes
                    </button>
                </div>

                <div className="grid grid-cols-2 gap-6">
                    <div className="dashboard-card p-6">
                        <h3 className="text-lg font-bold mb-4">Store Information</h3>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Store Name</label>
                                <input
                                    type="text"
                                    className="mt-1 w-full p-2 border rounded"
                                    value={settings.storeName}
                                    onChange={(e) => handleChange('storeName', e.target.value)}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Address</label>
                                <input
                                    type="text"
                                    className="mt-1 w-full p-2 border rounded"
                                    value={settings.address}
                                    onChange={(e) => handleChange('address', e.target.value)}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Phone</label>
                                <input
                                    type="text"
                                    className="mt-1 w-full p-2 border rounded"
                                    value={settings.phone}
                                    onChange={(e) => handleChange('phone', e.target.value)}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Email</label>
                                <input
                                    type="email"
                                    className="mt-1 w-full p-2 border rounded"
                                    value={settings.email}
                                    onChange={(e) => handleChange('email', e.target.value)}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Tax ID</label>
                                <input
                                    type="text"
                                    className="mt-1 w-full p-2 border rounded"
                                    value={settings.taxId}
                                    onChange={(e) => handleChange('taxId', e.target.value)}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="dashboard-card p-6">
                        <h3 className="text-lg font-bold mb-4">System Settings</h3>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Currency</label>
                                <select
                                    className="mt-1 w-full p-2 border rounded"
                                    value={settings.currency}
                                    onChange={(e) => handleChange('currency', e.target.value)}
                                >
                                    <option value="KSh">Kenya Shilling (KSh)</option>
                                    <option value="USD">US Dollar ($)</option>
                                    <option value="EUR">Euro (€)</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Language</label>
                                <select
                                    className="mt-1 w-full p-2 border rounded"
                                    value={settings.language}
                                    onChange={(e) => handleChange('language', e.target.value)}
                                >
                                    <option value="en">English</option>
                                    <option value="sw">Swahili</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Theme</label>
                                <select
                                    className="mt-1 w-full p-2 border rounded"
                                    value={settings.theme}
                                    onChange={(e) => handleChange('theme', e.target.value)}
                                >
                                    <option value="light">Light</option>
                                    <option value="dark">Dark</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Receipt Footer</label>
                                <textarea
                                    className="mt-1 w-full p-2 border rounded"
                                    value={settings.receiptFooter}
                                    onChange={(e) => handleChange('receiptFooter', e.target.value)}
                                    rows="2"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="dashboard-card p-6">
                        <h3 className="text-lg font-bold mb-4">Inventory Settings</h3>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Low Stock Alert Threshold</label>
                                <input
                                    type="number"
                                    className="mt-1 w-full p-2 border rounded"
                                    value={settings.lowStockAlert}
                                    onChange={(e) => handleChange('lowStockAlert', e.target.value)}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Backup Frequency</label>
                                <select
                                    className="mt-1 w-full p-2 border rounded"
                                    value={settings.backupFrequency}
                                    onChange={(e) => handleChange('backupFrequency', e.target.value)}
                                >
                                    <option value="daily">Daily</option>
                                    <option value="weekly">Weekly</option>
                                    <option value="monthly">Monthly</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="dashboard-card p-6">
                        <h3 className="text-lg font-bold mb-4">Hardware Settings</h3>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Printer Type</label>
                                <select
                                    className="mt-1 w-full p-2 border rounded"
                                    value={settings.printerType}
                                    onChange={(e) => handleChange('printerType', e.target.value)}
                                >
                                    <option value="thermal">Thermal Printer</option>
                                    <option value="dot">Dot Matrix</option>
                                    <option value="laser">Laser Printer</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Settings component error:', error);
        reportError(error);
        return null;
    }
}
