import React from 'react';
import '../assets/styles/components/Employees.scss';

const Employees = ({ children }) => (
  <section className='employee'>
    <div className='employee__nav'>
      <div>
        <button className='employee__button' type='button'>Agregar</button>
      </div>
    </div>

    <div className='employee__table'>
      <div className='employee__container--gray'>

        <div className='employee__container'>

          <div className='employee__header'>
            <input type='checkbox' />
          </div>

          <div className='item' />

          <div className='employee__header--left'>
            <p>EMPLEADO</p>
          </div>

          <div className='employee__header--left'>
            SALARIO
          </div>

          <div className='employee__header--left'>
            ESTADO
          </div>

          <div className='employee__header--left'>
            ACCIONES
          </div>

        </div>
      </div>

      {children}
    </div>

  </section>
);

export default Employees;
