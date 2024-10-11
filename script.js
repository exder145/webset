// 在文件开头添加以下常量
const OPENAI_API_KEY = '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';

// 替换 OPENAI_API_KEY 为新的 API key
const API_KEY = '8133dcaf21f9f2ee2214fde499ce9f78.JQ5Xe5h1h1surs7r';

document.addEventListener('DOMContentLoaded', function() {
    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 滚动进度指示器
    const scrollIndicator = document.getElementById("scrollIndicator");
    if (scrollIndicator) {
        window.addEventListener('scroll', function() {
            let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            let scrolled = (winScroll / height) * 100;
            scrollIndicator.style.width = scrolled + "%";
        });
    }

    // 添加滚动时导航栏背景变化效果
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('navbar-scrolled');
            } else {
                navbar.classList.remove('navbar-scrolled');
            }
        });
    }

    // 添加简单的加载动画
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });

    // 主题切换
    const themeToggle = document.getElementById('theme-toggle');
    const themeStyle = document.getElementById('theme-style');
    
    themeToggle.addEventListener('click', function() {
        if (themeStyle.disabled) {
            themeStyle.disabled = false;
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            localStorage.setItem('theme', 'dark');
        } else {
            themeStyle.disabled = true;
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            localStorage.setItem('theme', 'light');
        }
        document.body.classList.add('theme-transition');
        setTimeout(() => {
            document.body.classList.remove('theme-transition');
        }, 300);
    });

    // 检查本地存储中的主题设置
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        themeStyle.disabled = false;
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }

    // 更新语言切换部分
    const languageSelect = document.getElementById('language-select');
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
            'view-portfolio': '查看我的作品',
            'about-content': '我是<strong>北京科技大学计算机专业</strong>的大三在读生，所属的<strong>211工程重点高校</strong>让我打下了扎实的理论基础。我<strong>热爱编程</strong>，擅长使用<strong>Python、C、Java</strong>等主流编程语言，能够有效地解决实际问题。除此之外，我对<strong>前端开发</strong>也充满好奇，通过自学掌握了<strong>HTML、CSS和JavaScript</strong>，具备一定的前后端联调能力。\n\n除了技术能力，我还拥有<strong>卓越的英语水平</strong>，已通过<strong>CET-4（优秀）和CET-6（良好）</strong>，能流利地进行中英文沟通，阅读英文技术文档与学术论文毫无障碍。团队合作方面，我参与过多个项目，具备<strong>良好的跨部门沟通能力</strong>和<strong>出色的协作精神</strong>。\n\n在2021年的<strong>摇篮杯大学生创新创业竞赛</strong>中，我带领团队获得了<strong>二等奖</strong>，项目的成功展示了我们的创新精神和扎实的技术能力。面对挑战时，我充满<strong>责任感</strong>和<strong>自我驱动力</strong>，持续学习新技术，并积极探索如何将前沿科技应用于实际问题解决。\n\n我目前正在寻求<strong>软件开发、前端工程师</strong>等相关领域的实习或机会，期望在一家注重创新与个人成长的公司中，贡献我的力量并进一步成长。',
            'skills-content': '<li><strong>编程语言精通</strong>：熟练掌握Python、C、Java等主流编程语言，能够编写高效、可靠的代码，灵活解决各种问题。</li><li><strong>英语水平</strong>：通过CET-4（优秀）和CET-6（良好），能够流畅进行中英文沟通，轻松阅读英文技术文档和学术论文。</li><li><strong>版本控制</strong>：精通Git，能高效管理项目版本，提升团队协作效率。</li><li><strong>数据库管理</strong>：熟悉MySQL，能够设计高效的数据结构并优化数据库查询性能。</li><li><strong>前端技术</strong>：自学掌握HTML、CSS、JavaScript，具备基础的前后端联调能力。</li>',
            'footer-content': '&copy; 2023 EXDER. 保留所有权利。',
            'portfolio': '作品展示',
            'portfolio-content': '<!-- 在这里添加作品展示的中文内容 -->',
            'experience': '经验',
            'experience-content': '<!-- 在这里添加经验/履历的中文内容 -->',
            'testimonials': '推荐',
            'testimonials-content': '<!-- 在这里添加推荐/评价的中文内容 -->',
            'contact': '联系我',
            'contact-content': '<!-- 在这里添加联系表单和联系信息的中文内容 -->',
            'ai-assistant-title': 'AI助手',
            'ai-assistant-description': '我是EXDER的AI助手，可以回答关于EXDER的技能、经历和项目的问题。有什么想了解的吗？',
            'user-input-placeholder': '输入您的问题...',
            'send-button': '发送',
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
            'view-portfolio': 'View My Portfolio',
            'about-content': 'I am a third-year <strong>Computer Science student at the University of Science and Technology Beijing</strong>, a <strong>211 Project key university</strong> that has provided me with a solid theoretical foundation. I am <strong>passionate about programming</strong> and proficient in mainstream programming languages such as <strong>Python, C, and Java</strong>, enabling me to effectively solve practical problems. Additionally, I am curious about <strong>frontend development</strong> and have self-taught <strong>HTML, CSS, and JavaScript</strong>, possessing basic frontend-backend integration capabilities.\n\nBesides technical skills, I have <strong>excellent English proficiency</strong>, having passed <strong>CET-4 (Excellent) and CET-6 (Good)</strong>. I can communicate fluently in both Chinese and English, and read English technical documents and academic papers without difficulty. In terms of teamwork, I have participated in multiple projects, demonstrating <strong>strong cross-departmental communication skills</strong> and <strong>outstanding collaborative spirit</strong>.\n\nIn the 2021 <strong>Cradle Cup College Student Innovation and Entrepreneurship Competition</strong>, I led my team to win <strong>second prize</strong>, showcasing our innovative spirit and solid technical capabilities. When facing challenges, I am full of <strong>responsibility</strong> and <strong>self-motivation</strong>, continuously learning new technologies and actively exploring how to apply cutting-edge technology to solve practical problems.\n\nI am currently seeking internships or opportunities in fields such as <strong>software development and frontend engineering</strong>, hoping to contribute and further grow in a company that values innovation and personal development.',
            'skills-content': '<li><strong>Programming Languages Proficiency</strong>: Skilled in Python, C, Java, and other mainstream programming languages, capable of writing efficient and reliable code to solve various problems flexibly.</li><li><strong>English Proficiency</strong>: Passed CET-4 (Excellent) and CET-6 (Good), able to communicate fluently in both Chinese and English, and easily read English technical documents and academic papers.</li><li><strong>Version Control</strong>: Proficient in Git, able to efficiently manage project versions and improve team collaboration efficiency.</li><li><strong>Database Management</strong>: Familiar with MySQL, capable of designing efficient data structures and optimizing database query performance.</li><li><strong>Frontend Technologies</strong>: Self-taught HTML, CSS, JavaScript, with basic frontend-backend integration capabilities.</li>',
            'footer-content': '&copy; 2023 EXDER. All rights reserved.',
            'portfolio': 'Portfolio',
            'portfolio-content': '<!-- Add your portfolio content in English here -->',
            'experience': 'Experience',
            'experience-content': '<!-- Add your experience/resume content in English here -->',
            'testimonials': 'Testimonials',
            'testimonials-content': '<!-- Add your testimonials/reviews content in English here -->',
            'contact': 'Contact',
            'contact-content': '<!-- Add your contact form and contact information in English here -->',
            'ai-assistant-title': 'AI Assistant',
            'ai-assistant-description': "I'm EXDER's AI assistant. I can answer questions about EXDER's skills, experiences, and projects. What would you like to know?",
            'user-input-placeholder': 'Enter your question...',
            'send-button': 'Send',
            'use-ai-assistant': 'Use AI Assistant to Know Me',
            'wechat': 'WeChat: ',
            'gmail': 'Gmail: ',
            'qq': 'QQ Mail: '
        }
    };

    languageSelect.addEventListener('change', function() {
        const lang = this.value;
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
        
        // 更新hero部分
        document.querySelector('.hero h1').textContent = translations[lang]['hero-title'];
        document.querySelector('.hero p').textContent = translations[lang]['hero-subtitle'];
        document.querySelector('.hero .btn-primary').textContent = translations[lang]['use-ai-assistant'];
        
        // 更新各个部分的标题和内容
        ['about', 'portfolio', 'experience', 'skills', 'testimonials', 'contact'].forEach(section => {
            const sectionElement = document.querySelector(`#${section}`);
            if (sectionElement) {
                const titleElement = sectionElement.querySelector('h2');
                if (titleElement) {
                    titleElement.textContent = translations[lang][section];
                }
                const contentElement = sectionElement.querySelector('.container');
                if (contentElement && translations[lang][`${section}-content`]) {
                    contentElement.innerHTML = `<h2>${translations[lang][section]}</h2>${translations[lang][`${section}-content`]}`;
                }
            }
        });
        
        // 更新页脚
        document.querySelector('footer .container p').innerHTML = translations[lang]['footer-content'];
        
        // 更新 AI 助手部分
        document.querySelector('#ai-assistant h2').textContent = translations[lang]['ai-assistant-title'];
        document.querySelector('#ai-assistant p').textContent = translations[lang]['ai-assistant-description'];
        document.querySelector('#user-input').placeholder = translations[lang]['user-input-placeholder'];
        document.querySelector('#send-button').textContent = translations[lang]['send-button'];
        
        // 更新 AI 助手的语言设置
        currentLanguage = lang;
        
        localStorage.setItem('language', lang);
        updateContactInfo();
    });

    // 检查本地存储中的语言设置
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
        languageSelect.value = savedLanguage;
        languageSelect.dispatchEvent(new Event('change'));
    }

    // AI 助手相关代码
    const chatMessages = document.getElementById('chat-messages');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');

    function addMessage(message, isUser) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.classList.add(isUser ? 'user-message' : 'ai-message');
        messageElement.textContent = message;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // 在全局范围内定义当前语言变量
    let currentLanguage = 'zh';

    // 更新 getAIResponse 函数
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
                        {
                            role: "system",
                            content: systemPrompt
                        },
                        {
                            role: "user",
                            content: userMessage
                        }
                    ]
                })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log('API Response:', data);

            if (data.choices && data.choices.length > 0 && data.choices[0].message) {
                return data.choices[0].message.content;
            } else {
                console.error('Unexpected API response format:', data);
                return "抱歉，API 返回了意外的响应格式。";
            }
        } catch (error) {
            console.error('Error in getAIResponse:', error);
            return currentLanguage === 'en' 
                ? `Sorry, an error occurred: ${error.message}`
                : `抱歉，发生了一个错误：${error.message}`;
        }
    }

    async function handleUserInput() {
        const userMessage = userInput.value.trim();
        if (userMessage) {
            addMessage(userMessage, true);
            userInput.value = '';

            addMessage(currentLanguage === 'en' ? "Thinking..." : "正在思考...", false);

            try {
                const aiResponse = await getAIResponse(userMessage);
                chatMessages.removeChild(chatMessages.lastChild);
                addMessage(aiResponse, false);
            } catch (error) {
                console.error('Error:', error);
                chatMessages.removeChild(chatMessages.lastChild);
                addMessage(currentLanguage === 'en' 
                    ? "Sorry, an error occurred. Please try again later." 
                    : "抱歉，发生了一个错误。请稍后再试。", false);
            }
        }
    }

    sendButton.addEventListener('click', handleUserInput);
    userInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleUserInput();
        }
    });

    // 确保平滑滚动到AI助手部分
    document.querySelector('.hero .btn-primary').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('#ai-assistant').scrollIntoView({
            behavior: 'smooth'
        });
    });

    // 回到顶部按钮功能
    const backToTopButton = document.getElementById("back-to-top");

    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    };

    backToTopButton.onclick = function() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    };

    // 打字机效果
    const heroSubtitle = document.querySelector('.hero p');
    const text = heroSubtitle.textContent;
    heroSubtitle.textContent = '';
    let isDeleting = false;
    let charIndex = 0;

    function typeWriter() {
        const currentText = isDeleting ? text.substring(0, charIndex) : text.substring(0, charIndex + 1);
        heroSubtitle.innerHTML = currentText + '<span class="cursor">|</span>';
        
        if (!isDeleting && charIndex < text.length) {
            charIndex++;
            setTimeout(typeWriter, 100); // 打字速度
        } else if (!isDeleting && charIndex === text.length) {
            isDeleting = true;
            setTimeout(typeWriter, 1000); // 完成打字后等待1秒
        } else if (isDeleting && charIndex > 0) {
            charIndex--;
            setTimeout(typeWriter, 50); // 删除速度（比打字快）
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            setTimeout(typeWriter, 500); // 删除完成后等待0.5秒
        }
    }

    typeWriter();

    // 添加光标闪烁效果
    setInterval(() => {
        const cursor = document.querySelector('.cursor');
        if (cursor) {
            cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0';
        }
    }, 500); // 光标每500毫秒闪烁一次

    // 粒子背景
    particlesJS('particles-js', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: false },
            size: { value: 3, random: true },
            line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
            move: { enable: true, speed: 2, direction: "none", random: false, straight: false, out_mode: "out", bounce: false }
        },
        interactivity: {
            detect_on: "canvas",
            events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true },
            modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 4 } }
        },
        retina_detect: true
    });

    // 添加更新联系信息的函数
    function updateContactInfo() {
        const contactInfo = document.querySelector('.contact-info');
        const lang = document.getElementById('language-select').value;
        
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

    updateContactInfo(); // 初始化联系信息
});

// 社交媒体链接
document.getElementById('bilibili-link').href = 'https://space.bilibili.com/40836602?spm_id_from=333.1007.0.0';
document.getElementById('github-link').href = 'https://github.com/exder145';
document.getElementById('steam-link').href = 'https://steamcommunity.com/profiles/76561199134200897/';