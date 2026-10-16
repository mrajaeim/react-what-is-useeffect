# React useEffect Demo

A small React app designed to help developers understand how `useEffect` behaves with different dependency arrays.

This project demonstrates:
- `useEffect(() => {}, [])` runs only once after the initial render
- `useEffect(() => {}, [state1, state2])` runs after the initial render and whenever the listed values change
- `useEffect(() => {}, [state1])` or `[state2]` runs only when that specific state changes
- `useEffect(() => {})` runs after every render when no dependency array is provided

## What the app does

The app contains two buttons that update two separate state variables:

- `state1`
- `state2`

Each button triggers a re-render, and the app logs the effect behavior to the browser console so you can observe the exact timing and dependency-based execution pattern.

## Tech Stack

- React
- React DOM
- JavaScript
- CSS

## Getting started

1. Install dependencies:
   ```bash
   npm install
