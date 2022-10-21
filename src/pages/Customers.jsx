import React from 'react'
import {GridComponent,ColumnDirective,ColumnsDirective,Page,Selection,Inject,Edit,Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids'

import {customersGrid,customersData} from '../data/dummy'

import {Header} from '../components'
const Customers = () => {
  return (
    <div className='m-2 mt-24 md:m-10 p-2 md:p-10 rounded-3xl bg-white'>
      <Header category="Page" title="Customers"/>
      <GridComponent
      dataSource={customersData}
      allowPaging
      allowSorting
      toolbar={['Delete']}
      editSettings={{allowDeleting: true, allowEditing: true}}
      >
        <ColumnsDirective>
        {customersGrid.map((item,index)=>
        <ColumnDirective id={index} {...item}/> )}
        </ColumnsDirective>
        <Inject services={[Page,Toolbar,Sort,Filter,Edit,Selection]} />
      </GridComponent>
    </div>
  )
}

export default Customers