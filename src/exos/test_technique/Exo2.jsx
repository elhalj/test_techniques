import React, { useState, useEffect, useMemo } from 'react'

// Exo 2 — Liste + recherche + tri + pagination(20–25 min)

// Objectif: fetch / api / products, champs de recherche(debounce), select de tri(prix asc / desc), pagination 10 / par page.

//     États : loading, error, page.

//         Détails : filtre côté client, tri stable, key = product.id.
const Exo2 = () => {

    // État de la liste des produits
    const [data, setData] = useState([]);

    // État de l'erreur
    const [error, setError] = useState("");

    // État du chargement
    const [loading, setLoading] = useState(false);

    // État de la page
    const [page, setPage] = useState(1);

    // État de la recherche
    const [search, setSearch] = useState("");

    // État du tri
    const [order, setOrder] = useState("asc");

    // Fonction pour fetch les données
    useEffect(() => {
        const fetchApi = async () => {
            setLoading(true);
            setError("");
            try {
                // Récupère les données de l'API
                const res = await fetch("/src/services/api.json", {
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                if (!res.ok) {
                    throw new Error(`Erreur HTTP: ${res.status}`);
                }

                const result = await res.json();
                // Ajoute un prix par défaut pour le tri car il n'est pas dans l'API
                const dataWithPrices = result.map(item => ({
                    ...item,
                    price: Math.floor(Math.random() * 100) // Prix aléatoire pour démonstration
                }));
                setData(dataWithPrices);
            } catch (error) {
                console.error("Erreur de récupération des données:", error);
                setError("Erreur lors de la récupération des données");
            } finally {
                setLoading(false);
            }
        };
        fetchApi();
    }, []);

    // Fonction pour gérer la recherche
    const handleSearch = (e) => {
        const value = e.target.value;
        setSearch(value);
    }

    // Fonction pour gérer le tri
    const handleOrder = (e) => {
        const value = e.target.value;
        setOrder(value);
    }

    // Fonction pour filtrer les données en fonction de la recherche
    const filteredData = useMemo(() => {
        if (search) {
            // Filtre les données en fonction de la recherche
            return data.filter(d => d.name.toLowerCase().includes(search.toLowerCase()));
        }
        return data;
    }, [data, search]);

    // Fonction pour trier les données en fonction de l'ordre
    const orderedData = useMemo(() => {
        const sortedData = [...filteredData];
        sortedData.sort((a, b) => {
            // Tri ascendant ou descendant en fonction de l'ordre
            if (order === "asc") {
                return a.price - b.price;
            }
            return b.price - a.price;
        });
        return sortedData;
    }, [filteredData, order]);

    // Fonction pour paginer les données
    const paginatedData = useMemo(() => {
        // On calcule l'index de départ et de fin de la page
        // en fonction du nombre d'éléments par page (10)
        // et de la page actuelle.
        // Par exemple, si on est sur la page 2, on veut afficher
        // les éléments 10 à 20 (10 * (2 - 1) = 10 et 10 + 10 = 20)
        const start = (page - 1) * 10;
        const end = start + 10;
        // Coupe les données en fonction de la page et du nombre d'éléments par page
        return orderedData.slice(start, end);
    }, [orderedData, page]);

    // Si il n'y a pas de données, affiche un message
    if (!data.length) {
        return <div>Vous n'avez pas de données</div>
    }

    // Affiche la liste des produits
    return (
        <div>
            <input type="text" value={search} onChange={handleSearch} placeholder="rechercher" />
            <select value={order} onChange={handleOrder}>
                <option value="asc">Prix ascendant</option>
                <option value="desc">Prix descendant</option>
            </select>
            {loading && <div>Chargement...</div>}
            {error && <div>Erreur de récupération</div>}
            {paginatedData.map((d, i) => (
                <div key={i}>
                    <p>{d.name}</p>
                    <p>{d.price}</p>
                    <p>{d.description}</p>
                </div>
            ))}
            <div>
                <button onClick={() => setPage(page - 1)}>Précédent</button>
                <button onClick={() => setPage(page + 1)}>Suivant</button>
                <ul>
                    {Array(Math.ceil(orderedData.length / 10)).fill(0).map((_, i) => (
                        <li key={i} className={page === (i + 1) ? 'bg-blue-400' : 'bg-gray-100'}>{i + 1}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Exo2

// for (let i = 0; i < orderedData.length / 10; i++) {

// }