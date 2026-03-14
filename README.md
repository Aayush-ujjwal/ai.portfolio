# Aayush Ujjwal – Portfolio

Personal portfolio for **Aayush Ujjwal** — AI Engineer, Data Scientist & Full Stack Developer. Built with React, TypeScript, GSAP, and Three.js.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) (or the URL shown in the terminal).

## Build for production

```bash
npm run build
npm run preview
```

## Deploy on Vercel

1. Push this repo to GitHub (or connect your existing repo).
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
3. Click **Add New Project** and import this repository.
4. Leave **Build Command** as `npm run build` and **Output Directory** as `dist` (Vite default).
5. Click **Deploy**. Vercel will build and host the site.

**Optional:** Add a resume PDF at `public/resume.pdf` so the “Resume” button works. Update `src/data/portfolioData.ts` with your real email, GitHub, LinkedIn, and resume URL if needed.

## Customization

Edit `src/data/portfolioData.ts` to update:

- Name, title, bio, location  
- Projects, skills, experience, education, courses  
- Contact email and social links  

## Tech stack

React, TypeScript, Vite, GSAP (ScrollTrigger, ScrollSmoother), Three.js (React Three Fiber, Drei, Rapier, Postprocessing), Tailwind-style CSS variables (dark theme, sky blue accent).

## License

MIT (see [LICENSE](LICENSE)).
