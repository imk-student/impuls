import React from 'react';
import './styles/edit_popup_window.css'
import HistRecord from './histRecord';
import data from './data';


function HistChanges() {

    
    const records = data.hist
    
    const recordArr = records;



    return (
        <>  
            <div id="hist_record">
                    {recordArr.map((record) => (
                        <HistRecord {...record} key={recordArr.indexOf(record)}/>
                    ))}
            </div>
        </>
    );
}

export default HistChanges;