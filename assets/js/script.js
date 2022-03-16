class Multimedia {
    constructor(url) {
        this._url = url
    }
    getUrl() {
        return this._url
    }
    setInicio() {
        return ('Este método es para realizar un cambio en la URL del video')
    }
}

class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url)
        this._id = document.getElementById(id)
    } 
    getId() {
        return this._id
    }
    setId(id) {
        this._id = id
    }
    playMultimedia() {

    }
    setInicio() {
        this._id.setAttribute('src',this._url)
        this._id.style.display = 'block'
        this._id.setAttribute('src', this._id + start=${tiempo})

        console.log(this._id)
    }
}

const ver1 = new Reproductor('https://www.youtube.com/embed/5yCRhFLwUjg', 'peliculas')
//const ver2 = new Reproductor('url', 'musica')
//const ver3 = new Reproductor('url', 'series')


ver1.setInicio()

//pasarParametros.miFuncionPublica('https://www.youtube.com/watch?v=5yCRhFLwUjg','peliculas')
