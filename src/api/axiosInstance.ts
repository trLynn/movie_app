import axios from "axios";

export const baseApi = axios.create({
    baseURL: "https://api.themoviedb.org",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2M2NkOGFiZjE2YzQ1YjM4ZWQxNGQzMDVlNjgzNTUyNiIsIm5iZiI6MTcyODM5MjU0OC43NDA2MDIsInN1YiI6IjY1MGZmNmE3YTkxMTdmMDBmZWIyZDhkOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ccx6nnrXbfoAt02z8Wa4NOE81pcYegdtHvCfxDmGfYM'
    }
})