import { h, Component } from 'preact';
import style from './style';

export default () => (
	<section class={style.highlight}>
		<div class={style.top__inner}>
			<div className="container">
				<p class={style.pretitle}>New release</p>
				<a href="#" class={style.title}>
					<h2 style="margin: 0;">Best of Web'18</h2>
				</a>
				<h3 class={style.subtitle}>Paris - 7 & 8 Juin 2018</h3>
			</div>
		</div>
	</section>
);
