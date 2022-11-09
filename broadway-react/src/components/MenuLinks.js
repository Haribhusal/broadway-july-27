import React from 'react'
import logoImage from './../logo.png';

const MenuLinks = () => {

    const menuItems = [
        {
            id: 1,
            title: "Home",
            link: '/home'
        },
        {
            id: 2,
            title: "About",
            link: '/about-us'
        },
        {
            id:3,
            title: "Services",
            link: '/our-services'
        },
        {
            id:4,
            title: "Contact Us",
            link: '/contact-us'
        }
    ]

  return (
    // JSX
    <div className='menuStyles'>
        <img src={logoImage} height={60} alt="test logo"/>
        <ul className=''>
            {menuItems.slice(0,3).map((menuItem) => (
                <li key={menuItem.id}>
                    <a href={menuItem.link}>{menuItem.title}</a>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default MenuLinks