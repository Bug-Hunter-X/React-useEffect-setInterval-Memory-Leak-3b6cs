# React useEffect setInterval Memory Leak

This repository demonstrates a common bug in React applications involving the `useEffect` hook and `setInterval`.  The example shows how forgetting to properly clear an interval leads to memory leaks.

## Bug Description

The `MyComponent` component uses `setInterval` to update a count every second. However, it fails to clear the interval when the component unmounts.  This results in the interval continuing to run even after the component is no longer rendered, causing a memory leak.

## Solution

The solution involves using a cleanup function in the `useEffect` hook. The cleanup function is responsible for clearing the `setInterval` using `clearInterval` before the component unmounts. This ensures that resources are properly released and prevents memory leaks.