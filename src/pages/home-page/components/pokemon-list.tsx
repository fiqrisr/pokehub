import { PokemonCard, PokemonCardProps } from "./pokemon-card";

type PokemonListProps = {
  pokemonList: PokemonCardProps[];
};

export const PokemonList: React.FunctionComponent<PokemonListProps> = ({
  pokemonList,
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
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
