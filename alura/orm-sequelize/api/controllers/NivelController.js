const database = require('../models')

class NivelController {

    static async pegaTodosOsNiveis(req, res) {
      try {
        const todosOsNiveis = await database.Niveis.findAll()
        return res.status(200).json(todosOsNiveis)
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }

    static async pegaUmNivel(req, res) {
      const { id } = req.params
        try {
          const umaNivel = await database.Niveis.findOne( { 
            where: {
              id:Number(id)
             }
            })
          return res.status(200).json(umaNivel)
        } catch (error) {
          return res.status(500).json(error.message)
    }
  }
  
  static async criaNivel(req, res) {
     const novoNivel = req.body
        try {
          const novaNivelCriada = await database.Niveis.create(novoNivel)
          return res.status(201).json(novaNivelCriada)
        } catch (error) {
          return res.status(500).json(error.mensage)
        }
    }
  
  static async atualizaNivel(req, res) {
    const { id } = req.params
       const novasInfos = req.body
         try {
             await database.Niveis.update(novasInfos, { where: { id: Number(id) }})
             const nivelAtualizada = await database.Niveis.findOne( { where: {
             id: Number(id) }})
             return res.status(200).json(nivelAtualizada)
           } catch (error) {
             return res.status(500).json(error.mensage)
           }  
  
    }
  
  
  static async apagaNivel(req, res) {
    const { id } = req.params
    try {
      await database.Niveis.destroy({ where: { id: Number(id) }})
      return res.status(200).json({ mensagem: `id ${id} excluido` })
    
    } catch (error) {
      return res.status(500).json(error.mensage)
    }
  }
  
  static async restauraNivel(req, res) {
    const { id } = req.params
    try {
      await database.Niveis.restore( {where: {id: Number(id) } } )
      return res.status(200).json({ mensagem: `id ${id} restabelecido`})
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
  
}

module.exports = NivelController