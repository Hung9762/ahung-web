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
        <footer class="bg-stone-300 rounded-lg shadow m-4">
          <div class="w-full max-w-screen-xl mx-auto  md:py-2">
            <span class="block text-sm text-gray-500 sm:text-center dark:text-black">
              © 2024{" "}
              <a href="https://ahung.me" class="hover:underline">
                Alexander Hung
              </a>. All Rights Reserved.
            </span>
          </div>
        </footer>
      </body>
    </html>
  );
}
