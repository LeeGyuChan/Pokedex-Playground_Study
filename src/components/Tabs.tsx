import styled from '@emotion/styled';
import React from 'react'
import { Color } from '../types';
import { mapColorToHex } from '../utils';

const Base = styled.div`
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    display: flex;
`;


const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
`;

const Listitem = styled.li`
    & + &{
        margin-left: 16px;
    }
`;

const TabButton = styled.button<{active? : boolean; color:string;}>`
    margin: 0;
    border-radius : 8px;
    box-shadow:  6px 4px 14px 5px rgba(0,0,0,0.21);
    padding: 6px 12px;
    background-color: #fff;
    border: none;
    font-size: 16px;
    color:${({active, color}) => active ? color : '#6B7280'}
`;

interface Props {
    tab : 'about' | 'stats' | 'evolution'
    onClick : (tab : 'about' | 'stats' | 'evolution') => void;
    color?:Color;
}

export default function Tabs({tab, onClick, color}: Props) {
  return (
    <Base>
        <List>
            <Listitem onClick={() =>onClick('about')}>
                <TabButton active={tab === 'about'} color={mapColorToHex(color?.name)}>About</TabButton>
            </Listitem>
            <Listitem onClick={() =>onClick('stats')}>
                <TabButton active={tab === 'stats'} color={mapColorToHex(color?.name)}>Stats</TabButton>
            </Listitem>
            <Listitem onClick={() =>onClick('evolution')}>
                <TabButton active={tab === 'evolution'} color={mapColorToHex(color?.name)}>Evolution</TabButton>
            </Listitem>
        </List>
    </Base>
  )
}