import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, apiURLs } from "../constants";
import { addPopularMovies } from "../../store/movieSlice";

export const usePopularMovies = () => {
    const dispatch = useDispatch();
    const popularMovies = useSelector(store => store.movies.popularMovies);

    const getPopularMovies = async () => {
        const response = await fetch(
            apiURLs.popularMovies,
            API_OPTIONS
        );
        const jsonData = await response.json();
        dispatch(addPopularMovies(jsonData.results));
    };

    useEffect(() => {
        !popularMovies && getPopularMovies();
    }, []);
};
