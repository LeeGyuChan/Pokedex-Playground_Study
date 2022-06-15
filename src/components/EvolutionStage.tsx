import styled from '@emotion/styled';
import React from 'react'
import { Color } from '../types';
import { mapColorToHex } from '../utils';


const DividerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Text = styled.div<{ color: string }>`
  text-align: center;
  color: ${({ color }) => color};
  font-size: 12px;
`;

const Divider = styled.div`
  background-color: #D1D5DB;
  border-radius: 12px;
  height: 8px;
  margin-inline: 8px;
  margin-top: 4px;
`;

const ImageWrapper = styled.div`
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const Base = styled.li`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;



interface Props {
    from: {
      name: string;
      url: string;
    }
    to: {
      name: string;
      url: string;
    }
    level: number;
    color?: Color;
  }


export default function EvolutionStage({from, to, level, color}:Props) {
  return (
    <Base>
    <ImageWrapper>
      
    </ImageWrapper>
    <DividerWrapper>
      {level && <Text color={mapColorToHex(color?.name)}>{`Level ${level}`}</Text>}
      <Divider />
    </DividerWrapper>
    <ImageWrapper>
      
    </ImageWrapper>
  </Base>
  )
}
