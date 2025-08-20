import React, { useState } from 'react'

const Exo1 = () => {
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [errors, setErrors] = useState("");
    const [loading, setLoading] = useState(false);

    const validateForm = (email, pwd) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailRegex.test(email)) {
            setErrors("L'email doit être valide");
            return false;
        }
        if (pwd.length < 6) {
            setErrors("Le mot de passe doit contenir au moins 6 caractères");
            return false;
        }
        setErrors("");
        return true;
    }

    const fakeLogin = async (email, pwd) => {
        // Simulation d'une requête API
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (email === "test@example.com" && pwd === "password") {
                    resolve({ success: true });
                } else {
                    reject(new Error("Identifiants incorrects"));
                }
            }, 1000);
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (!validateForm(email, pwd)) {
            setLoading(false);
            return;
        }

        try {
            await fakeLogin(email, pwd);
            console.log("Connexion réussie !");
            // Redirection ou gestion de la connexion réussie ici
        } catch (error) {
            setErrors(error.message);
        } finally {
            setLoading(false);
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label >
                        Email *
                        <input type="email" value={email} name='email' onChange={e => setEmail(e.target.value)} />
                        {errors && <div style={{ color: 'red' }}>{errors}</div>}
                    </label>
                    <label>
                        Mot de passe *
                        <input
                            type="password"
                            value={pwd}
                            name='pwd'
                            onChange={e => setPwd(e.target.value)}
                        />
                    </label>
                    <button type='submit' disabled={loading || !email || pwd.length < 6}>
                        {loading ? "Connexion en cours..." : "Se connecter"}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Exo1
