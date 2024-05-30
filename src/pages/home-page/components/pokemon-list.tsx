import { PokemonCard, PokemonCardProps } from "./pokemon-card";

type PokemonListProps = {
  pokemonList: PokemonCardProps[];
};

export const PokemonList: React.FunctionComponent<PokemonListProps> = ({
  pokemonList,
}) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-5 gap-y-10">
      {pokemonList.map((pokemon) => (
        <PokemonCard
          key={pokemon.name}
          name={pokemon.name}
          imageUrl={pokemon.imageUrl}
        />
      ))}
    </div>
  );
};
