This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.



## Routing in next 

- Inside app folder create your needed folder then create page.jsx or page.tsx file for through you can route 

- For dynamic routing use [] inside this create page.jsx file 

- For customize 404 not found page create a file name start with (not-found.jsx or tsx).

## Private folder in next js --- 

- For that you can use a folder name start with underscore like -- (_newPage) 
- If you create a page.jsx file inside this will also not routable which render 404 page not found.


## Hide a file  from url for routing using ()

- If you want to hide a folder when routing you can use () inside this you place your filder name for which it not seen in url path . 
have a look on example in auth folder ..


## use of group layout which have a chiled component which render all the page file in that 

- see the example for better understanding.... {with-auht-route folder}

