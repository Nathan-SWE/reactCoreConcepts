import Header from "./components/Header/Header.jsx";
import ListComponent from "./components/ListComponent.jsx";
import TabButton from "./components/TabButton.jsx";
import { CORE_CONCEPTS } from "./data.js";

function App() {
  return (
    <>
      <Header />
      <section>
        <div id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((obj, index) => (
              <ListComponent key={index} {...obj} />
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default App;
