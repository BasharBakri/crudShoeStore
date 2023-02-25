import ShoeItem from "./ShoeItem";
import { useLoaderData, useParams } from "react-router-dom";

export default function ShoeDetail() {
  const params = useParams();
  console.log('checkdetail');
  const shoeData = useLoaderData();
  console.log(shoeData);

  return (<>
    <ShoeItem shoe={shoeData} />
    <p>{params.shoeId}</p>
  </>)
}

