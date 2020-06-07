import {Response, Request} from 'express';
import knex from '../database/connection';

class ItemController {
    async index(request: Request, response: Response) {
        const items = await knex('items').select('*');
        const serializedItems = items.map(item => {
            return {
                id: item.id,
                title: item.title,
                imageUrl: 'http://192.168.1.4:3333/uploads/' + item.image
            };
        });
    
        return response.json(serializedItems);
    };
};

export default ItemController;