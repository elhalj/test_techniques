import React, { useContext, useEffect, useState } from 'react'
import { ThemeContext1 } from './context/ThemeContext1';

const Main = () => {
    const [count, setCount] = useState(0);//Count
    const [timer, setTimer] = useState(0);//Timer
    const { theme, toggleTheme } = useContext(ThemeContext1);//Theme context
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [errors, setErrors] = useState("");
    const [loading, setLoading] = useState(false);
    const [formulaire, setFormulaire] = useState([]);

    // Validate form
    const validateForm = (email, pwd) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailRegex.test(email)) {
            setErrors("L'email doit être valide");
            return false;
        }
        if (pwd.trim().length < 6) {
            setErrors("Le mot de passe doit contenir au moins 6 caractères");
            return false;
        }
        setErrors("");
        return true;
    }

    // Submit form
    const handleValidateForm = (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            if (!validateForm(email, pwd)) {
                setLoading(false)
                return
            }
            let f = [{ email, pwd }]
            setFormulaire(f)
            console.log(formulaire)
            setPwd("")
            setEmail("")
        } catch (error) {
            setErrors(error.message)
        } finally {
            setLoading(false)
        }
    }

    // Count
    const handleCount = () => {
        setCount(prev => prev + 1)
    }

    // Reset button
    const handleReset = () => {
        setCount(0)
    }

    useEffect(() => {
        const timers = setInterval(() => setTimer(prev => prev + 1), 1000)
        return () => clearInterval(timers)
    }, [])
    return (
        <div>
            {/* countert */}
            <div><p>{count}</p>
                <button type="button" onClick={handleCount}>+</button>
            </div>
            <div><button type='button' onClick={handleReset}>Reset</button></div>

            {/* Timer */}
            <div>
                <p className={theme === "light" ? "bg-amber-400" : "bg-blue-400"}>{timer}</p>
                {/* button toggleheme */}
                <div><button type='button' onClick={toggleTheme}>ToggleThem</button></div>
            </div>

            {/* formulaire */}
            <form onSubmit={handleValidateForm}>
                {errors && <div className='bg-red-400'>{errors}</div>}
                <label>Email * <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} /></label>
                <label>Mot de passe * <input type="password" name="pwd" value={pwd} onChange={(e) => setPwd(e.target.value)} /></label>
                <button type='submit' disabled={loading}>{loading ? "Submitting" : "Submit"}</button>
            </form>
            <div>{formulaire.length > 0 ? formulaire.map((f) => (<div key={f.email}>
                <div>
                    <p>email: {f.email}</p>
                    <p>password: {f.pwd}</p>
                </div>
            </div>)) : "Aucun"}</div>
        </div>
    )
}

export default Main
