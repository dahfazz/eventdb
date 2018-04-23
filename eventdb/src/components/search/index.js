import { h, Component } from 'preact';
import style from './style';

export default class Search extends Component {
	render() {
		return (
			<form class={style.search__form}>
				<i class="material-icons">search</i>
				<input type="text" class={style.search__input} />
			</form>
		);
	}
}
