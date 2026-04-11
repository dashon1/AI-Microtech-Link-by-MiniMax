
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
    available?: boolean;
    setupFee?: number;
    monthlyPrice?: number;
    priceLabel?: string;
    seasonalFrom?: { month: number; day: number };
    seasonalTo?: { month: number; day: number };
}

function isSeasonallyAvailable(from: { month: number; day: number }, to: { month: number; day: number }): boolean {
    const now = new Date();
    const month = now.getMonth() + 1; // 1-12
    const day = now.getDate();
    const cur = month * 100 + day;
    const start = from.month * 100 + from.day;
    const end = to.month * 100 + to.day;
    return cur >= start && cur <= end;
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
    // Initialize with data from content.ts, applying seasonal availability
    const resolvedApps = (initialApps as unknown as AppData[]).map(app => {
        if (app.seasonalFrom && app.seasonalTo) {
            return { ...app, available: isSeasonallyAvailable(app.seasonalFrom, app.seasonalTo) };
        }
        return app;
    });
    const [apps, setApps] = useState<AppData[]>(resolvedApps);
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
