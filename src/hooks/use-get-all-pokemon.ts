import { useInfiniteQuery } from "@tanstack/react-query";

import { PokemonService } from "@/services";

type UseGetAllPokemonQueryProps = {
  queryParams: {
    limit: number;
    offset: number;
  };
};

export const useGetAllPokemonQuery = ({
  queryParams,
}: UseGetAllPokemonQueryProps) => {
  return useInfiniteQuery({
    queryKey: ["pokemon", queryParams],
    queryFn: async () => {
      return await PokemonService.getAllPokemon({
        limit: queryParams.limit,
        offset: queryParams.offset,
      });
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage) =>
      lastPage.next ? queryParams.offset + queryParams.limit : undefined,
  });
};
