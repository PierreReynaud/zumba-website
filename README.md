# Hypopressive Pelvic Floor Training Website

A short, accessible static website for hypopressive pelvic-floor training in Nottinghamshire.

The site uses plain HTML, CSS and a small progressive-enhancement script for the mobile navigation.
There is no framework, build step, database, booking system, CMS, contact form or analytics.

## Files

- `index.html`: page structure, copy, metadata and FAQ content.
- `styles.css`: responsive layout, colour system, focus treatment and reduced-motion support.
- `script.js`: optional mobile navigation enhancement. The full navigation remains available if JavaScript is unavailable.
- `assets/images/`: approved session-image selections and sourced online visuals used as illustrative examples.
- `ASSET-SOURCES.md`: source pages, creators, licence notes and intended use for online assets.
- `CONTENT-QUESTIONS.md`: information still needed before publication.
- `PRIVACY-NOTES.md`: practical privacy notes before publishing.

## Confirm details before launch

The page deliberately omits unconfirmed instructor, business, venue, format, price, availability and contact information. Add only details that have been verified by the service owner.

Before publishing, confirm:

- instructor and business name;
- qualifications and any other credentials to display;
- town, venue or service area;
- in-person, online or mixed format;
- session duration and price;
- availability and booking process;
- preferred monitored contact route and expected reply time;
- cancellation and payment information; and
- permission to publish every visible person in the session images (confirmed for the current photos).

Review the health and suitability wording with the instructor and, where appropriate, a qualified healthcare professional. The symptom-awareness signpost is general information, not a diagnostic checklist, and the external anatomy image should be reviewed for context before publication.

## Test locally

Open `index.html` in a browser or serve the folder with any simple static web server.

Check the page at 320px, 375px, 390px and a desktop width. Test keyboard focus, the skip link, the mobile menu, every anchor, the native FAQ controls, 200% text resizing, 400% zoom/reflow, forced-colour mode and reduced-motion preferences.

Also confirm that no contact control is added until its destination is valid and monitored.

## Deploy on Cloudflare Pages

1. Push the repository to GitHub.
2. In Cloudflare, open **Workers & Pages**.
3. Create a Pages project and connect the repository.
4. Use the **None / Static HTML** framework preset.
5. Leave the build command empty and use `/` as the output directory.

No deployment or hosting configuration is changed by this repository update.
