# 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

ans:- getElementById: It retrieves a specific element using its unique ID. Since IDs are unique, it is used to access a single, specific element.

getElementsByClassName: It finds all elements that share the same Class Name. It is used when you need to select multiple elements belonging to the same category.

querySelector vs. querySelectorAll: These two are almost the same in terms of syntax, but the difference lies in their output:

querySelector: Returns only the first element that matches the given CSS selector.

querySelectorAll: Returns all matching elements as a NodeList.


# 2. How do you create and insert a new element into the DOM?

ans:- The process of creating and inserting a new element into the DOM is mainly completed in two steps:

 . Creating the Element:
First, a new HTML tag is created in memory using the document.createElement() method.

 . Inserting the Element (appendChild)
To display the created element in a specific place on the page, the appendChild() or prepend() method is used. This places the element inside a parent node or container.

Main topic Elements are created with createElement and placed on the page using appendChild.


# 3. What is Event Bubbling? And how does it work?

ans:- Event Bubbling is a process where clicking on an element doesn't just trigger the event for that specific element,
instead, like a bubble, the event rises upward and spreads to its parent elements. When you click a specific element, 
its event triggers first. Then, the event automatically moves to the upper-level parent, then the grandparent, 
and continues all the way up to the document.


# 4. What is Event Delegation in JavaScript? Why is it useful?

ans:- Event Delegation is a technique where instead of adding separate event listeners to every child element,
a single event listener is added to their common parent element. Since one listener works for many elements, 
it reduces memory usage. Additionally, if any new elements are added later, 
they automatically work without needing a new listener.


# 5.  What is the difference between preventDefault() and stopPropagation() methods?

ans:- preventDefault(): It stops the default action of a browser element, or in other words,
it prevents the element from performing its natural behavior. Basically, the action will not happen.
stopPropagation(): It stops the event from bubbling up or spreading to the parent elements, 
it essentially tells the parent, "Don't let it know that I have been clicked.". It won't let the parent know.
