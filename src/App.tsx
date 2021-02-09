import {useState, useEffect} from 'react';
import {getData} from './services/api'

function App() {
  const urls = ['https://reqres.in/api/users/2', 'http://jsonplaceholder.typicode.com/posts/1', 'https://api.mocki.io/v1/b043df5a']
  const [dataArray, setDataArray] = useState<any>([])

  useEffect(
    () => {
      getData(urls)
        .then(results => setDataArray(results))
    })

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
          <th className="table_heading">site</th>
          <th className="table_heading">data</th>
        </tr>
        </thead>

        <tbody>
          {
            urls.map((url, i) => {
              return <tr key={i}>
                <td>{url}</td>
                <td><pre>{JSON.stringify(dataArray[i], null, 2)}</pre></td>
              </tr>
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;