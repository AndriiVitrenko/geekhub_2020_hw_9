export function getData(urls: string[], sendData:any) {
    const promises: Array<any> = [];

    urls.forEach(url => {
        promises.push(
            new Promise((res, rej) => {res(fetch(url)
                .then(response => response.json()
                ))})
        )
    })

    Promise.all(promises)
        .then(results => {
            sendData(results)
        })
}
