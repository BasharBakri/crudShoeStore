import { Outlet, useNavigation } from "react-router-dom";
import ShoeNav from "./ShoeNav";


export default function AllShoesRoot() {
  const navigation = useNavigation()




  return (<>
    <ShoeNav />
    {(navigation.state === 'idle' || navigation.state === 'submitting') && <Outlet />}
  </>)
}

