import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta
            name="description"
            content="Oferecemos serviço de locação de espaço para atender seus clientes em um ambiente profissional com salas preparadas para reuniões de alto impacto.
Além de toda infraestrutura necessária para suportar reuniões, treinamentos, palestras e coworking, contemplamos com uma área de empreendimentos imobiliários em locais bem localizados e com todo suporte para você e sua família."
          />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
