import axios, { AxiosError, AxiosResponse } from "axios";
import { useQuery } from "react-query"
import { UseQueryResult } from 'react-query/types/react/types';


const useEvolutionChain = <T = any>(url?:string) :  UseQueryResult<AxiosResponse<T>, AxiosError> =>
    useQuery(['evolution', url] , () => url ? axios.get(url): null);

export default useEvolutionChain