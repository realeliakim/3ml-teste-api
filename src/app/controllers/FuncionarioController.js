import * as Yup from "yup";
import Funcionario from "../models/Funcionarios";
import Cargo from "../models/Cargos";

class FuncionarioController {
  async index(req, res) {
    const funcionario = await Funcionario.findAll({
      attributes: [
        "id",
        "nome",
        "sobrenome",
        "nascimento",
        "salario",
        "cargo_id",
      ],
      include: [
        {
          model: Cargo,
          as: "cargo",
          attributes: ["cargo", "descricao"],
        },
      ],
    });

    return res.json(funcionario);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      nome: Yup.string().required(),
      sobrenome: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ erro: "Falha na validação" });
    }

    const { id, nome, sobrenome, nascimento, salario, cargo_id } =
      await Funcionario.create(req.body);

    return res.json({
      id,
      nome,
      sobrenome,
      nascimento,
      salario,
      cargo_id,
    });
  }

  async update(req, res) {
    const func_id = await Funcionario.findByPk(req.body.id);

    const { id, nome, sobrenome, nascimento, salario, cargo_id } =
      await func_id.update(req.body);

    return res.json({
      id,
      nome,
      sobrenome,
      nascimento,
      salario,
      cargo_id,
    });
  }

  async delete(req, res) {
    const func_id = await Funcionario.findByPk(req.params.id);
    console.log(func_id);
    func_id.destroy();
    return res.json({ message: "Funcionário excluído com sucesso" });
  }
}

export default new FuncionarioController();
