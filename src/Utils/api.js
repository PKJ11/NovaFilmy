import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZGQzZDIxZjZlODViYTMyMDUyMmQ5Zjg0Y2FjZDYzYiIsInN1YiI6IjY0MTdlNGU2ZTc0MTQ2MDA4NjcyNTY4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XWuRVM0jtWiEmWbzT_fC5DGF7_dYFAxCcqZlIqVAXn4";

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};
