```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect: missing return statement in useEffect cleanup function
    fetch('/api/data')
      .then(response => response.json())
      .then(data => setCount(data.count));
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
    </div>
  );
}
```