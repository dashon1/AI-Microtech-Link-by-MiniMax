import { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

// Early access deadline: April 2, 2026 11:59 PM
const DEADLINE = new Date('2026-04-02T23:59:59');

function getTimeLeft() {
    const diff = DEADLINE.getTime() - Date.now();
    if (diff <= 0) return null;
    return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
    };
}

export function CountdownTimer({ compact = false }: { compact?: boolean }) {
    const [timeLeft, setTimeLeft] = useState(getTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
        return () => clearInterval(timer);
    }, []);

    if (!timeLeft) return (
        <div className="text-sm text-red-600 font-semibold">Early access has ended</div>
    );

    if (compact) {
        return (
            <div className="flex items-center gap-1.5 text-orange-600 text-xs font-semibold">
                <Clock size={12} />
                <span>
                    {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m left
                </span>
            </div>
        );
    }

    const pad = (n: number) => String(n).padStart(2, '0');

    return (
        <div className="bg-orange-50 dark:bg-orange-950 border border-orange-200 dark:border-orange-800 rounded-xl p-4 mb-4">
            <div className="flex items-center gap-2 mb-3">
                <Clock size={14} className="text-orange-500" />
                <span className="text-xs font-semibold text-orange-600 uppercase tracking-wide">Early Access Ends In</span>
            </div>
            <div className="grid grid-cols-4 gap-2 text-center">
                {[
                    { value: timeLeft.days, label: 'Days' },
                    { value: timeLeft.hours, label: 'Hrs' },
                    { value: timeLeft.minutes, label: 'Min' },
                    { value: timeLeft.seconds, label: 'Sec' },
                ].map(({ value, label }) => (
                    <div key={label} className="bg-white dark:bg-gray-800 rounded-lg py-2">
                        <div className="text-xl font-bold text-gray-900 dark:text-white leading-none">{pad(value)}</div>
                        <div className="text-xs text-gray-500 mt-1">{label}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
