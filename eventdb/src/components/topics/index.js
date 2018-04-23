import { h, Component } from 'preact';
import style from './style';

export default class Topics extends Component {
	render() {
		const TOPICS = [
			'css',
			'angular',
			'UI/UX',
			'javascript',
			'react',
			'mobile',
			'cloud',
			'dataviz',
			'vuejs',
			'android',
			'haskell',
			'agile',
			'progressive web app'
		];
		const topicItems = TOPICS.map(item => (
			<a href="#" class={style.topic}>
				{item}
			</a>
		));
		return <div class={style.topics}>{topicItems}</div>;
	}
}
