# Reserva de Armário

Nome: Pedro Augusto Barbosa Aparecido<br>
Matrícula: 170<br>
Curso: Engenharia de Software<br>

Uma aplicação web simples para simular a reserva de armários, desenvolvida utilizando HTML, CSS e JavaScript. O sistema permite que um usuário reserve um armário de acordo com o tipo desejado (Padrão ou Duplo) e suas necessidades de acessibilidade.

## Funcionalidades

- **Reserva de Armário**: Permite ao usuário selecionar o tipo de armário que deseja reservar.
- **Verificação de Disponibilidade**: O sistema filtra os armários disponíveis conforme o tipo selecionado e as necessidades de acessibilidade do usuário.
- **Reserva Aleatória**: Em caso de múltiplos armários disponíveis, a reserva é realizada de forma aleatória.
- **Feedback ao Usuário**: Mensagens de sucesso ou erro são exibidas para informar se a reserva foi realizada ou se já existe uma reserva pendente, ou ainda, se não há armários disponíveis para o tipo selecionado.

## Tecnologias Utilizadas

- **HTML**: Estrutura e conteúdo da página.
- **CSS**: Estilização e layout (arquivo: `global.css`).
- **JavaScript**: Lógica de reserva e manipulação dos elementos da página (arquivo: `index.js`).

## Estrutura do Projeto

```
Reserva-de-Armario/
├── index.html
├── script/
│   └── index.js
└── style/
    └── global.css
```

> **Atenção:** Certifique-se de que os arquivos `global.css` e `index.js` estejam corretamente organizados nas pastas `style` e `script`, respectivamente, conforme referenciado no arquivo `index.html`.

## Como Executar

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/Reserva-de-Armario.git
   ```
2. **Acesse o diretório do projeto:**
   ```bash
   cd Reserva-de-Armario
   ```
3. **Abra o arquivo `index.html` no seu navegador:**
   - Você pode dar um duplo clique no arquivo ou utilizar uma extensão de servidor local, como o [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) no VS Code.

## Como Funciona

1. **Interface do Usuário:**  
   Ao acessar a página, o usuário encontra um formulário com um seletor para escolher o tipo de armário e um botão "Reservar".

2. **Processo de Reserva:**  
   - Ao clicar no botão "Reservar", a função `reserveCabinet()` é executada.
   - O sistema verifica se o usuário já possui uma reserva pendente.
   - Caso não haja reserva pendente, o sistema filtra os armários disponíveis que correspondem ao tipo selecionado e à acessibilidade do usuário.
   - Se houver armários disponíveis, um deles é selecionado aleatoriamente, marcando-o como indisponível e atualizando as datas de reserva e entrega.
   - Uma mensagem de feedback é exibida para confirmar a reserva ou informar sobre possíveis erros.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
