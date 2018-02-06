const template = (html, scripts, styles, sheets, state) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Hardcorest React App</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut icon" type="image/png" href="/favicon.png">
    ${sheets}
    ${styles}
  </head>
  <body>
    <div id="app">${html}</div>
    <script id="state" type="application/transit+json">${state}</script>
    ${scripts}
  </body>
  </html>
`;
};

export default template;
