import Link from "next/link";

export default function Header(){
    return (
        <header>
            <nav>
                <Link href="/">URL Shortener</Link>
            </nav>
        </header>
    )
}