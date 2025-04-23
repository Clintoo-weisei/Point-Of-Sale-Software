function Login({ onLogin }) {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setError] = React.useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        if (username === 'admin' && password === '1234') {
            onLogin();
        } else {
            setError('Invalid credentials. Try admin / 1234');
        }
    };

    return (
        <div className="h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-blue-200">
            <form
                onSubmit={handleLogin}
                className="bg-white p-8 rounded shadow-lg w-96 space-y-4"
            >
                <h2 className="text-2xl font-bold text-center text-green-600">TeamSales Login</h2>
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full p-2 border rounded"
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-2 border rounded"
                    required
                />
                <button className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600 transition">
                    Log In
                </button>
            </form>
        </div>
    );
}
