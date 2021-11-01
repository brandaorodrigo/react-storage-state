# react-storage-state

[![Version](https://img.shields.io/npm/v/react-storage-state.svg)](https://www.npmjs.com/package/react-storage-state)

this is a custom react hook for synchronize the value beetween **[`storage object`](https://developer.mozilla.org/pt-BR/docs/Web/API/Window/localStorage)** (_localStorage_ or _sessionStorage_) and **[`application state`](https://reactjs.org/docs/hooks-reference.html#usestate)** using the **[`useContext`](https://pt-br.reactjs.org/docs/hooks-reference.html#usecontext)** hook.

## install

```bash
npm install --save react-storage-state
```

---

## usage

```javascript
const useStorage = useStorageContext();
const [value, setValue] = useStorage('keyName', window.localStorage);
```

**useStorage** hook work almost like **[`useState`](https://reactjs.org/docs/hooks-reference.html#usestate)** but has some differences:

-   the first parameter on the **useStorage** is the storage key name.
    to set an initialValue you will call the **setValue** function.
    if there is already a value in storage it will be assigned to the state.
    if not, it might be important for your code to know that this value is still undefined.
-   the second _( optional )_ parameter is the **storage object** (_localStorage_ or _sessionStorage_).
    by default is localStorage.
-   values ​​stored in useStorage always need to be **converted to string**.
    this is **important** to synchronize the value ​​in the same way will be saved in localStorage.

---

## example

### index.js

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

import { StorageProvider } from 'react-storage-state';

import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <StorageProvider>
            <App />
        </StorageProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
```

### App.js

```javascript
import React from 'react';
import { useStorageContext } from 'react-storage-state';

function App() {
    const useStorage = useStorageContext();

    const [console, setConsole] = useStorage('console');

    const [game, setGame] = useStorage('game', window.sessionStorage);

    return (
        <div>
            <p>Console = {console}</p>
            <p>
                <button onClick={() => setConsole('Dreamcast')}>
                    Dreamcast
                </button>
            </p>
            <p>Game = {game}</p>
            <p>
                <button onClick={() => setConsole('Crazy Taxi')}>
                    Crazy Taxi
                </button>
            </p>
        </div>
    );
}
```

---

## license

[MIT licensed](LICENSE)
