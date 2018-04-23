import { h, Component } from 'preact';
import style from './style';

import Pin from '../../components/pin';
import Logo from '../../components/logo';

class Controller extends Component {
	render() {
		return (
			<div class={style.controller}>
				<button>
					<i class="material-icons">keyboard_arrow_left</i>
				</button>
				<button>
					<i class="material-icons">keyboard_arrow_right</i>
				</button>
			</div>
		);
	}
}

export default class Profile extends Component {
	removeUnderscore = str => str.replace('_', ' ');

	// Note: `user` comes from the URL, courtesy of our router
	render({ user }) {
		const inlineStyle = {
			backgroundImage: 'url(/assets/img/speakers/' + user + '.jpg)'
		};
		const inlineTalkStyle1 = {
			backgroundImage: 'url(/assets/img/talks/' + user + '.jpg)'
		};
		const inlineTalkStyle2 = {
			backgroundImage: 'url(/assets/img/talks/' + user + '-2.jpg)'
		};
		const inlineTalkStyle3 = {
			backgroundImage: 'url(/assets/img/talks/' + user + '-3.jpg)'
		};
		return (
			<div class={style.profile}>
				<Logo />
				<div class={style.name}>
					<span>{this.removeUnderscore(user)}</span>
				</div>
				<div style={inlineTalkStyle1} class={style.talk}>
					<Pin />
				</div>
				<div class={style.podcast}>
					<Pin />
					<i class="material-icons">volume_up</i>
				</div>
				<div style={inlineTalkStyle2} class={style.talk2}>
					<Pin />
				</div>
				<div style={inlineTalkStyle3} class={style.talk3}>
					<Pin />
					<Controller />
				</div>
				<div style={inlineStyle} class={style.imgWrapper} />
			</div>
		);
	}
}
