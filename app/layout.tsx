import React from "react";
import Header from "@/components/Header"

export default function RootLayout(
    {children,}:
    Readonly<{children: React.ReactNode;}>
){
    return(
        <html lang="en">
        <body style={{
            margin: 0,
            padding: 0,
            backgroundColor: "#ffddd2",
        }}>
        <Header/>
        {children}
        </body>
        </html>
    );
}