export function handleError(error) {
    if (error.response) {
        if (error.response.status === 404){
            console.error("City not found.");
        } else if (error.response.status === 401){
            console.error("invalid API Key");
        } else if (error.response.status === 429){
            console.error("Too many requests, exceeded quota.")
        } else {
            console.error("Yadra, even i don't know what went wrong ¯\_(ツ)_/¯")
        }
    } else if (error.request) {
        console.error("Network error. Please check your connection.");
    } else {
        console.error("Something went wrong:", error.message);
    }
}
