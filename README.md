# Expo Linking.getInitialURL() returns null on app launch from deep link

This repository demonstrates a bug where `Linking.getInitialURL()` in Expo returns null when the app is launched from a deep link.  The issue is that even when launched via a deep link, the initial URL is not properly retrieved.

## Bug Description

The `Linking.getInitialURL()` method in Expo's Linking API is used to retrieve the initial URL that launched the application.  In certain situations, even if the app is opened from a valid deep link, this method returns null.  This leads to incorrect handling of deep links and app functionality.

## Reproduction

1. Clone this repository.
2. Run the app using Expo Go or EAS Build.
3. Open a deep link (URL specified in `App.js`).
4. Observe that `Linking.getInitialURL()` returns null within the app.

## Solution

The provided solution file demonstrates a potential solution that adds additional handling of asynchronous operations and improved error detection. It utilizes the `useEffect` hook with a cleanup function to ensure that the URL retrieval occurs correctly. Refer to the solution code for implementation details.