# DOM

## Before we start

1. This practical task is verified automatically with tests.
2. Please, don't change the page structure, if it is not required for a task. It may affect tests.

## Task Requirements

A function should be in its file with export. Please, use the file names mentioned in the requirements to pass the tests.

**Please, note:**

- If task requirement says: _Function should **return** <something>_, it means it should deliberately return expected value. If instead of returning a value, you will show it in the console, it will not pass the check.

  **Function "createToast"**

Write the function `createToast` which creates an HTML element for a toast message. Toast message - it is a small pop-up message often at the top of the screen.

In the `src` folder create the `createToast.js` file. This file should export the function `createToast`:

```js
export function createToast(element) {
  // Your code
}
```

This function takes two parameters:

`element` - any DOM element.

1. It should create an empty `<div>` element with a `toast` CSS class name.
2. To this element it should add CSS styles: `position: fixed; top: 20px; right: 20px;`.
3. These styles must be applied by the `style` property of an element.
4. An element passed as an `element` parameter to the function, should be inserted in created `<div>` element as an only child.
5. The `createToast` function must return created `div` element.
6. The function `should not append` any element to the page. If you do it another way, your solution may not pass the tests.

**Example of a function usage:**

```js
let element = document.createElement("span");
element.textContent = "I am text inside the toast.";

let toastElement = createToast(element); // DOM element
```

Approximate HTML mark-up of the element inside the `toastElement` variable:

```html
<div class="toast">
  <span>I am text inside the toast.</span>
</div>
```

**Note**: `createToast` must return a DOM element object (`document.createElement` returns DOM element object), **not a string with HTML**. And don't forget about styles in the `style` property.
