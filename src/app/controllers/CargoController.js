import * as Yup from 'yup';
import Cargo from '../models/Cargos';


class CargoController{


  async index(req, res){
    
    const cargo = await Cargo.findAll({
      attributes: [
        'id',
        'cargo',
        'descricao',
      ]
    });

    return res.json(cargo);

  }

  async store(req, res){

    const schema = Yup.object().shape({
      cargo: Yup.string().required(),
      descricao: Yup.string().required(),
    })

    if(!(await schema.isValid(req.body))){
      return res.status(400).json({ erro: 'Falha na validação' });
    }

    console.log(req.body);

    const data = await Cargo.create(req.body);

    return res.json(data);
  }


  async update(req, res){

    const cargo_id = await Cargo.findByPk(req.body.id);
    const { id, cargo, descricao } = await cargo_id.update(req.body);

    return res.json({
      id,
      cargo,
      descricao
    });

  }

  async delete(req, res){
    const cargo_id = await Cargo.findByPk(req.params.id);
    cargo_id.destroy();
    return res.json({message: 'Cargo excluido com sucesso'});
  }
}

export default new CargoController();
