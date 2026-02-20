import { Outlet, Link, useLocation } from 'react-router-dom';
import { Radio, ListMusic, HeartHandshake, User, Moon, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function AppShell() {
    const location = useLocation();
    const [isDark, setIsDark] = useState(false);

    // Initialize dark mode from system preference or local storage if implemented
    useEffect(() => {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setIsDark(true);
            document.documentElement.classList.add('dark');
        }
    }, []);

    const toggleDark = () => {
        setIsDark(!isDark);
        document.documentElement.classList.toggle('dark');
    };

    const navItems = [
        { name: 'Listen', path: '/', icon: Radio },
        { name: 'Request', path: '/requests', icon: ListMusic },
        { name: 'Pray', path: '/prayer', icon: HeartHandshake },
        { name: 'Me', path: '/profile', icon: User },
    ];

    return (
        <div className="min-h-screen hero-gradient bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-100 font-sans transition-colors duration-300">
            <div className="max-w-md mx-auto px-6 py-8 relative pb-32">
                {/* Header */}
                <header className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 glass rounded-xl flex items-center justify-center shadow-md p-1 overflow-hidden relative bg-white/50 dark:bg-slate-800/50 backdrop-blur-md border border-white/20">
                            <img
                                src="https://pub-9492ccf38a894deea61da5ac42572f5f.r2.dev/Nexgen%20Gospel%20Radio%20Logo%20Update.png"
                                alt="Nexgen Gospel Radio Logo"
                                className="w-full h-full object-contain rounded-lg z-10 relative"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src = 'https://usa20.fastcast4u.com:5030/media/widgets/WhatsApp_Image_2026-01-23_at_12.42.51_PM_1.jpeg';
                                }}
                            />
                        </div>
                        <div>
                            <h1 className="font-extrabold text-xl tracking-tight leading-tight">NexGen</h1>
                            <p className="text-[10px] text-primary font-bold uppercase tracking-[0.2em]">Gospel JA</p>
                        </div>
                    </div>
                    <button
                        onClick={toggleDark}
                        className="w-10 h-10 glass rounded-xl flex items-center justify-center shadow transition-transform active:scale-90 bg-white/50 dark:bg-slate-800/50 backdrop-blur-md border border-white/20 text-slate-600 dark:text-slate-300"
                        aria-label="Toggle Dark Mode"
                    >
                        {isDark ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                </header>

                {/* Main Content */}
                <main className="animate-fade-in">
                    <Outlet />
                </main>

                {/* Bottom Navigation */}
                <nav className="fixed bottom-0 left-0 right-0 glass backdrop-blur-2xl border-t border-white/20 dark:border-white/5 px-6 py-4 pb-8 flex justify-around items-center z-50 max-w-md mx-auto bg-white/80 dark:bg-slate-900/80">
                    {navItems.map((item) => {
                        const isActive = location.pathname === item.path;
                        const Icon = item.icon;
                        return (
                            <Link
                                key={item.name}
                                to={item.path}
                                className={`flex flex-col items-center gap-1 transition-all duration-300 ${isActive ? 'text-primary scale-110' : 'text-slate-400 hover:text-primary'
                                    }`}
                            >
                                <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
                                <span className="text-[10px] font-bold uppercase tracking-widest">{item.name}</span>
                            </Link>
                        );
                    })}
                </nav>
            </div>
        </div>
    );
}
