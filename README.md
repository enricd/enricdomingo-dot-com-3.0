webpage inspired by Sonny Sangha

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


# My Notes

$ npm run dev

$ npm add -D tailwindcss postcss autoprefixer  
$ npx tailwindcss init

https://jaketrent.github.io/react-social-icons/  
$ npm install react-social-icons  
<SocialIcon> url="https://www.twitter.com/mad_enrico" /> 

Animations: Framer Motion (https://www.framer.com/)  
$ npm install framer-motion  
<motion.div initial={{x: -500, opacity: 0, scale: 0.5}} animate={{x: 0, opacity: 1, scale: 1}}></motion.div>

Type animation: react-simple-typewriter  
$ npm i react-simple-typewriter  
`export default function Hero({}: Props) {  
  const [text, count] = useTypewriter({  
    words: [  
      "Hi, my name is Enric!!",  
      "I'm a Machine Learning and Software Engineer",  
      "data, data and more data...",  
    ],  
    loop: true,   
    delaySpeed: 1500,  
  });`

In nextjs images should be rendered as image components (TODO)

we can create css classes as className and a tag and then define them uin the global.css file and assign their style

Icons: Heroicons
$ npm install @heroicons/react

Forms:
$ npm install react-hook-form

Scrollbars:
$ npm install --save-dev tailwind-scrollbar

CMS: Sanity
$ npm install -g @sanity/cli
$ npm init --coupon sonny2022 
[OR]
$ npm create sanity@latest -- --coupon sonny2022