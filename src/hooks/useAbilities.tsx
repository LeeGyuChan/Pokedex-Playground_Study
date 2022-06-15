
import axios, { AxiosError, AxiosResponse } from "axios";
import { useQueries } from "react-query"
import { UseQueryResult } from 'react-query/types/react/types';
import { Ability } from "../types";


const useAbilities= <T = any>(abilities:Array<Ability>) :  Array<UseQueryResult<AxiosResponse<T>, AxiosError>> => 
    {
        const queries  = abilities.map(({ability}, idx)=>(
            {
                queryKey : ['ability', idx],
                queryFn : () => axios.get(ability.url)
            }
        ))

        return useQueries(queries) as Array<UseQueryResult<AxiosResponse<T>, AxiosError>>
    }


export default useAbilities