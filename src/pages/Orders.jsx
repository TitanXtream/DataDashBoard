import React from 'react';
import {GridComponent,ColumnDirective,ColumnsDirective,Resize,Sort,ContextMenu,Filter,Page,ExcelExport,PdfExport,Edit,Inject} from '@syncfusion/ej2-react-grids';

import {ordersData,contextMenuItems,ordersGrid} from '../data/dummy'

import { Header } from '../components';

const Orders = () => {
  return (
    <div className='m-2 mt-24 md:m-10 p-2 md:p-10 rounded-3xl bg-white'>
      <Header category="Page" title="Orders"/>
      <GridComponent
      id="gridcomp"
      dataSource={ordersData}
      allowPaging
      allowSorting
      >
        <ColumnsDirective>
        {ordersGrid.map((item,index)=>
        <ColumnDirective id={index} {...item}/> )}
        </ColumnsDirective>
        <Inject services={[Page,Resize,Filter,ContextMenu,Sort,ExcelExport,PdfExport,Edit]} />
      </GridComponent>
    </div>
  )
}

export default Orders