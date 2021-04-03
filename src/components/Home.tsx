import React, { useEffect, useState } from 'react';
import Spinner from './Spinner/Spinner';
import Table from './Table';
import { getData } from '../services/api';

export default function Home() {
  const [dataArray, setDataArray] = useState<string[]>([]);

  useEffect(
    () => {
      getData()
        .then((results) => setDataArray(results));
    }, [],
  );

  return (
    <div className="App">
      {dataArray.length > 0 ? '' : <Spinner />}
      <Table dataArray={dataArray} />
    </div>
  );
}
