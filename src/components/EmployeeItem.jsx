import React from 'react';
import iconNavMenu from '../assets/static/icon-nav-menu.png';
import iconEdit from '../assets/static/edit-employee.png';
import iconDelete from '../assets/static/delete-employee.png';

const EmployeeItem = ({ name, lastName, job, salary, typeJob, status }) => (

  <div className='employee__container'>

    <div className='employee__header'>
      <input type='checkbox' />
    </div>

    <div className='employee__header'>
      <img src={iconNavMenu} alt='Portrait' />
    </div>

    <div className='employee__item'>
      <p>
        { name }
        <span> </span>
        { lastName }
      </p>
      <p className='employee__job'>{ job }</p>
    </div>

    <div className='employee__item'>
      <p>
        {salary}
      </p>
      <p className='employee__job'>{ typeJob }</p>
    </div>

    <div className='employee__item'>
      <p>{ status }</p>
    </div>

    <div className='employee__header--left'>
      <img src={iconEdit} alt='Portrait' />
      <img src={iconDelete} alt='Portrait' />
    </div>

  </div>
);

export default EmployeeItem;
