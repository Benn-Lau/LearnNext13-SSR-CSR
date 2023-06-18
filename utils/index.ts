// const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '99d731e58bmshe6c8f348eaca4a3p1be4b6jsnd2301da616d9',
// 		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
// OG code from https://rapidapi.com/apininjas/api/cars-by-api-ninjas/
// =========================================================================================================================
//


export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': '99d731e58bmshe6c8f348eaca4a3p1be4b6jsnd2301da616d9',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',{
        headers:headers
    });

    const result =await response.json()

    return result
}