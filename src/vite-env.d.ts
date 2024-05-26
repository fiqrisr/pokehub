/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BASE_POKEMON_API_URL: string;
  readonly VITE_BASE_POKEMON_ARTWORK_IMAGE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
