class DadosNaoForneceidos extends Error {
    constructor () {
        super('Não foram fornecidos dados para atualizar!')
        this.name = 'DadosNaoFornecidos'
        this.idErro = 2
    }
}

module.exports = DadosNaoForneceidos