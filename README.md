O FoodTech é um aplicativo móvel para pedidos de comida, desenvolvido com React Native e Expo. Ele oferece uma interface amigável para navegar 
por um cardápio de hambúrgueres, personalizá-los com diversos complementos e gerenciar um carrinho de compras. O aplicativo utiliza o Firebase
para autenticação de usuários.

----------------------------------------------------------------------------------------------------------------------------------------------------------------------
Características

· Autenticação do usuário : Fluxo de login seguro usando o Firebase Authentication (e-mail e senha).
· Catálogo de Produtos : Exibe uma lista dos hambúrgueres disponíveis com detalhes como nome, descrição, preço e imagem.
· Personalização do produto : Permite aos usuários adicionar ou remover molhos, ingredientes adicionais e acompanhamentos ao hambúrguer escolhido.
· Carrinho de compras : Um carrinho global que armazena o pedido personalizado, calcula o preço total e prepara o processo de finalização da compra.
· Confirmação do pedido : Uma tela de confirmação para simular um processo de pagamento bem-sucedido.
· Navegação responsiva : transições de tela perfeitas, com tecnologia Expo Router.
· Conjunto de tecnologias
Framework : React Native com Expo
· Linguagem : TypeScript
· Navegação : Roteador Expo
· Serviço de backend : Firebase (Autenticação)
· Interface do usuário e estilo : Folha de estilo React Native

---------------------------------------------------------------------------------------------------------------------------------------------------------------------
Estrutura do Projeto
O projeto está organizado de forma a separar as responsabilidades, tornando-o escalável e de fácil manutenção.

/src
├── app/              # Estrutura de código do aplicativo
├── assets/           # Pasta que irá conter as imagens do projeto (images, icons)
├── components/       # Desenvolvimento de Componentes para a reutilização (Buttons, Cards)
├── hooks/            # Contén a lógica das Hooks e suas funcionalidades (useCart, useAmount)
└── services/         # Conexão com Firebase e Lógica de Autenticação

---------------------------------------------------------------------------------------------------------------------------------------------------------------------
Componentes principais

· CardProducts.tsxExibe os hambúrgueres individuais na tela inicial. Ao pressionar, você acessa a tela de personalização.
· CardCustomize.tsx: Um componente de cartão usado na tela de personalização para adicionar ou remover itens como molhos e coberturas.
· Button.tsx/ SmallButton.tsx: Componentes de botão reutilizáveis ​​para ações principais e navegação.
  useCart.tsUm gancho personalizado que gerencia o estado global do carrinho de compras. Ele usa uma variável de nível de módulo e um padrão de 
  ouvinte para notificar os componentes sobre atualizações.
· useAmount.ts: Um gancho personalizado para gerenciar a quantidade de itens selecionados na tela de personalização.

----------------------------------------------------------------------------------------------------------------------------------------------------------------------

Siga estas instruções para obter uma cópia do projeto em funcionamento na sua máquina local para fins de desenvolvimento e teste.

Pré-requisitos
Node.js (versão LTS recomendada)
npm ou yarn
Aplicativo Expo Go no seu dispositivo móvel ou em um emulador de Android/iOS.

----------------------------------------------------------------------------------------------------------------------------------------------------------------------
Instalação
1 - Clone o repositório:

git clone https://github.com/emanuellcamps/foodtech-app.git
cd foodtech-app


2 - Instalar dependências:

npm install
Configurar o Firebase: O projeto utiliza o Firebase para autenticação.

3 - Crie um novo projeto no Console do Firebase 
Acesse as configurações do seu projeto e obtenha o objeto de configuração do Firebase.
Substitua a configuração de espaço reservado pelas src/services/firebase/connection.tscredenciais do seu projeto.
Execute o aplicativo:

npm start
Isso iniciará o empacotador Metro. Em seguida, você poderá escanear o código QR com o aplicativo Expo Go no seu celular ou executar o aplicativo em um emulador.

Alternativamente, você pode executá-lo diretamente em um dispositivo conectado ou emulador:

# To run on Android
npm run android

# To run on iOS
npm run ios

---------------------------------------------

Desenvolvedores do Projeto


João Emanuell Campelo Santos- 01796986

Rafael Costa Araujo do Nascimento: 01795253

Kawan José Souza Campelo: 01793880

Allan Alves Soares 01737148

Jean Lins Messias de Sousa Junior - 01798086

