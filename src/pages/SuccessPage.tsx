import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const SuccessPage = () => {
    const [params] = useSearchParams();
    const appName = params.get('app') || 'your app';

    return (
        <div className="min-h-screen pt-24 pb-12 px-4 flex flex-col items-center justify-center text-center">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-12 max-w-lg w-full">
                <CheckCircle className="text-green-500 mx-auto mb-6" size={64} />
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    You're in! 🎉
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">
                    Thank you for purchasing <strong>{appName}</strong>.
                </p>
                <p className="text-gray-500 dark:text-gray-400 mb-8">
                    Check your email for your receipt and onboarding instructions. Our team will reach out within 1–3 business days to get you set up.
                </p>
                <Link
                    to="/apps"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-xl transition-colors"
                >
                    Browse More Apps
                </Link>
            </div>
        </div>
    );
};

export default SuccessPage;
