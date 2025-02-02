import Header from "./components/Header/Header.jsx";
import ListComponent from "./components/ListComponent.jsx";
import { CORE_CONCEPTS } from "./data.js";

function App() {
  return (
    <>
      <Header />
      <section>
        <div id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <ListComponent {...CORE_CONCEPTS[0]} />
            <ListComponent {...CORE_CONCEPTS[1]} />
            <ListComponent {...CORE_CONCEPTS[2]} />
            <ListComponent {...CORE_CONCEPTS[3]} />
          </ul>
        </div>
      </section>
    </>
  );
}

export default App;
