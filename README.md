This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
##### https://www.youtube.com/watch?v=mTz0GXj8NN0
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

- public folder: anything in this folder can appear in the browser, so add images or stylesheets.
- styles -> globals.css: global css file
- styles -> Home.module.css: applies to the Home page
- *** pages folder - this is our routes to our pages (we do not need router)
- pages -> index.js file is the home page
- pages -> about.js file is the an page
- pages -> app.js file is the container for all page components - this is good place to create the layout
  - _app.js- use ```_``` so that the page is not read as route
- components -> Layout.js file is used to create the main layouts used in app.js file. for more see: https://nextjs.org/docs/advanced-features/custom-app
- Naming conventions for pages/components: componenents start w/upper case, pages start w/lower case

#### SEO

- All meta data is located in the Head

#### Routing & Links

- No third party router needed like React Router...etc,
- http://localhost:3000/ => http://localhost:3000/about
- create links in navbar component via next/link
- For nest routes see the example in article/[id] folder

### Custom Documents: (not use in the project but good to undertand)

- https://nextjs.org/docs/advanced-features/custom-document

### Exporting a static site

- add next export to build in the package.json file like so: "build": "next build && next export",
- then run `next build` (builds for production but also exports a static website).
- generates a out folder - which is a static website
- install ` npm i -g serve` if you dont have it, then run ``serve -s out -p 8000`
