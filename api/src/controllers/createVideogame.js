const {Videogame,Genre}= require ('../db')


const createVideoGameRoute = async (name, description, released, rating, platforms, image, genres) => {
    
    if(!name || !description || !platforms) {
        throw new Error ("Faltan datos.")
    }

    let getDbInfoGenres = [];
    if(genres) {
      getDbInfoGenres = await Genre.findAll({
            where: {
                name: genres
            }
        });
    }

    const newVideogame = await Videogame.create({
        name,
        description,
        released,
        rating,
        platforms,
        image
    });

    if(genres) {
        await newVideogame.addGenres(getDbInfoGenres);
    }

    return newVideogame 
};
module.exports = {createVideoGameRoute}