import CharacterList from "./components/CharacterList";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="px-20 text-white bg-slate-900 font-mono lg:text-lg">
      <h1 className="flex justify-center items-center py-10 text-xl lg:font-bold lg:text-6xl">
        Personajes de Rick and Morty
      </h1>
      <CharacterList />
      <Footer />
    </div>
  );
};

export default App;
