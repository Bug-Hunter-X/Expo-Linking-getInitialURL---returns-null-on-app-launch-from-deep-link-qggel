The solution involves using the `useEffect` hook to handle the asynchronous nature of `Linking.getInitialURL()`.  We also implement a cleanup function to prevent memory leaks, and include error handling for edge cases:

```javascript
import * as Linking from 'expo-linking';
import React, { useEffect, useState } from 'react';

function App() {
  const [initialUrl, setInitialUrl] = useState(null);

  useEffect(() => {
    const getInitialUrlAsync = async () => {
      let url = await Linking.getInitialURL();
      if (url) {
        setInitialUrl(url);
      } else {
        console.log('Could not get initial URL');
      }
    };

    getInitialUrlAsync();

    return () => {
      // Cleanup function to prevent memory leaks
      console.log('Unmounting');
    };
  }, []);

  return (
    <View>
      {initialUrl ? (
        <Text>App opened from URL: {initialUrl}</Text>
      ) : (
        <Text>App opened without a URL</Text>
      )}
    </View>
  );
}
```