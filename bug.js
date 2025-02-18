```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect way to set the interval
    let intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    // Missing cleanup function to clear the interval
    // This leads to memory leaks and unexpected behavior
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
    </div>
  );
}
```