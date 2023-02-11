/* eslint-disable prettier/prettier */
import { myDbModule } from './db/my-db-module'

const dbClassic = myDbModule
dbClassic.add({ name: 'Leonardo', age: 24 });
dbClassic.add({ name: 'Leandro', age: 30 });
dbClassic.add({ name: 'Gustavo', age: 45 });
dbClassic.add({ name: 'Maria', age: 20 });
dbClassic.remove(1);
dbClassic.show();


export { dbClassic }