import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

export default class Logo extends Component {
	render() {
		return (
			<h1 class={[style.logo]}>
				<a href="/">
					<div>
						<span>K</span>
						<span>E</span>
						<span>Y</span>
					</div>
					<div>
						<span>B</span>
						<span>R</span>
						<span>N</span>
					</div>
				</a>
			</h1>
		);
	}
}
