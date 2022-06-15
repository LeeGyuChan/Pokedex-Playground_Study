import axiosInstance from ".";

export const pokemonApi = (query:string) => axiosInstance.get(`/pokemon/${query}`, {params:{limit:151}});
export const SpeciesApi = (query:string) => axiosInstance.get(`/pokemon-species/${query}`);
export const AbilitiesApi = (query:string) => axiosInstance.get(`/ability/${query}`);
export const EvolustionChainsApi = (query:string) => axiosInstance.get(`/evolution-chain/${query}`);