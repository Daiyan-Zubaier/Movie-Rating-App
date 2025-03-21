import {createContext, useState, useContext, useEffect } from 'react';

const MovieContext = createContext();

export const useMovieContext = () =>  useContext(MovieContext);

// Provide state to any component "wrapped" around it
export const MovieProvider = ({children}) => {
    
}