import React from "react";

const Pokeinfo = ({ data }) => {

  return (
    <>
      {(!data) ? (
        ""
      ) : (
        <>
          <h1 className="uppercase font-extrabold text-2xl tracking-[1px]">
            {data.name}
          </h1>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
            alt=""
            className="m-8 inline-block h-[180px]"
          />
          <div className="w-[30%] m-auto flex justify-around items-center mt-4 text-lg">
            {
                data.types.map(poke => {
                  let typeName = poke.type.name;
                  console.log(typeName);
                    return (
                        <div className={`bg-${typeName} text-white p-2 text-[12px] rounded-[8px]`} key={typeName}>
                            <h2>{`${typeName.charAt(0).toUpperCase()}${typeName.slice(1)}`}</h2>
                        </div>
                    )
                })
            }
          </div>
          <ul className="m-8">
            {
                data.stats.map(poke => {
                    return (
                    <li>{poke.stat.name.split('-').join(' ').toUpperCase()} : {poke.base_stat} </li>
                    )   
                })
            }
          </ul>
        </>
      )}
    </>
  );
};

export default Pokeinfo;
