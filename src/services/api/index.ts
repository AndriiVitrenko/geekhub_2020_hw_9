export async function getData(urls: string[]) {
    const promises: Array<any> = [];

    urls.forEach(url => {
        promises.push(
            new Promise((res) => {res(fetch(url)
                .then(response => response.json()
                ))})
        )
    })

    return await Promise.all(promises)
}
