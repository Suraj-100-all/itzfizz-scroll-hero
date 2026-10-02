# ITZFIZZ Scroll-Driven Hero

An interactive hero section created for the **Itzfizz Web Development Internship** assignment. The page combines a premium visual layout with a scroll-controlled text reveal and staggered performance metrics.

## Submission Links

> Replace the placeholders below with the final deployed URL and repository URL before submitting the assignment.

- **Live webpage:** `[Add deployed URL here]`
- **GitHub repository:** `[Add GitHub repository URL here]`

The visual direction is inspired by the [reference car scroll animation](https://paraschaturvedi.github.io/car-scroll-animation). This project is an independent implementation and is not affiliated with the reference author.

## Assignment Coverage

| Requirement | Implementation |
| --- | --- |
| Above-the-fold hero | Full-screen responsive hero with a gold gradient background and dark content track |
| Letter-spaced headline | `WELCOME ITZFIZZ` is displayed as the central visual focus |
| Impact metrics | Four percentage cards for engagement, load times, bounce rate, and conversion |
| Initial animation | GSAP reveals the metric cards with opacity, vertical movement, scaling, and staggered timing |
| Scroll-based interaction | GSAP `ScrollTrigger` pins the hero and reveals the headline as the user scrolls |
| Smooth motion | Scroll progress is scrubbed with easing and uses transform/opacity-based animation |
| Performance | Passive scroll handling, GSAP context cleanup, and transform-friendly transitions |
| Responsive behavior | Tailwind responsive utilities adapt spacing, typography, and card sizes for mobile and desktop |
| Reduced motion | The scroll cue animation is disabled when `prefers-reduced-motion` is enabled |

## Features

- Premium dark-and-gold visual treatment
- Scroll cue that fades after scrolling begins
- Central reveal blade that uncovers the headline from right to left
- Staggered metric-card entrance
- Pinned, scroll-controlled hero experience
- Responsive layout for small and large screens
- Accessible document language, metadata, and non-essential decorative cue handling

## Tech Stack

- [Next.js](https://nextjs.org/) 16
- [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) 4
- [GSAP](https://gsap.com/) with `ScrollTrigger`
- CSS media queries for reduced-motion support

## Getting Started

### Prerequisites

- Node.js 20 or newer
- npm 10 or newer

### Installation

```bash
git clone <your-repository-url>
cd my-app
npm install
```

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in a browser and scroll through the hero section to see the interaction.

## Available Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Starts the local development server |
| `npm run build` | Creates a production build |
| `npm run start` | Serves the production build locally |
| `npm run lint` | Runs the ESLint checks |

## Project Structure

```text
my-app/
├── app/
│   ├── globals.css    # Global styles, scroll cue, and reduced-motion rules
│   ├── layout.tsx     # Root layout and page metadata
│   └── page.tsx       # Hero UI and GSAP ScrollTrigger animation
├── public/
│   └── brand-mark.svg # Site favicon/brand mark
├── package.json
└── README.md
```

## Animation Details

1. On mount, GSAP creates a timeline scoped to the hero section.
2. The hero is pinned while the user scrolls through `250%` of the viewport height.
3. The dark cover moves from `width: 100%` to `width: 0%`, exposing the headline beneath it.
4. The metric cards animate into place with opacity, translation, scale, and stagger.
5. The scroll cue uses CSS animation initially and fades out once the page has moved beyond the first few pixels.
6. The GSAP context is reverted and the native scroll listener is removed during cleanup.

## Deployment

### Vercel

The simplest deployment option for this Next.js project is Vercel:

1. Push the project to GitHub.
2. Import the repository into [Vercel](https://vercel.com/).
3. Keep the default Next.js build settings.
4. Deploy and copy the generated URL into the **Submission Links** section above.

### GitHub Pages

GitHub Pages can be used after configuring Next.js for a static export and adding a deployment workflow. If GitHub Pages is selected, verify that the production build works from the repository path and that all asset paths resolve correctly before submitting the URL.

## Quality Checklist

- [ ] `npm run lint` passes
- [ ] `npm run build` passes
- [ ] Hero fits the first viewport without horizontal overflow
- [ ] Headline and metric cards animate smoothly on desktop and mobile
- [ ] Scroll interaction remains tied to scroll progress
- [ ] Reduced-motion behavior has been checked
- [ ] Live webpage link has been added
- [ ] GitHub repository link has been added

## License

This project was created as an internship assignment demonstration. Add a project-specific license here if the repository will be reused or distributed publicly.
