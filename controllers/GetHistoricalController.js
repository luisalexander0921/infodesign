 const consumo_por_tramos  = require('../models/CONSUMO_POR_TRAMOS');
 const consumoPorTramos  = require('../models/person');
 

//METODO LISTAR//
/**
 * @apiName list
 * @apiMethod POST
 * @apiPath /
 * @apiGroup 
 * @apiDescription 
 */

exports.list = async (req, res) => { 

   let consumosPorTramos = await consumoPorTramos.find();
   res.json({
    type: "success",
    code: 200,
    message: "Elementos encontrados satisfactoriamente",
    data: {
      new: consumosPorTramos,
    },
  });
    switch (req.body.type) {
        case 'customer':
                const customer = await PersonSchema.find();
                res.json({
                  type: "success",
                  code: 200,
                  message: "Lista realizada satisfactoriamente.",
                  data: {
                    list: customer,
                  },
                });
           
            break;

        case 'sections':
            
            break;

        case 'worst-stages':
            
            break;
    
        default:
            break;
    }
}

