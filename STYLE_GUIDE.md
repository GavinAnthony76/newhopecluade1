# Website Style Guide
## Killeen New Hope Seventh-day Adventist Church

---

## Table of Contents
1. [Brand Identity](#brand-identity)
2. [Color Palette](#color-palette)
3. [Typography](#typography)
4. [Spacing](#spacing)
5. [Components](#components)
6. [Writing Style](#writing-style)
7. [Image Guidelines](#image-guidelines)
8. [Accessibility](#accessibility)

---

## Brand Identity

### Mission
To share God's love and the hope of Christ's soon return through worship, fellowship, and service to our Killeen community.

### Voice & Tone
- **Warm and welcoming** - Make everyone feel at home
- **Authentic and genuine** - Real stories, real people
- **Hope-filled** - Focus on God's promises and future
- **Clear and accessible** - Avoid unnecessary jargon
- **Action-oriented** - Encourage participation and engagement

### Audience
- **Primary:** Killeen residents, military families (Fort Cavazos), first-time visitors
- **Secondary:** Seventh-day Adventists relocating to the area, online worshippers
- **Tertiary:** People seeking spiritual community, truth-seekers

---

## Color Palette

### Primary Colors (Blues)
Represent trust, peace, and spirituality

```
Navy Blue (Dark)
HEX: #1a365d
RGB: 26, 54, 93
Usage: Headers, important text, primary buttons (hover)

Royal Blue (Medium)
HEX: #2c5282
RGB: 44, 82, 130
Usage: Primary buttons, links, accents

Sky Blue (Light)
HEX: #4299e1
RGB: 66, 153, 225
Usage: Hover states, highlights, active elements

Powder Blue (Lightest)
HEX: #ebf8ff
RGB: 235, 248, 255
Usage: Backgrounds, subtle highlights
```

### Accent Colors (Gold/Yellow)
Represent warmth, hope, and divine light

```
Gold (Dark)
HEX: #b7791f
RGB: 183, 121, 31
Usage: Special emphasis, awards, achievements

Gold (Medium)
HEX: #d69e2e
RGB: 214, 158, 46
Usage: "Give" buttons, calls-to-action, highlights

Yellow (Light)
HEX: #f6e05e
RGB: 246, 224, 94
Usage: Backgrounds, gentle emphasis

Yellow (Lightest)
HEX: #fefcbf
RGB: 254, 252, 191
Usage: Subtle backgrounds, newsletter sections
```

### Earth Tones
Represent grounding and community

```
Brown (Dark)
HEX: #744210
RGB: 116, 66, 16

Brown (Medium)
HEX: #975a16
RGB: 151, 90, 22

Orange-Brown
HEX: #c05621
RGB: 192, 86, 33
Usage: Secondary accents, community service themes
```

### Neutrals
For text, backgrounds, and UI elements

```
Black: #1a202c
Dark Gray: #2d3748
Medium Gray: #718096
Light Gray: #e2e8f0
Off-White: #f7fafc
White: #ffffff
```

### Usage Guidelines

**DO:**
- Use primary blue for most interactive elements
- Use gold/yellow for donation and special CTAs
- Maintain sufficient contrast (4.5:1 minimum)
- Use neutrals for body text and backgrounds

**DON'T:**
- Don't use too many colors on one page
- Don't use low-contrast color combinations
- Don't use red unless for errors/warnings

---

## Typography

### Font Families

**Headings:** Merriweather (Serif)
```css
font-family: 'Merriweather', Georgia, 'Times New Roman', serif;
```
- Traditional yet readable
- Conveys trust and established presence
- Weights: 300 (Light), 400 (Regular), 700 (Bold), 900 (Black)

**Body Text:** Open Sans (Sans-serif)
```css
font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
```
- Clean and modern
- Excellent readability on screens
- Weights: 300 (Light), 400 (Regular), 600 (Semibold), 700 (Bold)

### Font Sizes (Responsive)

```
Extra Small: 12-14px (form labels, meta info)
Small: 14-16px (secondary text, captions)
Base: 16-18px (body text) - MINIMUM
Medium: 18-20px (lead paragraphs)
Large: 20-24px (section subheadings)
XL: 24-32px (card titles)
2XL: 32-40px (page headings)
3XL: 40-56px (section headings)
4XL: 48-72px (hero headings)
```

### Typography Scale Usage

**H1 (Hero Titles)**
- Font: Merriweather Bold
- Size: 48-72px (responsive)
- Line Height: 1.25
- Usage: Hero sections only

**H2 (Page Headings)**
- Font: Merriweather Bold
- Size: 40-56px (responsive)
- Line Height: 1.25
- Usage: Main page sections

**H3 (Section Headings)**
- Font: Merriweather Bold
- Size: 32-40px (responsive)
- Line Height: 1.25
- Usage: Content sections

**H4-H6 (Sub-headings)**
- Font: Merriweather Semibold/Bold
- Size: 20-32px (responsive)
- Line Height: 1.375
- Usage: Component headings

**Body Text**
- Font: Open Sans Regular
- Size: 16-18px (responsive)
- Line Height: 1.625
- Color: #2d3748

**Lead Paragraph**
- Font: Open Sans Regular
- Size: 18-20px (responsive)
- Line Height: 1.625
- Usage: Opening paragraphs, emphasis

---

## Spacing

### Spacing Scale

```
0:  0px
1:  4px
2:  8px
3:  12px
4:  16px (base unit)
5:  20px
6:  24px
8:  32px
10: 40px
12: 48px
16: 64px
20: 80px
24: 96px
32: 128px
```

### Usage Guidelines

**Micro Spacing (4-12px)**
- Between related elements
- Icon and text spacing
- Form field internal padding

**Small Spacing (16-24px)**
- Paragraph margins
- Component internal spacing
- Card padding

**Medium Spacing (32-48px)**
- Between sections on a page
- Component groups
- Margins around key elements

**Large Spacing (64-128px)**
- Between major page sections
- Top/bottom page padding

---

## Components

### Buttons

**Primary Button**
```html
<a href="#" class="btn btn--primary">Primary Action</a>
```
- Blue background (#2c5282)
- White text
- Rounded corners (8px)
- Padding: 12px 24px
- Usage: Main calls-to-action

**Secondary Button**
```html
<a href="#" class="btn btn--secondary">Secondary Action</a>
```
- Transparent background
- Blue border and text
- Hover: Fill with blue
- Usage: Alternative actions

**Accent Button (Give)**
```html
<a href="#" class="btn btn--accent">Give</a>
```
- Gold background (#d69e2e)
- Dark text
- Usage: Donations, special offers

**Button Sizes**
- Small: 8px 16px (compact areas)
- Default: 12px 24px (standard)
- Large: 16px 32px (hero sections)

**Accessibility**
- Minimum 44x44px touch target
- Clear focus indicators
- Descriptive labels

### Cards

**Standard Card**
```html
<div class="card">
  <img src="..." class="card__image" alt="...">
  <div class="card__content">
    <h3 class="card__title">Title</h3>
    <p class="card__description">Description...</p>
    <a href="#" class="btn">Action</a>
  </div>
</div>
```

**Card Specifications:**
- Border radius: 16px
- Shadow: Medium (elevation)
- Hover: Lift effect
- Image aspect ratio: 16:9

### Forms

**Form Fields**
- Border: 2px solid #cbd5e0
- Border radius: 6px
- Padding: 12px 16px
- Focus: Blue border + glow
- Font size: 16px minimum (prevents zoom on iOS)

**Labels**
- Font: Open Sans Medium
- Color: #4a5568
- Required indicator: Red asterisk

**Validation**
- Success: Green border
- Error: Red border + error message below
- Help text: Gray, small font

---

## Writing Style

### Voice Guidelines

**DO:**
- Write in second person ("you")
- Use active voice
- Keep sentences short and clear
- Use contractions (we're, you'll)
- Tell stories and share testimonies
- Be specific with details
- Include clear calls-to-action

**DON'T:**
- Use excessive religious jargon
- Write passive sentences
- Create long, complex paragraphs
- Assume prior knowledge
- Be vague or generic
- Use corporate-speak

### Tone Examples

❌ **Too Formal:**
"The ecclesiastical leadership of our congregation cordially invites you to partake in our Sabbath worship observance."

✅ **Better:**
"We'd love to have you join us for Sabbath worship this Saturday!"

❌ **Too Casual:**
"Hey! Come hang out with us Saturday morning. It's gonna be lit!"

✅ **Better:**
"Join us this Saturday for uplifting worship, biblical teaching, and warm fellowship."

### Common Terms

**Preferred:**
- Sabbath (not "Saturday service")
- Divine Worship (for main service)
- Sabbath School (not "Sunday School")
- Church family (not "congregation")
- Join us (not "attend")
- Connect (not "membership")

---

## Image Guidelines

### Image Specifications

**Hero Images**
- Dimensions: 1920 x 1080px minimum
- Format: WebP with JPG fallback
- File size: < 500KB (optimized)
- Subject: Worship, community, church building

**Event Cards**
- Dimensions: 800 x 450px (16:9 ratio)
- Format: WebP with JPG fallback
- File size: < 200KB

**Ministry Icons/Photos**
- Dimensions: 600 x 600px (square)
- Format: WebP with JPG fallback
- File size: < 150KB

**Leadership Photos**
- Dimensions: 600 x 800px (3:4 ratio)
- Format: WebP with JPG fallback
- File size: < 150KB
- Style: Professional headshots, natural backgrounds

### Photography Style

**DO:**
- Show diverse ages and ethnicities
- Capture authentic moments
- Use natural lighting when possible
- Show people engaged and happy
- Get photo permissions/releases

**DON'T:**
- Use overly staged photos
- Include copyrighted images without permission
- Use low-resolution images
- Show people from unflattering angles

### Alt Text

Every image must have descriptive alt text:

❌ **Bad:** `alt="image1"`
✅ **Good:** `alt="Children participating in Sabbath School activity"`

❌ **Bad:** `alt="photo"`
✅ **Good:** `alt="Youth group at winter retreat, gathered around campfire"`

---

## Accessibility

### WCAG 2.1 AA Compliance

**Color Contrast**
- Text: 4.5:1 minimum
- Large text (18pt+): 3:1 minimum
- Use tools to verify: WebAIM Contrast Checker

**Keyboard Navigation**
- All interactive elements accessible via keyboard
- Visible focus indicators
- Logical tab order

**Screen Readers**
- Semantic HTML (header, nav, main, footer)
- ARIA labels where needed
- Skip to main content link
- Image alt text
- Form labels properly associated

**Responsive Design**
- Text must be resizable to 200%
- No horizontal scrolling at 320px width
- Touch targets minimum 44x44px

### Testing

**Tools:**
- WAVE Browser Extension
- Lighthouse Audit (Chrome DevTools)
- axe DevTools
- Keyboard-only navigation test
- Screen reader test (NVDA, JAWS, VoiceOver)

---

## Quick Reference

### Common Patterns

**Section Heading:**
```html
<section class="section">
  <div class="container">
    <div class="text-center mb-12">
      <h2>Section Title</h2>
      <p class="text-gray">Subtitle or description</p>
    </div>
    <!-- Content here -->
  </div>
</section>
```

**Card Grid:**
```html
<div class="grid grid--3">
  <div class="card">...</div>
  <div class="card">...</div>
  <div class="card">...</div>
</div>
```

**Call-to-Action:**
```html
<div class="text-center mt-8">
  <a href="#" class="btn btn--primary btn--large">Take Action</a>
</div>
```

---

## Resources

### Design Tools
- Figma/Adobe XD (for mockups)
- Coolors.co (color palette generator)
- Google Fonts (typography)
- TinyPNG (image compression)

### Development Tools
- VS Code (code editor)
- Chrome DevTools (debugging)
- Lighthouse (performance testing)
- WAVE (accessibility testing)

### Content Creation
- Canva (graphics)
- Unsplash/Pexels (stock photos)
- Grammarly (writing assistance)
- Hemingway Editor (readability)

---

**Document Version:** 1.0
**Last Updated:** November 30, 2024
**Maintained By:** Web Development Team
