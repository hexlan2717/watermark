import React from "react";
import Watermark from '@uiw/react-watermark';

const style = { width: '100%', maxWidth: '100%', height: 400, display: 'block' };
const text = `React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.

Declarative views make your code more predictable and easier to debug.`;

//Return everything insite watermark

export default function App() {
  return (
    <Watermark
      content="UIW Watermark"
      style={{}}
    >
      <div>
         <h1>Sanket bhutani</h1>

         <h1>Sanket bhutani</h1>
         <h1>Sanket bhutani</h1>
         <h1>Sanket bhutani</h1>
         <h1>Sanket bhutani</h1>
         <h1>Sanket bhutani</h1>
      </div>
    </Watermark>
  );
}
