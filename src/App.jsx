import Education from "./components/CVForm/Education";
import Experience from "./components/CVForm/Experience";
import PersonalInfo from "./components/CVForm/PersonalInfo";

function App() {
  return (
    <div className="app">
      <PersonalInfo />
      <Experience />
      <Education />
    </div>
  );
}

export default App;
