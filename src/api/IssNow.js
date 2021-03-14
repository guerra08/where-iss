import axios from 'axios';

const host = 'https://api.wheretheiss.at/v1';

export const getCurrentIssLocation = async () => {
    const response = await axios.get(`${host}/satellites/25544`);
    if(response.status !== 200)
        return false;
    return { latitude: response.data.latitude, longitude: response.data.longitude };
}