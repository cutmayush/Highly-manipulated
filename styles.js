* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
    background: #f5f5f5;
    color: #333;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Urgency Banner - manipulative flashing */
.urgency-banner {
    background: linear-gradient(90deg, #E94B3C, #C0392B);
    color: white;
    text-align: center;
    padding: 15px;
    font-weight: bold;
    font-size: 16px;
    position: sticky;
    top: 0;
    z-index: 1000;
    box-shadow: 0 2px 10px rgba(0,0,0,0.3);
}

.blink {
    animation: blinker 1.5s linear infinite;
}

@keyframes blinker {
    50% {
        opacity: 0.5;
    }
}

/* Header */
header {
    background: white;
    padding: 20px 0;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    position: sticky;
    top: 51px;
    z-index: 999;
}

header .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

header h1 {
    color: #2C3E50;
    font-size: 32px;
}

.cart-icon {
    font-size: 18px;
    cursor: pointer;
    background: #E94B3C;
    color: white;
    padding: 10px 20px;
    border-radius: 25px;
    font-weight: bold;
}

/* Main Content */
main {
    padding: 30px 20px;
}

/* Alert Box */
.alert-box {
    background: #FFF3CD;
    border: 2px solid #FFC107;
    padding: 15px;
    border-radius: 8px;
    margin-bottom: 30px;
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    color: #856404;
    animation: pulse 2s infinite;
}

@keyframes pulse {
    0%, 100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.02);
    }
}

.stock-count {
    color: #E94B3C;
    font-size: 20px;
}

/* Product Grid */
.product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 25px;
    margin-bottom: 50px;
}

.product-card {
    background: white;
    border-radius: 12px;
    padding: 20px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    position: relative;
    transition: transform 0.3s;
}

.product-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}

.badge-sale {
    position: absolute;
    top: 15px;
    left: 15px;
    background: #E94B3C;
    color: white;
    padding: 8px 15px;
    border-radius: 20px;
    font-weight: bold;
    font-size: 14px;
    z-index: 10;
}

.badge-limited {
    position: absolute;
    top: 15px;
    right: 15px;
    background: #2C3E50;
    color: white;
    padding: 8px 15px;
    border-radius: 20px;
    font-weight: bold;
    font-size: 12px;
    animation: shake 0.5s infinite;
}

.badge-hot {
    position: absolute;
    top: 55px;
    right: 15px;
    background: #FF6B35;
    color: white;
    padding: 8px 15px;
    border-radius: 20px;
    font-weight: bold;
    font-size: 12px;
}

@keyframes shake {
    0%, 100% { transform: rotate(-3deg); }
    50% { transform: rotate(3deg); }
}

.product-card img {
    width: 100%;
    border-radius: 8px;
    margin-bottom: 15px;
}

.product-card h3 {
    font-size: 20px;
    margin-bottom: 10px;
    color: #2C3E50;
}

.fake-reviews {
    color: #FFA500;
    margin-bottom: 10px;
    font-size: 16px;
}

.price-container {
    margin: 15px 0;
}

.original-price {
    text-decoration: line-through;
    color: #999;
    font-size: 18px;
    margin-right: 10px;
}

.sale-price {
    color: #E94B3C;
    font-size: 28px;
    font-weight: bold;
}

.fake-claim {
    background: #E8F5E9;
    padding: 8px;
    border-radius: 5px;
    font-size: 14px;
    margin: 10px 0;
    color: #2E7D32;
    font-weight: 600;
}

.scarcity {
    color: #E94B3C;
    font-weight: bold;
    margin: 10px 0;
    font-size: 15px;
}

.timer {
    background: #333;
    color: white;
    padding: 3px 8px;
    border-radius: 4px;
}

.btn-primary {
    width: 100%;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    padding: 15px;
    font-size: 18px;
    font-weight: bold;
    border-radius: 8px;
    cursor: pointer;
    margin: 10px 0;
    transition: transform 0.2s;
}

.btn-primary:hover {
    transform: scale(1.05);
    box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
}

