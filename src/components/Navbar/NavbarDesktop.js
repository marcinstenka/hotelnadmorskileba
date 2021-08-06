import Logo from './../../assets/logo.png';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
const NavbarDesktop = () => {
	const { t } = useTranslation();
	return (
		<nav>
			<div className='logo-container'>
				<img src={Logo} alt='Hotel Nadmorski Łeba' />
			</div>
			<ul>
				<li>
					<NavLink to='/' exact activeClassName='active-nav-link'>
						{t('nav1')}
					</NavLink>
				</li>
				<li>
					<NavLink to='/pokoje' exact activeClassName='active-nav-link'>
						{t('nav2')}
					</NavLink>
				</li>
				<li>
					<NavLink to='/restauracja' exact activeClassName='active-nav-link'>
						{t('nav3')}
					</NavLink>
				</li>
				<li>
					<NavLink to='/dla-dzieci' exact activeClassName='active-nav-link'>
						{t('nav4')}
					</NavLink>
				</li>
				<li>
					<NavLink to='/spa' exact activeClassName='active-nav-link'>
						{t('nav5')}
					</NavLink>
				</li>
				<li>
					<NavLink to='/cennik' exact activeClassName='active-nav-link'>
						{t('nav6')}
					</NavLink>
				</li>
				<li>
					<NavLink to='/kontakt' exact activeClassName='active-nav-link'>
						{t('nav7')}
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default NavbarDesktop;
