import React, {createContext, FunctionComponent, useContext, useReducer} from 'react';
import { reducer, initialState } from './reducer';

const StateContext = createContext({});

export const StateProvider: FunctionComponent = ( children:any ) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
