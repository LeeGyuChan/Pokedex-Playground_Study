import { AxiosError, AxiosResponse } from "axios";
import { useQuery } from "react-query"
import { pokemonApi } from "../../apis/pokemonApi";
import { ListResponse, PokemonResponse } from "../../types";

const usePokemon = (query:string) => {

    return useQuery<AxiosResponse<ListResponse>, AxiosError>(query ? ['pokemon', query] : 'pokemon', () => pokemonApi(query));
}

export default usePokemon