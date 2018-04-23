import { h, Component } from 'preact';
import style from './style';

export default class Pin extends Component {
	render() {
		return (
			<div class={style.pin}>
				<i class="material-icons">subject</i>
			</div>
		);
	}
}
