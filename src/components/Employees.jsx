import React from 'react';
import '../assets/styles/components/Employees.scss';

const Employees = () => (
  <section className='employee'>
    <div className='employee__nav'>
      <div>
        <button className='employee__button'>Agregar</button>
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

      <div className='employee__container--white'>

        <div className='employee__container'>

          <div className='employee__header'>
            <input type='checkbox' />
          </div>

          <div className='employee__header'>
            <img src='../images/icono-navmenu.png' alt='Portrait' />
          </div>

          <div className='employee__item'>
            <p>Nombre Apellido</p>
            <p className='employee__job'>Software Enginner</p>
          </div>

          <div className='employee__item'>
            <p>2.000 USD</p>
            <p className='employee__job'>full time</p>
          </div>

          <div className='employee__item'>
            <p>Activo</p>
          </div>

          <div className='employee__header--left'>
            <img src='../images/editar-employee.png' alt='Portrait' />
            <img src='../images/borrar-employee.png' alt='Portrait' />
          </div>

        </div>

      </div>

    </div>
  </section>
);

export default Employees;
