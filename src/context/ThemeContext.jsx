import { createContext, useState } from 'react'


export const ThemeContext = createContext()


// Context API responsável por controlar o tema global da aplicação
export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light')


    function toggleTheme() {
        setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
    }


    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className={theme}>
                {children}
            </div>
        </ThemeContext.Provider>
    )
}