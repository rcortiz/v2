# Ralph Ortiz Portfolio

The source for [rcortiz.dev](https://rcortiz.dev), my personal portfolio as an AI & Software Engineer. It presents selected projects, professional experience, certifications, and ways to get in touch through a monochrome neobrutalist interface.

## Features

- Responsive neobrutalist layout with light and dark themes
- Home, Projects, Experience, and Certifications routes
- Reorderable project cards with keyboard and touch support
- Contact form with validation, EmailJS delivery, and Sonner feedback
- Responsive custom cursor and animated theme controls
- Route transitions and accessible keyboard interactions
- SEO metadata, canonical URLs, sitemap, robots directives, Open Graph image, and JSON-LD
- Deterministic GitHub-style contribution visualization

## Routes

| Route             | Content                                                           |
| ----------------- | ----------------------------------------------------------------- |
| `/`               | Profile, current role, contact actions, and contribution activity |
| `/projects`       | Selected web products and Shopify custom apps                     |
| `/experience`     | Professional software engineering experience                      |
| `/certifications` | AWS, Shopify, Liquid, and Scrum credentials                       |

## Tech Stack

- [Next.js](https://nextjs.org/) and React
- Tailwind CSS
- Radix UI primitives
- Framer Motion
- dnd kit
- React Hook Form and Yup
- EmailJS
- Sonner
- Vercel Analytics

## Local Development

Use Node.js 20.19 or newer and install the project dependencies:

```bash
npm install
```

Create `.env.local` for contact-form delivery:

```bash
NEXT_PUBLIC_EMAIL_SERVICE_ID=
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=
```

If EmailJS returns `412 Gmail_API: Invalid grant`, reconnect the Gmail service
from the EmailJS **Email Services** dashboard and send its test email before
testing the contact form again.

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available Scripts

| Command         | Purpose                                    |
| --------------- | ------------------------------------------ |
| `npm run dev`   | Start the local Next.js development server |
| `npm run build` | Create an optimized production build       |
| `npm run start` | Serve the production build                 |
| `npm run lint`  | Run the Next.js ESLint checks              |

## Updating Content

Portfolio content is stored as local constants in [`src/constants/index.js`](src/constants/index.js). Update that file to change navigation entries, projects, experience, or certifications.

Site-wide metadata and reusable SEO values live in [`src/utils/site.js`](src/utils/site.js). Route-specific metadata and structured data are defined alongside each page in [`src/app`](src/app).

## Public Use Notice

This repository is public so other developers can study the implementation, learn from it, and use it as inspiration for their own work. You are welcome to adapt individual ideas, interaction patterns, or technical approaches.

Please do not copy the portfolio in its entirety or publish a substantially identical version as your own. This includes the complete layout, visual identity, written content, personal branding, resume, and original assets. Build on the ideas, replace the content and assets, and create a design direction that represents you.

Public source code does not make the personal content or portfolio identity public-domain material.

## Deployment

The application is designed for deployment on [Vercel](https://vercel.com/). Configure the EmailJS environment variables in the deployment environment before publishing.
