import React from 'react'

import CardComponent from '../Card'
import './style.css'


const ServicesComponent = () => {

    const services = [
        {
            id: 1,
            title: "Web Design",
            desc: "Details information of Web Design",
            buttonLabel: 'Read More'
        },
        {
            id: 2,
            title: "Graphics Designing",
            desc: "Details information of Graphics Design",
            buttonLabel: 'Read More'

        },
        {
            id: 3,
            title: "Software Development",
            desc: "Details information of Software Development",
            buttonLabel: 'Read More'

        },
        {
            id: 4,
            title: "Mobile App development",
            desc: "Details information of Mobile App Development",
            buttonLabel: 'Read More'

        },
    ]
    return (

        <section className='servicesWrapper'>
            <div className="container">
                <div className="row">
                    {services.map((serviceItem) => (
                        <CardComponent cardtitle={serviceItem.title} cardDetail={serviceItem.desc} buttonLabel={serviceItem.buttonLabel} key={serviceItem.id}></CardComponent>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ServicesComponent