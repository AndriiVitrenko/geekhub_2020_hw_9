export function getData(urls: string[], setData: (arg0: Array<any>) => void) {
    const promises: Array<any> = [];

    urls.forEach(url => {
        promises.push(
            new Promise((res) => {res(fetch(url)
                .then(response => response.json()
                ))
            })
        )
    })

    Promise.all(promises)
        .then(result => setData(result))
}
