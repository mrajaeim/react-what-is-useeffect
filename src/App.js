import React, { useEffect, useState } from 'react';
import './style.css';

export default function App() {
  const [state1, setState1] = useState(0);
  const [state2, setState2] = useState(100);
  // ------- [] ---------
  useEffect(() => {
    // Runs only after the
    // initial render
    console.log('-----------------------------------');
    console.log('[]', 'initial render done!');
  }, []);

  // ------- [state1, state2] ---------
  useEffect(() => {
    // Runs after the initial render
    // and when the dependencies change
    console.log('[state1, state2]');
    console.log('\t', 'state1:', state1, 'state2:', state2);
  }, [state1, state2]);

  // ------- [state1] ---------
  useEffect(() => {
    // Runs after the initial render
    // and when the dependencies change
    console.log('[state1]');
    console.log('\t', 'state1:', state1, 'state2:', state2);
  }, [state1]);

  // ------- [state2] ---------
  useEffect(() => {
    // Runs after the initial render
    // and when the dependencies change
    console.log('[state2]');
    console.log('\t', 'state1:', state1, 'state2:', state2);
  }, [state2]);

  // ------- runs after all re-rendering, no dependencies ---------
  useEffect(() => {
    console.log('$$ no dependencies $$');
    console.log('\t', 'state1:', state1, 'state2:', state2);
    console.log('-----------------------------------');
  });
  return (
    <div>
      <h1>Hello Friends!</h1>
      <p>watch console carefully</p>
      <button onClick={() => setState1((p) => p + 1)}>s1: {state1}</button>
      <button onClick={() => setState2((p) => p + 1)}>s2: {state2}</button>
    </div>
  );
}
