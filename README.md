# nguinet-blog

Here are the steps I've done to create my [nextJS](https://nextjs.org/) blog. I choose nextJS for its SSG (Static Site Generation) feature as I though that speed essential for visitors of a blog. 

## Setup the next js app

>npx create-next-app nguinet-blog --use-npm --example "https://github.com/vercel/next-learn/tree/master/basics/learn-starter"  
cd nguinet-blog  
npm run dev    Starts the development server
Open http://localhost:3000

### Create a github repository 

>git init  
git add .  
git commit -m "First Commit"  
git remote add origin https://github.com/guinetn/nguinet-blog.git  
git push -u origin main  

### Pubish to vercel 

I choose Vercel because as they create nextjs, it fit well with it, more than github pages.
Vercel is a deployment platform that allows you to host your site by connecting directly to your GitHub repository. 

- Login to [Vercel](https://vercel.com/)
- Create a new project: authorize access to you're github repo
- Deploy it
- Open https://nguinet-blog.vercel.app/

From now if you push a change to github, Vercel will build and update the site automatically (implicit ci-cd)

### Transformation to a blog

Follow instructions in https://nextjs.org/learn/basics/create-nextjs-app to get a nice nextJS blog including
- SSG (static site generation): client side prerendering thanks to code splitting + <Link>
- Dynamic routing posts/[id].js

* Additional packages

- [gray-matter](https://github.com/jonschlinkert/gray-matter): to read posts "Front Matter" header
npm install gray-matter				
- [Remark](https://github.com/remarkjs/remark-html): Markdown viewer 
npm install remark remark-html 		
- [fns](https://date-fns.org/): Formatiting dates
npm install date-fns				

## Add a Navbar 

Replace the Header component with a NavBar + a Hamburger/SideDrawer when the viewport width is less than 768px

## Add NProgress to signal interaction is running

To show an animation when switching routes/pages, on any fetch.
- [nprogress](https://ricostacruz.com/nprogress/)

npm install nprogress

```js
// import router + progressbar
import NProgress from "nprogress"
import Router from "next/router";

// events to start (show) / stop (hide) the progressbar
const handleRouteStart = () => NProgress.start();
const handleRouteDone = () => NProgress.done();

// Just subscribe to the router events. That's the idea.
Router.events.on("routeChangeStart", handleRouteStart);
Router.events.on("routeChangeComplete", handleRouteDone);
Router.events.on("routeChangeError", handleRouteDone);
```
## Add a contact form + nodemailer on firebase

>cd functions  
firebase deploy --only functions

## Add 'my backpack' on the homepage

## Add images for posts

- https://unsplash.com/license
Beautiful, free images gifted by the world’s most generous community of photographers. Better than any royalty free or stock photos.
https://help.unsplash.com/en/articles/2534409-crediting-photographers

## Add syntax highlighter to posts

- https://www.npmjs.com/package/remark-prism

>yarn add remark-prism

app.js
+ import "prismjs/themes/prism-tomorrow.css";

post.js
+ import prism from 'remark-prism';
...
 const processedContent = await remark()
  -.use(html)
  +.use(html, { sanitize: false })
  +.use(prism) 
 .process(matterResult.content);

 mypost.md
 ```js
 const user = { 'name':'joe', 'age': 25};
  ```

  ## Add MathJax: Latex, MAthML, AsciiMath
  
  - https://www.npmjs.com/package/better-react-mathjax
  >npm i better-react-mathjax

introduces two React components - MathJaxContext and MathJax

```jsx
import { MathJax, MathJaxContext } from "better-react-mathjax";

const App = () => {

   return (
       <MathJaxContext>
           <!-- APP CONTENT -->
           ...
            <h2>Basic MathJax example with Latex</h2>
            <MathJax>{"\\(\\frac{10}{4x} \\approx 2^{12}\\)"}</MathJax>

            <h2>Basic MathJax example with AsciiMath</h2>
            <MathJax>{"`frac(10)(4x) approx 2^(12)`"}</MathJax>

            <h2>Basic MathJax example with MathML</h2>
            <MathJax>
                <math>
                    <mrow>
                        <mrow>
                            <mfrac>
                                <mn>10</mn>
                                <mi>4x</mi>
                            </mfrac>
                        </mrow>
                        <mo>&asymp;</mo>
                        <mrow>
                            <msup>
                                <mn>2</mn>
                                <mn>12</mn>
                            </msup>
                        </mrow>
                    </mrow>
                </math>
            </MathJax>
           ...
       </MathJaxContext>
   )
}


const Component = () => {

   return (
       <div>
           <MathJax>{ /* math content */ }</MathJax>
           <h3>This is a header</h3>
           <MathJax>
            ## Math formulas with tested rendered

            \\(\\frac{10}{4x} \\approx 2^{12}\\)

            $$\frac{10}{4x} \approx 2^{12}$$

            <p> Shannon Entropy</p>

            \\( H(x) = - \\sum_{i=1}^{n} p_i log_b(p_i) \\)

            $$H(x) = - \sum_{i=1}^{n} p_i log_b(p_i)$$ 

            <p>Bayes Theorem</p>

            \\( P(A|B) = \\frac{P(B|A)P(A)}{P(B)} \\)

            $$P(A|B) = \frac{P(B|A)P(A)}{P(B)}$$

           </MathJax>
           <p>
               This is text which involves math <MathJax>{ /* math content */ }</MathJax> inside the paragraph.
           </p>
       </div>
   )
}
```

## Add a modal

Usage

```jsx
import { useState } from "react";
import DialogModal from '../../../components/modal/modal';

export default function MyPage() {

		const [isOpened, setIsOpened] = useState(false);
	  
		const onProceed = () => {
		  console.log("Proceed clicked");
		};

	return (
	  	<Layout>

            <div>
                <button onClick={() => setIsOpened(true)}>Open "dialog" modal</button>

                <DialogModal
                    title="Dialog modal example"
                    isOpened={isOpened}
                    onProceed={onProceed}
                    onClose={() => setIsOpened(false)}
                >
                    <p>To close: click Close, press Escape, or click outside.</p>
                </DialogModal>
            </div>
            ...
```


## Add swiperjs.com

npm i swiper
https://swiperjs.com/react
https://swiperjs.com/swiper-api#prop-swiper-allowSlidePrev