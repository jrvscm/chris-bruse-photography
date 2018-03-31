import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getSliderImages } from '../actions/SliderActions'

import '../reset.css'
import './Slider.css'

class Slider extends Component {
	componentDidMount() {
		const { dispatch } = this.props;
		dispatch(getSliderImages())
	}

	render() {
		return(
			<div>
			</div>
		)
	}
}

export default connect()(Slider)