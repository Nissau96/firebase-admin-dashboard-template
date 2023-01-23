import React from 'react';
import {
    GridComponent,
    ColumnsDirective,
    ColumnDirective,
    Resize,
    Sort,
    ContextMenu,
    Filter,
    Page,
    ExcelExport,
    PdfExport,
    Edit,
    Inject,
} from '@syncfusion/ej2-react-grids';
import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy';
import { Header } from './';

const OrdersTable = () => {
    const pageSettings = { pageSize: 10 };

    return (
        <div className="p-2 m-2 bg-white md:m-10 md:p-10 rounded-3xl">
            <Header category="Latest" title="Orders" />
            <GridComponent id='gridcomp' dataSource={ordersData} allowPaging allowSorting pageSettings={pageSettings}>
                <ColumnsDirective>
                    {ordersGrid.map((item, index) => (
                        <ColumnDirective key={index} {...item} />
                    ))}
                </ColumnsDirective>
                <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit]} />
            </GridComponent>
        </div>
    )
}

export default OrdersTable;
