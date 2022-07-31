---
title: 'Two Forms of Pre-rendering 2'
abstract: 'Two Forms of Pre-rendering lorem gpsdkgp^k ^skpg ksdgk sdkg sdjgj sdmjgdslj gsdmjgmsdgj smdg'
date: '2021-12-31'
keywords: 'react, js, devops'
image: 'images/posts/greg-rakozy-0LU4vO5iFpM-unsplash.jpg'
---

Next.js has two forms of pre-rendering 2: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.

- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.

Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.