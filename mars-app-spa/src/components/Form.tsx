import React, {useEffect, useState} from 'react'
import Select, {SingleValue} from 'react-select'
import {getAvailableCameras, getPhotosByRoverNameAndCameraType, getRoversNames} from "../requests/handleRequests";
import {ImageGroup} from "./ImageGroup";

interface Option {
    value: string,
    label: string
}
export function Form() {
    const [roversList, setRoversList] = useState<string[]>([]);
    const [camerasList, setCamerasList] = useState<string[]>([]);
    const [rover, setRover] = useState<string>("");
    const [camera, setCamera] = useState<string>("");
    const [isDisabled, setIsDisabled] = useState(true);
    const [imgList, setImgList] = useState<string[]>([]);
    const [showImg, setShowImg] = useState<boolean>(false);

    useEffect(() => {
        getRoversNames().then((roversList: string[]) => setRoversList(roversList));
    },[]);

    useEffect(() => {
        if(rover.length !== 0)
            getAvailableCameras(rover).then((camerasList: string[]) => setCamerasList(camerasList));
    },[rover]);


    const roverOptions: Option[] = roversList.map((name): Option => {
        let op: Option = {
            value: name,
            label: name
        }
        return op;
    });

    const cameraOptions: Option[] = camerasList.map((name): Option => {
        let op: Option = {
            value: name,
            label: name
        }
        return op;
    });

    const handleRoverChange = (selectedOption: SingleValue<Option>) => {
        if(selectedOption !== null) {
            setRover(selectedOption.value);
            setIsDisabled(false);
            setCamera("");
            setShowImg(false);
        }
    };

    const handleCameraChange = (selectedOption: SingleValue<Option>) => {
        if(selectedOption !== null) {
            setCamera(selectedOption.value);
        }
    };

    const onSubmit = () => {
        if(rover.length !== 0 && camera.length !== 0) {
            getPhotosByRoverNameAndCameraType(rover, camera).then((imgList: string[]) => setImgList(imgList));
            setShowImg(true);
        }
    };

    return (
        <div className="container">
            <Select
                placeholder="Select rover"
                options={roverOptions}
                onChange={handleRoverChange}
                className="input"
            />
            <Select
                placeholder="Select camera"
                options={cameraOptions}
                value={camera.length ? cameraOptions.find((cameraOption) => cameraOption.value === camera) : null}
                onChange={handleCameraChange}
                isDisabled={isDisabled}
                className="input"
            />
            <button type="submit"  className="btn" onClick={onSubmit}>Submit</button>
            {showImg && <ImageGroup images={imgList} />}
        </div>
    );
}