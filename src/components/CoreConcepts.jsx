import { CORE_CONCEPTS } from "../data.js";
import ListComponent from "./ListComponent.jsx";
import Section from "./Section.jsx";

export default function CoreConcepts() {
  return (
    <Section title="Core Concepts" id="core-concepts">
      <ul>
        {CORE_CONCEPTS.map((obj, index) => (
          <ListComponent key={index} {...obj} />
        ))}
      </ul>
    </Section>
  );
}
