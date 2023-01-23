import React from 'react';
import {
    GridComponent,
    ColumnsDirective,
    ColumnDirective,
    Page,
    Search,
    Inject,
} from '@syncfusion/ej2-react-grids';
import { employeesData, employeesGrid } from '../data/dummy';

import { Header } from './';


const ActiveEmployees = () => {
    const pageSettings = { pageSize: 10 };
    return (
        <div className='p-2 m-2 bg-white md:m-10 md:p-10 rounded-3xl'>
            <Header category='Active' title='Riders' />
            <GridComponent
                dataSource={employeesData}
                allowPaging
                allowSorting
                width="auto"
                pageSettings={pageSettings}>
                <ColumnsDirective>
                    {employeesGrid.map((item, index) => (
                        <ColumnDirective
                            key={index}
                            {...item}
                        />
                    ))}
                </ColumnsDirective>
                <Inject
                    services={[Page, Search]}
                />
            </GridComponent>
        </div>
    )
}

export default ActiveEmployees