// Data Mobil
const mobilData = [
    {
        id: 1,
        nama: "Toyota Avanza",
        kategori: "mpv",
        harga: "Rp 350.000",
        transmisi: "Manual",
        bbm: "Pertalite",
        kursi: "7 Penumpang",
        gambar: "https://images.unsplash.com/photo-1626847037657-fd3622613ce3?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 2,
        nama: "Daihatsu Xenia",
        kategori: "mpv",
        harga: "Rp 350.000",
        transmisi: "Manual",
        bbm: "Pertalite",
        kursi: "7 Penumpang",
        gambar: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 3,
        nama: "Suzuki Ertiga",
        kategori: "mpv",
        harga: "Rp 400.000",
        transmisi: "Manual",
        bbm: "Pertalite",
        kursi: "7 Penumpang",
        gambar: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 4,
        nama: "Toyota Innova",
        kategori: "mpv",
        harga: "Rp 550.000",
        transmisi: "Manual",
        bbm: "Pertamax",
        kursi: "7 Penumpang",
        gambar: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 5,
        nama: "Toyota Fortuner",
        kategori: "suv",
        harga: "Rp 900.000",
        transmisi: "Otomatis",
        bbm: "Pertamax",
        kursi: "7 Penumpang",
        gambar: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 6,
        nama: "Mitsubishi Pajero Sport",
        kategori: "suv",
        harga: "Rp 900.000",
        transmisi: "Otomatis",
        bbm: "Pertamax",
        kursi: "7 Penumpang",
        gambar: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 7,
        nama: "Honda CR-V",
        kategori: "suv",
        harga: "Rp 700.000",
        transmisi: "Otomatis",
        bbm: "Pertamax",
        kursi: "5 Penumpang",
        gambar: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 8,
        nama: "Honda HR-V",
        kategori: "suv",
        harga: "Rp 600.000",
        transmisi: "Otomatis",
        bbm: "Pertamax",
        kursi: "5 Penumpang",
        gambar: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 9,
        nama: "Honda Brio",
        kategori: "city-car",
        harga: "Rp 250.000",
        transmisi: "Manual",
        bbm: "Pertalite",
        kursi: "5 Penumpang",
        gambar: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 10,
        nama: "Toyota Agya",
        kategori: "city-car",
        harga: "Rp 250.000",
        transmisi: "Manual",
        bbm: "Pertalite",
        kursi: "5 Penumpang",
        gambar: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 11,
        nama: "Toyota Yaris",
        kategori: "city-car",
        harga: "Rp 300.000",
        transmisi: "Otomatis",
        bbm: "Pertalite",
        kursi: "5 Penumpang",
        gambar: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 12,
        nama: "Toyota Camry",
        kategori: "sedan",
        harga: "Rp 800.000",
        transmisi: "Otomatis",
        bbm: "Pertamax",
        kursi: "5 Penumpang",
        gambar: "https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 13,
        nama: "Toyota Alphard",
        kategori: "mpv",
        harga: "Rp 1.500.000",
        transmisi: "Otomatis",
        bbm: "Pertamax",
        kursi: "7 Penumpang",
        gambar: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 14,
        nama: "Isuzu Elf",
        kategori: "minibus",
        harga: "Rp 800.000",
        transmisi: "Manual",
        bbm: "Solar",
        kursi: "16 Penumpang",
        gambar: "https://images.unsplash.com/photo-1566008885218-90abf9200ddb?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 15,
        nama: "Toyota Hiace",
        kategori: "minibus",
        harga: "Rp 900.000",
        transmisi: "Manual",
        bbm: "Solar",
        kursi: "15 Penumpang",
        gambar: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=400&q=80"
    }
];

// Render Mobil
function renderMobil(data) {
    const grid = document.getElementById('mobilGrid');
    grid.innerHTML = data.map(mobil => `
        <div class="mobil-card" data-kategori="${mobil.kategori}">
            <div class="mobil-image">
                <img src="${mobil.gambar}" alt="${mobil.nama}" loading="lazy">
            </div>
            <div class="mobil-info">
                <span class="kategori">${mobil.kategori.toUpperCase()}</span>
                <h3>${mobil.nama}</h3>
                <div class="harga">${mobil.harga} / hari</div>
                <div class="fitur">
                    <span><i class="fas fa-cogs"></i> ${mobil.transmisi}</span>
                    <span><i class="fas fa-gas-pump"></i> ${mobil.bbm}</span>
                    <span><i class="fas fa-users"></i> ${mobil.kursi}</span>
                </div>
                <a href="#pesan" class="btn-pesan" onclick="pilihMobil('${mobil.nama}')">Pesan Sekarang</a>
            </div>
        </div>
    `).join('');
}

// Filter Mobil
function setupFilter() {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.dataset.filter;
            const cards = document.querySelectorAll('.mobil-card');
            cards.forEach(card => {
                if (filter === 'semua' || card.dataset.kategori === filter) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });
}

// Pilih Mobil ke Form
function pilihMobil(namaMobil) {
    const select = document.getElementById('pilihanMobil');
    for (let i = 0; i < select.options.length; i++) {
        if (select.options[i].value.includes(namaMobil)) {
            select.selectedIndex = i;
            break;
        }
    }
    document.getElementById('pesan').scrollIntoView({ behavior: 'smooth' });
}

// Navbar Toggle
function setupNavbar() {
    const toggle = document.getElementById('navToggle');
    const menu = document.getElementById('navMenu');
    toggle.addEventListener('click', () => {
        menu.classList.toggle('active');
    });

    // Close menu on link click
    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
        });
    });
}

// Smooth Scroll
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// Form Submission
function setupForm() {
    const form = document.getElementById('formPesan');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const nama = document.getElementById('nama').value;
        const hp = document.getElementById('hp').value;
        const mobil = document.getElementById('pilihanMobil').value;
        const tglAmbil = document.getElementById('tglAmbil').value;
        const tglKembali = document.getElementById('tglKembali').value;
        const catatan = document.getElementById('catatan').value;

        if (new Date(tglKembali) <= new Date(tglAmbil)) {
            alert('Tanggal kembali harus setelah tanggal ambil!');
            return;
        }

        const pesan = `Halo, saya ingin menyewa mobil:\n\n` +
            `*Nama:* ${nama}\n` +
            `*No. HP:* ${hp}\n` +
            `*Mobil:* ${mobil}\n` +
            `*Tanggal Ambil:* ${tglAmbil}\n` +
            `*Tanggal Kembali:* ${tglKembali}\n` +
            `${catatan ? `*Catatan:* ${catatan}\n` : ''}\n` +
            `Terima kasih.`;

        const url = `https://wa.me/6281946606691?text=${encodeURIComponent(pesan)}`;
        window.open(url, '_blank');
    });
}

// Set minimum date to today
function setMinDate() {
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('tglAmbil').setAttribute('min', today);
    document.getElementById('tglKembali').setAttribute('min', today);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderMobil(mobilData);
    setupFilter();
    setupNavbar();
    setupSmoothScroll();
    setupForm();
    setMinDate();
});

