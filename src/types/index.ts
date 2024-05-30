export type BaseCollectionResponse<TData> = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<TData>;
};

export type CollectionParams = {
  offset: number;
  limit: number;
};

export type PokemonCollectionResponse = BaseCollectionResponse<{
  name: string;
  url: string;
}>;
