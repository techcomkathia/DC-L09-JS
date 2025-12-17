const app = require('./app');
const sequelize = require('./config/database');

const PORT = 3000;

async function iniciarServidor() {
    try {
        // Testa conexão com o banco
        await sequelize.authenticate();
        console.log('Conexão com o banco de dados bem-sucedida!');

        // Sincroniza tabelas (não apaga dados)
        await sequelize.sync();
        console.log('Tabelas sincronizadas com sucesso!');

        // Inicia servidor
        app.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}`);
        });

    } catch (error) {
        console.error('Erro ao iniciar servidor:', error.message);
    }
}

iniciarServidor();
