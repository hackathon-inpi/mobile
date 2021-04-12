<!-- PROJECT LOGO -->
<br />
<p align="center">
  <h2 align="center">Hackathon INPI</h2>
  <h3 align="center">INPI na Palma da Mão</h3>

<!-- ABOUT THE PROJECT -->

### Construído com

- React Native
- Typescript
- Node.js

## Instruções para rodar o projeto na sua máquina

### Pré-requisitos

Lista de softwares necessários para rodar o projeto na máquina

- `npm`: node package manager
  ```sh
  npm install npm@latest -g
  ```
- `yarn`

  ```sh
  curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
  echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list

  sudo apt update && sudo apt install yarn
  ```

- `Expo CLI`

  ```sh
  npm install -g expo-cli
  ```

- `Expo Client`: baixe o cliente no seu dispositivo móvel

### Instalação

1. Clone o repositório
   ```sh
   git clone https://github.com/linha-da-vida/app
   ```
2. Instale os pacotes NPM utilizando o `yarn`

   ```sh
   yarn
   ```

3. Configure o servidor disponível em: https://github.com/hackathon-inpi/api

## Uso
Após verificar que todas os pré-requisitos são cumpridos e instalar o repositório, para utilizá-lo, basta executar um único comando:

```sh
yarn start
```

Isso dará início ao projeto com Expo. Utilize o cliente mobile para ler o QR Code no console e dar início à aplicação no seu celular.

<!-- LICENSE -->

## License

Distribuído sob a licença GNU GPL v2. Veja `LICENSE` para mais informações.
