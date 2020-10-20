export const fetchSearch = (query) => {
    return $.ajax({
        method: 'GET',
        url: `/api/videos/search/${query}`,
    })
}