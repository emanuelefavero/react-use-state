# React useState

A React `useState` exercise from my web dev course. It asks to implement a tabs menu that displays a list of web languages and their descriptions dynamically.

<img src="reference-screenshot.png" alt="screenshot" width="320" />

## Exercise

Given an array of web languages and their descriptions:

- render one button for each language;
- highlight the selected button;
- show the selected language and description in a single card;
- display the first language by default;
- keep the buttons and details card in separate components.

## Solution

The main implementation is in [`src/components/LanguagesTabs.jsx`](./src/components/LanguagesTabs.jsx). It stores the active language ID in state, renders the buttons from the languages array, and updates the displayed content when a button is clicked.

## Run locally

```bash
npm install
npm run dev
```
