import { h, Component } from 'preact';
import style from './style';

import Pin from '../../components/pin';
import Speaker from '../../components/speaker';
import Talk from '../../components/talk';
import Highlight from '../../components/highlight';
import Search from '../../components/search';
import Carousel from '../../components/carousel';

export default class Grid extends Component {
	render() {
		return (
			<div class={style.grid}>
				<div class={style.grid__cell}>
					<Highlight />
				</div>
				<div className={[style.grid__cell].join(' ')}>
					<Carousel />
				</div>
				<div className={[style.grid__cell].join(' ')}>
					<Carousel />
				</div>
				<div className={[style.grid__cell].join(' ')}>
					<Talk talkId="sample" />
				</div>
				<div className={[style.grid__cell].join(' ')}>
					<Talk talkId="sample2" />
				</div>
				<div className={[style.grid__cell].join(' ')}>
					<Carousel />
				</div>
				<div className={[style.grid__cell].join(' ')}>
					<Carousel />
				</div>
			</div>
		);
	}
}
