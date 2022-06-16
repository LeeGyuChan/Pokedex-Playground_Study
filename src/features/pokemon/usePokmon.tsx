import { AxiosError, AxiosResponse } from "axios";
import { useQueries, useQuery } from "react-query"
import { pokemonApi } from "../../apis/pokemonApi";
import { UseQueryResult } from 'react-query/types/react/types';


const usePokemon = <T = any>(query:string) :  UseQueryResult<AxiosResponse<T>, AxiosError> => useQuery(query ? ['pokemon', query] : 'pokemon', () => pokemonApi(query));


export const usePokemonQueries = <T = any>(names:string[]) : Array<UseQueryResult<AxiosResponse<T>, AxiosError>> => {
    
    const queries = names.map((name, idx) => ({
        queryKey : ['evolution', `${name}+${idx}`],
        queryFn : () => pokemonApi(name)  
    }))

    return useQueries(queries) as Array<UseQueryResult<AxiosResponse<T>, AxiosError>>
}


export default usePokemon