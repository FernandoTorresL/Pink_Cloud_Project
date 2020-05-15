import React from 'react';
import { connect } from 'react-redux';
import { deleteEmployee } from '../actions';
import iconNavMenu from '../assets/static/icon-nav-menu.png';
import iconEdit from '../assets/static/edit-employee.png';
import iconDelete from '../assets/static/delete-employee.png';

const EmployeeItem = (props) => {
  const { id, first_name, last_name, job, salary, job_type, status } = props;
  const handleDeleteEmployee = (itemId) => {
    props.deleteEmployee(itemId)
  }
  return(

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
        <img
          src={iconDelete}
          alt='Remove Icon'
          onClick={() => handleDeleteEmployee(id)}
        />
      </div>

    </div>
  );
}

const mapDispatchToProps = {
  deleteEmployee,
}

export default connect(null, mapDispatchToProps)(EmployeeItem);
