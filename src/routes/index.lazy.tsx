import { createLazyFileRoute } from "@tanstack/react-router";

import { useGetAllPokemonQuery } from "@/hooks";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  const { data } = useGetAllPokemonQuery();

  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
    </div>
  );
}
