import React from 'react';

const changeButtonColour = (oldStyle) =>
{
	let bstyle = oldStyle
	let rollTheDice = Math.round(Math.random()*5)
	
	switch(rollTheDice) {
	    case 1:
	        bstyle = "success"
	        break;
	    case 2:
	        bstyle = "danger"
	        break;
	    case 3:
	        bstyle = "warning"
	        break;
	    case 4:
	        bstyle = "primary"
	        break;
	    case 5:
	        bstyle = "info"
	        break;
	    case 0:
	        bstyle = "default"
	        break;
	    default:
	        break;
	}

	//always change colour
	if(bstyle === oldStyle)
		{bstyle = changeButtonColour(bstyle)}

	return bstyle
}

export const NumbBox = React.createClass({

	propTypes: {
	    numb: React.PropTypes.number.isRequired
	  },

	//state is used, as changes in this component are not sent to redux store via actions. rather they are just stored internally
	//as the data doesn't need to be elsewhere.
	getInitialState() {
		return {
			buttonStyle: "default"
		}
	},
	onNumbClick() {
		this.setState({buttonStyle: changeButtonColour(this.state.buttonStyle)})
		
	},
	render() {
		return (
			<button className={"btn btn-sm btn-" + this.state.buttonStyle} onClick={this.onNumbClick}>
				{this.props.numb}
				<br />
			</button>
		)
	}
})

