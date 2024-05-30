import { useEffect, useState } from "react";

import { BASE_POKEMON_ARTWORK_IMAGE_URL } from "@/configs";
import { useGetAllPokemonQuery } from "@/hooks";
import { PokemonCollectionResponse } from "@/types";

import { PokemonCardProps } from "./components/pokemon-card";
import { PokemonList } from "./components/pokemon-list";

export const HomePage = () => {
  const [pokemonData, setPokemonData] = useState<PokemonCardProps[]>([]);
  const { data } = useGetAllPokemonQuery({
    queryParams: {
      limit: 20,
      offset: 0,
    },
  });

  const transformPokemonData = (data: PokemonCollectionResponse) => {
    return data.results.map((r) => ({
      name: r.name,
      imageUrl: `${BASE_POKEMON_ARTWORK_IMAGE_URL}/${r.url.split("/")[6]}.png`,
    }));
  };

  useEffect(() => {
    if (data && data.pages.length > 0) {
      setPokemonData(transformPokemonData(data.pages[0]));
    }
  }, [data]);

  return (
    <div className="">
      {data?.pages.map((page) => (
        <PokemonList
          key={page.next ?? page.previous}
          pokemonList={pokemonData}
        />
      ))}
    </div>
  );
};
