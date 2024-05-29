import { httpClient } from "@/http";

export const PokemonService = {
  getAllPokemon: async () => {
    return await httpClient.get("pokemon").json();
  },
};
