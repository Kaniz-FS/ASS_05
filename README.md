# Question and Answer
1. Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll
- Differences are:-
- getElementById() which allows to selects one element by its unique id.
- getElementsByClassName() which allows to selects all elements with a given class and returns an HTMLCollection.
- querySelector() allows selects the first element that matches a CSS selector.
- querySelectorAll() allows selects all matching elements and returns a NodeList.

2. How do you create and insert a new element into the DOM?
- By creating an element using document.createElement()
- Add content or attributes.
- Insert it using append(), appendChild(), or insertBefore()

3. What is Event Bubbling and how does it work?
- Event Bubbling is a process where an event starts from the target element and then moves upward through its parent elements.
For example- clicking a button also triggers click events on its parent elements.

4. What is Event Delegation in JavaScript? Why is it useful?
- Event Delegation is a technique where a single event listener is added to a parent element instead of multiple child elements.
It works using event bubbling. 
- Why it is useful:
- It improves performance.
- Handles dynamically added elements.
- Reduces code duplication.

5. Difference between preventDefault() and stopPropagation().
- PreventDefault() stops the default browser behavior.
- StopPropagation() stops the event from bubbling up to parent elements.
