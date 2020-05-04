import React from 'react';

const EmployeeItem = ({ name, last_name, job, salary, type_job, status, avatar }) => (

  <div className='employee__container'>

    <div className='employee__header'>
      <input type='checkbox' />
    </div>

    <div className='employee__header'>
      <img src={ avatar } alt='Portrait' />
    </div>

    <div className='employee__item'>
      <p>{ name } { last_name }</p>
      <p className='employee__job'>{ job }</p>
    </div>

    <div className='employee__item'>
      <p>{ salary }USD</p>
      <p className='employee__job'>{ type_job }</p>
    </div>

    <div className='employee__item'>
      <p>{ status }</p>
    </div>

    <div className='employee__header--left'>
      <img src='../images/editar-employee.png' alt='Portrait' />
      <img src='../images/borrar-employee.png' alt='Portrait' />
    </div>

  </div>
);

export default EmployeeItem;
