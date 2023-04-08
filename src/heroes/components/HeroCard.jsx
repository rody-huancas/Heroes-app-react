import { Link } from "react-router-dom";

const CharactersByHero = ({ alter_ego, characters }) => {
  return alter_ego === characters ? <></> : <p>{characters}</p>;
};

export const HeroCard = ({
  id,
  superhero,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const heroImageUrl = `/assets/heroes/${id}.jpg`;

  return (
    <>
      <div className="h-[250px] flex gap-5 bg-slate-800 text-white rounded-lg mb-5 animate__animated animate__fadeInUp">
        <img src={heroImageUrl} alt={superhero} className="rounded-s-lg" />
        <div className="flex flex-col justify-center gap-2 items-start py-3">
          <h5 className="uppercase font-bold text-red-400">{superhero}</h5>
          <p className="">{alter_ego}</p>
          <CharactersByHero characters={characters} alter_ego={alter_ego} />
          <p className="">
            <small className="">{first_appearance}</small>
          </p>

          <Link
            className="bg-blue-500 px-5 py-1 mt-1 rounded-md hover:bg-blue-700"
            to={`/hero/${id}`}
          >
            Más...
          </Link>
        </div>
      </div>
    </>
  );
};
