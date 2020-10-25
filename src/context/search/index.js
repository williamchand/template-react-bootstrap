import React, { createContext, useReducer } from 'react';
import { node } from 'prop-types';
import reducer from './reducer';

const defaultState = {};

export const SearchContext = createContext();

export function SearchProvider(props){
  const [state, dispatch] = useReducer(reducer, defaultState);
  const {children} = props;

  return <SearchContext.Provider value={[state, dispatch]}>{children}</SearchContext.Provider>;
}

SearchProvider.propTypes = {
  children: node.isRequired,
};