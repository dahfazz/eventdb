import { h, Component } from 'preact';
import style from './style';
import index from '../../style';

import Grid from '../../components/grid';
import Header from '../../components/header';
import Topics from '../../components/topics';

export default class Home extends Component {
	render() {
		return (
			<div>
				<Header />
				<Grid />
				<Topics />
			</div>
		);
	}
}
