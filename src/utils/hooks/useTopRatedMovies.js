import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS, apiURLs } from "../constants";
import { addTopRatedMovies } from "../../store/movieSlice";

export const useTopRatedMovies = () => {
    const dispatch = useDispatch();

    const getTopRatedMovies = async () => {
        const response = await fetch(
            apiURLs.topRatedMovies,
            API_OPTIONS
        );
        const jsonData = await response.json();
        dispatch(addTopRatedMovies(jsonData.results));
    };

    useEffect(() => {
        getTopRatedMovies();
    }, []);
};
