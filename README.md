# W07D1 - React JSX and Props

## Plan

### 1. Introducing React
  a. What is React?

  - React is a library that lets you build user interfaces out of individual pieces called components.

  b. Why React?

  - client-side (tweeter) vs server-side (TinyApp)

  - client-side => all the code logic is in the client. Server sends only the data (JSON). HTML is built form the data client-side
  - server-side => server accepts a request and sends back the full HTML page. HTML page is compiled by the server (ejs)


  Client-Side provides a smoother user experience => no page reload necessary.

  Why React?

  - Manipulation of the DOM can be slow and not optimal (jQuery, just JS)
  - For modern UI with lots of interactivity, we need something better
  - React will provide DOM optimization that provides a better user-experience: smoother and performant.

  c. Principles of React

  - Virtual DOM
   
    - React will maintain a copy of the real DOM in memory. React will decide how to better update the real DOM. It will change only the nodes that changed.

  - Reusable components

    - A component is the basic React element that encapsultate everything it needs to render a piece of the UI: logic, styles, markup.

    - composition

      A component is like a lego block. We're going to put them together to build something more complex.

    - Declarative

        - State WHAT we need, but not the HOW (regular for loop vs map or filter)
        - Provide a level of abstractions

    - Explicit Mutations

      - Changing the state of our data, we need to trigger an explicite mutation.
      - there is no need to add any event listener for that.


    - Unidrectional data-flow

      - real DOM, with jQuery => the state is in the DOM itself
      - the state is going to be stored in components. 
      - the state is going to get applied to the DOM and not the other way around

    - It's JavaScript
      - it's not re-inventing the wheel
      - it's a language we already know
      - no specific custom directives

### 2. React Components
  a. What is a React component

   - A component is the basic React element that encapsultate everything it needs to render a piece of the UI: logic, styles, markup.
   - it's self contained => reusable.



  b. React.createElement

  - create a HTML element or a custom component
  - it accepts 3 arguments:

    1. the html element or the component
    2. the object properties
    3. any number of children element: text, another React element, or an array of children


### 3. Props and how to use them



### 4. Using JSX

  - XML => extensible markup langue => create custom markups
  - JSX => mix of XML and JS



  - Syntax of JSX

  ejs:
    mix of HTML and JS => <% %>


  - Babel

    - tool that transform our JSX component back into React.createElement

  - Rules of JSX

    - you cannot use reserved words (ex. class of css => className) => camelCased
    - {} represents a JavaScript expression within the markup
    - either an opening and closing tags or a self-closing tag (like img)
    - we can only have a single parent. No siblings allowed

### 5. Coding the Movies App with JSX

  - Rendering components with JSX
  - Array of components
  - Conditional rendering


