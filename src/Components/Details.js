import React from 'react';
import Member1 from './Images/mem 1.png';
import Member2 from './Images/mem2.png';
import Member3 from './Images/mem3.png';
import Member4 from './Images/mem4.png';
import TeamMembers from './TeamMembers';
import './TeamMembers.css'; 
function Details() {
    const details = [
        {
            mem_img: Member1,
            mem_name: 'Alex',
            role: 'Digital Marketing',   
        },
        {
            mem_img: Member2,
            mem_name: 'Nancy',
            role: 'web development', 
        },
        {
            mem_img: Member3,
            mem_name: 'Rohan',
            role: ' Graphic Designing', 
        },
        {
            mem_img: Member4,
            mem_name: 'Jessy',
            role: 'IT Consulting ', 
        }
    ];

    return (
        <div className='member-details'>
            {details.map((detail, index) => (
                <TeamMembers
                    key={index}
                    name={detail.mem_name}
                    img={detail.mem_img}
                    role={detail.role}
                />
            ))}
        </div>
    );
}

export default Details;
