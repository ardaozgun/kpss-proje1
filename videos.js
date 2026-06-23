import { supabase } from './db.js';

export const Videos = {
    subjects: [
        { id: 'turkce', n: 'Türkçe', pl: 'PL5kIOunpmSBMBPYmrPkd0JikOPIfQW-Sn', cnt: 46 },
        { id: 'matematik', n: 'Matematik', pl: 'PL5kIOunpmSBO_M_fUe9fHP1NFPCZRkrw1', cnt: 81 },
        { id: 'tarih', n: 'Tarih', pl: 'PL5kIOunpmSBM_vApgXxIQZx5PnegGbWFF', cnt: 60 },
        { id: 'cografya', n: 'Coğrafya', pl: 'PL5kIOunpmSBOBDQbSpgzjR8PgClHVmxgK', cnt: 34 },
        { id: 'vatandaslik', n: 'Vatandaşlık', pl: 'PL5kIOunpmSBO2LLEQwCB9pJFT87wJsVSE', cnt: 48 }
    ],

    async init() {
        const user = localStorage.getItem('kpss_user');
        const container = document.getElementById('videos');
        
        this.subjects.forEach(s => {
            let html = `<div style="margin-bottom:20px;"><h3>${s.n}</h3><div class="video-list">`;
            for(let i=1; i<=s.cnt; i++) {
                html += `
                    <div style="padding:10px; border-bottom:1px solid #333;">
                        <input type="checkbox" id="chk-${s.id}-${i}" onchange="window.updateProgress('${s.id}', ${i})">
                        <a href="https://www.youtube.com/watch?list=${s.pl}&index=${i}" target="_blank">${i}. Ders</a>
                    </div>`;
            }
            container.innerHTML += html + `</div></div>`;
        });
    }
};

window.updateProgress = async (sId, i) => {
    const user = localStorage.getItem('kpss_user');
    const checked = document.getElementById(`chk-${sId}-${i}`).checked;
    await supabase.from('kpss_progress').upsert({ username: user, video_id: `${sId}_${i}`, completed: checked });
};
