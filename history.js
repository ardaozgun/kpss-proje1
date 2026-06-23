import { DB } from './db.js';
import { Auth } from './auth.js';

export const History = {
    async loadData() {
        const { data } = await DB.supabase.from('kpss_denemeler')
            .select('*').eq('username', Auth.user).order('created_at');
        this.render(data);
    },

    render(exams) {
        const container = document.getElementById('history');
        container.innerHTML = exams.map(e => `<div>${e.ad} - Net: ${e.toplam_net}</div>`).join('');
    }
};
window.History = History;
