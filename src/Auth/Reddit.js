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

async function getComments(permalink) {
    const endpoint = permalink + ".json"
    const urlToFetch = baseUrl + endpoint;

    try {
        const response = await fetch(urlToFetch);
        if (response.ok) {
            const data = await response.json();
            return data;
        }
    } catch (e) {
        console.log(e.message);
    };
}

async function getTopSubs() {
    const endpoint = "/subreddits/popular.json";
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
    getTopSubs,
    getComments
}

export default Reddit;