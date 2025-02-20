```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const [controller, setController] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    setController(abortController);
    fetch('/api/data', { signal: abortController.signal })
      .then(response => response.json())
      .then(data => {
        if (!abortController.signal.aborted){
          setCount(data.count);
        }
      })
      .catch(error => {
        if (error.name !== 'AbortError'){
          console.error('Error fetching data:', error);
        }
      });

    return () => abortController.abort();
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
    </div>
  );
}

export default MyComponent;
```