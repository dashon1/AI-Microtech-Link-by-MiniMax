
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { ArrowLeft, CheckCircle, Zap, Loader2 } from 'lucide-react';
import { CountdownTimer } from '../components/CountdownTimer';
import { redirectToCheckout, redirectToSubscription } from '../lib/stripe';

const AppDetailPage = () => {
    const { id } = useParams();
    const { apps } = useApp();
    const app = apps.find(a => String(a.id) === id);
    const [selectedTab, setSelectedTab] = useState(0);
    const [selectedTier, setSelectedTier] = useState(0);
    const [loading, setLoading] = useState(false);

    if (!app) {
        return (
            <div className="min-h-screen pt-24 px-4 flex flex-col items-center">
                <h1 className="text-2xl font-bold mb-4">App Not Found</h1>
                <Link to="/apps" className="text-blue-600 hover:underline">Back to Apps</Link>
            </div>
        );
    }

    const pricingTabs = (app as any).pricingTabs;
    const stripePrices = pricingTabs ? pricingTabs[selectedTab]?.stripePrices : (app as any).stripePrices;
    const activeTabData = pricingTabs?.[selectedTab];
    const activeTier = stripePrices?.[selectedTier];
    const appName = (app as any).name || app.title || '';

    const handleCheckout = async () => {
        if (!activeTier) return;
        setLoading(true);
        try {
            if (activeTier.mode === 'subscription') {
                await redirectToSubscription(activeTier.priceId, appName);
            } else {
                await redirectToCheckout(activeTier.priceId, appName);
            }
        } catch (err) {
            console.error('Checkout error:', err);
        } finally {
            setLoading(false);
        }
    };

    const getPriceDisplay = () => {
        if (activeTier) return activeTier.price;
        if ((app as any).priceLabel) return (app as any).priceLabel;
        if (app.monthlyPrice) return `$${app.monthlyPrice}/mo`;
        return null;
    };

    const price = getPriceDisplay();
    const isLifetime = activeTier?.mode === 'payment' || (app as any).priceLabel?.includes('lifetime');

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
                                            {appName}
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
                                    <div className="flex items-center gap-2 mb-4">
                                        <Zap className="text-green-500" size={20} />
                                        <span className="text-green-600 font-semibold text-sm">Available Now</span>
                                    </div>

                                    {isLifetime && <CountdownTimer />}

                                    {/* Tab toggle for dual-mode pricing (e.g. Self-Service vs Done-For-You) */}
                                    {pricingTabs && (
                                        <div className="mb-5">
                                            <div className="flex rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
                                                {pricingTabs.map((tab: any, i: number) => (
                                                    <button
                                                        key={i}
                                                        onClick={() => { setSelectedTab(i); setSelectedTier(0); }}
                                                        className={`flex-1 py-2 text-sm font-semibold transition-colors ${
                                                            selectedTab === i
                                                                ? 'bg-blue-600 text-white'
                                                                : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-50'
                                                        }`}
                                                    >
                                                        {tab.label}
                                                    </button>
                                                ))}
                                            </div>
                                            {activeTabData?.description && (
                                                <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-2">{activeTabData.description}</p>
                                            )}
                                        </div>
                                    )}

                                    {/* Tier selector */}
                                    {stripePrices && stripePrices.length > 1 && (
                                        <div className="mb-6 space-y-2">
                                            {stripePrices.map((tier: any, i: number) => (
                                                <button
                                                    key={i}
                                                    onClick={() => setSelectedTier(i)}
                                                    className={`w-full text-left px-4 py-3 rounded-xl border-2 transition-all ${
                                                        selectedTier === i
                                                            ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/30'
                                                            : 'border-gray-200 dark:border-gray-700 hover:border-blue-300'
                                                    }`}
                                                >
                                                    <div className="flex justify-between items-center">
                                                        <span className="font-semibold text-sm text-gray-900 dark:text-white">{tier.label}</span>
                                                        <span className="font-bold text-blue-600">{tier.price}</span>
                                                    </div>
                                                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{tier.description}</p>
                                                </button>
                                            ))}
                                        </div>
                                    )}

                                    {/* Price display when no tiers */}
                                    {!stripePrices && price && (
                                        <div className="mb-6">
                                            <span className="text-3xl font-bold text-gray-900 dark:text-white">{price}</span>
                                        </div>
                                    )}

                                    {app.setupFee && (
                                        <p className="text-sm text-gray-500 mb-4">+ ${app.setupFee} one-time setup fee</p>
                                    )}

                                    <div className="space-y-3 mb-6 text-sm text-gray-600 dark:text-gray-400">
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
                                        {!isLifetime && (
                                            <div className="flex items-center gap-2">
                                                <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                                                <span>Cancel anytime</span>
                                            </div>
                                        )}
                                    </div>

                                    {/* CTA — Stripe checkout, contact for DFY, or generic */}
                                    {activeTabData?.contactOnly ? (
                                        <Link
                                            to="/contact"
                                            state={{ serviceInterest: `${appName} — ${activeTier?.label || 'Done-For-You'} (${activeTier?.price || ''})` }}
                                            className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
                                        >
                                            {activeTier ? `Get Started — ${activeTier.price}` : 'Contact Us'}
                                        </Link>
                                    ) : activeTier ? (
                                        <button
                                            onClick={handleCheckout}
                                            disabled={loading}
                                            className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
                                        >
                                            {loading && <Loader2 size={16} className="animate-spin" />}
                                            {loading ? 'Redirecting...' : `Get ${activeTier.label} — ${activeTier.price}`}
                                        </button>
                                    ) : (
                                        <Link
                                            to="/contact"
                                            state={{ serviceInterest: appName }}
                                            className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
                                        >
                                            Get This App
                                        </Link>
                                    )}

                                    <p className="text-xs text-gray-400 text-center mt-4">
                                        {isLifetime ? 'One-time payment — yours forever' : 'Secure checkout powered by Stripe'}
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
