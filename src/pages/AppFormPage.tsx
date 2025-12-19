
import React, { useState, useEffect } from 'react';
import { useApp, AppData } from '../context/AppContext';
import { useNavigate, useParams } from 'react-router-dom';

const AppFormPage = () => {
    const { apps, addApp, updateApp } = useApp();
    const navigate = useNavigate();
    const { id } = useParams();
    const isEdit = Boolean(id);

    const [formData, setFormData] = useState<Partial<AppData>>({
        title: '',
        category: '',
        description: '',
        icon: 'Sparkles',
        status: 'Coming Soon',
        longDescription: '',
        link: ''
    });

    useEffect(() => {
        if (isEdit && id) {
            const existingApp = apps.find(a => String(a.id) === id);
            if (existingApp) {
                setFormData({
                    ...existingApp,
                    title: existingApp.title || (existingApp as any).name // Handle legacy
                });
            }
        }
    }, [id, isEdit, apps]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const appData = {
            ...(isEdit ? apps.find(a => String(a.id) === id) : {}),
            ...formData,
            id: isEdit ? id! : Date.now().toString(),
            name: formData.title // Sync for compatibility
        } as AppData;

        if (isEdit) {
            updateApp(appData);
        } else {
            addApp(appData);
        }
        navigate('/admin');
    };

    return (
        <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow">
                <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                    {isEdit ? 'Edit App' : 'Add New App'}
                </h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">App Name</label>
                        <input
                            type="text"
                            required
                            value={formData.title || ''}
                            onChange={e => setFormData({ ...formData, title: e.target.value })}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Category</label>
                        <select
                            value={formData.category || ''}
                            onChange={e => setFormData({ ...formData, category: e.target.value })}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        >
                            <option value="">Select Category</option>
                            <option value="Business">Business</option>
                            <option value="Creative">Creative</option>
                            <option value="Education">Education</option>
                            <option value="Finance">Finance</option>
                            <option value="Health">Health</option>
                            <option value="Logistics">Logistics</option>
                            <option value="Professional">Professional</option>
                            <option value="Social Media">Social Media</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Short Description</label>
                        <textarea
                            required
                            value={formData.description || ''}
                            onChange={e => setFormData({ ...formData, description: e.target.value })}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            rows={3}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Full Description (Context)</label>
                        <textarea
                            value={formData.longDescription || ''}
                            onChange={e => setFormData({ ...formData, longDescription: e.target.value })}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            rows={5}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Sign Up / Action Link</label>
                        <input
                            type="text"
                            value={formData.link || ''}
                            onChange={e => setFormData({ ...formData, link: e.target.value })}
                            placeholder="/signup or https://..."
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        />
                    </div>

                    <div className="flex justify-end space-x-3">
                        <button
                            type="button"
                            onClick={() => navigate('/admin')}
                            className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            {isEdit ? 'Update App' : 'Create App'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AppFormPage;
