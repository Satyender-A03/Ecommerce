import { createContext } from "react";

export const SearchContext = createContext({
  search: "",
  setSearch: () => {},
  searchResults: [],
  setSearchResults: () => {},
});

export const SearchProvider = SearchContext.Provider;
