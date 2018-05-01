async function makeApiRequest({id}, url = API_URL) {
    const response = await fetch(`${url}/example-get/${id}`);
    if (!response.ok) {
        throw new Error(`api request failed`);
    } else {
        return response.json();
    }
}

export default makeApiRequest;
