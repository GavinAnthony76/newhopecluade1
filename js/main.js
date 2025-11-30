/**
 * Main JavaScript File
 * Killeen New Hope SDA Church Website
 */

// ============================================
// 1. MOBILE MENU TOGGLE
// ============================================
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');

  if (mobileMenuToggle && mobileNav) {
    mobileMenuToggle.addEventListener('click', function() {
      const isOpen = mobileNav.classList.contains('is-open');

      if (isOpen) {
        mobileNav.classList.remove('is-open');
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
        mobileMenuToggle.querySelector('span').textContent = '☰';
        document.body.style.overflow = '';
      } else {
        mobileNav.classList.add('is-open');
        mobileMenuToggle.setAttribute('aria-expanded', 'true');
        mobileMenuToggle.querySelector('span').textContent = '✕';
        document.body.style.overflow = 'hidden';
      }
    });

    // Close mobile menu when clicking a link
    const mobileNavLinks = mobileNav.querySelectorAll('a');
    mobileNavLinks.forEach(link => {
      link.addEventListener('click', function() {
        mobileNav.classList.remove('is-open');
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
        mobileMenuToggle.querySelector('span').textContent = '☰';
        document.body.style.overflow = '';
      });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
      const isClickInside = mobileNav.contains(event.target) || mobileMenuToggle.contains(event.target);
      if (!isClickInside && mobileNav.classList.contains('is-open')) {
        mobileNav.classList.remove('is-open');
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
        mobileMenuToggle.querySelector('span').textContent = '☰';
        document.body.style.overflow = '';
      }
    });
  }
});

// ============================================
// 2. SERVICE TIMES TOGGLE
// ============================================
document.addEventListener('DOMContentLoaded', function() {
  const toggleButtons = document.querySelectorAll('.service-times__toggle-btn');

  toggleButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Remove active class from all buttons
      toggleButtons.forEach(btn => btn.classList.remove('active'));

      // Add active class to clicked button
      this.classList.add('active');

      // Get attendance type
      const attendanceType = this.getAttribute('data-attendance');

      // Update action buttons based on selection
      const actionsContainer = document.querySelector('.service-times__actions');
      if (actionsContainer) {
        if (attendanceType === 'virtual') {
          // Show virtual-specific actions
          actionsContainer.innerHTML = `
            <a href="/worship.html#live-stream" class="btn btn--white btn--full">Join Live Stream</a>
            <a href="https://www.youtube.com/@killeennewhopesda" class="btn btn--secondary btn--full" target="_blank" rel="noopener">Watch on YouTube</a>
          `;
        } else {
          // Show in-person actions
          actionsContainer.innerHTML = `
            <a href="https://maps.google.com/?q=5106+South+Clear+Creek+Road,+Killeen,+TX+76549" class="btn btn--white btn--full" target="_blank" rel="noopener">Get Directions</a>
            <a href="/worship.html#live-stream" class="btn btn--secondary btn--full">Join Virtual Service</a>
          `;
        }
      }
    });
  });
});

// ============================================
// 3. ACTIVE NAVIGATION HIGHLIGHTING
// ============================================
document.addEventListener('DOMContentLoaded', function() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.main-nav a, .mobile-nav a');

  navLinks.forEach(link => {
    const linkPath = new URL(link.href).pathname;

    // Remove existing active classes
    link.classList.remove('active');
    link.removeAttribute('aria-current');

    // Add active class if paths match
    if (currentPath === linkPath ||
        (currentPath === '/' && linkPath === '/') ||
        (currentPath.includes(linkPath) && linkPath !== '/')) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });
});

// ============================================
// 4. SMOOTH SCROLLING FOR ANCHOR LINKS
// ============================================
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');

      // Skip if it's just '#'
      if (href === '#') {
        e.preventDefault();
        return;
      }

      const target = document.querySelector(href);

      if (target) {
        e.preventDefault();

        const headerHeight = document.querySelector('.site-header').offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });

        // Update focus for accessibility
        target.setAttribute('tabindex', '-1');
        target.focus();
      }
    });
  });
});

