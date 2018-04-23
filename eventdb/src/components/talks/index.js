import { h, Component } from 'preact';
import style from './style';

import Pin from '../../components/pin';

export default class Talks extends Component {
	render() {
		return (
			<section className="section">
				<div className="container">
					<h2 className="subtitle">Popular talks</h2>
				</div>
				<ul class={style.list}>
					<li class={style.item}>
						<Pin />
						<a
							href="#"
							style="background-image: url('/assets/img/talks/sample.jpg')"
							class={style.talk}
						/>
					</li>
					<li class={style.item}>
						<Pin />
						<a
							href="#"
							style="background-image: url('/assets/img/talks/sample.jpg')"
							class={style.talk}
						/>
					</li>
					<li class={style.item}>
						<Pin />
						<a
							href="#"
							style="background-image: url('/assets/img/talks/sample.jpg')"
							class={style.talk}
						/>
					</li>
					<li class={style.item}>
						<Pin />
						<a
							href="#"
							style="background-image: url('/assets/img/talks/sample.jpg')"
							class={style.talk}
						/>
					</li>
					<li class={style.item}>
						<Pin />
						<a
							href="#"
							style="background-image: url('/assets/img/talks/sample.jpg')"
							class={style.talk}
						/>
					</li>
					<li class={style.item}>
						<Pin />
						<a
							href="#"
							style="background-image: url('/assets/img/talks/sample.jpg')"
							class={style.talk}
						/>
					</li>
					<li class={style.item}>
						<Pin />
						<a
							href="#"
							style="background-image: url('/assets/img/talks/sample.jpg')"
							class={style.talk}
						/>
					</li>
					<li class={style.item}>
						<Pin />
						<a
							href="#"
							style="background-image: url('/assets/img/talks/sample.jpg')"
							class={style.talk}
						/>
					</li>
				</ul>
			</section>
		);
	}
}
