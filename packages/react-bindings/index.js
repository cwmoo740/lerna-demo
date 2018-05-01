import React from 'react';
import makeApiRequest from '@cowmoo/core';

class ApiRequestButton extends React.PureComponent {
    state = {
        count: 0,
        response: null
    };
    onClick = async () => {
        const count = this.state.count + 1;
        this.setState({count, response: null});
        const response = await makeApiRequest({id: count});
        this.setState({response});
    };

    render() {
        return (
            <React.Fragment>
                <button onClick={this.onClick}>
                    Click me
                </button>
                <span>{`count: ${this.state.count}`}</span>
                {
                    this.state.response &&
                    <div>
                        {JSON.stringify(this.state.response)}
                    </div>
                }
            </React.Fragment>
        );
    }
}

export default ApiRequestButton;
