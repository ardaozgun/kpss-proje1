import { UI } from './ui.js';
import { Auth } from './auth.js';
import { DB } from './db.js';
import { Videos } from './videos.js';
import { Calc } from './calc.js';
import { History } from './history.js';

document.addEventListener('DOMContentLoaded', () => {
    // 1. Sistemleri başlatıyoruz
    UI.init();
    DB.init();
    Calc.init(); // <--- Hesaplama modülünü sisteme dahil ettik
    
    // 2. Giriş yapıldığında çalışacak olan ana tetikleyici
    const originalDoLogin = Auth.doLogin;
    Auth.doLogin = async function(username) {
        originalDoLogin.call(this, username);
        
        // Giriş yaptıktan sonra tüm verileri arka planda çekiyoruz
        await Videos.init();
        await History.loadData();
    };

    Auth.init();
});
