# Quick Start Guide
## Killeen New Hope SDA Church Website

This guide will help you get the website up and running quickly.

## ⚡ Instant Setup

### 1. View the Website Locally

```bash
# Option 1: Open directly in browser
open index.html

# Option 2: Use Python's built-in server
python3 -m http.server 8000
# Then visit: http://localhost:8000

# Option 3: Use PHP's built-in server
php -S localhost:8000

# Option 4: Use Node's http-server
npx http-server -p 8000
```

### 2. File Structure

```
├── index.html          ← Homepage (COMPLETE)
├── about.html          ← About page (COMPLETE)
├── worship.html        ← Worship & sermons
├── ministries.html     ← All ministries
├── events.html         ← Events calendar
├── connect.html        ← Contact forms
├── give.html           ← Online giving
├── css/               ← Stylesheets
├── js/                ← JavaScript
└── images/            ← Add your images here
```

### 3. Add Your Content

**Replace Placeholders:**
- `[Pastor Name]` → Your pastor's name
- `[Year]` → Church founding year
- Email addresses → Real email addresses
- Social media links → Your actual links

**Add Images:**
```
/images/logo.svg                    ← Church logo
/images/hero/worship-hero.jpg       ← Hero background
/images/about/pastor-photo.jpg      ← Pastor photo
/images/events/*.jpg                ← Event photos
```

### 4. Customize Colors

Edit `/css/variables.css`:

```css
:root {
  --color-primary: #2c5282;     ← Your primary color
  --color-accent: #d69e2e;      ← Your accent color
}
```

### 5. Deploy

**Option A: Netlify (Easiest)**
1. Push code to GitHub
2. Connect Netlify to repository
3. Deploy automatically

**Option B: Traditional Hosting**
1. Upload all files via FTP
2. Point domain to hosting
3. Done!

## 📋 Quick Customization Checklist

- [ ] Replace church logo
- [ ] Add pastor photo and bio
- [ ] Update service times if different
- [ ] Add real email addresses
- [ ] Update phone number verification
- [ ] Add social media links
- [ ] Replace placeholder images
- [ ] Test all forms
- [ ] Update Google Maps embed
- [ ] Add YouTube live stream link
- [ ] Configure donation platform
- [ ] Set up email marketing integration
- [ ] Add Google Analytics ID

## 🎯 Priority Tasks

**Week 1:**
1. Add real images
2. Update pastor/staff information
3. Review and edit all content
4. Test on mobile devices

**Week 2:**
1. Set up donation platform
2. Configure email forms
3. Add event details
4. Test all functionality

**Week 3:**
1. SEO optimization
2. Performance testing
3. Accessibility audit
4. Final review

**Week 4:**
1. Deploy to production
2. DNS configuration
3. SSL certificate
4. Monitor and adjust

## 🔧 Common Tasks

### Add a New Event

Edit `/events.html` and add:

```html
<div class="card">
  <img src="/images/events/your-event.jpg" alt="Event name" class="card__image">
  <div class="card__content">
    <div class="card__meta">
      <span>📅 Date</span>
      <span>⏰ Time</span>
    </div>
    <h3 class="card__title">Event Title</h3>
    <p class="card__description">Description...</p>
    <a href="#" class="btn btn--primary btn--small">Register</a>
  </div>
</div>
```

### Update Service Times

Edit all pages and update these sections:
- Homepage service times widget
- Footer service times
- Worship page schedule

### Change Contact Information

Update in:
- `index.html` (footer)
- `about.html` (contact section)  
- `connect.html` (contact page)

## 📞 Need Help?

- Check `STYLE_GUIDE.md` for design guidelines
- See `IMPLEMENTATION_STATUS.md` for feature details
- Review `BUILD_SUMMARY.md` for complete overview

## 🚀 You're Ready!

The website is production-ready. Just add your content and deploy!
