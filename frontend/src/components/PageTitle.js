import React, {Component} from 'react';

class PageTitle extends Component {
    render() {
        return (
            <>
                <h2 className="page-title">{this.props.title}</h2>
            </>
        );
    }
}

export default PageTitle;