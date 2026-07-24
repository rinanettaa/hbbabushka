// --- 4. ДАННЫЕ (МАССИВЫ И ОБЪЕКТЫ НАСТРОЕК) ---
const SONGS = [
    { title: 'С днём рождения', artist: 'Юрий Шатунов', src: 'shatunov.mp3' }, 
    { title: 'Всё для тебя', artist: 'Стас Михайлов', src: 'stasmih.mp3' },
    { title: 'Лучшая женщина', artist: 'Евгений Коновалов', src: 'konovalov.mp3' }
];

const FAMILY = [
    { name: 'Аня', relation: 'внучка', photo: 'images/anya.jpg', text: 'любимая бабуля!❤️\n\nя поздравляю тебя с твоим праздником, с днём рождения!! в первую очередь хочется сказать спасибо за бесконечную заботу и поддержку! в этот чудесный день желаю тебе самого крепкого здоровья, счастливой жизни, бесконечной радости и неиссякаемого оптимизма!\nбезумно люблю тебя! ты — наше сокровище❤️' },
    { name: 'Наташа', relation: 'дочь', photo: 'images/natasha.jpg', text: 'Мамочка, родная, с днём рождения тебя!\n\nКаждый день, возвращаясь домой, я мысленно благодарю судьбу за то, что мы рядом. Наш дом держится на твоем тепле, мудрости и заботе. Для меня ты всегда остаешься главной опорой, а для Ани — самой лучшей, чуткой и понимающей бабушкой. То, как в нашей квартире уживаются три поколения, как мы вместе смеемся, делимся секретами за ужином и поддерживаем друг друга, — это твоя заслуга. Ты соткала эту невидимую связь между нами.\n\nСпасибо тебе за твое бесконечное терпение. За то, что ты делишь с нами и будничные хлопоты, и самые яркие моменты. Я хочу пожелать тебе самого крепкого здоровья, душевного спокойствия и сил. Пусть сердце бьется спокойно, а на душе всегда будет легко. Мы с Аней сделаем всё, чтобы ты каждый день чувствовала себя самой любимой, нужной и счастливой.\n\nС праздником, наш дорогой и самый родной человек!' },
    { name: 'Оля', relation: 'дочь', photo: 'images/olya.jpg', text: 'Дорогая мамочка!\n\nС Днём рождения, родная!\n\nПусть каждый день приносит тебе радость, хорошие новости, улыбки и приятные моменты.\n\nСпасибо тебе за всё, что ты для меня сделала. За твою любовь, заботу, поддержку и доброе сердце.\nЯ очень тебя люблю и скучаю по тебе. Мне так хочется обнять тебя и просто побыть рядом. Очень надеюсь, что мы увидимся не через экран телефона, и сможем побыть вместе.\nБудь счастлива, мамочка. Береги себя. Не болей.\n\nОчень люблю тебя 🫶' },
    { name: 'Никита', relation: 'зять', photo: 'images/nikita.jpg', text: 'С Днём Рождения! Мы с Егоркой желаем Вам мира, счастья и добра. Пускай дети и внуки радуют успехами! Приезжайте в гости поскорее.' },
    { name: 'Таня', relation: 'дочь', photo: 'images/tanya.jpg', text: 'Дорогая мама!\n\nПоздравляю тебя\nс Днём рождения!\n\nПусть тёплый лучик греет нежные руки твои!\nПусть улыбка не сходит с глаз твоих!\nСчастья тебе, здоровья и удачи!\n\nЯ тебя люблю!' },
    { name: 'Вика', relation: 'внучка', photo: 'images/vika.jpg', text: 'с днём рождения, наша самая яркая и жизнерадостная бабуля! пусть твое будущее и настоящее будут невероятно счастливыми. люблю тебя, бабушка Люда ❤️' },
    { name: 'Алина', relation: 'внучка', photo: 'images/alina.jpg', text: 'Дорогая бабушка, поздравляю тебя с днём рождения! 💐Желаю тебе крепкого здоровья, душевного спокойствия, долгих и наполненных позитивными эмоциями долгих лет жизни. Пусть каждый день приносит как можно больше радости. Очень надеюсь, что скоро мы сможем увидеться. Береги себя. Очень сильно люблю и крепко обнимаю❤️' }
];

