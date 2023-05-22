/** this is a generic layout template,  */
import React from "react";
import SecuritiesQuotes from "./SecuritiesQuotes.jsx";

export default function Home(props) {
  return (
    <main className="o-grid-container">
      <header className="">
        <SecuritiesQuotes {...props} />
      </header>
    </main>
  );
}
