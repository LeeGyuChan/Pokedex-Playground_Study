import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import About from "../components/About";
import Evolution from "../components/Evolution";
import Stats from "../components/Stats";
import Tabs from "../components/Tabs";
import usePokemon from "../features/pokemon/usePokmon";
import PokemonInfo from "../features/pokemonInfo";
import useSpecies from "../hooks/useSpecies";
import { PokemonResponse } from "../types";
import styled from '@emotion/styled/macro';
import BackButton from "../components/BackButton";
import { CSSTransition, Transition } from "react-transition-group";
import { keyframes } from "@emotion/react";


const slideInLeft = keyframes`
  from {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
`;
const slideOutLeft = keyframes`
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
`;

const slideInRight = keyframes`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;

const slideOutRight = keyframes`
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
`;


const Base = styled.div`
    position: absolute;
    background-color: #fff;
`;

const Container = styled.section`
  display: flex;
  flex-direction: column;
`;

const TabsWrapper = styled.div`
  margin: 24px auto 0;
`;


type Params = {
    id: string;
}

type Tab = 'about' | 'stats' | 'evolution';

const DetailPage = () => {

    const {id} = useParams<Params>();

    const [selectedTab, setSelectedTab] = useState<Tab>('about')

    const pokemonResult = usePokemon<PokemonResponse>(id ? id : '');

    const { name, types, height, weight, abilities, baseExp, stats } = useMemo(() => ({
        name: pokemonResult.data?.data.name,
        types: pokemonResult.data?.data.types,
        height: pokemonResult.data?.data.height,
        weight: pokemonResult.data?.data.weight,
        abilities: pokemonResult.data?.data.abilities,
        baseExp: pokemonResult.data?.data.base_experience,
        stats: pokemonResult.data?.data.stats,
      }), [pokemonResult]);



    const speciesResult = useSpecies(id ? id : '');

      const {
        color,
        growthRate,
        flavorText,
        genderRate,
        isLegendary,
        isMythical,
        evolutionChainUrl,
      } = useMemo(() => ({
        color: speciesResult.data?.data.color,
        growthRate: speciesResult.data?.data.growth_rate.name,
        flavorText: speciesResult.data?.data.flavor_text_entries[0].flavor_text,
        genderRate: speciesResult.data?.data.gender_rate,
        isLegendary: speciesResult.data?.data.is_legendary,
        isMythical: speciesResult.data?.data.is_mythical,
        evolutionChainUrl: speciesResult.data?.data.evolution_chain.url,
      }), [speciesResult]);
    
    const handleClick = (tab: Tab) => {
        setSelectedTab(tab);
    }

    return(
        <CSSTransition in={true} classNames={"right"} timeout={300}>
                <Base>
                    <PokemonInfo id={id ? id :''} name={name} types={types} color={color}/>
                    <Tabs tab={selectedTab} onClick={handleClick} color={{name:"red", url:""}}/>
                    {
                        selectedTab === 'about' && (
                            <About 
                                isLoading={pokemonResult.isLoading || pokemonResult.isLoading}
                                color={color}
                                growthRate={growthRate}
                                flavorText={flavorText}
                                genderRate={genderRate}
                                isLegendary={isLegendary}
                                isMythical={isMythical}
                                types={types}
                                weight={weight}
                                height={height}
                                baseExp={baseExp}
                                abilities={abilities}
                        />
                        )
                    }
                    {
                        selectedTab === 'stats' && (
                            <Stats
                                isLoading={pokemonResult.isLoading || pokemonResult.isLoading}
                                color={color}
                                stats={stats}
                            />
                        )
                    }
                    {
                        selectedTab === 'evolution' && (
                            <Evolution
                                id={id}
                                isLoading={speciesResult.isLoading}
                                color={color}
                                url={evolutionChainUrl}
                            />
                        )
                    }
                </Base>
        </CSSTransition>
    )
}

export default DetailPage