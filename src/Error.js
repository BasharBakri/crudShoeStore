import MainNav from "./MainNav";
import { useRouteError } from "react-router-dom";

export default function Error() {
  const errMsg = useRouteError();

  let errorTitle = 'An error occured';
  let errorParagraph = 'Unable to load this page';

  if (errMsg.status === 500) {
    errorParagraph = errMsg.data.message;
  }
  if (errMsg.status === 404) {
    errorTitle = 'Not found!';
    errorParagraph = 'Could not find page.';
  }
  if (errMsg.status === 400) {
    errorTitle = 'Bad request!';
    errorParagraph = errMsg.data.message;
  }

  return (<>
    <MainNav />
    <h2>{errorTitle}</h2>
    <p>{errorParagraph}</p>
  </>)
}