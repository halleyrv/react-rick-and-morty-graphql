import logo from "./logo.svg";
import "./App.css";
import { useQuery } from "@apollo/client";
import { getAllCharacters } from "./graphql/queries";
import Card from "./components/Card";
const App = () => {
  const { loading, error, data } = useQuery(getAllCharacters, {
    variables: { page: 5 },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      <header>
        <h1 className="text-center m-5">Hello Rick and Morty GraphQL App</h1>
      </header>

      <div className="row">
        {data?.characters?.results?.map((character) => (
          <Card character={character} key={character.id} />
        ))}
      </div>
    </>
  );
};

export default App;
