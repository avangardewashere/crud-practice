import Link from "next/link";

export default function Navbar() {
    return(
        <nav>
            <Link href="/">Ideas There</Link>
            <Link href={"/addTopic"}>Add Topic</Link>
        </nav>
    )
}