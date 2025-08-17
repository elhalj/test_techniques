import React from 'react'
import AddTodo from './components/AddTodo'
// ⏳ Durée conseillée : 1h à 1h30.

// 📝 Énoncé

// Sujet : Application "Todo + Filtrage + Persistance"

// Objectif
// Construire une petite application React permettant à un utilisateur de :

// Ajouter une tâche (titre requis, min 3 caractères)

// Marquer une tâche comme terminée ou non

// Supprimer une tâche

// Filtrer les tâches :

// Toutes

// Actives

// Terminées

// Persister la liste dans localStorage (recharger la page ne doit pas effacer les données)

// 🎯 Critères d’acceptation

// Ajout de tâche :

// Si le champ est vide ou < 3 caractères → bouton disabled

// Après ajout → champ vidé, focus repris sur l’input

// Marquage terminé :

// Cliquer sur une tâche change son état (checkbox ou clic direct)

// Style visuel différent pour les terminées (ex : texte barré)

// Suppression :

// Icône ou bouton "🗑" à droite

// Filtrage :

// Boutons ou select : "Toutes / Actives / Terminées"

// Le filtre ne supprime pas les données, juste la vue

// Persistance :

// Données lues depuis localStorage au montage

// Données sauvegardées à chaque changement

// Code propre :

// Utiliser useState, useEffect, éventuellement useCallback / useMemo

// Composants découpés (TodoList, TodoItem, etc.)

// Clés stables (id unique)

// Bonus :

// Animation à l’ajout/suppression (framer-motion)

// Thème clair/sombre

const Exo4 = () => {
  return (
    <div>
      <AddTodo/>
    </div>
  )
}

export default Exo4
