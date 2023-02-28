import { Outlet, useNavigation } from "react-router-dom"
import MainNav from "./MainNav"


export default function Root() {
  const navigation = useNavigation()

  return (<>
    <MainNav />
    {navigation.state === 'loading' && <div className="lds-dual-ring"></div>}
    {(navigation.state === 'idle' || navigation.state === 'submitting') && <Outlet />}

  </>)
}