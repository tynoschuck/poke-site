import React from 'react'

const Card = ({ pokemon, loading, infoPokemon }) => {
  return (
    <>
      {
        loading ? <h1>Loading...</h1> :
          pokemon.map((item) => {
            return (
              <>
                <div 
                  className='w-[300px] bg-[#9edef9] rounded-2xl shadow-[0_5px_5px_rgba(0,0,0,0.5)] py-0 px-6 flex items-center justify-between box-border'
                  key={item.id}
                  onClick={() => infoPokemon(item)}
                  >
                    <h2 className='text-black font-bold'>{item.id}</h2>
                    <img 
                        src={item.sprites.front_default}
                        alt={item.name}
                    />
                    <h2 className='text-black font-bold'>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</h2>
                </div>
              </>
              )
          })
      }
        
    </>
  )
}

export default Card