import React from 'react';
import iconNavMenu from '../assets/static/icon-nav-menu.png';
import iconEdit from '../assets/static/edit-employee.png';
import iconDelete from '../assets/static/delete-employee.png';

const EmployeeItem = ({ first_name, last_name, job, salary, job_type, status }) => (

  <div className='employee__container'>

    <div className='employee__header'>
      <input type='checkbox' />
    </div>

    <div className='employee__header'>
      <img src={iconNavMenu} alt='Portrait' />
    </div>

    <div className='employee__item'>
      <p>
        { first_name }
        <span> </span>
        { last_name }
      </p>
      <p className='employee__job'>{ job }</p>
    </div>

    <div className='employee__item'>
      <p>
        {salary} USD
      </p>
      <p className='employee__job'>{ job_type }</p>
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
