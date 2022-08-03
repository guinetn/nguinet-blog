---
title: 'Two Forms of Pre-rendering I'
abstract: 'Two Forms of Pre-rendering lorem gpsdkgp^k ^skpg ksdgk sdkg sdjgj sdmjgdslj gsdmjgmsdgj smdg'
date: '2020-01-01'
keywords: 'react, js, devops'
image: 'images/posts/alexander-ant-hheHwahRhA4-unsplash.jpg'
---

I Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.

- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.

Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.

## Some Math

<p>Bayes Theorem</p>
$$P(A|B) = \frac{P(B|A)P(A)}{P(B)}$$

<p> Shannon Entropy </p>
<MathJax>  $$H(x) = - \sum_{i=1}^{n} p_i log_b(p_i)$$ </MathJax>

# Useful JavaScript Code Snippets

1. Sort an Array

```javascript
//strings
const names = ["Seema", "Rekha", "Jaya"];
names.sort();
//['Jaya', 'Rekha', 'Seema' ]

//Numbers
const numbers = [101, 8, 87];
numbers.sort((a, b) => {
  return a - b;
});
//[ 8, 87, 101 ]
```

2. Select a random element

```javascript
const items = ["Ball", "Bat", "Cup"]
const randomIndex = Math.floor(Math.random()*items.length)
items[randomIndex]
```

3. Reverse a string

```javascript
function reverseString(string) {
  return string.split(" ").reverse().join(" ")
}

revereseString("Random String")
```

4. Check if element has a class

```javascript
const element = document.querySelector("#element")
element.classList.contains("active")
```

5. String interpolation

```javascript
const name = "Jaya"
console.log(`Hi, ${name}. You have ${2 ** 3} new notifications.`}
//Hi, Jaya. You have 8 new notifications.
```

6. Loop through an array

```javascript
const cars = ["Ford", "BMW", "Audi" ]
for (let car of cars) {
  console.log(car)
}

/*
Ford
BMW
Audi
*/
```

7. Get current time

```javascript
const date = new Date()
const currentTime = 
  `${date.getHours()}:${date.getMintues()}:${date.getSeconds()}`

console.log(currentTimes)
//example output: "22:16:41"
```

8. Replace part of a string

```javascript
const string = "You are awesome."
const replacedString = string.replace("You", "We")

console.log(replacedString) //Output: "We are awesome"
```

9. Destructing variable assignment

```javascript
let profile = ['bob', 34, 'carpenter'];
let [name, age, job] = profile;
console.log(name);
// bob
```

10. Using the spread operator

```javascript
let data = [1,2,3,4,5];
console.log(...data);
//  1 2 3 4 5
let data2 = [6,7,8,9,10];
let combined = [...data, ...data2];
console.log(...combined);
// 1 2 3 4 5 6 7 8 9 10
console.log(Math.max(...combined));
// 10
```

That's all