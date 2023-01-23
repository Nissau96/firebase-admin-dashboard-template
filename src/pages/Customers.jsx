import React from 'react';
import {
    GridComponent,
    ColumnsDirective,
    ColumnDirective,
    Page,
    Search,
    Inject,
    Toolbar,
    Selection,
    Edit,
    Sort,
    Filter
} from '@syncfusion/ej2-react-grids';
import { customersData, customersGrid } from '../data/dummy';
import { Header } from '../components';

const Customers = () => {
    const pageSettings = { pageSize: 20 };

    return (
        <div className='p-2 m-2 bg-white md:m-10 md:p-10 rounded-3xl'>
            <Header category='Page' title='Customers' />
            <GridComponent
                dataSource={customersData}
                allowPaging
                allowSorting
                pageSettings={pageSettings}
                toolbar={['Search', 'Delete']}
                editSettings={{ allowDeleting: true, allowEditing: true }}
                width="auto">
                <ColumnsDirective>
                    {customersGrid.map((item, index) => (
                        <ColumnDirective
                            key={index}
                            {...item}
                        />
                    ))}
                </ColumnsDirective>
                <Inject
                    services={[Page, Search, Toolbar, Selection, Edit, Sort, Filter]}
                />
            </GridComponent>
        </div>
    )
}

export default Customers