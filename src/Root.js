import { Outlet, useNavigation } from "react-router-dom"
import MainNav from "./MainNav"


export default function Root() {
  const navigation = useNavigation()

  return (<>
    <MainNav />
    {navigation.state === 'loading' && <p>Loading...</p>}
    {(navigation.state === 'idle' || navigation.state === 'submitting') && <Outlet />}

  </>)
}