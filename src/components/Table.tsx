import React from 'react';
import { urls } from '../services/api';

type TablePropsType = {
    dataArray: string[]
}

export default function Table(props: TablePropsType) {
  const { dataArray } = props;

  return (
    <table>
      <thead>
        <tr>
          <th className="table_heading">site</th>
          <th className="table_heading">data</th>
        </tr>
      </thead>

      <tbody>
        {
          urls.map((url, i) => (
            <tr key={url}>
              <td>{url}</td>
              <td><pre>{JSON.stringify(dataArray[i], null, 2)}</pre></td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}
