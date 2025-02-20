# React useEffect Hook Missing Cleanup Function

This repository demonstrates a common error in React applications: forgetting to include a cleanup function in the `useEffect` hook.

## The Bug

The `bug.js` file contains a component that fetches data using `fetch` within a `useEffect` hook.  However, it's missing a return statement within the `useEffect`'s function, which is crucial for cleaning up any side effects (like cancelling pending requests) when the component unmounts.  Without it, the network request will continue to run even after the component has been removed from the DOM, potentially leading to memory leaks and unnecessary network activity.

## The Solution

The `bugSolution.js` file shows the correct way to implement `useEffect` with a cleanup function.  The `return` statement within the `useEffect` function contains an abort controller, which allows for the cancellation of the network request when the component unmounts. This prevents potential memory leaks.

## How to Run

1. Clone this repository.
2.  Navigate to the directory.
3. Run `npm install` to install dependencies.
4. Run `npm start` to start the development server.
