import { DarkModeConfig } from "use-dark-mode";

export const BASE_POKEMON_API_URL = import.meta.env.VITE_BASE_POKEMON_API_URL;
export const BASE_POKEMON_ARTWORK_IMAGE_URL = import.meta.env
  .VITE_BASE_POKEMON_ARTWORK_IMAGE_URL;

export const USE_DARK_MODE_INITIAL_CONFIG: DarkModeConfig = {
  classNameDark: "dark",
  classNameLight: "light",
};
