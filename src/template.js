export default ({ body, title, cssFile }) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>${title}</title>
        <link rel="stylesheet" href="/assets/${cssFile}" />
      </head>
      <script src="/assets/bundle.js"></script>
      <body>
        <div id="root">${body}</div>
      </body>
      
      
    </html>
  `;
};