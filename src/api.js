import { json } from "react-router-dom";

export const getAllShoes = async () => {
  const response = await fetch('https://63f9f2ca473885d837d55e59.mockapi.io/api/Shoes', {
    method: 'GET',
    headers: { 'content-type': 'application/json' },
  });
  if (response.ok) {
    const resData = await response.json();
    return resData;
  } else {
    // return {isError: true, message: "Couldn't load page." }
    // throw new Response(JSON.stringify({ message: 'Could not fetch items' }, { status: 500 }))
    throw json({ message: 'Could not fetch items' }, { status: 500 })
  }
};