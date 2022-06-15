import { AxiosError, AxiosResponse } from "axios";
import { useQuery } from "react-query"
import { pokemonApi } from "../../apis/pokemonApi";
import { UseQueryResult } from 'react-query/types/react/types';


const usePokemon = <T = any>(query:string) :  UseQueryResult<AxiosResponse<T>, AxiosError> => useQuery(query ? ['pokemon', query] : 'pokemon', () => pokemonApi(query));


export default usePokemon