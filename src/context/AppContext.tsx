
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { apps as initialApps } from '../data/content';

export interface AppData {
    id: string | number;
    title?: string;
    name?: string; // Legacy support
    description: string;
    category: string;
    icon: string;
    status?: 'Live' | 'Beta' | 'Coming Soon';
    link?: string;
    longDescription?: string;
    userImages?: string[];
}

interface AppContextType {
    apps: AppData[];
    addApp: (app: AppData) => void;
    updateApp: (app: AppData) => void;
    deleteApp: (id: string | number) => void;
    isAdmin: boolean;
    login: () => void;
    logout: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
    // Initialize with data from content.ts
    const [apps, setApps] = useState<AppData[]>(initialApps as unknown as AppData[]);
    const [isAdmin, setIsAdmin] = useState(false);

    const addApp = (app: AppData) => {
        setApps([...apps, app]);
    };

    const updateApp = (updatedApp: AppData) => {
        setApps(apps.map(app => app.id === updatedApp.id ? updatedApp : app));
    };

    const deleteApp = (id: string | number) => {
        setApps(apps.filter(app => app.id !== id));
    };

    const login = () => setIsAdmin(true);
    const logout = () => setIsAdmin(false);

    return (
        <AppContext.Provider value={{ apps, addApp, updateApp, deleteApp, isAdmin, login, logout }}>
            {children}
        </AppContext.Provider>
    );
};

export const useApp = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useApp must be used within an AppProvider');
    }
    return context;
};
