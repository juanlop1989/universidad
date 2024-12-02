const Asignatura= require('../Modelos/Asignatura')

//request, response
exports.getAsignatura = async (req,resp) =>{

    try {

        //select *from asignatura
        const asignatura = await Asignatura.findAll();

        resp.status(200).send(asignatura)
        
    } catch (error) {
        resp.status(500).send(error)
    }

}


exports.postAsignatura = async (req,resp) =>{

    try {
    
        const result =await Asignatura.create(req.body);
        resp.json(result)
    
      } catch (error) {
        resp.status(500).json({error: 'Ocurrio un error' + error})
      }

}

exports.putAsignatura = async (req,resp) =>{
    try {
    
        const result =await Asignatura.findByPk(req.params.idasignatura);
    
        if(result){
          await result.update(req.body);
          resp.status(200).send("actualizado correctamente")
        }
        else{
          resp.status(402).send("No se encontraron registro")
        }
       
       
      } catch (error) {
        resp.status(500).json({error: 'Ocurrio un error' + error})
      }
}
exports.deleteAsignatura = async (req,resp) =>{

    try {
    
        const result =await Asignatura.findByPk(req.params.idasignatura);
    
        if(result){
          await result.destroy();
          resp.status(200).send("Elimado correctamente")
        }
        else{
          resp.status(402).send("No se encontraron registro")
        }
       
    
      } catch (error) {
        resp.status(500).json({error: 'Ocurrio un error' + error})
      }

}