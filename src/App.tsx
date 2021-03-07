import {useState, useEffect} from 'react';
import { Spinner } from './components/Spinner/Spinner';
import { Table } from './components/Table';
import {getData} from './services/api'

function App() {
  const [dataArray, setDataArray] = useState<string[]>([])

  useEffect(
    () => {
      getData()
        .then(results => setDataArray(results))
    })

  return (
    <div className="App">
      {dataArray.length > 0 ? <></> : <Spinner />}
      <Table dataArray={dataArray} />
    </div>
  );
}

export default App;