.social-proof {
    color: #27AE60;
    font-size: 13px;
    margin-top: 8px;
    font-weight: 600;
}

/* Testimonials */
.testimonials {
    background: white;
    padding: 40px;
    border-radius: 12px;
    margin-bottom: 40px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.testimonials h2 {
    text-align: center;
    margin-bottom: 30px;
    color: #2C3E50;
    font-size: 28px;
}

.testimonial-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}

.testimonial {
    background: #F8F9FA;
    padding: 20px;
    border-radius: 8px;
    border-left: 4px solid #667eea;
}

.testimonial p {
    font-style: italic;
    margin-bottom: 10px;
    color: #555;
}

.testimonial strong {
    color: #2C3E50;
}

.testimonial small {
    color: #27AE60;
    font-size: 12px;
}

/* Newsletter Section - Hidden subscription trick */
.newsletter-section {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 40px;
    border-radius: 12px;
    text-align: center;
}

.newsletter-section h3 {
    font-size: 28px;
    margin-bottom: 15px;
}

.email-input {
    width: 100%;
    max-width: 400px;
    padding: 15px;
    font-size: 16px;
    border: none;
    border-radius: 8px;
    margin: 20px 0;
}

.checkbox-container {
    margin: 15px 0;
    text-align: left;
    max-width: 400px;
    margin: 15px auto;
}

.small-text {
    font-size: 10px;
    opacity: 0.7;
    cursor: pointer;
}

.btn-secondary {
    background: #FFA500;
    color: white;
    border: none;
    padding: 15px 40px;
    font-size: 20px;
    font-weight: bold;
    border-radius: 8px;
    cursor: pointer;
    margin-top: 10px;
    transition: transform 0.2s;
}

.btn-secondary:hover {
    transform: scale(1.05);
}

/* Exit Popup */
.popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.8);
    z-index: 10000;
    display: flex;
    justify-content: center;
    align-items: center;
}

.popup-content {
    background: white;
    padding: 40px;
    border-radius: 15px;
    text-align: center;
    max-width: 500px;
    box-shadow: 0 10px 50px rgba(0,0,0,0.5);
    animation: slideIn 0.5s;
}

@keyframes slideIn {
    from {
        transform: scale(0.7);
        opacity: 0;
    }
    to {
        transform: scale(1);
        opacity: 1;
    }
}

.popup-content h2 {
    color: #E94B3C;
    font-size: 32px;
    margin-bottom: 20px;
}

.popup-countdown {
    font-size: 48px;
    color: #E94B3C;
    font-weight: bold;
    margin: 20px 0;
    font-family: 'Courier New', monospace;
}

.btn-huge {
    background: linear-gradient(135deg, #27AE60, #229954);
    color: white;
    border: none;
    padding: 20px 40px;
    font-size: 24px;
    font-weight: bold;
    border-radius: 12px;
    cursor: pointer;
    margin: 20px 0;
    animation: buttonPulse 1.5s infinite;
}

@keyframes buttonPulse {
    0%, 100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.05);
    }
}

.tiny-text {
    font-size: 11px;
    color: #999;
    margin-top: 15px;
}

/* Fake Notification Popups */
#notificationContainer {
    position: fixed;
    bottom: 20px;
    left: 20px;
    z-index: 9999;
}

.notification {
    background: white;
    padding: 15px 20px;
    border-radius: 8px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    margin-bottom: 10px;
    border-left: 4px solid #27AE60;
    animation: slideInLeft 0.5s;
    max-width: 300px;
}

@keyframes slideInLeft {
    from {
        transform: translateX(-100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

.notification strong {
    color: #2C3E50;
}

.notification small {
    color: #999;
    font-size: 11px;
}

/* Responsive */
@media (max-width: 768px) {
    .product-grid {
        grid-template-columns: 1fr;
    }
    
    .urgency-banner {
        font-size: 14px;
    }
    
    .popup-content {
        margin: 20px;
        padding: 30px 20px;
    }
}
