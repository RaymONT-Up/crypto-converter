import Header from "./components/Header/Header";
import { useAppSelector } from "./hooks/redux";
import AppRouter from "./routing/AppRouter";

const App = () => {
  const test = useAppSelector((store) => store);
  console.log(test);
  return (
    <div className="App">
      <Header />
      <AppRouter />
    </div>
  );
};

export default App;
