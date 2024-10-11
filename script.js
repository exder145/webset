console.log('script.js loaded');

// 在所有其他代码之前添加这个函数
window.onerror = function(message, source, lineno, colno, error) {
    console.error('JavaScript error:', message, 'at', source, 'line', lineno, error);
};

console.log("Script is running");

// 在文件顶部添加这个函数
function setTheme(theme) {
    if (theme === 'dark-mode') {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
    }
    localStorage.setItem('theme', theme);
    updateThemeToggleButton(theme);
    initBackground(); // 重新初始化背景
}

// 修改 initBackground 函数
function initBackground() {
    const canvas = document.getElementById('background-canvas');
    if (!canvas) {
        console.error('Canvas element not found');
        return;
    }
    const ctx = canvas.getContext('2d');
    if (!ctx) {
        console.error('Unable to get canvas context');
        return;
    }
    let particles = [];

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    function createParticles() {
        particles = [];
        const particleCount = 100;
        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 2 + 1,
                dx: (Math.random() - 0.5) * 0.5,
                dy: (Math.random() - 0.5) * 0.5
            });
        }
    }

    function drawParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const isDarkMode = document.body.classList.contains('dark-mode');
        ctx.fillStyle = isDarkMode ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)';
        ctx.strokeStyle = isDarkMode ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)';
        
        particles.forEach(particle => {
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();

            particle.x += particle.dx;
            particle.y += particle.dy;

            if (particle.x < 0 || particle.x > canvas.width) particle.dx = -particle.dx;
            if (particle.y < 0 || particle.y > canvas.height) particle.dy = -particle.dy;
        });

        requestAnimationFrame(drawParticles);
    }

    resizeCanvas();
    createParticles();
    drawParticles();

    window.addEventListener('resize', () => {
        resizeCanvas();
        createParticles();
    });
}

// 修改主题切换的事件监听器
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const savedTheme = localStorage.getItem('theme') || 'light-mode';
    setTheme(savedTheme);

    themeToggle.addEventListener('click', function() {
        const currentTheme = document.body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
        const newTheme = currentTheme === 'dark-mode' ? 'light-mode' : 'dark-mode';
        setTheme(newTheme);
    });

    // 其他代码...

    initBackground();
});

function updateThemeToggleButton(theme) {
    const themeToggle = document.getElementById('theme-toggle');
    const moonIcon = '<i class="fas fa-moon"></i>';
    const sunIcon = '<i class="fas fa-sun"></i>';
    themeToggle.innerHTML = theme === 'dark-mode' ? sunIcon : moonIcon;
}

// 语言翻译
const translations = {
    'zh': {
        'home': '主页',
        'about': '关于我',
        'portfolio': '作品展示',
        'experience': '经验',
        'skills': '技能',
        'testimonials': '推荐',
        'contact': '联系我',
        'hero-title': 'EXDER',
        'hero-subtitle': '前端开发工程师 | 设计爱好者',
        'use-ai-assistant': '使用AI助手了解我',
        'wechat': '微信号：',
        'gmail': '谷歌邮箱：',
        'qq': 'QQ邮箱：'
    },
    'en': {
        'home': 'Home',
        'about': 'About',
        'portfolio': 'Portfolio',
        'experience': 'Experience',
        'skills': 'Skills',
        'testimonials': 'Testimonials',
        'contact': 'Contact',
        'hero-title': 'EXDER',
        'hero-subtitle': 'Frontend Developer | Design Enthusiast',
        'use-ai-assistant': 'Use AI Assistant to Know Me',
        'wechat': 'WeChat: ',
        'gmail': 'Gmail: ',
        'qq': 'QQ Mail: '
    }
};

let currentLanguage = 'zh';

function updateLanguage(lang) {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    document.querySelector('.hero h1').textContent = translations[lang]['hero-title'];
    document.querySelector('.hero p').textContent = translations[lang]['hero-subtitle'];
    document.querySelector('.hero .btn-primary').textContent = translations[lang]['use-ai-assistant'];

    updateContactInfo(lang);
    currentLanguage = lang;
}

