import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useParams} from "react-router-dom"

const CharacterDetails = () => {

    const [character, setCharacter] = useState()

    const {id} = useParams()

    const singleCharacter = ()=>{
        axios.get(`https://rickandmortyapi.com/api/character/${id}`)
            .then(response => setCharacter(response.data))
    }

    useEffect(()=>{
        singleCharacter()
    },[])

  return (
    <div className='content-container'>
        {character ? (
              <div className="card m-3">
              <img className="card-img-top" src={character.image} alt={character.name} />
              <div className="card-body">
                <h5 className="card-title">Name: {character.name}</h5>
                <p className="card-text">Status: {character.status}</p>
                <p className="card-text">Species: {character.species}</p>
                <p className="card-text">Location: {character.location.name}</p>
                <p className="card-text">Origin: {character.origin.name}</p>
              </div>
          </div>
        ) : null}
    </div>
  )
}

export default CharacterDetails