// Sayfa geçişleri ve Giriş Kontrolü
document.addEventListener('DOMContentLoaded', () => {
    // 1. Giriş kontrolü
    const user = localStorage.getItem('kpss_user');
    if (user) {
        document.getElementById('login-view').classList.remove('active');
        document.getElementById('app-layout').style.display = 'flex';
    }

    // 2. Giriş yapma fonksiyonu
    document.getElementById('login-btn').addEventListener('click', () => {
        const u = document.getElementById('username').value.trim();
        const p = document.getElementById('password').value;
        if (p === '1234' && u) {
            localStorage.setItem('kpss_user', u);
            location.reload();
        } else {
            alert('Hatalı giriş!');
        }
    });

    // 3. Sayfa değiştirme fonksiyonu
    document.querySelectorAll('.nav-item').forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Aktif olanı kaldır
            document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
            document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));

            // Tıklananı aktif et
            btn.classList.add('active');
            const target = btn.getAttribute('data-target');
            document.getElementById(target).classList.add('active');
        });
    });
});
