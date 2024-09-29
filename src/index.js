import countriesData from './data/country.json' assert { type: 'json' };
import divisionsData from './data/division.json' assert { type: 'json' };
import districtsData from './data/district.json' assert { type: 'json' };
import upazilasData from './data/upazilla.json' assert { type: 'json' };

// Function to get all countries or a specific one by code
export const getCountries = (code) => {
    if (code) {
        return countriesData.find(country => country.code === code);
    }
    return countriesData;
};
// testing
export const getDivisions = (countryCode) => {
    return divisionsData.filter(division => division.country_code === countryCode);
};

export const getDistricts = (divisionId) => {
    return districtsData.filter(district => district.division_id === divisionId);
};

export const getUpazilas = (districtId) => {
    return upazilasData.filter(upazila => upazila.district_id === districtId);
};
