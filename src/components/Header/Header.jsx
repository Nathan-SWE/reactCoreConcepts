import "./Header.css";
import reactLogo from "../../assets/components.png";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

const genRandomInt = (max) => Math.floor(Math.random() * max);

export default function Header() {
  const adjective = reactDescriptions[genRandomInt(reactDescriptions.length)];

  return (
    <header>
      <img src={reactLogo} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {adjective} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
