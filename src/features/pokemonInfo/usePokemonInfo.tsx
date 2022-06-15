import { AxiosError, AxiosResponse } from "axios";
import { useQuery } from "react-query"
import { SpeciesApi } from "../../apis/pokemonApi";
import { ListResponse } from "../../types";

const usePokemonInfo = (query:string) => {

    return useQuery<AxiosResponse<ListResponse>, AxiosError>(query ? ['pokemon', query] : 'pokemon', () => SpeciesApi(query));
}

export default usePokemonInfo