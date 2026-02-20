export default function Prayer() {
    return (
        <div className="space-y-6 pb-24">
            <div className="text-center space-y-2 relative mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-2xl mb-2 rotate-12 transition-transform hover:rotate-0">
                    <span className="material-icons-round text-primary text-3xl">volunteer_activism</span>
                </div>
                <h3 className="font-bold text-2xl">Prayer Wall</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">Join our community in prayer and praise.</p>
            </div>

            <div className="glass bg-white/60 dark:bg-slate-900/40 backdrop-blur-md rounded-[2.5rem] p-8 shadow-2xl border border-white/50 dark:border-white/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl rounded-full translate-x-10 -translate-y-10 pointer-events-none"></div>

                <form action="https://formspree.io/f/xpqjlbda" method="POST" className="space-y-4 relative">
                    <input
                        name="name"
                        className="w-full glass bg-white/50 dark:bg-slate-800/50 border-none rounded-2xl px-5 py-4 text-sm focus:ring-2 focus:ring-primary shadow-sm outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500 text-slate-800 dark:text-slate-200"
                        placeholder="Your Name"
                        type="text"
                        required
                    />

                    <div className="grid grid-cols-2 gap-4">
                        <div className="relative">
                            <select
                                name="type"
                                aria-label="Prayer Type"
                                className="w-full glass bg-white/50 dark:bg-slate-800/50 border-none rounded-2xl px-5 py-4 text-sm focus:ring-2 focus:ring-primary shadow-sm appearance-none cursor-pointer outline-none text-slate-800 dark:text-slate-200"
                            >
                                <option value="Prayer">Prayer</option>
                                <option value="Praise">Praise</option>
                                <option value="Healing">Healing</option>
                            </select>
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                            </div>
                        </div>

                        <div className="glass bg-white/50 dark:bg-slate-800/50 rounded-2xl px-4 py-4 flex items-center gap-2 shadow-sm">
                            <input
                                type="checkbox"
                                id="private"
                                name="is_private"
                                value="yes"
                                className="rounded text-primary focus:ring-primary w-4 h-4 border-slate-300"
                            />
                            <label htmlFor="private" className="text-[10px] uppercase font-bold text-slate-400 cursor-pointer select-none">Private</label>
                        </div>
                    </div>

                    <textarea
                        name="message"
                        className="w-full glass bg-white/50 dark:bg-slate-800/50 border-none rounded-2xl px-5 py-4 text-sm focus:ring-2 focus:ring-primary shadow-sm min-h-[100px] outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500 text-slate-800 dark:text-slate-200"
                        placeholder="How can we stand with you today?"
                        required
                    ></textarea>

                    <button
                        className="w-full bg-primary text-white py-5 rounded-2xl font-bold shadow-lg shadow-primary/20 active:scale-95 transition-all hover:brightness-110"
                        type="submit"
                    >
                        Submit Request
                    </button>
                </form>
            </div>
        </div>
    );
}
