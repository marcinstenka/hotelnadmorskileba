import Logo from './../../assets/logo.png';
import { NavLink } from 'react-router-dom';
const NavbarDesktop = () => {
	return (
		<nav>
			<div className='logo-container'>
				<img src={Logo} alt='Hotel Nadmorski Łeba' />
			</div>
			<ul>
				<li>
					<NavLink to='/' exact activeClassName='active-nav-link'>
						Hotel
					</NavLink>
				</li>
				<li>
					<NavLink to='/pokoje' exact activeClassName='active-nav-link'>
						Pokoje
					</NavLink>
				</li>
				<li>
					<NavLink to='/restauracja' exact activeClassName='active-nav-link'>
						Restauracja
					</NavLink>
				</li>
				<li>
					<NavLink to='/dla-dzieci' exact activeClassName='active-nav-link'>
						Dla dzieci
					</NavLink>
				</li>
				<li>
					<NavLink to='/spa' exact activeClassName='active-nav-link'>
						Spa
					</NavLink>
				</li>
				<li>
					<NavLink to='/cennik' exact activeClassName='active-nav-link'>
						Cennik
					</NavLink>
				</li>
				<li>
					<NavLink to='/kontakt' exact activeClassName='active-nav-link'>
						Kontakt
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default NavbarDesktop;
