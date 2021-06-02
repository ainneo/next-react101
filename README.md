This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.
Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Notes:

#### File Structure

- Public folder: anything in this folder can appear in the browser, so add images or stylesheets.
- Styles -> globals.css: global css file
- Styles -> Home.module.css: applies to the Home page
- Pages -> index.js file is the home page
- Pages -> about.js file is the an page
- Pages -> app.js file is the container for all page components - this is good place to create the layout
- Components -> Layout.js file is used to create the main layouts used in app.js file - https://nextjs.org/docs/advanced-features/custom-app

#### Routing

- No third party router needed like React Router...etc,
- http://localhost:3000/ => http://localhost:3000/about

#### SEO

- All meta data is located in the Head
