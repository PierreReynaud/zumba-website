# Pelvic Floor Training Nottinghamshire

A simple static website scaffold for [INSTRUCTOR_NAME]'s hypopressive training.

The site is designed to stay free to run on Cloudflare Pages. It uses plain HTML and CSS only: no framework, no build step, no database, no booking system, no CMS, and no contact form.

## Files

- `index.html`: page content, SEO placeholders, Open Graph placeholders, and TODO comments.
- `styles.css`: responsive styling for mobile, tablet, and desktop.
- `assets/images/`: placeholder image location. Replace placeholders with approved real photos.
- `CONTENT-QUESTIONS.md`: checklist of details to ask before filling in the website.
- `PRIVACY-NOTES.md`: practical privacy notes before publishing.

There is no `script.js` because the current scaffold does not need JavaScript.

## How To Edit

Open `index.html` and replace obvious placeholders such as:

- `[INSTRUCTOR_NAME]`
- `[LOCATION]`
- `[SESSION_FORMAT]`
- `[DAY_AND_TIME]`
- `[PRICE]`
- `[PHONE_NUMBER]`
- `[EMAIL_ADDRESS]`
- `[WHATSAPP_BUSINESS_NUMBER]`
- `[QUALIFICATIONS]`

Search for `TODO:` comments in `index.html` before publishing. They mark wording, images, and details that should be checked with the instructor.

For WhatsApp links, use the WhatsApp Business number in international format without `+`, spaces, or brackets. Replace `[WHATSAPP_BUSINESS_NUMBER]` only after the number is confirmed.

## Images

Replace `assets/images/instructor-placeholder.svg` with an approved instructor or session photo if one should appear on the site.

Before using any photos, confirm that every visible person has given permission for the photo to be published.

## Test Locally

Because this is a static site, you can test it by opening `index.html` in a browser.

Check:

- Navigation links move to the right page sections.
- Contact placeholders have been replaced or removed before launch.
- Text reads clearly on a phone-sized screen.
- Keyboard focus is visible when tabbing through links.
- Any health-related wording has been approved before publishing.

## Deploy On Cloudflare Pages

1. Push this repository to GitHub.
2. In Cloudflare, go to **Workers & Pages**.
3. Create a Pages project and connect the GitHub repository.
4. Use these build settings:
   - Framework preset: **None / Static HTML**
   - Build command: leave empty
   - Build output directory: `/`
5. Deploy the site.

A custom domain can be added later, but it is optional. The free Cloudflare Pages URL is enough to start.

No contact form or database is used. Visitors are directed to phone, email, or WhatsApp placeholders until confirmed contact details are added.
