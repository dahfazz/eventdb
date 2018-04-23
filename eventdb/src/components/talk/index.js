import { h, Component } from 'preact';
import style from './style';

import Pin from '../../components/pin';

export default class Talk extends Component {
	render(props, state) {
		let inlineStyle = {
			backgroundImage: 'url(/assets/img/talks/' + props.talkId + '.jpg)'
		};
		return (
			<a href="#" style={inlineStyle} class={style.talk}>
				<Pin />
			</a>
		);
	}
}
