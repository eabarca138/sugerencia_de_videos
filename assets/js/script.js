class Multimedia{
    constructor(url){
        const _url = url;
        this.geturl = () => _url;
    }
    get url(){
        return this.geturl();
    }
    setInicio(tiempo){
        return 'Este método es para realizar un cambio en la URL del video',
        this._url = `${this._url}?start=${tiempo}`
    };
};

class Reproductor extends Multimedia{
    constructor(url, id){
        super(url)
        const _id = id;
        this.getid = () => _id
    }
    get id(){
        return this.getid()
    }
    playMultimedia(){
        Medios(this.url, this.id);
    };
};

const Medios = (() => {
    const agregarMedio = (url, id) => {
      let idd = document.getElementById(id)
      idd.setAttribute('src', url)
    }

    const agregarMedioPublica = (url, id) => agregarMedio(url, id);
    return agregarMedioPublica;
  })();

const repPelicula = new Reproductor('https://www.youtube.com/embed/SvBVDibOrgs', 'pelicula');
const repMusica = new Reproductor('https://www.youtube.com/embed/B2RyoRG2vs8', 'musica');
const repSerie = new Reproductor('https://www.youtube.com/embed/ry-jzv18fOY', 'serie');

repMusica.playMultimedia();
repPelicula.setInicio('40')
repPelicula.playMultimedia();
repSerie.playMultimedia();