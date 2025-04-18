"use client"
import {Box, Card, Typography} from "@mui/joy";
import {Button, TextField, Alert} from "@mui/material";
import {useState} from "react";
import createNewLink from "@/lib/createNewLink";
import getOneLink from "@/lib/getOneLink";
import checkValidLink from "@/lib/checkValidLink";

export default function NewLinkForm() {
    const [alias, setAlias] = useState("");
    const [url, setUrl] = useState("");
    const [newLink, setNewLink] = useState("");
    const [error, setError] = useState("");


    return (
        <Box component="form"
             onSubmit={async (event) => {
                 event.preventDefault();
                 setNewLink("");
                 setError("")
                 try{
                     if (await getOneLink(alias) === null) {
                         if (await checkValidLink(url) === false) {
                            setError("Please enter a valid URL")
                         } else {
                             await createNewLink(url, alias)
                             setNewLink(`https://mp-5-topaz.vercel.app/r/${alias}`)
                         }
                     } else {
                            setError("Please choose another Alias")
                     }
                 } catch(err) {
                    console.error(err)
                 }
             }}>
            <Card
                sx={{
                    margin: "auto",
                    marginY: "15vh",
                    width: "50%",
                    backgroundColor: "#e29578",
                    border: "2px solid #00afb9",
                }}>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        background: "#edf6f9",
                        borderRadius: 10,
                        padding: "15px",
                        margin: "auto",
                    }}>
                    <TextField
                        sx={{
                            background: "#edf6f9",
                        }}
                        variant="outlined"
                        label="URL"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                    />
                    <TextField
                        sx={{
                            background: "#edf6f9",
                        }}
                        variant="outlined"
                        placeholder="Alias"
                        value={alias}
                        onChange={(e) => setAlias(e.target.value)}
                    />
                </Box>

                <Button sx={{
                    backgroundColor: "#00afb9",
                }}
                    variant="contained"
                    type="submit"
                    disabled={!alias || !url}
                >
                    Shorten Link
                </Button>
            </Card>

            {error && (
                <Card sx={{
                    margin: "auto",
                    marginY: "15vh",
                    width: "50%",
                }}>
                    <Alert severity="error">{error}</Alert>
                </Card>
            )}
            {newLink && (
                <Card sx={{
                    margin: "auto",
                    marginY: "15vh",
                    width: "50%",
                    backgroundColor: "#e29578",
                    border: "2px solid #00afb9",
                }}>
                    <Typography sx={{
                        textAlign: "center"
                    }}>
                        Your short link: <a href={newLink}>{newLink}</a>
                    </Typography>
                </Card>
            )}
        </Box>

    );
}