# Killeen New Hope Seventh-day Adventist Church Website

A modern, full-featured church website serving the community in Killeen, Texas.

## Church Information
- **Name:** Killeen New Hope Seventh-day Adventist Church
- **Location:** 5106 South Clear Creek Road, Killeen, TX 76549
- **Phone:** (254) 554-7113
- **Website:** killeennewhopesda.com

## Service Times
- **Saturdays:** 9:30 AM & 11:30 AM CT (in-house and virtual)
- **Bible Study:** Saturdays 4:00 PM CT
- **Prayer Meeting:** Wednesdays 7:00 PM CT
- **Prayer Line:** Sundays 5:00-6:00 PM CT

## Project Structure
```
/
├── index.html          # Homepage
├── about.html          # About page
├── worship.html        # Worship page
├── ministries.html     # Ministries page
├── events.html         # Events page
├── connect.html        # Connect page
├── give.html           # Give page
├── css/
│   ├── main.css        # Main stylesheet
│   ├── variables.css   # CSS custom properties
│   └── components.css  # Reusable components
├── js/
│   ├── main.js         # Main JavaScript
│   ├── calendar.js     # Calendar functionality
│   └── forms.js        # Form handling
├── images/             # Image assets
└── assets/             # Additional assets

```

## Features
- ✅ Responsive design (mobile-first)
- ✅ WCAG 2.1 AA accessibility compliance
- ✅ SEO optimized
- ✅ Fast loading performance
- ✅ Modern, clean design
- ✅ Interactive calendar
- ✅ Online giving integration
- ✅ Live streaming capability
- ✅ Contact and prayer request forms

## Technical Stack
- HTML5
- CSS3 (Grid, Flexbox, Custom Properties)
- Vanilla JavaScript (ES6+)
- No framework dependencies for core functionality

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility
- Keyboard navigation support
- Screen reader compatible
- High contrast ratios (4.5:1 minimum)
- Alt text for all images
- ARIA labels where appropriate
- Focus indicators

## Setup Instructions

### Local Development
1. Clone this repository
2. Open `index.html` in a web browser
3. For live reload during development, use a local server:
   ```bash
   python -m http.server 8000
   # or
   npx live-server
   ```

### Deployment
1. Upload all files to your web hosting provider
2. Ensure SSL certificate is configured
3. Update contact form endpoints
4. Configure donation platform integration
5. Set up analytics tracking

## Customization

### Colors
Edit `/css/variables.css` to customize the color palette:
- Primary colors (blues)
- Accent colors (gold/yellow)
- Neutral colors
- Semantic colors (success, warning, error)

### Typography
Fonts are defined in `/css/variables.css`:
- Heading font: Merriweather (serif)
- Body font: Open Sans (sans-serif)

### Content
Update content directly in HTML files or integrate with a CMS.

## Integrations

### Email Marketing
- Mailchimp or Constant Contact integration
- Newsletter signup forms included

### Donations
- Integration points for Tithe.ly, PayPal, or Stripe
- Secure checkout process

### Live Streaming
- YouTube Live embed ready
- Facebook Live compatible
- Custom streaming service integration

### Calendar
- Google Calendar sync capability
- iCal export functionality

## Maintenance

### Weekly
- Update events calendar
- Post new sermons
- Review contact form submissions

### Monthly
- Content updates
- Analytics review
- Security updates

### Quarterly
- Full content audit
- Photography refresh
- SEO review

## Support
For technical support or questions, contact the church office at (254) 554-7113.

## License
© 2024 Killeen New Hope Seventh-day Adventist Church. All rights reserved.
