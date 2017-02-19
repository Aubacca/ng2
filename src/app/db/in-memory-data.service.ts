import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let heroes = [
            { id: 11, name: 'Mr. Nice' },
            { id: 12, name: 'Narco' },
            { id: 13, name: 'Bombasto' },
            { id: 14, name: 'Celeritas' },
            { id: 15, name: 'Magneta', power: 233 },
            { id: 16, name: 'RubberMan' },
            { id: 17, name: 'Dynama' },
            { id: 18, name: 'Dr IQ' },
            { id: 19, name: 'Magma' },
            { id: 20, name: 'Tornado', power: 245 },
            { id: 100, name: 'Iron Man', power: 265 },
            { id: 101, name: 'Thor' },
            { id: 102, name: 'Ant-Man' },
            { id: 103, name: 'Wasp' },
            { id: 104, name: 'Hulk' },
            { id: 105, name: 'Captain America' },
            { id: 106, name: 'Hawkeye' },
            { id: 107, name: 'Quicksilver' },
            { id: 108, name: 'Scarlet Witch' },
            { id: 109, name: 'Hercules', power: 305 }
        ];
        return { heroes };
    }
}
