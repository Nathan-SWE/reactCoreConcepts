import { CORE_CONCEPTS } from "../data.js";
import ListComponent from "./ListComponent.jsx";

export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((obj, index) => (
          <ListComponent key={index} {...obj} />
        ))}
      </ul>
    </section>
  );
}
