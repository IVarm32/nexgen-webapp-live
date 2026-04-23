import { Upload as UploadIcon } from 'lucide-react';

export default function Upload() {
    return (
        <div className="space-y-6 pb-24">
            <div className="text-center space-y-2 relative mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-2xl mb-2 rotate-12 transition-transform hover:rotate-0">
                    <UploadIcon className="text-primary" size={32} />
                </div>
                <h1 className="font-bold text-2xl">Upload Your Tracks</h1>
                <p className="text-sm text-slate-500 dark:text-slate-400">Submit your music to NexGen Gospel Radio Jamaica.</p>
            </div>

            <div className="glass bg-white/60 dark:bg-slate-900/40 backdrop-blur-md rounded-[2.5rem] p-8 shadow-2xl border border-white/50 dark:border-white/10 relative overflow-hidden flex flex-col items-center">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl rounded-full translate-x-10 -translate-y-10 pointer-events-none"></div>

                <div className="relative z-10 w-full flex justify-center">
                    <iframe
                        width="250"
                        height="54"
                        frameBorder="0"
                        src="https://mega.nz/filerequest#!xYFtbaTlO-0!d!en"
                        title="MEGA Music Upload"
                        className="rounded-lg shadow-sm"
                    ></iframe>
                </div>

                <div className="mt-6 text-center text-xs text-slate-400">
                    <p>Secure upload powered by MEGA Cloud Storage</p>
                </div>
            </div>
        </div>
    );
}
