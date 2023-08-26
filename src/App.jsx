import Preview from "./components/CVPreview/Preview";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <div className="main-container">
        <Content />
        <Preview />
      </div>
      <Footer />
    </div>
  );
}

export default App;
