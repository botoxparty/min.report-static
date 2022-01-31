import Link from "next/link"

export default function Custom404() {
    return <div style={{ textAlign: 'center' }}><h1>404 - Page Not Found</h1>
        <Link href="/"><a><h1>Go to home</h1></a></Link>
    </div>
}