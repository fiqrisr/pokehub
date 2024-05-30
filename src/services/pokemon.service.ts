import { httpClient } from "@/http";
import { CollectionParams, PokemonCollectionResponse } from "@/types";

export const PokemonService = {
  getAllPokemon: async (params: CollectionParams) => {
    return await httpClient
      .get("pokemon", {
        searchParams: params,
      })
      .json<PokemonCollectionResponse>();
  },
};
