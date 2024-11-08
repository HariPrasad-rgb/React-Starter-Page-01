import CoreConcept from "./components/CoreConcept";
import { CORE_CONCEPTS } from "./data";
import { EXAMPLES } from "./data";
import Header from "../src/components/Header";
import TabButton from "./components/TabButton";
import { useState } from "react";

function App() {
  let content = <p>Please select a topic.</p>;

  const [tabContent, setTabContent] = useState("");
  function handleSelect(selectedTopic) {
    setTabContent(selectedTopic);
  }
  if (tabContent) {
    content = (
      <div id="tab-content">
        <h3>{EXAMPLES[tabContent].title}</h3>
        <p>{EXAMPLES[tabContent].description}</p>
        <pre>
          <code>{EXAMPLES[tabContent].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((item) => (
              <CoreConcept key={item.title} {...item} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={tabContent === "components"}
              onSelect={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={tabContent === "jsx"}
              onSelect={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={tabContent === "props"}
              onSelect={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={tabContent === "state"}
              onSelect={() => handleSelect("state")}
            >
              State
            </TabButton>
          </menu>
          {content}
        </section>
      </main>
    </div>
  );
}

export default App;
