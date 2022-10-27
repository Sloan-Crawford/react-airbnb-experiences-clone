# React AirBnb Experience Clone

Explore this AirBnb Experience Clone website built with React

**Key features**:

- Utilization of React.js
- A well-organized website with a professional folder system
- A responsive, modern design

- Effective use of Routing
- Components: Navbar, Hero, Card, CardProps, CodeComp, MapPractice
- Pages: Home, Code
- Utilization of Prism.js to show highlighted code
- Hooks: useEffect()
- published on Netlify through GitHub repo

**Skills**:

- Effective use of React library and integration of Prism.js
- Utilization of professional folder organization with src components, context, data, hooks, pages and utilities.
- Clear, maintainable, and scalable code with responsive layout and architecture

### More projects by Sloan Crawford:

## [Portfolio](https://sloan-crawford-professional-portfolio.netlify.app/)

**Notes**:

**_Props (Properties):_**

- Props are used to store data that can be accessed by the children of a React component.
- They are part of the concept of reusability. Props take the place of class attributes and allow you to create consistent interfaces across the component hierarchy.
- they pass data from one component to another.

* help to create reusable and composable react components.
* just like params are passed into functions, props are passed into components.

- We use props in both functional and class-based components.
- We pass props from the top to bottom. We can also refer to it as ancestor to descendant, or parent to child.
- Props are read-only. This means that once a component receives a bunch of props, we cannot change it, but we can only use and consume it and cannot modify the properties passed down to the component. If we want to modify that, we'll have to introduce what we call state in React.

- i.e., we can now create reusable components from arrays of data (non-manually) with destructuring...

**_Ways to use props:_**

1. without destructuring - essential as a beginner

- initialize props (i.e., pass in props as an argument in a function)
- access props and what kind of property it holds (i.e., {props.name})
- render and pass data to the props (i.e., in App.js: name={Sloan})

2. with destructuring - a JavaScript feature that allows us to extract sections of data from an array/object

- pull apart the props
- destructure them
- then render them

**_defaultProps:_**

- Is a React component property that allows us to set default values for the props argument.
- It usually comes in handy when we don’t have any props data passed in.
- declare default values for props near the end of the code, just before exporting the component.

**_Map() Method:_**

- takes a function as a parameter and whatever gets returned from the function will be placed in the same index of a brand new array. Usually the items from the original array are modified.
- in React, we can convert an array of raw data into an array of JSX elements that can be displayed.
- it makes our code more 'self-sustaining', additional changes not needed when the data changes / is added.

**_to see how to render images using react and the map() method see processs through:_**

- items.js: (image: "buz-coach.jpeg",)
- CardProps.js: (<img src={require("../images/" + items.image)} alt="Experience-cards" />)
- then into Card.js
- then into App.js

**_Troubleshooting migration from JS to Typescript_**

- In terminal import typescript and the related type files:
- npm add typescript @types/node @types/react @types/react-dom @types/jest
- then convert individual files from .js to .tsx files (.tsx is for files with JSX within them)
- do a typescript configuration initialization (creates a tsconfig.json file):
- npx tsc --init
- We can't have both jsconfig and tsconfig. If we do, go into jsconfig and copy any settings with the compilerOptions, paste them within the tsconfig and delete the entire jsconfig file.

* Addressing the error messages that ensue:

1. Cannot use JSX unless the '--jsx' flag is provided:

- The problem is VSCode using an older version of typescript (4.0.3), while the typescript version shipped with the project is (4.1.2).
- go to the tsconfig file and add the following under compilerOptions:
- "jsx": "react",
- Go to the command palette CTRL+Shift+P (Or ⌘+Shift+P on Mac).
- Choose "TypeScript: Select a TypeScript Version...".
- Choose "Use workspace Version".

2. Cannot find module '../images/airbnb-logo-min.png' or its corresponding type declarations.ts(2307)

- within the src folder, create a file called react-app-env.d.ts
- declare all image files types as follows:
  '''
  declare module "_.png";
  declare module "_.svg";
  declare module "_.jpeg";
  declare module "_.jpg";
  '''