// ============================================
// 5. FORM VALIDATION & SUBMISSION
// ============================================
document.addEventListener('DOMContentLoaded', function() {
  const forms = document.querySelectorAll('form');

  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();

      // Get form inputs
      const formData = new FormData(form);
      const formId = form.getAttribute('id');

      // Basic validation
      const requiredFields = form.querySelectorAll('[required]');
      let isValid = true;

      requiredFields.forEach(field => {
        if (!field.value.trim()) {
          isValid = false;
          field.classList.add('error');

          // Add error message if it doesn't exist
          let errorMsg = field.parentElement.querySelector('.form-error');
          if (!errorMsg) {
            errorMsg = document.createElement('p');
            errorMsg.className = 'form-error';
            errorMsg.textContent = 'This field is required';
            field.parentElement.appendChild(errorMsg);
          }
        } else {
          field.classList.remove('error');
          const errorMsg = field.parentElement.querySelector('.form-error');
          if (errorMsg) {
            errorMsg.remove();
          }
        }
      });

      if (!isValid) {
        return;
      }

      // Form-specific handling
      if (formId === 'newsletter-form') {
        handleNewsletterSubmit(formData, form);
      } else if (formId === 'contact-form') {
        handleContactSubmit(formData, form);
      } else if (formId === 'prayer-request-form') {
        handlePrayerRequestSubmit(formData, form);
      } else {
        // Generic form submission
        handleGenericSubmit(formData, form);
      }
    });
  });
});

function handleNewsletterSubmit(formData, form) {
  // Show loading state
  const submitBtn = form.querySelector('button[type="submit"]');
  const originalText = submitBtn.textContent;
  submitBtn.textContent = 'Subscribing...';
  submitBtn.disabled = true;

  // Simulate API call (replace with actual endpoint)
  setTimeout(() => {
    // Show success message
    const successMsg = document.createElement('div');
    successMsg.className = 'alert alert--success';
    successMsg.textContent = 'Thank you for subscribing! Check your email to confirm.';
    successMsg.style.cssText = 'background-color: var(--color-success-light); color: var(--color-success); padding: var(--space-4); border-radius: var(--radius-md); margin-top: var(--space-4); text-align: center;';

    form.insertAdjacentElement('afterend', successMsg);

    // Reset form
    form.reset();
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;

    // Remove success message after 5 seconds
    setTimeout(() => {
      successMsg.remove();
    }, 5000);

    // TODO: Send to email marketing platform (Mailchimp, Constant Contact, etc.)
    console.log('Newsletter subscription:', Object.fromEntries(formData));
  }, 1000);
}

function handleContactSubmit(formData, form) {
  // Show loading state
  const submitBtn = form.querySelector('button[type="submit"]');
  const originalText = submitBtn.textContent;
  submitBtn.textContent = 'Sending...';
  submitBtn.disabled = true;

  // Simulate API call (replace with actual endpoint)
  setTimeout(() => {
    // Show success message
    const successMsg = document.createElement('div');
    successMsg.className = 'alert alert--success';
    successMsg.textContent = 'Thank you for your message! We\'ll get back to you soon.';
    successMsg.style.cssText = 'background-color: var(--color-success-light); color: var(--color-success); padding: var(--space-4); border-radius: var(--radius-md); margin-top: var(--space-4);';

    form.insertAdjacentElement('afterend', successMsg);

    // Reset form
    form.reset();
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;

    // Remove success message after 5 seconds
    setTimeout(() => {
      successMsg.remove();
    }, 5000);

    // TODO: Send to backend/email service
    console.log('Contact form submission:', Object.fromEntries(formData));
  }, 1000);
}

function handlePrayerRequestSubmit(formData, form) {
  // Show loading state
  const submitBtn = form.querySelector('button[type="submit"]');
  const originalText = submitBtn.textContent;
  submitBtn.textContent = 'Submitting...';
  submitBtn.disabled = true;

  // Simulate API call (replace with actual endpoint)
  setTimeout(() => {
    // Show success message
    const successMsg = document.createElement('div');
    successMsg.className = 'alert alert--success';
    successMsg.textContent = 'Your prayer request has been received. Our prayer team will lift you up in prayer.';
    successMsg.style.cssText = 'background-color: var(--color-success-light); color: var(--color-success); padding: var(--space-4); border-radius: var(--radius-md); margin-top: var(--space-4);';

    form.insertAdjacentElement('afterend', successMsg);

    // Reset form
    form.reset();
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;

    // Remove success message after 5 seconds
    setTimeout(() => {
      successMsg.remove();
    }, 5000);

    // TODO: Send to prayer team
    console.log('Prayer request submission:', Object.fromEntries(formData));
  }, 1000);
}

function handleGenericSubmit(formData, form) {
  console.log('Form submitted:', Object.fromEntries(formData));
  alert('Form submitted successfully!');
}

