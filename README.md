# nguinet-blog

Steps I've done to get my next.js blog. I choose nextJS for its SSG (Static Site Generation) feature as I though that speed essential for visitors of a blog. 

## Setup the next js app

>npx create-next-app nextjs-blog --use-npm --example "https://github.com/vercel/next-learn/tree/master/basics/learn-starter"  
npm run dev    Starts the development server.  
npm run build  Builds the app for production.  
npm start	     Runs the built app in production mode.  
Open http://localhost:3000

Create a repo on github

>git init  
git add .  
git commit -m "First Commit"  
git remote add origin https://github.com/guinetn/nguinet-blog.git  
git push -u origin main  

Pubish to vercel 

I choose Vervel because as nextjs was created by vercel, it fit well with it, more than github pages.

- Create a new project on [Vercel](https://vercel.com/)
- Deploy it
- Open https://nguinet-blog.vercel.app/