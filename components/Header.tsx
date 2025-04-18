import Link from "next/link";
import {Box, Typography} from "@mui/joy";

export default function Header(){
    return (
        <Box component="header" sx={{
            backgroundColor: "#e29578",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "2%"
        }}>
            <Link href="/">
                <Typography sx={{
                    color: "#edf6f9",
                    textDecoration: "none",
                    fontWeight: "bold",
                    fontSize: "calc(12px + 1vw)"

                }}>URL Shortener</Typography>
            </Link>
        </Box>
    )
}