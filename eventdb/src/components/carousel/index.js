import { h, Component } from 'preact';
import style from './style';

import Speaker from '../../components/speaker';

export default class Carousel extends Component {
	state = {
		width: 0
	};

	componentDidMount() {
		this.setState({ width: this.base.clientWidth });

		let i = 1;

		const INTERVAL = Math.floor(Math.random() * 5000) + 2000;

		console.log(INTERVAL);

		setInterval(() => {
			this.setState({
				width: this.base.clientWidth,
				delta: i % 2 ? -1 * this.base.clientWidth : 0
			});

			i++;
		}, INTERVAL);
	}

	render({}, { width, delta }) {
		let inlineStyle = {
			transition: 'transform .5s',
			transform: `translate(${delta}px)`
		};

		return (
			<div class={style.carousel}>
				<div style={inlineStyle} class={style.carousel__inner}>
					<div style={{ width: width + 'px' }} class={style.carousel__item}>
						<Speaker speakerId="rachel_andrew" />
					</div>
					<div style={{ width: width + 'px' }} class={style.carousel__item}>
						<Speaker speakerId="brad_frost" />
					</div>
				</div>
			</div>
		);
	}
}
