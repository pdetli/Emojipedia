import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function createEntry(newdic) {
  return (
    <Entry
      key={newdic.id}
      emoji={newdic.emoji}
      name={newdic.name}
      meaning={newdic.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;
