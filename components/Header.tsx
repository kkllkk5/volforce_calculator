'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Header() {
    const [open, setOpen] = useState(false)

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur border-b">
            <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">

                {/* ロゴ */}
                <Link href="/" className="font-bold text-xl">
                    WebTools
                </Link>

                {/* PCメニュー */}
                <nav className="hidden md:flex gap-6 text-sm">
                    <Link href="/" className="hover:text-blue-600">Home</Link>
                    <Link href="/tools" className="hover:text-blue-600">Tools</Link>
                </nav>

                {/* モバイルボタン */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden"
                >
                    {open ? <X /> : <Menu />}
                </button>
            </div>

            {/* モバイルメニュー */}
            {open && (
                <div className="md:hidden bg-white border-t">
                    <nav className="flex flex-col p-4 gap-3">
                        <Link href="/" onClick={() => setOpen(false)}>Home</Link>
                        <Link href="/tools" onClick={() => setOpen(false)}>Tools</Link>
                    </nav>
                </div>
            )}
        </header>
    )
}
