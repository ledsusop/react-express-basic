import React from 'react';
import ReactDOMServer from 'react-dom/server';

export default class Content extends React.Component {

  createMarkup(content) {
        return {__html: content};
  }

  render() {
    return <div id="main-content" dangerouslySetInnerHTML={this.createMarkup(this.props.content)}/>;
  }
}
