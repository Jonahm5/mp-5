"use server"

import {NewLinks} from "@/types"
import getCollection, {LINKS_COLLECTION_NAME} from "@/db";

export default async function createNewLink(link: string, alias: string,):Promise<NewLinks> {
    console.log("Creating New Link");
    const p = {
        link: link,
        alias: alias,
    };

    const linkCollection = await getCollection(LINKS_COLLECTION_NAME);
    const res = await linkCollection.insertOne({...p});

    if (!res.acknowledged) {
        throw new Error("DB Insert Failed");
    }



    return{...p};
}