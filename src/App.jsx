import CVDisplay from "./components/CVDisplay";
import CVForm from "./components/CVForm";

function App() {
  return (
    <div className="app">
      <div className="left-column">
        <CVForm />
      </div>
      <div className="right-column">
        <CVDisplay />
      </div>
    </div>
  );
}

export default App;
