import Header from "./components/Header/Header";
import VantaEffect from "./components/VantaEffect/VantaEffect";
import AppRouter from "./routing/AppRouter";

const App = () => {
  // const test = useAppSelector((store) => store);
  return (
    <div className="App">
      <Header />
      <AppRouter />
      <VantaEffect />
    </div>
  );
};

export default App;