const MEMORIES = [
    { src: 'images/image1.png', caption: 'Наше первое знакомство 🌸', isSquare: false },
    { src: 'images/image2.jpg', caption: 'Ты каждый день провожала и встречала меня из школы 🌫️', isSquare: true },
    { src: 'images/image3.jpg', caption: 'И на ёлку тоже вместе 🎄', isSquare: false },
    { src: 'images/image4.jpg', caption: 'Прогулка в Приморском парке с вкусным фруктовым льдом 🍡', isSquare: true },
    { src: 'images/image5.jpg', caption: 'Твой день рождения — мы настоящие красавицы! ✨', isSquare: false },
    { src: 'images/image6.jpg', caption: 'Легендарные роллы с песком и шторм в твой день 🥢', isSquare: true },
    { src: 'images/image7.jpg', caption: 'Тёплые встречи с самыми близкими 💎', isSquare: false },
    { src: 'images/image8.jpg', caption: 'Летние цветы для самой любимой бабушки 💐', isSquare: true },
    { src: 'images/image9.jpg', caption: 'Зимой мы в бассейне 🎇', isSquare: false },
    { src: 'images/image10.jpg', caption: 'А летом на море 🏖️', isSquare: true },
    { src: 'images/image12.jpg', caption: 'Я выпускаюсь, ты со мной 💞', isSquare: false },
    { src: 'images/image13.jpg', caption: 'Время летит, уже и у младшей внучки выпускной прошёл 🌹', isSquare: true },
    { src: 'images/image14.jpg', caption: 'И каждый Новый Год мы вместе 🎉', isSquare: false },
    { src: 'images/image11.jpg', caption: 'С днём рождения, самая весёлая бабушка! 💖🤗👑', isSquare: true }
];


// --- ИНИЦИАЛИЗАЦИЯ И СТАРТОВЫЙ ПЛЕЕР ---
let selectedSongIndex = null;
const audio = document.getElementById('bgAudio');
const startBtn = document.getElementById('startBtn');
const welcomeSongsDiv = document.getElementById('welcomeSongs');

// Отрисовка треков на первом экране
SONGS.forEach((song, idx) => {
    const btn = document.createElement('button');
    btn.className = 'song-btn';
    btn.innerHTML = `<strong>${song.title}</strong> — ${song.artist}`;
    btn.addEventListener('click', () => selectSong(idx));
    welcomeSongsDiv.appendChild(btn);
});

function selectSong(idx) {
    selectedSongIndex = idx;
    document.querySelectorAll('.song-btn').forEach((b, i) => {
        b.classList.toggle('selected', i === idx);
    });
    startBtn.style.display = 'block';
    audio.src = SONGS[idx].src;
    updateModalSelection();
}

startBtn.addEventListener('click', () => {
    audio.play().catch(e => console.log("Автовоспроизведение заблокировано"));
    document.getElementById('audioFab').textContent = '🎵';
    document.getElementById('fireworks-section').scrollIntoView({ behavior: 'smooth' });
    startFireworks();
});

// --- ЛОГИКА САЛЮТА (CANVAS) ---
const canvas = document.getElementById('fireworksCanvas');
const ctx = canvas.getContext('2d');
let fireworkAnimationId;

