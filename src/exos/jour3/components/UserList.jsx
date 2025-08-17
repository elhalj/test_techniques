import { useFetch } from "../hooks/useFetch";

export const UserList = () => {
    const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/users");

    if (loading) return <div>Chargement...</div>;
    if (error) return <div>Erreur</div>;

    return (
        <ul>
            {data.map((user) => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    );
};
