"use server"
import {NewLinks} from "@/types";
import getCollection, {LINKS_COLLECTION_NAME} from "@/db";

export default async function getOneLink(alias: string): Promise<NewLinks | null>{
    const linkCollection = await getCollection(LINKS_COLLECTION_NAME);
    const data = await linkCollection.findOne({alias});

    if (!data) {
        return null;
    }

    return{
        link: data.link,
        alias: data.alias,
    }
}