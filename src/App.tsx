import VantaEffect from "./components/VantaEffect/VantaEffect";
import { useAppSelector } from "./hooks/redux";
import AppRouter from "./routing/AppRouter";

const App = () => {
  // const test = useAppSelector((store) => store);
  return (
    <div className="App">
      <AppRouter />
      <VantaEffect />
    </div>
  );
};

export default App;
