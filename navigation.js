// Navigation functions
function navigateToRegion(region) {
    window.location.href = `${region}.html`;
}

function navigateToFAQ(region, category) {
    window.location.href = `faq.html?region=${region}&category=${category}`;
}

function navigateToOrdersOperations(region) {
    window.location.href = `orders-operations.html?region=${region}`;
}

function goBack() {
    const urlParams = new URLSearchParams(window.location.search);
    const region = urlParams.get('region');
    
    if (region) {
        window.location.href = `${region}.html`;
    } else {
        window.location.href = 'index.html';
    }
}

// Initialize FAQ page if we're on it
document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.includes('faq.html')) {
        initializeFAQPage();
    }
});

function initializeFAQPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const region = urlParams.get('region');
    const category = urlParams.get('category');
    
    if (!region || !category) {
        window.location.href = 'index.html';
        return;
    }
    
    // Update page title and breadcrumb
    const regionName = region === 'us' ? 'United States' : 'Canada';
    const categoryData = getFAQData(region, category);
    
    // Update header color for Canada
    if (region === 'canada') {
        document.getElementById('header').classList.add('canada');
    }
    
    document.getElementById('page-title').textContent = `${categoryData.title} - ${regionName} - POS Hardware Deployment Services`;
    document.getElementById('faq-title').textContent = categoryData.title;
    document.getElementById('faq-subtitle').textContent = categoryData.subtitle;
    
    // Update breadcrumb
    const breadcrumb = document.getElementById('breadcrumb');
    breadcrumb.innerHTML = `
        <a href="index.html" class="breadcrumb-link">Home</a>
        <span class="breadcrumb-separator">></span>
        <a href="${region}.html" class="breadcrumb-link">${regionName}</a>
        <span class="breadcrumb-separator">></span>
        <span class="current">${categoryData.title}</span>
    `;
    
    // Render FAQ content
    renderFAQContent(categoryData.faqs);
}

function renderFAQContent(faqs) {
    const container = document.getElementById('faq-content');
    
    container.innerHTML = faqs.map((faq, index) => `
        <div class="faq-item">
            <button class="faq-question" onclick="toggleFAQ(${index})">
                <span>${faq.question}</span>
                <span class="faq-toggle">+</span>
            </button>
            <div class="faq-answer" id="faq-answer-${index}">
                <p>${faq.answer}</p>
            </div>
        </div>
    `).join('');
}

function toggleFAQ(index) {
    const question = document.querySelector(`.faq-question:nth-of-type(${(index * 2) + 1})`);
    const answer = document.getElementById(`faq-answer-${index}`);
    
    // Close all other FAQs
    document.querySelectorAll('.faq-question').forEach((q, i) => {
        if (i !== index) {
            q.classList.remove('active');
        }
    });
    
    document.querySelectorAll('.faq-answer').forEach((a, i) => {
        if (i !== index) {
            a.classList.remove('active');
        }
    });
    
    // Toggle current FAQ
    question.classList.toggle('active');
    answer.classList.toggle('active');
}