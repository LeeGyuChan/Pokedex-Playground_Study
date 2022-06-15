import { AxiosError, AxiosResponse } from "axios";
import { useQuery } from "react-query"
import { SpeciesApi } from "../apis/pokemonApi";
import { SpeciesResponse } from "../types";

const useSpecies = (query:string) => {

    return useQuery<AxiosResponse<SpeciesResponse>, AxiosError>(query ? ['species', query] : 'pokemon', () => SpeciesApi(query));
}

export default useSpecies