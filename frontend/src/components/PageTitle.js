import React, {Component} from 'react';

class PageTitle extends Component {
    render() {
        return (
            <>
                <h1 className="page-title">{this.props.title}</h1>
            </>
        );
    }
}

export default PageTitle;