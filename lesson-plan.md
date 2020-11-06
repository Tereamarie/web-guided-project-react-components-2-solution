# Lesson Plan

## 1- Preliminaries

* Walk the class through the clone, install and start process of the GP repo.
* Make sure students have installed the React Developer Tools Chrome extension.

## 2- Instructor's Checklist of Things to Cover

* ES6 Modules: default exports vs. named exports.
* ES6 Modules: importing a lib inside `node_modules`.
* E66 Modules: importing another module using a relative path.
* Initializing component state using a dataset as the initial value.
* Building a helper that updates a state which is then sent down the tree through props.
* Using `map` to swap an object inside an array with a new object without mutation.
* The spread operator and the logical NOT operator.
* Destructuring assignment.
* Rendering an instance of a component inside the JSX of another component.
* Passing props using attribute-like syntax.
* Both data and callbacks are routinely passed down through props.
* State changing callbacks passed through props enable nested components to update state of ancestors.
* Unidirectional Data Flow.
* Mapping over an array of objects to produce an array of React elements that render to the screen.
* The importance of the `key` prop to help React identify each element inside a collection.
* Do NOT use an array index as `key` just to get rid of the console warning!
* Booleans do not interpolate to anything visible inside the JSX.
* Using ternaries or logical expressions to conditionally render elements.
* Studying the definition of a component to understand what props it expects from the parent.
* Utilizing state-changing callbacks inside event handlers in descendant components.
* If a callback needs an argument (like an id) then it can't be used directly as an event handler, because those take an event object as their argument.
* Function wrapping to get around the problem of the previous point.
* React Developer Tools to inspect props and state.

## 3- Demo

See the design inside `src/design-files` and explain students what they are building.

Flesh out the various components inside `src/components` following this order:

1. App
2. FriendsList
3. Friend
4. PetsList
5. Pet (STRETCH, if there's time)
6. Search (STRETCH, if there's time)

## 4- Links of Interest

* [React Docs](https://reactjs.org/docs/getting-started.html)
* [Components and Props](https://reactjs.org/docs/components-and-props.html)
* [Lists and Keys](https://reactjs.org/docs/lists-and-keys.html)

## 5- Following Along and Catching Up

* The instructor should make sure students clone the starter repo without forking it.
* The instructor must make commits to a `lecture` branch and push them regularly (or use a script to do it).
* If the students work on their own named branch, `main` is kept clean so they can re-do the demo later.
* In order to catch up, the students can reset their branch to the instructor's last pushed commit:

  ```bash
    git fetch && git reset --hard origin/lecture
  ```