// ============================================
// 6. LIVE STREAM STATUS CHECK
// ============================================
function checkLiveStreamStatus() {
  const now = new Date();
  const day = now.getDay(); // 0 = Sunday, 6 = Saturday
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const currentTime = hours * 60 + minutes;

  let isLive = false;

  // Check if it's Saturday and within service times
  if (day === 6) { // Saturday
    // Sabbath School: 9:30 AM - 10:30 AM (570-630 minutes)
    // Divine Worship: 11:30 AM - 1:00 PM (690-780 minutes)
    // Bible Study: 4:00 PM - 5:00 PM (960-1020 minutes)
    if ((currentTime >= 570 && currentTime <= 630) ||
        (currentTime >= 690 && currentTime <= 780) ||
        (currentTime >= 960 && currentTime <= 1020)) {
      isLive = true;
    }
  } else if (day === 3) { // Wednesday
    // Prayer Meeting: 7:00 PM - 8:00 PM (1140-1200 minutes)
    if (currentTime >= 1140 && currentTime <= 1200) {
      isLive = true;
    }
  }

  // Update "Watch Live" button visibility
  const watchLiveBtn = document.getElementById('watch-live-btn');
  if (watchLiveBtn) {
    if (isLive) {
      watchLiveBtn.classList.remove('hidden');
      watchLiveBtn.classList.add('pulse'); // Add pulse animation
    } else {
      watchLiveBtn.classList.add('hidden');
    }
  }

  return isLive;
}

// Check live stream status on load and every minute
document.addEventListener('DOMContentLoaded', function() {
  checkLiveStreamStatus();
  setInterval(checkLiveStreamStatus, 60000); // Check every minute
});

// ============================================
// 7. LAZY LOADING IMAGES
// ============================================
document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('img[data-src]');

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        observer.unobserve(img);
      }
    });
  });

  images.forEach(img => imageObserver.observe(img));
});

// ============================================
// 8. ACCESSIBILITY: FOCUS VISIBLE
// ============================================
document.addEventListener('DOMContentLoaded', function() {
  // Add focus-visible polyfill behavior
  let hadKeyboardEvent = false;

  document.addEventListener('keydown', function() {
    hadKeyboardEvent = true;
  });

  document.addEventListener('mousedown', function() {
    hadKeyboardEvent = false;
  });

  document.addEventListener('focus', function(e) {
    if (hadKeyboardEvent) {
      e.target.classList.add('focus-visible');
    }
  }, true);

  document.addEventListener('blur', function(e) {
    e.target.classList.remove('focus-visible');
  }, true);
});

// ============================================
// 9. SCROLL TO TOP BUTTON
// ============================================
document.addEventListener('DOMContentLoaded', function() {
  // Create scroll to top button
  const scrollTopBtn = document.createElement('button');
  scrollTopBtn.innerHTML = '↑';
  scrollTopBtn.className = 'scroll-to-top';
  scrollTopBtn.setAttribute('aria-label', 'Scroll to top');
  scrollTopBtn.style.cssText = `
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: var(--color-primary);
    color: white;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    opacity: 0;
    transform: translateY(100px);
    transition: all 0.3s;
    z-index: 1000;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  `;

  document.body.appendChild(scrollTopBtn);

  // Show/hide scroll to top button
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      scrollTopBtn.style.opacity = '1';
      scrollTopBtn.style.transform = 'translateY(0)';
    } else {
      scrollTopBtn.style.opacity = '0';
      scrollTopBtn.style.transform = 'translateY(100px)';
    }
  });

  // Scroll to top on click
  scrollTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});

// ============================================
// 10. PRINT FRIENDLY
// ============================================
window.addEventListener('beforeprint', function() {
  // Expand any collapsed content for printing
  document.querySelectorAll('[aria-expanded="false"]').forEach(el => {
    el.setAttribute('data-was-collapsed', 'true');
    el.setAttribute('aria-expanded', 'true');
  });
});

window.addEventListener('afterprint', function() {
  // Collapse previously collapsed content
  document.querySelectorAll('[data-was-collapsed="true"]').forEach(el => {
    el.setAttribute('aria-expanded', 'false');
    el.removeAttribute('data-was-collapsed');
  });
});

// ============================================
// 11. ANALYTICS (Placeholder)
// ============================================
function trackEvent(category, action, label, value) {
  // Google Analytics 4 event tracking
  if (typeof gtag !== 'undefined') {
    gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value
    });
  }

  // Console log for development
  console.log('Event tracked:', { category, action, label, value });
}

// Track button clicks
document.addEventListener('DOMContentLoaded', function() {
  // Track CTA button clicks
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const btnText = this.textContent.trim();
      const btnHref = this.getAttribute('href');
      trackEvent('Button', 'Click', btnText, btnHref);
    });
  });

  // Track external links
  document.querySelectorAll('a[target="_blank"]').forEach(link => {
    link.addEventListener('click', function() {
      trackEvent('External Link', 'Click', this.href);
    });
  });
});
