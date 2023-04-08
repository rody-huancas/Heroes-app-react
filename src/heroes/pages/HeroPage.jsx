import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers";
import { useMemo } from "react";

export const HeroPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const hero = useMemo(() => getHeroById(id), [id]);

  const onNavigateBack = () => {
    navigate(-1);
  };

  if (!hero) return <Navigate to="/marvel" />;

  return (
    <div className="px-5 mb-5">
      <div className="flex flex-col items-center gap-10">
        <h2 className="text-3xl font-extrabold uppercase border-b-4 border-indigo-700">
          {hero.superhero}
        </h2>
        <div className="flex justify-center flex-col md:flex-row items-center md:items-start gap-10">
          <img
            src={`/assets/heroes/${id}.jpg`}
            alt={hero.superhero}
            className="w-[300px] rounded-md"
          />

          <div className="flex flex-col items-center md:items-start md:justify-start ">
            <p className="text-lg uppercase font-bold">
              Alter ego:{" "}
              <span className="text-indigo-600 font-medium">
                {hero.alter_ego}
              </span>
            </p>

            <p className="text-lg uppercase font-bold">
              Publisher:{" "}
              <span className="text-indigo-600 font-medium capitalize">
                {hero.publisher}
              </span>
            </p>

            <p className="text-lg uppercase font-bold">
              First Appearance:{" "}
              <span className="text-indigo-600 font-medium capitalize">
                {hero.first_appearance}
              </span>
            </p>

            <p className="text-lg uppercase font-bold">
              Characters:{" "}
              <span className="text-xl font-medium text-indigo-600 capitalize">
                {hero.characters}
              </span>
            </p>

            <button
              className="mt-10 bg-indigo-600 text-white px-5 p-3 rounded-lg uppercase font-medium hover:bg-indigo-700 transition-all duration-300"
              onClick={onNavigateBack}
            >
              Regresar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
