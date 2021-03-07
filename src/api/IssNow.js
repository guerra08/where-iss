import axios from 'axios';

const host = 'http://api.open-notify.org';

export const getCurrentIssLocation = async () => {
    const response = await axios.get(`${host}/iss-now`);
    if(response.status !== 200)
        return false;
    return response.data.iss_position;
}