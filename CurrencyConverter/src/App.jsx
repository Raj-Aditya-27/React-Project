import CurrencyConverter from "./components/CurrencyConverter";
import "./App.css";

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
        <div className="container">
          <CurrencyConverter />
        </div>
      </div>
    </>
  );
}

export default App;
