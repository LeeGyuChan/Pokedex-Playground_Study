import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom"
import IoArrowBackOutline from 'react-icons/fa'

const Base = styled.div`
    display: flex;

`;

const Button = styled.button`

    border: none;
    background: transparent;
    color: #fff;
    font-weight: bold;
    font-size: 18px;
    justify-content: center;
    align-items: center;

`;



const BackButton = () =>{

    const navigate = useNavigate();

    const handleClick = () =>{
        navigate(-1);
    }

    return(
        <Base>
            <Button onClick={handleClick}>Back</Button>
        </Base>
    )
}

export default BackButton