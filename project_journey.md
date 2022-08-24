# PROJECT JOURNEY

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

### Publish to vercel 

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
- https://betterprogramming.pub/loading-gists-in-a-nextjs-application-cb60e3f9d523

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

### remark-prism

https://css-tricks.com/syntax-highlighting-prism-on-a-next-js-site/     highlighted lines, line-numbers
```js[class="line-numbers"][class="hide-numbers"][data-line="3,8-10"]

https://thetombomb.com/posts/adding-code-snippets-to-static-markdown-in-Next%20js

https://github.com/remarkjs
To use a plugin programmatically, call the use() 
To create a plugin, first read up on the concept of plugins.

Syntax highlighter for markdown code blocks using Prism - with support for certain plugins: https://prismjs.com/plugins/
https://github.com/sergioramos/remark-prism
    

remark-prism supports prism plugins including the line number plugin.
    https://mdsvex.com/docs#remarkplugins--rehypeplugins

    https://gadgetofficials.com/syntax-highlighting-and-more-with-prism-on-a-static-site-css-tricks/ ★★★

    https://prismjs.com/plugins/line-numbers/
    ex: <body class="line-numbers"> <!-- enabled for the whole page -->
    work only for code blocks (<pre><code>) and not for inline code.
    To give all code blocks line numbers, add the line-numbers class to the <body> of the page.

- https://unifiedjs.com/
- https://css-tricks.com/responsible-markdown-in-next-js/
- https://www.npmjs.com/package/remark-prism
- https://stackoverflow.com/questions/62685856/use-prismjs-in-next-js-with-remark-to-hightlight-code-from-markdown
- https://codesandbox.io/examples/package/remark-prism
- https://ionicreacthub.com/blog/how-i-built-this-blog
- https://unifiedjs.com/explore/package/remark-code-figure/

import plugins from node_modules of prism js to perform specific role.


>yarn add remark-prism

app.js
+ import "prismjs/themes/prism-tomorrow.css";

post.js
+ import prism from 'remark-prism';
...
 const processedContent = await remark()
  -.use(html)
  +.use(html, { sanitize: false })
  +.use(prism)              .use(prism) made SSR significantly slower ! It's a problem in dev mode, but not in html exported site.
 .process(matterResult.content);

 mypost.md
 ```js
 const user = { 'name':'joe', 'age': 25};
  ```

* Add copy code button to prism

import plugins from node_modules of prism js to perform specific role.
to display copy button, for that below plugins should be imported - no other code changes are required other than import

import Prism from "prismjs";
import "prismjs/plugins/toolbar/prism-toolbar.min.css";
import "prismjs/plugins/toolbar/prism-toolbar.min";
import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.min";

https://prismjs.com/plugins/copy-to-clipboard/
https://css-tricks.com/responsible-markdown-in-next-js/
https://stackoverflow.com/questions/71893728/prism-js-copy-to-clipboard-not-working-in-my-nextjs-app

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

To prevent swiping on certain are of the slide using swiperjs (input, button...)
    Just add 'swiper-no-swiping' class on the elements that is not swipable or change the noSwipingClass parameter.
    <div className="flexcolumn swiper-no-swiping">...  👈 
    <Swiper
        spaceBetween={0}
        speed={600}
        noSwiping={true}        👈 
        pagination={{
          clickable: true,
          type: "progressbar",
        }}
        keyboard={{
          enabled: true,
        }}
        grabCursor={true}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper">
          

noSwipingSelector	string	    👈	
Can be used instead of noSwipingClass `to specify elements to disable swiping on`. For example 'input' will disable swiping on all inputs
    https://swiperjs.com/swiper-api#param-noSwipingSelector
    
## Add Script component

To render <script> we must 
- add `import Script from 'next/script'`
- use it: <Script src="https://www.google-analytics.com/analytics.js" />

Ref: https://nextjs.org/docs/basic-features/script

## Add my github gists

1. Image I want to embed https://gist.github.com/guinetn/d4f108b822731a764e04bfb6bf818fcd
    On the github page gist I select "embed" and click the copy button
    I get <script src="https://gist.github.com/guinetn/d4f108b822731a764e04bfb6bf818fcd.js"></script>
    But react/next have issue to render script/iframe
2. So in chrome I paste the url https://gist.github.com/guinetn/d4f108b822731a764e04bfb6bf818fcd.js 
I get the core process of js script which is a pair of document.write(...)
I just copy the <iframe ... part and its done!

    document.write('<link rel="stylesheet" href="https://github.githubassets.com/assets/gist-embed-549f23051d8d.css">')
    document.write('<div id=\"gist117835865\" class=\"gist\">\n    <div class=\"gist-file\" translate=\"no\">\n      <div class=\"gist-data\">\n        <div class=\"js-gist-file-update-container js-task-list-container file-box\">\n  <div id=\"file-ascombe-quartet-message-ipynb\" class=\"file my-2\">\n    \n    <div itemprop=\"text\" class=\"Box-body p-0 blob-wrapper data type-jupyter-notebook  \">\n\n          <div class=\"render-wrapper \">\n    <div class=\"render-container is-render-pending js-render-target \"\n      data-identity=\"95cefc59-0b61-47c1-9497-360cf8417555\"\n      data-host=\"https://notebooks.githubusercontent.com\"\n      data-type=\"ipynb\">\n      <svg style=\"box-sizing: content-box; color: var(--color-icon-primary);\" width=\"64\" height=\"64\" viewBox=\"0 0 16 16\" fill=\"none\" data-view-component=\"true\" class=\"octospinner mx-auto anim-rotate\">\n  <circle cx=\"8\" cy=\"8\" r=\"7\" stroke=\"currentColor\" stroke-opacity=\"0.25\" stroke-width=\"2\" vector-effect=\"non-scaling-stroke\" />\n  <path d=\"M15 8a7.002 7.002 0 00-7-7\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" vector-effect=\"non-scaling-stroke\" />\n<\/svg>\n      <div class=\"render-viewer-error\">Sorry, something went wrong. <a href=\"https://gist.github.com/guinetn/d4f108b822731a764e04bfb6bf818fcd.js\">Reload?<\/a><\/div>\n      <div class=\"render-viewer-fatal\">Sorry, we cannot display this file.<\/div>\n      <div class=\"render-viewer-invalid\">Sorry, this file is invalid so it cannot be displayed.<\/div>\n      <iframe\n        class=\"render-viewer \"\n        src=\"https://notebooks.githubusercontent.com/view/ipynb?azure_maps_enabled=true&amp;color_mode=light&amp;commit=ac585b7bea95e4c24ab702e01a4d8ca99e78896d&amp;enc_url=68747470733a2f2f7261772e67697468756275736572636f6e74656e742e636f6d2f676973742f6775696e65746e2f64346631303862383232373331613736346530346266623662663831386663642f7261772f616335383562376265613935653463323461623730326530316134643863613939653738383936642f6173636f6d62652d717561727465742d6d6573736167652e6970796e62&amp;logged_in=true&amp;nwo=guinetn%2Fd4f108b822731a764e04bfb6bf818fcd&amp;path=ascombe-quartet-message.ipynb&amp;repository_id=117835865&amp;repository_type=Gist#95cefc59-0b61-47c1-9497-360cf8417555\"\n        sandbox=\"allow-scripts allow-same-origin allow-top-navigation\"\n        title=\"File display\"\n        name=\"95cefc59-0b61-47c1-9497-360cf8417555\"\n      >\n          Viewer requires iframe.\n      <\/iframe>\n    <\/div>\n  <\/div>\n \n    <\/div>\n\n  <\/div>\n<\/div>\n\n      <\/div>\n      <div class=\"gist-meta\">\n        <a href=\"https://gist.github.com/guinetn/d4f108b822731a764e04bfb6bf818fcd/raw/ac585b7bea95e4c24ab702e01a4d8ca99e78896d/ascombe-quartet-message.ipynb\" style=\"float:right\">view raw<\/a>\n        <a href=\"https://gist.github.com/guinetn/d4f108b822731a764e04bfb6bf818fcd#file-ascombe-quartet-message-ipynb\">\n          ascombe-quartet-message.ipynb\n        <\/a>\n        hosted with &#10084; by <a href=\"https://github.com\">GitHub<\/a>\n      <\/div>\n    <\/div>\n<\/div>\n')

Add some meta-data + style

<div class="gist-meta">
        <a target="_blank" href="https://gist.github.com/guinetn/d4f108b822731a764e04bfb6bf818fcd#file-ascombe-quartet-message-ipynb">anscombe-quartet-python.ipynb</a>
        <div style='gist-raw'><a target="_blank" href="https://gist.githubusercontent.com/guinetn/d4f108b822731a764e04bfb6bf818fcd/raw/ac585b7bea95e4c24ab702e01a4d8ca99e78896d/ascombe-quartet-message.ipynb">view raw</a></div>
        <div>hosted with ❤ by <a href="https://github.com">GitHub</a></div>
</div>

.render-viewer {
  width: 80vw !important;
  height: 550px !important;
  padding: 0.5em;
}
.gist-meta {
  width: 80vw;
  display:flex;
  justify-content: space-between; 
 
  font: bold;
  color: grey;
}
