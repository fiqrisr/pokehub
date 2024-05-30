import { createLazyFileRoute } from "@tanstack/react-router";

import { useGetAllPokemonQuery } from "@/hooks";

const Index = () => {
  const { data } = useGetAllPokemonQuery({
    queryParams: {
      limit: 20,
      offset: 0,
    },
  });

  return (
    <div className="p-2">
      {data?.pages.map((page) => (
        <div key={page.next}>
          {page.results.map((pokemon) => (
            <div key={pokemon.url}>{pokemon.name}</div>
          ))}
        </div>
      ))}
    </div>
  );
};

export const Route = createLazyFileRoute("/")({
  component: Index,
});
