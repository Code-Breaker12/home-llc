import { REACT_APP_GOOGLE_MAPS_KEY } from "../data/constants";

const fetchAddress = async (latitude, longitude) => {
    try {
        const addressResponse = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${REACT_APP_GOOGLE_MAPS_KEY}`);
        const addressData = await addressResponse.json();
        // console.log(addressData);
        return addressData;
    } catch (error) {
        console.log('Error:', error);
        return error;
    }
};

export default fetchAddress;                