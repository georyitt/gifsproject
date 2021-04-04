
export const getFetchGifs = async ( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=u40V7DxnHmFmqDuHWo3gLIB4BzPrDCLb&q=${ encodeURI(category) }&limit=10`;
    const response = await fetch(url);
    const { data } = await response.json();
    const gifts = data.map( img => {
        if (img.title.trim().length < 1) {
            img.title = category;
        }
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });

    return gifts;
}