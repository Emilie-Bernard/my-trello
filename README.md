This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm install
npm run dev
# or
yar add
yarn dev
# or
pnpm install
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Project
This is a trello created with Next, React and Typescript.
You can add your list and card related. You can add visibility and a description to cards. 

## URL to access
This application is available at:

https://my-trello-ferway-emilie.web.app/

## Bilan
Really like this project, it challenge me a lot. It was my first time working on typescript and next (I start another project last week in this stack byt didn't work as much as these 18 hours) I leart a lot and it as a great pleasure. I search with stack overflow, nextjs documentation and other forum. It was great not to ask everything at chatgpt (only ask few stuff i was blocking on as localStorage (didn't answer me well), typeformat for init data and interface). 
### 2 difficulties
- wanting to create a json file with initData to put it as default value but problem with interface (i create an object interface in tsx to correct this)
- localstorage value not found with difference between dev and build

### 2 success
 - First time finishing a project using typescript and next (felt confortable), I felt at ease most part of the time. 
 - One component to add all the different type of value (add list, card and description)

### 2 evolutions possibles
 - I think i can cut the modal componant to create smaller organism
 - I think I can chang the architecture to be more understandable and to class component by size and type (Buttons all togerther, organism and atom folder maybe)
