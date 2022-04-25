import { NextApiRequest, NextApiResponse } from 'next';

export default (request: NextApiRequest, response: NextApiResponse) => {

    console.log(request.query)

    const user = [
        { id: 1, name: 'Tiago 1' },
        { id: 2, name: 'Tiago 2' },
        { id: 3, name: 'Tiago 3' },
        { id: 4, name: 'Tiago 4' },
        { id: 5, name: 'Tiago 5' }
    ]

    return response.json(user);
}