import { CORE_CONCEPTS } from "./data.js";
import { Header } from "./components/Header.jsx";
import { ListComponent } from "./components/ListComponent.jsx";

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <ListComponent {...CORE_CONCEPTS[0]} />
            <ListComponent {...CORE_CONCEPTS[1]} />
            <ListComponent {...CORE_CONCEPTS[2]} />
            <ListComponent {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
