import { json, redirect } from "react-router-dom";

console.log('check sendShoe');
export const sendShoe = async ({ request, params }) => {
  const sendData = await request.formData();
  const sentShoeData = {
    title: sendData.get('title'),
    price: sendData.get('price'),
    avatar: sendData.get('avatar'),
    description: sendData.get('description')
  }
  console.log(sentShoeData);
  const response = await fetch(`https://63f9f2ca473885d837d55e59.mockapi.io/api/Shoes/`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(sentShoeData)
  });
  console.log(response);
  if (response.ok) {
    return redirect('/a/allshoes');
  } else {
    throw json({ message: 'Could not send Item' }, { status: 400 })
  }
};