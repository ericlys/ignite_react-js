import {NextApiRequest, NextApiResponse} from 'next';

export default (request: NextApiRequest, response: NextApiResponse) => {
  console.log(request.query)

  const users = [
    { id: 1, name: 'Ericlys'},
    { id: 2, name: 'Diego'},
    { id: 3, name: 'Rafa'},
  ]

  return response.json(users);
}