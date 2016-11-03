import React from 'react';

const HtmlDocument = props => {
  const { head, app, manifest, state, favicon, css, webfonts } = props;
  const attrs = head.htmlAttributes.toComponent();
  const innerHTML = { __html: JSON.stringify(state) };
  return (
    <html {...attrs}>
      <head>
        {head && head.title.toComponent()}
        {head && head.meta.toComponent()}
        {head && head.link.toComponent()}
        {head && head.script.toComponent()}
        {css.map((css, key) => <link key={key} rel="stylesheet" href={css} />)}
	      <link rel="stylesheet" href={'/' + manifest['client.css']} />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body>
        <div id="app" dangerouslySetInnerHTML={{ __html: app }} />
        <script
          id="__HTMLDOCUMENT__UNIVERSAL_STATE"
          type="application/json"
          dangerouslySetInnerHTML={innerHTML}
        />
        <script src={'/' + manifest['client.js']} />

        {webfonts && <WebFontLoader config={webfonts} />}

      </body>
    </html>
  );
};

export default HtmlDocument;
