import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

import Search from '../../components/search';
import Logo from '../../components/logo';

export default class Header extends Component {
	render() {
		return (
				<Logo />
		);
	}
}
