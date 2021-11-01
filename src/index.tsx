import React from 'react';
import ReactDOM from 'react-dom';

import { StorageProvider, useStorageContext } from './react-storage-state';

function App(): React.ReactElement {
    const useStorage = useStorageContext();
    const [value, setValue] = useStorage('value');
    return (
        <div>
            <p>VALUE: {value}</p>
            <p>
                <button
                    onClick={() => {
                        setValue('storagedValue');
                    }}
                    type="button"
                >
                    SET VALUE
                </button>
            </p>
        </div>
    );
}

ReactDOM.render(
    <React.StrictMode>
        <StorageProvider>
            <App />
        </StorageProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
