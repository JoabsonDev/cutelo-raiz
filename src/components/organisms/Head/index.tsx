import { Helmet } from "react-helmet-async";

// TODO: rever isso no futuro
export default function Head() {
  const { title, description, keywords, image, url, author, favicon } = {
    title: "titulo",
    description: "descrição",
    keywords: "palavras-chave",
    image:
      "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
    url: "https://www.google.com",
    author: "Autor",
    favicon: "https://www.google.com/favicon.ico",
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta http-equiv="x-ua-compatible" content="ie=edge" />
      <meta http-equiv="Content-Language" content="pt-BR" />
      <meta name="author" content={author} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph metadados */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter metadados (opcional, mas recomendado para redes sociais) */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@your_twitter_handle" />

      <link rel="icon" type="image/png" sizes="32x32" href={favicon} />
      <link rel="apple-touch-icon" href={favicon} />
      <meta name="theme-color" content="var(--clr-primary-500)" />
    </Helmet>
  );
}
