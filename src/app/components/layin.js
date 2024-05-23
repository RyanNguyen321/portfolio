import Link from 'next/link'

export default function Layin({ children }) {
    return (
        <div className="min-h-screen flex flex-col bg-slate-900">
            <header className="bg-indigo-950 text-white p-4">
                <nav className="container mx-auto flex justify-between">
                    <Link href="/" className="text-xl font-bold">Ryan Nguyen</Link>
                    <div>
                        <Link href="/" className="mr-4">Home</Link>
                        <Link href="/about" className="mr-4">About</Link>
                        <Link href="/projects">Projects</Link>
                    </div>
                </nav>
            </header>
            <main className="flex-grow container mx-auto p-4">
                {children}
            </main>
            <footer className="bg-indigo-950 text-white p-4 text-center">
                &copy; {new Date().getFullYear()} Ryan Nguyen. All rights reserved.
            </footer>
        </div>
    )
}
