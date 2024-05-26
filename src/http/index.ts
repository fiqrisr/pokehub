import ky from "ky";
import { QueryClient } from "@tanstack/react-query";

import { BASE_POKEMON_API_URL } from "../configs";

export const httpClient = ky.create({
  prefixUrl: BASE_POKEMON_API_URL,
});

export const queryClient = new QueryClient();
