const api = require('../src/mockApi');

/*
A função fetchURL retorna um JSON com informações de um usuário aleatório buscadas da API 'randomuser.me'.
No entanto, nos testes abaixo, queremos que todas as vezes que chamarmos a API a resposta contenha as informações do nosso adminis..Cof! Cof!.. programador favorito, Tunicão.

Faça um mock da função fetchURL() de forma que,
independa de chamadas de API e retorne as seguintes informações do Tunico:
- Gênero: Masculino
- Primeiro nome: Antônio
- Último nome: Britto
- País: Brasil
- Email: tunico@bol.com.br (Sim, é um email do bol mesmo...)
- Nome de usuário: tunicao123
- Senha: 1234567890 (Usem senhas fortes, crianças!)

Note que as informações devem estar de acordo com o JSON
presente no README.md do projeto.

Dica: Utilizem os métodos jest.fn() ou jest.spyOn().

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

const myUser = {
  gender: 'male',
  name: { first: 'Antônio', last: 'Britto' },
  location: { country: 'Brazil' },
  email: 'tunico@bol.com.br',
  login: { username: 'tunicao123', password: '1234567890' },

};

describe('verifica o usuário', () => {
  // source: https://app.betrybe.com/course/fundamentals/testes-automatizados-com-jest/jest-simulando-comportamentos/4783a3a1-485b-4712-a293-b645c2f7ac40/conteudos/5f13b72b-17e9-4348-905b-582dc584a4e0/mock-e-funcoes-assincronas/b5567964-cfa3-4848-9442-4ab4f355ac3f?use_case=side_bar
  api.fetchURL = jest.spyOn(api, 'fetchURL').mockResolvedValue(myUser);

  test('verifica se o usuário é o tunico', async () => (
    api.fetchURL().then((user) => {
      expect(user.gender).toEqual('male');
      expect(user.name.first).toEqual('Antônio');
      expect(user.name.last).toEqual('Britto');
      expect(user.location.country).toEqual('Brazil');
      expect(user.email).toEqual('tunico@bol.com.br');
      expect(user.login.username).toEqual('tunicao123');
      expect(user.login.password).toEqual('1234567890');
    })
  ));
});
