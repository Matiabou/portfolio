import { Navbar } from './Navbar'
import '../styles/Header.css'
import { useState } from 'react'
import { Logo } from './Icons';

export function Header() {
    const [lang, setLang] = useState('ES');
    const [dark, setDark] = useState(true);
    return (
        <header className="header-container">
            <div className="header-left">
                <Logo height={50} width={50}/>
            </div>
            <div className="header-center">
                <Navbar/>
            </div>
            <div className="header-right">
                <button className="lang-btn" onClick={() => setLang(lang === 'ES' ? 'EN' : 'ES')}>
                    {lang}
                </button>
                <button className="theme-btn" onClick={() => setDark(!dark)} aria-label="Toggle theme">
                    {dark ? (
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"></path></svg>
                    ) : (
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><path d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95 6.95-1.41-1.41M6.34 6.34 4.93 4.93m12.02 0-1.41 1.41M6.34 17.66l-1.41 1.41"/></svg>
                    )}
                </button>
            </div>
        </header>
    )
}