function updateContactInfo(lang) {
    const contactInfo = document.querySelector('.contact-info');
    if (contactInfo) {
        contactInfo.innerHTML = `
            <div class="contact-item" data-contact="TequilaSunset_41">
                <i class="fab fa-weixin"></i>
                <span>${translations[lang]['wechat']}TequilaSunset_41</span>
            </div>
            <div class="contact-item" data-contact="exder77@gmail.com">
                <i class="far fa-envelope"></i>
                <span>${translations[lang]['gmail']}exder77@gmail.com</span>
            </div>
            <div class="contact-item" data-contact="2141177681@qq.com">
                <i class="fab fa-qq"></i>
                <span>${translations[lang]['qq']}2141177681@qq.com</span>
            </div>
        `;
    }
}

const languageSelect = document.getElementById('language-select');
languageSelect.addEventListener('change', function() {
    const lang = this.value;
    updateLanguage(lang);
    localStorage.setItem('language', lang);
});

// 初始化语言
const savedLanguage = localStorage.getItem('language') || 'zh';
languageSelect.value = savedLanguage;
updateLanguage(savedLanguage);

// AI 助手功能
const aiAssistantButton = document.getElementById('ai-assistant-button');
const aiAssistantModal = document.getElementById('ai-assistant-modal');
const closeAiAssistant = document.getElementById('close-ai-assistant');
const chatMessages = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

aiAssistantButton.addEventListener('click', function() {
    aiAssistantModal.style.display = 'flex';
});

closeAiAssistant.addEventListener('click', function() {
    aiAssistantModal.style.display = 'none';
});

async function getAIResponse(userMessage) {
    const systemPrompt = `你是EXDER的个人网站上的AI助手。EXDER是一名北京科技大学计算机专业的大三学生，
    擅长Python、C、Java等编程语言，对前端开发感兴趣，有良好的英语能力。请以友好、专业的态度回答访客的问题，
    并尽可能地将回答与EXDER的背景、技能和经历联系起来。如果被问到你不确定的信息，请礼貌地表示你没有这方面的具体信息。
    ${currentLanguage === 'en' ? "Please respond in English." : "请用中文回答。"}`;

    try {
        const response = await fetch('https://open.bigmodel.cn/api/paas/v4/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: "glm-4",
                messages: [
                    { role: "system", content: systemPrompt },
                    { role: "user", content: userMessage }
                ]
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        if (data.choices && data.choices.length > 0 && data.choices[0].message) {
            return data.choices[0].message.content;
        } else {
            throw new Error('Unexpected API response format');
        }
    } catch (error) {
        console.error('Error in getAIResponse:', error);
        return currentLanguage === 'en' 
            ? `Sorry, an error occurred: ${error.message}`
            : `抱歉，发生了一个错误：${error.message}`;
    }
}

function addMessage(message, isUser) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', isUser ? 'user-message' : 'ai-message');
    messageElement.textContent = message;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

async function handleUserInput() {
    const message = userInput.value.trim();
    if (message) {
        addMessage(message, true);
        userInput.value = '';
        const response = await getAIResponse(message);
        addMessage(response, false);
    }
}

sendButton.addEventListener('click', handleUserInput);
userInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        handleUserInput();
    }
});

// 复制功能
const contactItems = document.querySelectorAll('.contact-item');
const copyNotification = document.getElementById('copy-notification');

contactItems.forEach(item => {
    item.addEventListener('click', function() {
        const contactInfo = this.getAttribute('data-contact');
        navigator.clipboard.writeText(contactInfo).then(() => {
            showNotification();
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    });
});

function showNotification() {
    copyNotification.classList.add('show');
    setTimeout(() => {
        copyNotification.classList.remove('show');
    }, 2000);
}

// 其他功能（如回到顶部、粒子效果等）保持不变

// 社交媒体链接
document.getElementById('bilibili-link').href = 'https://space.bilibili.com/40836602?spm_id_from=333.1007.0.0';
document.getElementById('github-link').href = 'https://github.com/exder145';
document.getElementById('steam-link').href = 'https://steamcommunity.com/profiles/76561199134200897/';