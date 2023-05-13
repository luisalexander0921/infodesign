
//METODO LISTAR//
/**
 * @apiName list
 * @apiMethod GET
 * @apiPath /odd-numbers/:number
 * @apiGroup OddNumbersController
 * @apiDescription Este metodo permite tomar un número entero como entrada y devuelva un array con
todos los números enteros impares desde 1 hasta el número de entrada.".
 */

exports.list = async (req, res) => { 
    const number =  parseInt(req.params.number);
    const oddnumbers = [];
  
    for (let i = 1; i <= number; i++) {
        if (i % 2 === 1) {
          oddnumbers.push(i);
        }
      }
    res.send(oddnumbers);
}

