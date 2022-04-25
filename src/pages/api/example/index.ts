import { NextApiRequest, NextApiResponse } from 'next';

export default (request: NextApiRequest, response: NextApiResponse) => {

    const user = [
        { id: 1, name: 'Tiago' },
        { id: 2, name: 'Tiago' },
        { id: 3, name: 'Tiago' },
        { id: 4, name: 'Tiago' },
        { id: 5, name: 'Tiago' }
    ]

    return response.json(user);
} 