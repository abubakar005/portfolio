# My Portfolio

A production-focused portfolio built with Next.js App Router, TypeScript, Tailwind CSS, and Framer Motion.

## Highlights

- Modern, responsive portfolio for a Senior Software Developer / Software Architect profile
- Dedicated pages for Home, About, Skills, Projects, Certifications, Contact, and a custom 404 page
- Light and dark mode with a persistent theme toggle
- Rule-based chatbot with editable Q&A sourced from `lib/site-content.ts`
- WhatsApp contact option with a floating action button
- Branded logo, favicon set, polished app icons, and social preview image
- SEO-focused metadata for each page
- robots.txt, sitemap.xml, web manifest, structured data, and social metadata
- Accessible navigation, skip link, focus states, and improved contact form UX
- Resend SMTP-ready contact flow with Reply-To support

## Getting Started

Use Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

## Environment Variables

Create a `.env.local` file for production metadata, WhatsApp, and email delivery.

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_WHATSAPP_NUMBER=
NEXT_PUBLIC_WHATSAPP_MESSAGE=Hi...

RESEND_API_KEY=
RESEND_FROM_EMAIL=
CONTACT_TO_EMAIL=
CONTACT_FROM_NAME=
HEALTHCHECK_TOKEN=
```

### Optional legacy SMTP fallback

If you want to keep using a generic SMTP server instead of Resend, these variables are still supported:

```bash
SMTP_HOST=
SMTP_PORT=587
SMTP_USER=
SMTP_PASS=
CONTACT_FROM_EMAIL=
```

## Contact Form Notes

The contact form posts to `/api/contact`.

The preferred setup uses Resend SMTP:

- host: `smtp.resend.com`
- port: `465`
- username: `resend`
- password: `RESEND_API_KEY`

The portfolio sends mail from `RESEND_FROM_EMAIL` and sets the visitor email as `Reply-To`, so replying in your inbox goes to the actual sender.

If neither Resend nor legacy SMTP credentials are configured, the API returns a configuration error instead of pretending the email was sent.

## WhatsApp Button

The WhatsApp button is shown only when `NEXT_PUBLIC_WHATSAPP_NUMBER` is set.

Use digits only or a standard international number. The app converts it to a `wa.me` link automatically.

## Customization

Most site content lives in `lib/site-content.ts`.

`lib/chatbot-data.ts` now only reads and resolves the chatbot entries from that central content file.

That makes it easy to update:

- personal summary
- navigation items
- skill groups
- projects
- certifications
- chatbot questions and answers
- contact details
- social profile URLs

## Branding and SEO Assets

The following public assets are already included:

- `public/branding/abubakar-mark.svg`
- `public/branding/favicon.svg`
- `public/og-image.png`
- `public/icon-192.png`
- `public/icon-512.png`
- `public/icon-maskable-512.png`
- `public/apple-touch-icon.png`
- `public/certifications/google-cloud-apigee.svg`
- `public/certifications/uipath.svg`

## Deployment

This project uses `output: "standalone"`, which makes it easier to deploy on Node.js hosts and in Docker-style environments.

Use these checks before deploying:

```bash
npm run typecheck
npm run build
```

Then either:

```bash
npm start
```

or deploy the standalone output from `.next/standalone`.

For best SEO results, set `NEXT_PUBLIC_SITE_URL` to your real production domain.
