import Header from "./components/Header/Header";
import VantaEffect from "./components/VantaEffect/VantaEffect";
import AppRouter from "./routing/AppRouter";
import { useGetCryptosQuery } from "./services/cryptoApi";

const App = () => {
  // const test = useAppSelector((store) => store);

  // @ts-ignore
  const test = useGetCryptosQuery();
  console.log(test);

  return (
    <div className="App">
      <Header />
      <AppRouter />
      <VantaEffect />
    </div>
  );
};

export default App;
