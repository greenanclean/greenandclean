# greenanclean.com

Website for **Green & Clean**, an eco-friendly waste management service for salons, offices and homes across Kerala.

Built with Next.js 16 (App Router), React 19, TypeScript and Tailwind CSS 4. Every page is statically generated.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run check      # typecheck + lint + production build
```

Requires Node.js 20.9 or newer.

## Edit content

Most text lives in **`lib/site.ts`**: phone, email, address, services, waste lists, testimonials and FAQ.
Change it there and every page updates. Page titles and descriptions for search engines are in **`lib/seo.ts`**.

| Path | Purpose |
|---|---|
| `app/page.tsx` | Home page (hero, services, process, waste types, districts, testimonials, FAQ) |
| `app/about/page.tsx` | About page |
| `app/services/page.tsx` | Services page (anchors `#salon`, `#commercial`, `#residential`) |
| `app/contact/page.tsx`, `components/ContactForm.tsx` | Contact page and enquiry form |
| `components/` | Header, footer, shared UI |
| `public/images/` | Photos and logo |
| `app/favicon.ico`, `app/icon.png`, `app/apple-icon.png`, `public/icons/` | Favicons and app icons |
| `lib/og.tsx`, `app/**/opengraph-image.tsx` | Social share images (1200×630, generated at build time) |

## SEO built in

- A unique title, meta description and canonical URL on every page
- Open Graph and Twitter cards with a branded share image for each page
- JSON-LD structured data: LocalBusiness, WebSite, Service, FAQPage, BreadcrumbList, AboutPage and ContactPage
- `sitemap.xml` (including images), `robots.txt`, a web app manifest and `llms.txt`
- Favicon (`.ico`), PNG icon, Apple touch icon and maskable Android icon
- Vercel preview deployments are set to `noindex`; only production is indexed
- Security headers, with `x-powered-by` removed

## Contact form

There is no backend yet. Submitting the form opens the visitor's email app with the enquiry filled in and addressed to
`greenancleanwm@gmail.com`. To receive submissions directly, add an API route (for example with Resend).

## Deploy on Vercel

1. In Vercel, choose **Add New → Project**, import this GitHub repository and keep the defaults (framework: Next.js).
2. Under **Settings → Domains**, add `greenanclean.com` and `www.greenanclean.com`, then point DNS at Vercel as instructed.
   Set `www` to redirect to the bare domain.
3. In Google Search Console, add the property `https://greenanclean.com`. To verify with the HTML tag method, set the
   `GOOGLE_SITE_VERIFICATION` environment variable in Vercel and redeploy (DNS verification also works).
   Then submit `https://greenanclean.com/sitemap.xml`.
