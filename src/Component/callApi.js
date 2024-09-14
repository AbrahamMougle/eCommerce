export default async function fetchData() {
    const response = await fetch('/api/vetements');
    if (!response.ok) {
        throw {
            status: response.status,
            message: 'Fail to fetch van',
            statusText: response.statusText

        }

    }
    const data = await response.json()
    return data
}