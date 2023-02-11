/* eslint-disable prettier/prettier */
import { myDbModule } from './db/my-db-module'
import  { dbClassic as dbClassicFromModuleA} from './module_a'

const dbClassic = myDbModule
dbClassic.add({ name: 'Roberto', age: 30 });
dbClassic.add({ name: 'Guilherme', age: 45 });
dbClassic.add({ name: 'Mariana', age: 20 });
dbClassic.show();

console.log(dbClassic === dbClassicFromModuleA)