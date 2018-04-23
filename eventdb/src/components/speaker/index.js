import { h, Component } from 'preact';
import style from './style';

import Pin from '../../components/pin';

export default class Speaker extends Component {
	render(props, state) {
		const inlineStyle = {
			backgroundImage: 'url(/assets/img/speakers/' + props.speakerId + '.jpg)'
		};
		const target = `profile/${props.speakerId}`;
		return (
			<a href={target} style={inlineStyle} class={style.speaker}>
				<Pin />
				<h3 class={style.speaker__title}>{props.speakerId}</h3>
			</a>
		);
	}
}
