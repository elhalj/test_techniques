import { useState } from "react"
import { ThemeContext1 } from "./ThemeContext1";


export const ThemeProvider1 = ({ children }) => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === "light" ? "dark" : "light");
        console.log(theme)
    }

    return (
        <ThemeContext1.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext1.Provider>
    )
}