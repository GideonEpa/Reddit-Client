const baseUrl = 'https://www.reddit.com';

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

async function getFeed(subName) {
    const endpoint = `/r/${subName}/top.json`
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
}

const Reddit = {
    getFeed,
    getTopSubs,
    getComments,
}

export default Reddit;