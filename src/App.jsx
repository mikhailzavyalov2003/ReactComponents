import App2 from "./App2.jsx";
import App3 from "./App3.jsx";
import MathLogic from "./MathLogic.jsx";
import MathLogic2 from "./MathLogic2.jsx";
import NamesColleciton from "./NamesColleciton.jsx";

export default function App() {
  return (
    <div>
      <NamesColleciton></NamesColleciton>
      <MathLogic a="2" b="2"></MathLogic>
      <MathLogic2 a="5" b="5"></MathLogic2>
      <App3></App3>
      <App2></App2>
      <p>Привет мир!</p>
    </div>
  )
}

