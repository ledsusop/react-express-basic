import React from 'react';
import ReactDOMServer from 'react-dom/server';

export default class Content extends React.Component {

  createMarkup(content) {
        return {__html: content};
  }


  // a means to add script to current component
  componentDidMount() {
        const script = document.createElement("script");
        script.innerHTML = "<!-- Add Google Analytics for CRV-9498 --><script>  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');   ga('create', 'UA-90849448-1', 'auto');  ga('send', 'pageview'); </script><!-- End CRV-9498 -->";
        script.async = true;
        document.getElementById('body-content').appendChild(script);
    }

  render() {
    return <div id="body-content" dangerouslySetInnerHTML={this.createMarkup(this.props.content)}/>;
  }
}
