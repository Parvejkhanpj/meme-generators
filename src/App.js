import React from "react";
import Header from "./Component/Header";
import Meme from "./Component/Meme";
import "./style.css";
/**
 * Challenge:
 * - Create a Meme component.
 * - Inside the Meme component, render a styled form
 *   with our 2 inputs and the button.
 * - Don't worry about adding any functionality yet
 */
export default function App() {
  return (
    <div>
      <Header />
      <Meme />
    </div>
  );
}
