import { json } from "react-router-dom";

console.log('check apiEach');
export const getSingleShoe = async (data) => {
  const id = data.params.shoeId;

  const response = await fetch(`https://658dac0d7c48dce947399400.mockapi.io/Shoes/${id}`, {
    method: 'GET',
    headers: { 'content-type': 'application/json' },
  });
  console.log(response);
  if (response.ok) {
    const resData = await response.json();
    return resData;
  } else {
    throw json({ message: 'Could not fetch item' }, { status: 500 });
  }
};