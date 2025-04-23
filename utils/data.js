const STORE_INFO = {
    name: "TeamSales Supermarket",
    address: "123 Main Street, Nairobi, Kenya",
    phone: "+254 123 456 789",
    email: "info@teamsales.com",
    taxId: "TAX123456789",
    workingHours: "Mon-Sat: 8:00 AM - 8:00 PM",
    registeredTo: "Clinton Weisei"
};

const PRODUCTS = [
    { id: "P001", name: "Milk 500ml", price: 65, barcode: "5901234123457", category: "Dairy", stock: 100 },
    { id: "P002", name: "Bread", price: 55, barcode: "5901234123458", category: "Bakery", stock: 50 },
    { id: "P003", name: "Rice 2kg", price: 250, barcode: "5901234123459", category: "Grains", stock: 75 },
    { id: "P004", name: "Cooking Oil 2L", price: 450, barcode: "5901234123460", category: "Cooking", stock: 40 },
    { id: "P005", name: "Sugar 2kg", price: 225, barcode: "5901234123461", category: "Groceries", stock: 60 },
    { id: "P006", name: "Flour 2kg", price: 180, barcode: "5901234123462", category: "Groceries", stock: 85 },
    { id: "P007", name: "Tea Leaves 500g", price: 280, barcode: "5901234123463", category: "Beverages", stock: 45 },
    { id: "P008", name: "Coffee 200g", price: 350, barcode: "5901234123464", category: "Beverages", stock: 30 },
    { id: "P009", name: "Soap Bar", price: 75, barcode: "5901234123465", category: "Personal Care", stock: 120 },
    { id: "P010", name: "Toothpaste", price: 160, barcode: "5901234123466", category: "Personal Care", stock: 90 },
    { id: "P011", name: "Tissue Paper 6pk", price: 320, barcode: "5901234123467", category: "Household", stock: 65 },
    { id: "P012", name: "Washing Powder 1kg", price: 280, barcode: "5901234123468", category: "Household", stock: 55 },
    { id: "P013", name: "Soda 2L", price: 150, barcode: "5901234123469", category: "Beverages", stock: 80 },
    { id: "P014", name: "Juice 1L", price: 180, barcode: "5901234123470", category: "Beverages", stock: 70 },
    { id: "P015", name: "Chips 500g", price: 200, barcode: "5901234123471", category: "Snacks", stock: 95 },
    { id: "P016", name: "Maize Meal 2kg", price: 200, barcode: "5901234123472", category: "Groceries", stock: 120 },
    { id: "P017", name: "Beans 1kg", price: 180, barcode: "5901234123473", category: "Groceries", stock: 80 },
    { id: "P018", name: "Salt 1kg", price: 40, barcode: "5901234123474", category: "Groceries", stock: 150 },
    { id: "P019", name: "Shower Gel 500ml", price: 280, barcode: "5901234123475", category: "Personal Care", stock: 45 },
    { id: "P020", name: "Dish Soap 750ml", price: 160, barcode: "5901234123476", category: "Household", stock: 70 },
    { id: "P021", name: "Paper Towels", price: 120, barcode: "5901234123477", category: "Household", stock: 90 },
    { id: "P022", name: "Yogurt 500ml", price: 85, barcode: "5901234123478", category: "Dairy", stock: 40 },
    { id: "P023", name: "Butter 500g", price: 180, barcode: "5901234123479", category: "Dairy", stock: 35 },
    { id: "P024", name: "Cheese 400g", price: 350, barcode: "5901234123480", category: "Dairy", stock: 25 },
    { id: "P025", name: "Eggs 30pk", price: 420, barcode: "5901234123481", category: "Dairy", stock: 50 }
];

const CASHIERS = [
    { id: 1, name: "Clinton Weisei", code: "C001" },
    { id: 2, name: "Jane Smith", code: "C002" },
    { id: 3, name: "Peter Kamau", code: "C003" }
];

const CATEGORIES = [
    "Dairy",
    "Bakery",
    "Grains",
    "Cooking",
    "Groceries",
    "Beverages",
    "Snacks",
    "Household",
    "Personal Care"
];

function formatCurrency(amount) {
    return `KSh ${amount.toFixed(2)}`;
}
