class Multimedia{
    constructor(url){
        const _url = url;
        this.geturl = () => _url
    }
    get url(){
        return this.geturl();
    }
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
    setInicio(tiempo = 0) {
        const idd = document.getElementById(this.id);
        if (!idd) return;
        idd.setAttribute("src", `${this.url}?start=${tiempo}`);
      }
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
repPelicula.playMultimedia();
repPelicula.setInicio('40')
repSerie.playMultimedia();