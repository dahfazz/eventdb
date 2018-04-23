import { h, Component } from 'preact';
import style from './style';

import Pin from '../../components/pin';

export default class Speakers extends Component {
	render() {
		return (
			<section className="section">
				<div className="container">
					<h2 className="subtitle">Popular speakers</h2>
				</div>
				<ul class={style.list}>
					<li class={style.item}>
						<Pin />
						<a
							href="#"
							style="background-image: url('/assets/img/speakers/rachel_andrew.jpg')"
							class={style.speaker}
						/>
					</li>
					<li class={style.item}>
						<Pin />
						<a
							href="#"
							style="background-image: url('/assets/img/speakers/rachel_andrew.jpg')"
							class={style.speaker}
						/>
					</li>
					<li class={style.item}>
						<Pin />
						<a
							href="#"
							style="background-image: url('/assets/img/speakers/rachel_andrew.jpg')"
							class={style.speaker}
						/>
					</li>
					<li class={style.item}>
						<Pin />
						<a
							href="#"
							style="background-image: url('/assets/img/speakers/rachel_andrew.jpg')"
							class={style.speaker}
						/>
					</li>
					<li class={style.item}>
						<Pin />
						<a
							href="#"
							style="background-image: url('/assets/img/speakers/rachel_andrew.jpg')"
							class={style.speaker}
						/>
					</li>
					<li class={style.item}>
						<Pin />
						<a
							href="#"
							style="background-image: url('/assets/img/speakers/rachel_andrew.jpg')"
							class={style.speaker}
						/>
					</li>
					<li class={style.item}>
						<Pin />
						<a
							href="#"
							style="background-image: url('/assets/img/speakers/rachel_andrew.jpg')"
							class={style.speaker}
						/>
					</li>
					<li class={style.item}>
						<Pin />
						<a
							href="#"
							style="background-image: url('/assets/img/speakers/rachel_andrew.jpg')"
							class={style.speaker}
						/>
					</li>
				</ul>
			</section>
		);
	}
}
