// Telegram Bot Configuration
// ЗАМЕНИТЕ ЭТИ ЗНАЧЕНИЯ НА ВАШИ!!!
const BOT_TOKEN = '8371303266:AAG4PnJoMnbzonK_2VRQJQtadfrDAOWG7CE';  // Токен бота от @BotFather
const CHAT_ID = '1686066001';      // Ваш Telegram ID (узнать через @userinfobot)

// Словарь всех текстов на сайте
const translations = {
    ru: {
        // Навигация
        navHome: 'Главная',
        navSkills: 'Умею',
        navOffer: 'Предлагаю',
        navBooking: 'Запись',
        // Первая секция
        firstName: 'Матвей',
        lastName: 'Завьялов',
        thirdFirstName: 'Матвей',
        thirdLastName: 'Завьялов',
        // Вторая секция - заголовки для кнопок
        title1: 'Работа с ИИ инструментами',
        title2: 'Подключение сайта в интернет',
        title3: 'Дизайн и анимации',
        title4: 'Поддержка и доработки',
        title5: 'Адаптивная вёрстка',
        // Вторая секция - тексты для кнопок
        skillText1: 'Умею работать с нейросетями и ускорять процесс разработки. Использую современные ИИ-решения для написания кода, генерации контента и поиска нестандартных идей. Это позволяет делать проекты быстрее и качественнее.',
        skillText2: 'Сделаю так, чтобы твой сайт был в интернете и работал без проблем. Подберу надёжный хостинг, настрою всё необходимое для стабильной работы. Твой сайт будет открываться быстро и без ошибок в любое время суток.',
        skillText3: 'Добавляю плавные анимации, красивые переходы и не перегружаю интерфейс. Все движения на сайте выглядят естественно и приятно для глаза. Минимализм остаётся в приоритете, но с эффектами, которые оживляют страницу.',
        skillText4: 'Помогаю с доработками, правками и поддержкой сайта после запуска. Если что-то нужно изменить или добавить — всегда на связи. Работаем до результата, который тебя устроит.',
        skillText5: 'Верстаю адаптивные сайты, которые одинаково хорошо выглядят на ПК, планшетах и телефонах. Все элементы подстраиваются под размер экрана, меню удобно раскрывается, текст остаётся читаемым на любом устройстве без зума и горизонтальной прокрутки.',
        // Третья секция - услуги
        service1Title: 'Сайт-визитка',
        service1Desc: 'Компактный сайт из 3-5 страниц с информацией о компании или человеке. Подходит фрилансерам, небольшим компаниям. Включает адаптивный дизайн, контакты, форму обратной связи.',
        service2Title: 'Лендинг',
        service2Desc: 'Одностраничный сайт для продажи одного товара или услуги. Подходит для рекламных кампаний, запуска новых продуктов, сбора заявок и лидов.',
        service3Title: 'Интернет-магазин',
        service3Desc: 'Многостраничный сайт с каталогом товаров, корзиной, оформлением заказа, оплатой и доставкой. Подходит для продажи любых товаров: одежды, техники, продуктов, авторских изделий.',
        // Четвёртая секция - форма
        formTitle: 'Оставьте заявку',
        formName: 'Имя',
        formPhone: 'Телефон',
        formEmail: 'Email',
        formServiceLabel: 'Тип сайта',
        formComment: 'Комментарий',
        formSubmit: 'Отправить'
    },
    en: {
        // Navigation
        navHome: 'Home',
        navSkills: 'Skills',
        navOffer: 'Offer',
        navBooking: 'Booking',
        // First section
        firstName: 'Matvey',
        lastName: 'Zavyalov',
        thirdFirstName: 'Matvey',
        thirdLastName: 'Zavyalov',
        // Second section - headers for buttons
        title1: 'Working with AI Tools',
        title2: 'Website Launch',
        title3: 'Design & Animations',
        title4: 'Support & Updates',
        title5: 'Responsive Layout',
        // Second section - texts for buttons
        skillText1: 'I know how to work with neural networks and speed up the development process. I use modern AI solutions for coding, content generation and finding non-standard ideas. This allows me to make projects faster and better.',
        skillText2: 'I will make sure your website is online and works without problems. I will choose reliable hosting and set up everything for stable operation. Your site will load quickly and without errors at any time of the day.',
        skillText3: 'I add smooth animations, beautiful transitions and do not overload the interface. All movements on the site look natural and pleasing to the eye. Minimalism remains a priority, but with effects that bring the page to life.',
        skillText4: 'I help with improvements, edits and website support after launch. If something needs to be changed or added - always in touch. We work until the result that suits you.',
        skillText5: 'I create responsive websites that look great on PC, tablets and phones. All elements adapt to the screen size, the menu opens comfortably, the text remains readable on any device without zooming or horizontal scrolling.',
        // Third section - services
        service1Title: 'Business Card Site',
        service1Desc: 'A compact site of 3-5 pages with information about a company or person. Suitable for freelancers and small businesses. Includes responsive design, contacts, feedback form.',
        service2Title: 'Landing Page',
        service2Desc: 'Single-page site for selling one product or service. Suitable for advertising campaigns, product launches, lead generation.',
        service3Title: 'Online Store',
        service3Desc: 'Multi-page site with product catalog, cart, checkout, payment and delivery. Suitable for selling any goods: clothing, electronics, food, handmade items.',
        // Fourth section - form
        formTitle: 'Leave a request',
        formName: 'Name',
        formPhone: 'Phone',
        formEmail: 'Email',
        formServiceLabel: 'Site type',
        formComment: 'Comment',
        formSubmit: 'Send'
    }
};

