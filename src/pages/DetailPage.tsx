import { useParams } from "react-router-dom";


type Params = {
    id: string;
}

const DetailPage = () => {

    const {id} = useParams<Params>();

    return(
        <div>DetailPage id : ${id}</div>
    )
}

export default DetailPage