import { useInfiniteQuery } from "@tanstack/react-query";

import { PokemonService } from "@/services";

export const useGetAllPokemonQuery = () => {
  return useInfiniteQuery({
    queryKey: ["pokemon"],
    queryFn: async () => {
      return await PokemonService.getAllPokemon();
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.next,
  });
};
