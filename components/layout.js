import Link from "next/link";

export default function Layout({ children }) {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="bg-blue-200 mb-8 py-4">
                <div className="container mx-auto flex justify-center">
                    <Link href='/'>
                        <a>Home</a>
                    </Link>
                    <span className="mx-auto">Leetcode Solution in JavaScript</span>
                </div>
            </header>
            <main className="container mx-auto flex-1 bg-slate-100">{children}</main>
            <footer className="bg-blue-200 mt-8 py-4">
                <div className="container mx-auto flex justify-center">
                    &copy; 2022 Leetcode Solutions
                </div>
            </footer>
        </div>
    );
}