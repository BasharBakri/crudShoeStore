import { json } from "react-router-dom";

console.log('check apiEach');
export const getSingleShoe = async (data) => {
  const id = data.params.shoeId

  const response = await fetch(`https://63f9f2ca473885d837d55e59.mockapi.io/api/Shoes/${id}`, {
    method: 'GET',
    headers: { 'content-type': 'application/json' },
  });
  console.log(response);
  if (response.ok) {
    const resData = await response.json();
    return resData;
  } else {
    throw json({ message: 'Could not fetch item' }, { status: 500 })
  }
};