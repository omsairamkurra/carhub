export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age
  
    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
    return rentalRatePerDay.toFixed(0);
  };


const url = 'https://api.api-ninjas.com/v1/cars?model=corolla';

export async function fetchCars() {
    const headers = {
        'X-Api-Key': process.env.RAPID_API_KEY || "",
        'X-RapidAPI-Host': 'api.api-ninjas.com',
    };

    const response = await fetch(url, { headers: headers });

    if (!response.ok) {
        throw new Error('API request failed');
    }

    const result = await response.json();
    return result;
}