Projeto criado como prova de conceito do TCC de Jackeline Brito na especialização em Engenharia de Software na USP/ESALQ.

O estudo contou com um [questionário de pesquisa sobre acessibilidade](https://forms.office.com/pages/responsepage.aspx?id=1orxjyM08EuJ05VjH42pJPqPLu2xkLZCgQoQpGkKs_FUQTVSRkJKSVVQNFI3VURBVTQ5UVI4N0hLRS4u&route=shorturl) para deficiêntes visuais.

# Getting Started

> **Note**: A partir dos estudos feitos neste projeto foi criado um [Guia prático de desenvolvimento de acessibilidade em React Native
](https://www.notion.so/Manual-acessibilidade-para-desenvolvedores-utilizando-React-Native-21dd49d7aa2d80a9b9a9e7abab87bb62) beaseado na [WCAG](https://guia-wcag.com/).

O projeto possui 2 branchs

Branch 1 - tela-sem-acessibilidade

Branch 2 - main (Conta com os recursos de acessibilidade)

## Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

