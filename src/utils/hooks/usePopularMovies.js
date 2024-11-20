import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS, apiURLs } from "../constants";
import { addPopularMovies } from "../../store/movieSlice";

export const usePopularMovies = () => {
    const dispatch = useDispatch();

    const getPopularMovies = async () => {
        const response = await fetch(
            apiURLs.popularMovies,
            API_OPTIONS
        );
        const jsonData = await response.json();
        dispatch(addPopularMovies(jsonData.results));
    };

    useEffect(() => {
        getPopularMovies();
    }, []);
};
