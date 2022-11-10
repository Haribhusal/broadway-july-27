import logoImage from './../logo.png';
import { Link } from "react-router-dom";

export default function Root() {
    const menuItems = [
        {
            id: 1,
            title: "Home",
            link: '/'
        },
        {
            id: 2,
            title: "About",
            link: '/about-us'
        },
        {
            id: 3,
            title: "Services",
            link: '/our-services'
        },
        {
            id: 4,
            title: "Contact Us",
            link: '/contact-us'
        }
    ]

    return (
        <>
            <nav>
                <div className='menuStyles'>
                    <img src={logoImage} height={60} alt="test logo" />
                    <ul className='menuItems'>
                        {menuItems.map((menuItem) => (
                            <li key={menuItem.id}>
                                <Link to={menuItem.link}>
                                    <a>{menuItem.title}</a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </>
    );
}