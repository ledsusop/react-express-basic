import React from 'react';

export default class Header extends React.Component {

    createMarkup(content) {
        return {__html: content};
    }

    render() {
        return <div id="header-content" dangerouslySetInnerHTML={this.createMarkup(this.props.content)}/>;
    }
}
