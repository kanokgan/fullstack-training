import { MikroORM } from "@mikro-orm/core";
import { Post } from "entities/Post";
import __prod__ from 'constants';


const main = async () => {
    const orm = await MikroORM.init({
        entities: [Post],
        dbName: 'lireddit',
        type: 'postgresql',
        debug: !__prod__,
    });

    console.log(orm != null)
}

main();