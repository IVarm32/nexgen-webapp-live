// @ts-nocheck
import { useEffect } from 'react';

export default function Requests() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://usa20.fastcast4u.com:5030/media/static/js/request_track_widget/request_widget.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, []);

    return (
        <div className="space-y-6 pb-24">
            <h2 className="font-bold text-2xl px-2">Song Requests</h2>
            <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-[2rem] p-6 shadow-xl border border-white/50 dark:border-white/10 overflow-hidden">
                <div style={{ width: '100%' }}>
                    <div className="sc-track-request-widget">
                        {/* @ts-ignore - Web Component/Widget */}
                        <div is="track-request-widget" lang="en" api-base="https://usa20.fastcast4u.com:5030/api/v2"
                            server-id="1" ip-timeout="1800000" track-timeout="3600000" bgcolor="#ffffff"
                            bgopacity="1" tracks_num="20" track_width="100%"
                            track_image_default="https://pub-9492ccf38a894deea61da5ac42572f5f.r2.dev/Nexgen%20Gospel%20Radio%20Logo%20Update.png"
                            meta_font_size="16" meta_font_style="italic" meta_font_color="#1a1a1a" meta_opacity="1"
                            button_color="#3885d6" button_color_active="#d8db14" button_font_color="#ffffff"
                            button_font_size="16" ordering="1" allow_person_and_message="true"
                            modal_background_color="#fcfcfc" modal_font_color="#292828"
                            modal_background_opacity="1">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
