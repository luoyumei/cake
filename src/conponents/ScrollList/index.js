import React from 'react';
export default class ScrollList extends React.Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}