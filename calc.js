import { DB } from './db.js';
import { Auth } from './auth.js';
import { UI } from './ui.js';
import { History } from './history.js';

export const Calc = {
    subjects: [
        { id: 'turkce', n: 'Türkçe', q: 30 },
        { id: 'matematik', n: 'Matematik', q: 30 },
        { id: 'tarih', n: 'Tarih', q: 15 },
        { id: 'cografya', n: 'Coğrafya', q: 10 },
        { id: 'vatandaslik', n: 'Vatandaşlık', q: 15 }
    ],
    
    init() {
        const container = document.getElementById('calc');
        let html = `<h2>Deneme Hesaplama</h2><div id="calc-grid"></div><button onclick="window.Calc.save()">Kaydet</button>`;
        container.innerHTML = html;
        this.renderInputs();
    },

    renderInputs() {
        const grid = document.getElementById('calc-grid');
        this.subjects.forEach(s => {
            grid.innerHTML += `<div>${s.n} <input type="number" id="d-${s.id}" placeholder="D"> <input type="number" id="y-${s.id}" placeholder="Y"></div>`;
        });
    },

    async save() {
        const d = { username: Auth.user, ad: 'Deneme', toplam_net: 0 };
        // ... (Kayıt mantığı)
        await DB.supabase.from('kpss_denemeler').insert([d]);
        UI.toast("Kaydedildi!");
        History.loadData();
    }
};
window.Calc = Calc;
