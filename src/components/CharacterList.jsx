import { useEffect, useState } from "react";
import Character from "./Character";
import NavPage from "./NavPage";

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${page}`
      );
      const data = await response.json();
      setLoading(false);
      setCharacters(data.results);
    };
    fetchData();
  }, [page]);
  return (
    <>
      <NavPage page={page} setPage={setPage} />
      <div className="container grid grid-cols-1 content-center justify-items-center mt-12 lg:gap-16 lg:grid lg:grid-cols-4">
        {loading ? (
          <h1>Cargando...</h1>
        ) : (
          characters.map((character) => (
            <Character
              key={character.id}
              name={character.name}
              image={character.image}
            />
          ))
        )}
      </div>
      <NavPage page={page} setPage={setPage} />
    </>
  );
};

export default CharacterList;
