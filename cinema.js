var catalogo =  [
    {
        "codigo": 8,
        "titulo": "O retorno dos que não foram 8",
        "duracao": 1.6,
        "atores": ["Henrique", "Paula", "José"],
        "anoDeLancamento": 20220293,
        "emCartaz": false
      },{       "codigo": 1,
      "titulo": "O retorno dos que não foram 1",
      "duracao": 1.3,
      "atores": ["Henrique", "Paula", "José"],
      "anoDeLancamento": 20220231,
      "emCartaz": true
  }
]

 
function adicionarFilme(){
      var Obj =  {}
Obj.codigo = 5
  Obj.titulo = "Velozes e Furiosos",
  Obj.duracao = 2.60,
  Obj.atores = ["igor", "nunes","goncalves"]
  Obj.anoDeLancamento = 2014,
  Obj.emCartaz = true
  console.log(catalogo.push(Obj))
      
  }
(adicionarFilme(catalogo))


function buscarFilme(codigo){
    var resultado = catalogo.length
    console.log(resultado)
    return codigo
    }
    (buscarFilme())

    
    function alterarStatusEmCartaz(codigo){
        var resultado = catalogo
        if(resultado == true) {
            console.log("Vou ao cinema")
        }else 
        console.log("Fico em casa")
        return codigo
        }
    (alterarStatusEmCartaz(catalogo.data))


    var catalogo = require("./catalogo.json");
    console.log(catalogo);
   
 
    
    function listarTodosOsFilmes(filmes) {
      for (let i = 0; i < filmes.length; i++) {
        console.log(filmes[i].titulo);
      }
    }
    listarTodosOsFilmes(catalogo.data);

    function listarFilmesEmCartaz(filmes){
        const filmesEmCartaz = filmes.filter((filme) => {
          if (filme.emCartaz === true){
            return true;
          }
        });
        return filmesEmCartaz;
      }
      
      console.log(listarFilmesEmCartaz(catalogo.data));