const APIKEY = 't--NGiYVYVeDqEMr9-W_Y-mzhCJ2_uaXvPUfJrQLyX5AUanrNhWTol32eU1L8TRS6poOx2aZ2zA00w-b60HlBWzSuoHGCY6PhVoH06P-sSTN7KqQQLm4b0wJXrf_XnYx'

let Yelp = {
    async search(term, location, sortBy) {
        const endpoint = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`
        
        return fetch(endpoint, {
            headers: { Authorization: `Bearer ${APIKEY}`}, 
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => {
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count
                    }
                });
            }
    
        });
    }
}

export default Yelp


