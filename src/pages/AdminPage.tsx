import { useState } from 'react'

export default function AdminPage() {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [password, setPassword] = useState('')

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault()
        if (password === 'admin123') {
            setIsAuthenticated(true)
        } else {
            alert('Incorrect password')
        }
    }

    if (!isAuthenticated) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center">
                <form onSubmit={handleLogin} className="bg-white p-8 rounded-xl shadow-lg border max-w-sm w-full">
                    <h1 className="text-2xl font-bold mb-6 text-center text-primary-dark">Admin Access</h1>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border p-3 w-full mb-4 rounded-lg focus:ring-2 focus:ring-primary"
                        placeholder="Enter Admin Password"
                    />
                    <button type="submit" className="btn-primary w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                        Login
                    </button>
                    <p className="text-xs text-gray-400 mt-4 text-center">Default: admin123</p>
                </form>
            </div>
        )
    }

    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Admin Dashboard</h1>
                <button onClick={() => setIsAuthenticated(false)} className="text-red-500 hover:underline">Logout</button>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {/* Apps Management Card */}
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                    <h2 className="text-xl font-bold mb-4">Manage Apps</h2>
                    <p className="text-gray-600 mb-6">
                        Update application listings, descriptions, and statuses shown in the App Gallery.
                    </p>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                            <span className="font-medium">Santa Tracker</span>
                            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Active</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                            <span className="font-medium">Director's Studio</span>
                            <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">Draft</span>
                        </div>
                        <button className="w-full mt-2 text-primary font-medium hover:underline">
                            + Add New App
                        </button>
                    </div>
                </div>

                {/* CMS Configuration Card */}
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                    <h2 className="text-xl font-bold mb-4">Site Content</h2>
                    <p className="text-gray-600 mb-6">
                        Manage global site settings, hero banners, and service listings.
                    </p>
                    <div className="p-4 bg-blue-50 text-blue-800 rounded-lg">
                        <p className="text-sm">
                            <strong>Note:</strong> Content management needs to be connected to a database (Supabase/Firebase) to save changes permanently.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
