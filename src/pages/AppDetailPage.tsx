
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { ArrowLeft, CheckCircle, Zap } from 'lucide-react';

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

    const getPriceDisplay = () => {
        if (app.priceLabel) return app.priceLabel;
        if (app.monthlyPrice) {
            return app.setupFee
                ? `$${app.monthlyPrice}/mo`
                : `$${app.monthlyPrice}/mo`;
        }
        return null;
    };

    const price = getPriceDisplay();

    return (
        <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <Link to="/apps" className="flex items-center text-blue-600 hover:text-blue-800 mb-8">
                    <ArrowLeft className="h-5 w-5 mr-2" />
                    Back to Apps
                </Link>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main content */}
                    <div className="lg:col-span-2">
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
                            <div className="p-8 md:p-12">
                                <div className="flex flex-col md:flex-row gap-8 items-start">
                                    <div className="w-24 h-24 md:w-32 md:h-32 bg-blue-100 dark:bg-blue-900 rounded-2xl flex items-center justify-center flex-shrink-0">
                                        <span className="text-4xl">🚀</span>
                                    </div>

                                    <div className="flex-1">
                                        <div className="flex items-center gap-4 mb-4">
                                            <span className="px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full">
                                                {app.category}
                                            </span>
                                            <span className={`px-3 py-1 text-sm font-medium rounded-full ${app.status === 'Live' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                                {app.status || 'Coming Soon'}
                                            </span>
                                        </div>

                                        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                                            {app.title || (app as any).name}
                                        </h1>

                                        <p className="text-xl text-gray-600 dark:text-gray-300">
                                            {app.description}
                                        </p>
                                    </div>
                                </div>

                                {app.longDescription && (
                                    <div className="mt-8 pt-8 border-t border-gray-100 dark:border-gray-700">
                                        <h3 className="text-xl font-semibold mb-4">About this App</h3>
                                        <p className="text-gray-600 dark:text-gray-300 whitespace-pre-wrap leading-relaxed">
                                            {app.longDescription}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Pricing sidebar */}
                    <div className="lg:col-span-1">
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 sticky top-28">
                            {app.available ? (
                                <>
                                    <div className="flex items-center gap-2 mb-6">
                                        <Zap className="text-green-500" size={20} />
                                        <span className="text-green-600 font-semibold text-sm">Available Now</span>
                                    </div>

                                    {price && (
                                        <div className="mb-2">
                                            <span className="text-3xl font-bold text-gray-900 dark:text-white">{price}</span>
                                        </div>
                                    )}

                                    {app.setupFee && (
                                        <p className="text-sm text-gray-500 mb-6">+ ${app.setupFee} one-time setup fee</p>
                                    )}

                                    {!app.setupFee && <div className="mb-6" />}

                                    <div className="space-y-3 mb-8 text-sm text-gray-600 dark:text-gray-400">
                                        <div className="flex items-center gap-2">
                                            <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                                            <span>Setup within 1–3 business days</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                                            <span>Dedicated onboarding support</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                                            <span>Ongoing technical support</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                                            <span>Cancel anytime</span>
                                        </div>
                                    </div>

                                    <Link
                                        to="/contact"
                                        state={{ serviceInterest: app.title || (app as any).name }}
                                        className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
                                    >
                                        Get This App
                                    </Link>

                                    <p className="text-xs text-gray-400 text-center mt-4">
                                        No credit card required to get started
                                    </p>
                                </>
                            ) : (
                                <>
                                    <h3 className="text-lg font-semibold mb-4">Interested in this app?</h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
                                        This app is coming soon. Contact us to be notified when it launches or to discuss a custom build.
                                    </p>
                                    <Link
                                        to={app.link || "/contact"}
                                        className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
                                    >
                                        {app.link ? 'Launch App' : 'Contact Us'}
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppDetailPage;
