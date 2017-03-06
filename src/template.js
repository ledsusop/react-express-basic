export default ({ body, title, cssFile, initialState }) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <script>window.__APP_INITIAL_STATE__ = ${initialState}</script>
        <title>${title}</title>
        <link rel="stylesheet" href="/assets/${cssFile}" />
      </head>
     
      <body>
        <div id="root">${body}</div>
      </body>
       <script src="/assets/bundle.js"></script>
      
    </html>
  `;
};