let currentLang = 'ru';

function setLanguage(lang) {
    currentLang = lang;
    
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    const activeBtn = document.querySelector('.square-btn.active');
    if (activeBtn) {
        const btnId = activeBtn.getAttribute('data-btn');
        updateContent(btnId);
    }
    
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    localStorage.setItem('preferredLanguage', lang);
}

function updateContent(btnId) {
    const titleElement = document.getElementById('smallTitle');
    if (titleElement) {
        const key = `title${btnId}`;
        if (translations[currentLang][key]) {
            titleElement.textContent = translations[currentLang][key];
        }
    }
    
    const skillTextElement = document.getElementById('skillText');
    if (skillTextElement) {
        const key = `skillText${btnId}`;
        if (translations[currentLang][key]) {
            skillTextElement.textContent = translations[currentLang][key];
        }
    }
}

// Обработчики для кнопок переключения языка
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        setLanguage(lang);
    });
});

// Обработчики для квадратных кнопок
document.querySelectorAll('.square-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.square-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const btnId = btn.getAttribute('data-btn');
        updateContent(btnId);
    });
});

// Загружаем сохранённый язык
const savedLang = localStorage.getItem('preferredLanguage');
if (savedLang && (savedLang === 'ru' || savedLang === 'en')) {
    setLanguage(savedLang);
} else {
    setLanguage('ru');
}

// Активируем первую кнопку по умолчанию
const firstBtn = document.querySelector('.square-btn[data-btn="1"]');
if (firstBtn && !document.querySelector('.square-btn.active')) {
    firstBtn.classList.add('active');
    updateContent('1');
}

// Свечение круга при скролле
const circle = document.getElementById('heroGlow');

function updateCircle() {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    
    let progress = scrollY / (windowHeight * 0.8);
    if (progress > 1) progress = 1;
    
    if (circle) {
        const size = 1000 + (progress * 1500);
        
        circle.style.width = size + 'px';
        circle.style.height = size + 'px';
        circle.style.bottom = '-' + (size / 2) + 'px';
    }
}

window.addEventListener('scroll', updateCircle);
updateCircle();

// ===== ОТПРАВКА ФОРМЫ В TELEGRAM =====
const form = document.getElementById('orderForm');
const statusDiv = document.getElementById('formStatus');

if (form) {
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const name = document.getElementById('formName').value.trim();
        const phone = document.getElementById('formPhone').value.trim();
        const email = document.getElementById('formEmail').value.trim();
        const service = document.getElementById('formService').value.trim();
        const comment = document.getElementById('formComment').value.trim();
        
        if (!name || !phone || !email || !service) {
            statusDiv.style.color = '#f76a40';
            statusDiv.textContent = currentLang === 'ru' ? 'Заполните обязательные поля' : 'Please fill in all required fields';
            return;
        }
        
        const text = `📋 НОВАЯ ЗАЯВКА\n\n👤 Имя: ${name}\n📞 Телефон: ${phone}\n✉️ Email: ${email}\n💻 Тип сайта: ${service}\n📝 Комментарий: ${comment || '—'}`;
        
        statusDiv.style.color = '#cbd2df';
        statusDiv.textContent = currentLang === 'ru' ? 'Отправка...' : 'Sending...';
        
        try {
            const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ chat_id: CHAT_ID, text: text })
            });
            
            const result = await response.json();
            
            if (result.ok) {
                statusDiv.style.color = '#7bc87b';
                statusDiv.textContent = currentLang === 'ru' ? '✓ Заявка отправлена! Я свяжусь с вами.' : '✓ Request sent! I will contact you.';
                form.reset();
            } else {
                statusDiv.style.color = '#f76a40';
                statusDiv.textContent = currentLang === 'ru' ? 'Ошибка. Попробуйте позже.' : 'Error. Please try again later.';
                console.error('Telegram API error:', result);
            }
        } catch (error) {
            statusDiv.style.color = '#f76a40';
            statusDiv.textContent = currentLang === 'ru' ? 'Ошибка сети. Проверьте соединение.' : 'Network error. Check your connection.';
            console.error('Network error:', error);
        }
        
        setTimeout(() => {
            statusDiv.textContent = '';
        }, 5000);
    });
}