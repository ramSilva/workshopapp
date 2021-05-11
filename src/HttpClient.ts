export const searchImages = (searchTerm: string): Promise<Response> => {
    return fetch(`https://api.unsplash.com/search/photos?query=${searchTerm}`, {
        headers: {
            'Authorization' : 'Client-ID PZQWB_OhLBCgZtMJSpUvCr78gFV83_7Olr-8ZfG-SDQ'
        }
    })
}