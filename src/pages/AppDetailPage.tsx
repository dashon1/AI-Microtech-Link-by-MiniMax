
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { ArrowLeft, CheckCircle } from 'lucide-react';

const AppDetailPage = () => {
    const { id } = useParams();
    const { apps } = useApp();
    const app = apps.find(a => String(a.id) === id);

    if (!app) {
        return (
            <div className="min-h-screen pt-24 px-4 flex flex-col items-center">
                <h1 className="text-2xl font-bold mb-4">App Not Found</h1>
                <Link to="/apps" className="text-blue-600 hover:underline">Back to Apps</Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <Link to="/apps" className="flex items-center text-blue-600 hover:text-blue-800 mb-8">
                    <ArrowLeft className="h-5 w-5 mr-2" />
                    Back to Apps
                </Link>

                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
                    <div className="p-8 md:p-12">
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            {/* Icon or Image */}
                            <div className="w-24 h-24 md:w-32 md:h-32 bg-blue-100 dark:bg-blue-900 rounded-2xl flex items-center justify-center flex-shrink-0">
                                {/* Placeholder for dynamic icon/image rendering */}
                                <span className="text-4xl">🚀</span>
                            </div>

                            <div className="flex-1">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full">
                                        {app.category}
                                    </span>
                                    <span className={`px-3 py-1 text-sm font-medium rounded-full ${app.status === 'Live' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                                        }`}>
                                        {app.status || 'Coming Soon'}
                                    </span>
                                </div>

                                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                                    {app.title || (app as any).name}
                                </h1>

                                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                                    {app.description}
                                </p>

                                {app.longDescription && (
                                    <div className="prose dark:prose-invert max-w-none mb-8">
                                        <h3 className="text-xl font-semibold mb-4">About this App</h3>
                                        <p className="text-gray-600 dark:text-gray-300 whitespace-pre-wrap">
                                            {app.longDescription}
                                        </p>
                                    </div>
                                )}

                                <div className="flex gap-4">
                                    <Link
                                        to={app.link || "/signup"}
                                        className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                                    >
                                        {app.link ? 'Launch App' : 'Get Access'}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppDetailPage;
