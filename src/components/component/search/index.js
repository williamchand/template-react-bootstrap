import React from 'react';

import MovieView from './movie';
import SearchView from './search';
import { SearchProvider } from '../../../context/search'

function SearchPage() {
  return (
    <SearchProvider>
      <SearchView />
      <MovieView />
    </SearchProvider>
  );
}

export default SearchPage;
