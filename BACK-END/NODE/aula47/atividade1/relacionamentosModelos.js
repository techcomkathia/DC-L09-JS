// 4º passo: relacionamentos e modelos

const UsuariosModel = require('./usuariosModel')
const ProjetosModel = require('./projetosModel')
const UsuariosProjetosModel = require('./usuarios_projetosModel')


UsuariosModel.belongsToMany(ProjetosModel, {through: UsuariosProjetosModel})
ProjetosModel.belongsToMany(UsuariosModel, {through: UsuariosProjetosModel})
