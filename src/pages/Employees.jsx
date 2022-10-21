import React from 'react';
import {GridComponent,ColumnDirective,ColumnsDirective,Page,Search,Inject,Toolbar} from '@syncfusion/ej2-react-grids';

import {employeesData,employeesGrid} from '../data/dummy'

import { Header } from '../components';

const Employees = () => {
  return (
    <div className='m-2 mt-24 md:m-10 p-2 md:p-10 rounded-3xl bg-white'>
      <Header category="Page" title="Employees"/>
      <GridComponent
      dataSource={employeesData}
      allowPaging
      allowSorting
      toolbar={['Search']}
      >
        <ColumnsDirective>
        {employeesGrid.map((item,index)=>
        <ColumnDirective id={index} {...item}/> )}
        </ColumnsDirective>
        <Inject services={[Page,Search,Toolbar]} />
      </GridComponent>
    </div>
  )
}

export default Employees