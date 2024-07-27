const baseUrl = 'https://www.reddit.com';

async function getTopPosts() {
    const endpoint = "/r/all/top/.json";
    const urlToFetch = baseUrl + endpoint;

    try {
        const response = await fetch(urlToFetch);
        if (response.ok) {
            const data = await response.json();
            return data.data.children;
        }
    } catch (e) {
        console.log(e.message);
    };
};

const Reddit = {
    getTopPosts,

}

export default Reddit;