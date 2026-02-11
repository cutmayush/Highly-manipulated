// Manipulative JavaScript behaviors

let cartCount = 0;
let viewersCount = 347;
let hasShownExitPopup = false;

// Fake countdown timer
function startCountdown() {
    let time = 323; // 5:23
    const countdownEl = document.getElementById('countdown');
    
    setInterval(() => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        countdownEl.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        time--;
        if (time < 0) {
            time = 323; // Reset to create false urgency
        }
    }, 1000);
}

// Fake viewers count - fluctuates randomly
function updateViewersCount() {
    const viewersEl = document.getElementById('viewersCount');
    setInterval(() => {
        viewersCount = Math.floor(Math.random() * 50) + 320;
        viewersEl.textContent = viewersCount;
    }, 3000);
}

// Product timers
function startProductTimers() {
    const timers = document.querySelectorAll('.timer');
    timers.forEach(timer => {
        let time = parseInt(timer.dataset.time);
        
        setInterval(() => {
            const minutes = Math.floor(time / 60);
            const seconds = time % 60;
            timer.textContent = `${minutes}:${String(seconds).padStart(2, '0')}`;
            time--;
            if (time < 0) {
                time = parseInt(timer.dataset.time); // Reset timer
            }
        }, 1000);
    });
}

// Add to cart with deceptive confirmation
function addToCart(product, price) {
    cartCount++;
    document.getElementById('cartCount').textContent = cartCount;
    
    // Show fake "added to cart" notification
    showNotification(`${product} added to cart! 🎉`, 'Someone else just bought this item!');
    
    // Deceptive: automatically add "extended warranty" 
    setTimeout(() => {
        showNotification('Extended Warranty automatically added!', 'You can remove it in checkout');
    }, 2000);
}

// Fake purchase notifications
function showFakePurchaseNotifications() {
    const products = [
        'Premium Headphones',
        'Smart Watch',
        'Bluetooth Speaker',
        'Wireless Charger',
        'USB Cable',
        'Phone Case'
    ];
    
    const locations = [
        'New York, NY',
        'Los Angeles, CA',
        'Chicago, IL',
        'Houston, TX',
        'Phoenix, AZ',
        'Philadelphia, PA',
        'San Antonio, TX',
        'San Diego, CA',
        'Dallas, TX',
        'San Jose, CA'
    ];
    
    setInterval(() => {
        const product = products[Math.floor(Math.random() * products.length)];
        const location = locations[Math.floor(Math.random() * locations.length)];
        const timeAgo = Math.floor(Math.random() * 5) + 1;
        
        showNotification(
            `🛒 ${product}`,
            `Just purchased from ${location} - ${timeAgo} min ago`
        );
    }, 8000); // Show every 8 seconds
}

// Show notification popup
function showNotification(title, subtitle) {
    const container = document.getElementById('notificationContainer');
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <strong>${title}</strong><br>
        <small>${subtitle}</small>
    `;
    
    container.appendChild(notification);
    
    // Remove after 4 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(-100%)';
        setTimeout(() => notification.remove(), 500);
    }, 4000);
}

// Exit intent popup - triggers on mouse leaving viewport
function initExitPopup() {
    document.addEventListener('mouseleave', (e) => {
        if (e.clientY <= 0 && !hasShownExitPopup) {
            showExitPopup();
            hasShownExitPopup = true;
        }
    });
    
    // Also show after 30 seconds if not shown
    setTimeout(() => {
        if (!hasShownExitPopup) {
            showExitPopup();
            hasShownExitPopup = true;
        }
    }, 30000);
}

function showExitPopup() {
    const popup = document.getElementById('exitPopup');
    popup.style.display = 'flex';
    startPopupCountdown();
}

function closePopup() {
    const popup = document.getElementById('exitPopup');
    popup.style.display = 'none';
    
    // Deceptive: show another notification
    showNotification('Discount Applied! 🎉', 'Your 90% discount is now active in cart');
}

// Popup countdown
function startPopupCountdown() {
    let time = 59;
    const countdownEl = document.getElementById('popupCountdown');
    
    const interval = setInterval(() => {
        countdownEl.textContent = `00:${String(time).padStart(2, '0')}`;
        time--;
        if (time < 0) {
            clearInterval(interval);
            // Restart countdown to create false urgency
            time = 59;
            startPopupCountdown();
        }
    }, 1000);
}

// Deceptive email submission
function submitEmail() {
    const email = document.getElementById('emailInput').value;
    const subscribed = document.getElementById('subscribeCheckbox').checked;
    
    if (email) {
        // Manipulative: even if unchecked, we "subscribe" them
        alert('🎉 Congratulations! Check your email for your FREE gift!\n\n(Fine print: You have been subscribed to our daily newsletter)');
        document.getElementById('emailInput').value = '';
    } else {
        alert('Please enter your email address');
    }
}

// Manipulative: Change button text on hover to create urgency
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn-primary');
    buttons.forEach(button => {
        const originalText = button.textContent;
        
        button.addEventListener('mouseenter', () => {
            button.textContent = '⚡ GRAB IT NOW - SELLING FAST!';
        });
        
        button.addEventListener('mouseleave', () => {
            button.textContent = originalText;
        });
    });
});

// Fake stock countdown - reduces "available stock" randomly
function decreaseStockRandomly() {
    const stockCounts = document.querySelectorAll('.stock-count');
    
    setInterval(() => {
        stockCounts.forEach(stockEl => {
            let currentStock = parseInt(stockEl.textContent);
            if (currentStock > 1) {
                // Randomly decrease by 1
                if (Math.random() > 0.7) {
                    stockEl.textContent = currentStock - 1;
                }
            } else {
                // Reset back to 3 to keep the scarcity going
                stockEl.textContent = 3;
            }
        });
    }, 15000); // Every 15 seconds
}

// Prevent easy closing of exit popup
document.getElementById('exitPopup')?.addEventListener('click', (e) => {
    if (e.target.id === 'exitPopup') {
        // Make it harder to close by clicking outside
        // Instead show another alert
        if (confirm('Are you sure you want to miss out on 90% OFF?')) {
            closePopup();
        }
    }
});

// Manipulative: Change page title when user switches tabs
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        document.title = '⚡ COME BACK! Your discount is expiring! ⚡';
    } else {
        document.title = 'TechDeals - Amazing Electronics Store';
    }
});

// Fake "low battery" warning on mobile (just for demonstration)
function showFakeLowBatteryWarning() {
    if (/Mobile|Android|iPhone/i.test(navigator.userAgent)) {
        setTimeout(() => {
            showNotification('⚠️ Low Battery Warning', 'Complete your purchase before your device dies!');
        }, 20000);
    }
}

// Deceptive: Auto-scroll to products after 3 seconds to increase engagement
setTimeout(() => {
    const productsSection = document.querySelector('.product-grid');
    if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}, 3000);

// Initialize all manipulative behaviors
window.addEventListener('DOMContentLoaded', () => {
    startCountdown();
    updateViewersCount();
    startProductTimers();
    showFakePurchaseNotifications();
    initExitPopup();
    decreaseStockRandomly();
    showFakeLowBatteryWarning();
    
    // Show welcome notification
    setTimeout(() => {
        showNotification('🎉 Welcome!', '847 people are shopping right now!');
    }, 2000);
});

// Manipulative: Make it harder to leave the page
window.addEventListener('beforeunload', (e) => {
    e.preventDefault();
    e.returnValue = 'Wait! Your items in cart will be lost. Are you sure you want to leave?';
    return e.returnValue;
});
