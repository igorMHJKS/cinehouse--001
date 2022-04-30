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
