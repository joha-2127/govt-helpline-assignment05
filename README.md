1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
   ans:getElementById - selects the element by its ID.
getElementsByClassName - selects all elements with a class and by default it returns a live HTMLCollection.
querySelector - selects first element which is matched by a CSS selector.
2. How do you **create and insert a new element into the DOM**?
   ans:when a div tag is clicked it works as a sequence like div-add content - insert in DOM
3. What is **Event Bubbling** and how does it work?
   ans: Events start from the innermost element and bubble up to parent elements.
4. What is **Event Delegation** in JavaScript? Why is it useful?
ans: Instead of adding listeners to many elements, attach one listener to a parent and handle events from children using event.target.
5. What is the difference between **preventDefault() and stopPropagation()** methods?
   ans:preventDefault() - stops the browser’s default action (like form submission).
stopPropagation() - stops the event from bubbling or capturing further.
