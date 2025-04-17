"use client"
import {Box, Textarea, Typography} from "@mui/joy";
import {Button, TextField} from "@mui/material";
import {useState} from "react";
import createNewLink from "@/lib/createNewLink";
import getOneLink from "@/lib/getOneLink";
import checkValidLink from "@/lib/checkValidLink";

export default function NewLinkForm() {
    const [alias, setAlias] = useState("");
    const [url, setUrl] = useState("");
    const [newLink, setNewLink] = useState("");


    return (
        <Box component="form"
             onSubmit={async (event) => {
                 event.preventDefault();
                 try{
                     if (await getOneLink(alias) === null) {
                         if (await checkValidLink(url) === false) {
                            console.log("INVALID LINK")
                         } else {
                             await createNewLink(url, alias)
                             setNewLink(`https://mp-5-topaz.vercel.app/r/${alias}`)
                         }
                     } else {
                         console.error("Alias Already Exists")
                     }
                 } catch(err) {
                    console.error(err)
                 }
             }}>
            <TextField
                variant="filled"
                label="URL"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
            />
            <Textarea
                variant="soft"
                placeholder="Alias"
                value={alias}
                onChange={(e) => setAlias(e.target.value)}
            />
            <Button
                variant="contained"
                type="submit"
                disabled={!alias || !url}
            >
                Shorten Link
            </Button>

            {newLink && (
                <Typography>
                    Your short link: <a href={newLink}>{newLink}</a>
                </Typography>
            )}
        </Box>

    );
}