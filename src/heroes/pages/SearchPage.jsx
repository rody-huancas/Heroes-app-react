import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { useForm } from "../../hooks/useForm";
import { getHeroesByName } from "../helpers";
import { HeroCard } from "../components/HeroCard";

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);
  const heroes = getHeroesByName(q);

  const showSearch = q.length === 0;
  const showError = q.length > 0 && heroes.length === 0;

  const { searchText, onInputChange } = useForm({
    searchText: q,
  });

  const onSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`?q=${searchText}`);
  };

  return (
    <>
      <h2 className="text-2xl font-bold uppercase mb-5 text-center">
        Buscar <span className="text-indigo-500">Héroe </span>
      </h2>

      <div className="flex flex-col items-center">
        <div className="bg-white p-10 rounded-md shadow-xl mb-10">
          <form onSubmit={onSearchSubmit}>
            <div className="flex flex-col sm:flex-row items-center gap-5">
              <input
                type="text"
                placeholder="Buscar un héroe"
                className="w-[300px] border-2 border-sky-900 rounded-md p-2"
                name="searchText"
                autoComplete="off"
                value={searchText}
                onChange={onInputChange}
              />

              <button className="bg-indigo-500 text-white font-bold uppercase px-5 py-2 rounded-md">
                Buscar
              </button>
            </div>
          </form>
        </div>

        <div className="w-[100%] sm:w-[400px]">
          <h4 className="text-center text-2xl font-bold uppercase mb-5">
            Resultados
          </h4>

          <div
            className="text-center font-medium text-xl bg-blue-500 p-4 rounded-md text-white"
            style={{ display: showSearch ? "" : "none" }}
          >
            Busca un héroe y se mostrará aquí.
          </div>
          <div
            className="text-center font-medium text-xl bg-red-500 p-4 rounded-md text-white"
            style={{ display: showError ? "" : "none" }}
          >
            No se encuentra al héroe: <b>{q}</b>
          </div>

          {heroes.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};
