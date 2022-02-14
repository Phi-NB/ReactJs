import React from 'react';

class button extends React.Component {
    constructor(props) {
        super(props)
        this.textValue = React.createRef()
    }
    handleClick = () => {
        console.log(this.props.value);
    }

    render() {
        return <button onClick={this.handleClick} value={this.props.value} className='btn btn-key'>{this.props.value}</button>
    }
}

export default button