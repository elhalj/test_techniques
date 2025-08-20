import React, { useCallback, useMemo, useState } from 'react'

// Exo 3 — Perf ciblée(10–15 min)

// Objectif: gros tableau de rows; n’actualiser que la ligne cliquée.

// Row mémoïsé + useCallback pour onToggle(id).

//     Bonus : virtualisation(ex: react - window) si la liste est énorme.

const Exo3 = () => {
    const [data, setData] = useState(new Array(500).fill(0).map((_, i) => ({ id: i, toggled: false })))
    const [selectedId, setSelectedId] = useState(null)

    const Row = React.memo(({ id, toggled }) => {
        const handleClick = useCallback(() => {
            setSelectedId(id)
            setData(data.map(item => item.id === id ? { ...item, toggled: !item.toggled } : item))
        }, [id, data])

        return <div className='bg-blue-500' onClick={handleClick} style={{ backgroundColor: toggled ? '#eee' : 'white' }}>
            {id} {toggled ? 'est' : 'n\'est pas'} toggled
        </div>
    })

    const rows = useMemo(() => data.map(item => <Row key={item.id} {...item} />), [data])

    return (
        <div style={{ height: 400, overflow: 'auto', backgroundColor: "blue" }}>
            {rows}
        </div>
    )
}

export default Exo3
