import React from "react"
import { useSelector } from "react-redux"
import Card from "../Card/Card"
import Cards from "../Cards/Cards"
export default function Favorites() {
  const favorites = useSelector((state) => state.myFavorites)

  return (
    <div className="m-2 p-2  flex flex-wrap flex-row-reverse justify-center ">
      {favorites.map((favorite) => {
console.log(favorite)
return (
              <Card
              key={favorite.id}
              onClose={favorite.onClose}
              id={favorite.id}
              name={favorite.name}
            status={favorite.status}
            species={favorite.species}
            gender={favorite.gender}
            // origin={favorite.origin.name}
            image={favorite.image}
            />
            )
        })}
        </div>
     
  )
}






