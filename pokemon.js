const findPokemon = async () => {
    try{
        const pokemonInp=document.getElementById("search-inp").value.toLowerCase()
        const pokemonData=await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonInp}`)
        if (!pokemonData.ok){
            throw new Error("Pokemon Could Not Be Found")
        }
        const data=await pokemonData.json()
        const pokemonImg=data.sprites.front_default

        const pokemonDisp=document.getElementById("pokemon-img")
        pokemonDisp.src=pokemonImg
    }
    catch(error){
        console.error(error)
    }
}