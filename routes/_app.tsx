import { type PageProps } from "$fresh/server.ts";
export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Alexander Hung</title>
        <link rel="stylesheet" href="/styles.css" />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </head>
      <body class="bg-stone-200">
        <Component />
      </body>
    </html>
  );
}