function resizeCanvas() {
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = canvas.parentElement.clientHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

class Particle {
    constructor(x, y, color) {
        this.x = x; this.y = y; this.color = color;
        this.radius = Math.random() * 3 + 1;
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 6 + 2;
        this.vx = Math.cos(angle) * speed;
        this.vy = Math.sin(angle) * speed;
        this.alpha = 1; this.gravity = 0.06;
    }
    draw() {
        ctx.save(); ctx.globalAlpha = this.alpha; ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color; ctx.fill(); ctx.restore();
    }
    update() {
        this.x += this.vx; this.y += this.vy; this.vy += this.gravity; this.alpha -= 0.015;
    }
}

let particles = [];
const colors = ['#FF5733', '#33FF57', '#3357FF', '#F3FF33', '#FF33F3', '#33FFF0', '#FFB5A7'];

function createExplosion() {
    // Теперь точка взрыва выбирается случайно по всей ширине и высоте экрана
    // Оставляем небольшие отступы (по 10% от краев), чтобы салют не улетал за рамки
    const x = Math.random() * (canvas.width * 0.8) + (canvas.width * 0.1);
    const y = Math.random() * (canvas.height * 0.6) + (canvas.height * 0.1);
    
    const pCount = 75; // Количество искр в одном залпе
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    for (let i = 0; i < pCount; i++) {
        particles.push(new Particle(x, y, color));
    }
}

function animateFireworks() {
    ctx.fillStyle = 'rgba(26, 42, 74, 0.2)'; ctx.fillRect(0, 0, canvas.width, canvas.height);
    if (Math.random() < 0.08) createExplosion();
    particles.forEach((p, idx) => {
        if (p.alpha <= 0) particles.splice(idx, 1);
        else { p.update(); p.draw(); }
    });
    fireworkAnimationId = requestAnimationFrame(animateFireworks);
}

function startFireworks() {
    particles = []; animateFireworks();
    setTimeout(() => {
        cancelAnimationFrame(fireworkAnimationId);
        document.getElementById('greeting').scrollIntoView({ behavior: 'smooth' });
        initGreetingTimer();
    }, 4000);
}

// --- БЛОК 3: ПОЗДРАВЛЕНИЕ ---
const greetingBlock = document.getElementById('greeting');

function initGreetingTimer() {
    greetingBlock.onclick = () => { goToPhotos(); };
    greetingBlock.timer = setTimeout(goToPhotos, 5000);
}

function goToPhotos() {
    clearTimeout(greetingBlock.timer); greetingBlock.onclick = null;
    document.getElementById('photos').scrollIntoView({ behavior: 'smooth' });
}

// Отрисовка ленты фотографий с сохранением их оригинальных пропорций
const photosFeed = document.getElementById('photosFeed');
MEMORIES.forEach(item => {
    const card = document.createElement('div'); 
    card.className = 'photo-card';
    card.innerHTML = `
        <div class="photo-wrapper">
            <img src="${item.src}" alt="Воспоминание" loading="lazy">
        </div>
        <div class="photo-caption">${item.caption}</div>
    `;
    photosFeed.appendChild(card);
});


const photoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible'); photoObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

document.querySelectorAll('.photo-card').forEach(card => photoObserver.observe(card));
document.getElementById('toTreeBtn').addEventListener('click', () => {
    document.getElementById('tree').scrollIntoView({ behavior: 'smooth' });
});

// --- БЛОК 5: ЗАЦИКЛЕННАЯ 3D КАРУСЕЛЬ ДРЕВА СЕМЬИ ---
const track = document.getElementById('carouselTrack');
const dotsContainer = document.getElementById('dotsContainer');
let currentTreeIndex = 0;

FAMILY.forEach((person, idx) => {
    const card = document.createElement('div'); card.className = 'family-card';
    card.innerHTML = `
        <img class="family-avatar" src="${person.photo}" alt="${person.name}">
        <div class="family-name">${person.name}</div>
        <div class="family-relation">${person.relation}</div>
        <div class="family-hover-text">${person.text}</div>
    `;
    card.addEventListener('click', () => {
        if (window.innerWidth < 768 && card.classList.contains('active')) {
            openBottomSheet(person.name, person.text);
        }
    });
    track.appendChild(card);

    const dot = document.createElement('div'); dot.className = 'dot';
    if (idx === 0) dot.classList.add('active');
    dot.addEventListener('click', () => { currentTreeIndex = idx; updateCarousel(); });
    dotsContainer.appendChild(dot);
});

function updateCarousel() {
    const cards = document.querySelectorAll('.family-card');
    const dots = document.querySelectorAll('.dot');
    const total = FAMILY.length;

    cards.forEach((card, idx) => {
        card.classList.remove('active', 'prev', 'next');
        let offset = idx - currentTreeIndex;
        if (offset < -1) offset += total;
        if (offset > total - 2) offset -= total;

        if (offset === 0) card.classList.add('active');
        else if (offset === -1 || (currentTreeIndex === 0 && idx === total - 1)) card.classList.add('prev');
        else if (offset === 1 || (currentTreeIndex === total - 1 && idx === 0)) card.classList.add('next');
    });

    dots.forEach((dot, idx) => dot.classList.toggle('active', idx === currentTreeIndex));
}

let lastWheelTime = 0;
document.getElementById('tree').addEventListener('wheel', (e) => {
    const now = Date.now(); if (now - lastWheelTime < 500) return;
    if (e.deltaY > 0) currentTreeIndex = (currentTreeIndex + 1) % FAMILY.length;
    else currentTreeIndex = (currentTreeIndex - 1 + FAMILY.length) % FAMILY.length;
    updateCarousel(); lastWheelTime = now; e.preventDefault();
}, { passive: false });

let touchStartX = 0; let touchEndX = 0;
track.addEventListener('touchstart', e => { touchStartX = e.changedTouches.screenX; }, {passive: true});
track.addEventListener('touchend', e => { touchEndX = e.changedTouches.screenX; handleSwipe(); }, {passive: true});
function handleSwipe() {
    if (touchStartX - touchEndX > 45) { currentTreeIndex = (currentTreeIndex + 1) % FAMILY.length; updateCarousel(); }
    if (touchEndX - touchStartX > 45) { currentTreeIndex = (currentTreeIndex - 1 + FAMILY.length) % FAMILY.length; updateCarousel(); }
}

updateCarousel();

// --- УПРАВЛЕНИЕ ШТОРКОЙ (BOTTOM SHEET) ДЛЯ СМАРТФОНОВ ---
const sheet = document.getElementById('bottomSheet');
const overlay = document.getElementById('sheetOverlay');
const sheetContent = document.getElementById('sheetContent');

function openBottomSheet(name, text) {
    sheetContent.innerHTML = `<h3 style="color:var(--color-primary); margin-bottom:12px;">Поздравление от ${name}</h3><p style="font-size:15px; line-height:1.5; color:#555;">${text}</p>`;
    sheet.classList.add('open'); overlay.classList.add('open');
}

function closeBottomSheet() { sheet.classList.remove('open'); overlay.classList.remove('open'); }
document.getElementById('sheetClose').addEventListener('click', closeBottomSheet);
overlay.addEventListener('click', closeBottomSheet);

// --- ИНТЕРФЕЙС И КЛИКИ МУЗЫКАЛЬНОГО ПЛЕЕРА ---
const audioFab = document.getElementById('audioFab');
const modalOverlay = document.getElementById('modalOverlay');
const modalSongsList = document.getElementById('modalSongsList');

SONGS.forEach((song, idx) => {
    const item = document.createElement('div'); item.className = 'modal-song-item';
    item.innerHTML = `<span class="modal-song-title">${song.title}</span><span class="modal-song-artist">${song.artist}</span>`;
    item.addEventListener('click', () => {
        selectSong(idx); audio.play(); audioFab.textContent = '🎵'; modalOverlay.classList.remove('open');
    });
    modalSongsList.appendChild(item);
});

function updateModalSelection() {
    document.querySelectorAll('.modal-song-item').forEach((item, i) => item.classList.toggle('active', i === selectedSongIndex));
}

let clickTimer = null;
audioFab.addEventListener('click', () => {
    if (clickTimer !== null) return;
    clickTimer = setTimeout(() => {
        clickTimer = null;
        if (selectedSongIndex === null) modalOverlay.classList.add('open');
        else {
            if (audio.paused) { audio.play(); audioFab.textContent = '🎵'; }
            else { audio.pause(); audioFab.textContent = '🔇'; }
        }
    }, 260);
});

audioFab.addEventListener('dblclick', () => { clearTimeout(clickTimer); clickTimer = null; modalOverlay.classList.add('open'); });

let longPressTimer;
audioFab.addEventListener('touchstart', () => longPressTimer = setTimeout(() => modalOverlay.classList.add('open'), 550), {passive: true});
audioFab.addEventListener('touchend', () => clearTimeout(longPressTimer), {passive: true});
modalOverlay.addEventListener('click', (e) => { if (e.target === modalOverlay) modalOverlay.classList.remove('open'); });
