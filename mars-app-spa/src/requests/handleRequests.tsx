import axios from 'axios';

export async function getRoversNames(): Promise<string[]> {
    try {
        const { data } = await axios({
            method: 'get',
            url: 'http://localhost:8000/rovers',
            responseType: "json"
        });
        return data;
    } catch (error) {
        console.log(error);
        return [];
    }
}

export async function getAvailableCameras(roverName: string): Promise<string[]> {
    try {
        const { data } = await axios({
            method: 'get',
            url: `http://localhost:8000/rovers/${roverName}/cameras`,
            responseType: "json"
        });
        return data;
    } catch (error) {
        console.log(error);
        return [];
    }
}

export async function getPhotosByRoverNameAndCameraType(roverName: string, cameraType: string) {
    try {
        const {data} = await axios({
            method: 'get',
            url:`http://localhost:8000/rovers/${roverName}/photos/cameras/${cameraType}`,
            responseType: "json"
        });
        return data;
    } catch (error) {
        console.log(error);
    }
}

export async function getPhotosByRoverNameAndEarthDate(roverName: string, earthDate: string) {
    try {
        const {data} = await axios({
            method: 'get',
            url:`http://localhost:8000/rovers/${roverName}/photos/${earthDate}`,
            responseType: "json"
        });
        return data;
    } catch (error) {
        console.log(error);
    }
}