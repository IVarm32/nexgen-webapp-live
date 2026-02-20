// @ts-nocheck
import { PlayCircle } from 'lucide-react';
import { useEffect } from 'react';

export default function Home() {
    useEffect(() => {
        // Force re-execution of Fastcast4u player script behavior
        // These widgets often look for the DOM element on load. 
        // We simulate a reload of the specific widget script logic if needed, 
        // or simply rely on the fact that if we append the script now, it sees the DOM.

        const script = document.createElement('script');
        script.src = "https://usa20.fastcast4u.com:5030/media/static/js/sc_player/sc_player.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, []);

    return (
        <div className="space-y-6 pb-24">
            <section className="animate-fade-in">
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-white/50 dark:border-white/10 aspect-square group bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
                    <img
                        src="/brand_logo_main.jpeg"
                        alt="Nexgen Gospel - God Promises Never Fails"
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 z-10"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 text-white text-center z-20">
                        <p className="font-bold text-sm tracking-widest uppercase mb-1">Nexgen Gospel Radio</p>
                        <p className="text-[10px] font-medium opacity-90 tracking-wide">God Promises Never Fails</p>
                    </div>
                </div>
            </section>

            {/* Player Section */}
            <section className="animate-fade-in group">
                <div className="bg-white dark:bg-slate-800 rounded-[2rem] p-4 shadow-xl overflow-hidden transition-all duration-300 group-hover:shadow-2xl">
                    <div style={{ width: '100%', minHeight: '420px' }} id="sc-player">
                        {/* @ts-ignore - Web Component/Widget */}
                        <div is="player" lang="en" api-url="https://usa20.fastcast4u.com:5030/api/v2" server-id="1"
                            station-name="Nexgen Gospel JA" station-url="https://www.nexgengospelradio.com/"
                            imagecontainer="right" imagecontainer-bg="#ffffff" imagecontainer-bg-opacity="1"
                            controlscontainer="left" controlscontainer-bg="transparent" controlscontainer-bg-opacity="0"
                            historycontainer="bottom" historycontainer-bg="transparent" historycontainer-bg-opacity="0"
                            // @ts-ignore
                            show-history="true" history-limit="5" sharecontainer="bottom" sharecontainer-bg="#1488c2"
                            sharecontainer-bg-opacity="1" show-share="true"
                            share-url="https://www.nexgengospelradio.com/"
                            // @ts-ignore
                            share="['facebook','telegram','twitter']"
                            show-dj="true"
                            default-dj-img="https://usa20.fastcast4u.com:5030/media/widgets/WhatsApp_Image_2026-01-23_at_12.42.51_PM_1.jpeg"
                            show-image="true"
                            default-cover-image="https://pub-9492ccf38a894deea61da5ac42572f5f.r2.dev/Nexgen%20Gospel%20Radio%20Logo%20Update.png"
                            play-button-color="#ffffff" play-button-bg="#3885d6" visualizer-outline-color="#3885d6"
                            visualizer-bar-width="2"
                            // @ts-ignore
                            channels-displayed="[1]" channels-switch-bg="#3885d6"
                            channels-switch-color="#ffffff" channels-switch-bg-active="#fafafa"
                            channels-switch-color-active="#3885d6" show-vote="true" vote-buttons-color="#3885d6"
                            vote-buttons-opacity="1" vote-results-font-color="#3885d6" vote-results-font-size="16"
                            progress-show="true" progress-bar-color="#3885d6" progress-bar-bg-color="#e2e8f0"
                            progress-bar-bg-opacity="1" progress-bar-bg-height="25" progress-bar-opacity="1"
                            progress-font-color="#ffffff" progress-font-size="12" progress-bar-bg-radius="10"
                            progress-bar-bg-border="#3885d6" player-width="100%">
                        </div>
                    </div>
                </div >

                {/* Direct Stream Link */}
                < div className="mt-6 px-4 text-center" >
                    <a href="https://usa20.fastcast4u.com:5040/;?type=http&nocache=1771376406" target="_blank" rel="noopener noreferrer"
                        className="text-xs font-bold text-slate-400 hover:text-primary uppercase tracking-[0.2em] inline-flex items-center gap-2 transition-all hover:gap-3">
                        <PlayCircle size={16} />
                        Direct Mobile Stream
                    </a>
                </div >
            </section >
        </div >
    );
}
