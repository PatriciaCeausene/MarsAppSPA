import * as React from 'react';
import { Dayjs } from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {
    getAvailableCameras,
    getPhotosByRoverNameAndCameraType,
    getPhotosByRoverNameAndEarthDate,
    getRoversNames
} from "../requests/handleRequests";
import Select, {SingleValue} from "react-select";
import {ImageGroup} from "./ImageGroup";
import MediaCard from "./MediaCard";
import {log} from "util";
import {Box, Grid} from "@mui/material";

interface Option {
    value: string,
    label: string
}
export interface Image {
    img_src: string,
    rover: string,
    camera: string
}
export default function RoverAndDateForm() {
    const [roversList, setRoversList] = useState<string[]>([]);
    const [rover, setRover] = useState<string>("");
    const [imgList, setImgList] = useState<Image[]>([]);
    const [showImg, setShowImg] = useState<boolean>(false);
    const [value, setValue] = useState<Dayjs | null>(null);

    useEffect(() => {
        getRoversNames().then((roversList: string[]) => setRoversList(roversList));
    },[]);


    const roverOptions: Option[] = roversList.map((name): Option => {
        let op: Option = {
            value: name,
            label: name
        }
        return op;
    });

    const handleRoverChange = (selectedOption: SingleValue<Option>) => {
        if(selectedOption !== null) {
            setRover(selectedOption.value);
            setShowImg(false);
        }
    };

    const onSubmit = () => {
        if(rover.length !== 0 && value !== null) {
            const date:string =value.year().toString() + "-" + (value.month() + 1).toString() + "-" + value.date().toString();
            console.log(date);
            getPhotosByRoverNameAndEarthDate(rover, date).then((imgList: Image[]) => setImgList(imgList));
            console.log(imgList);
            setShowImg(true);
        }
    };

    console.log('imgList');
    console.log(imgList);

    return (
        <div className="gridBox">
            <h2>Select a rover and an earth date</h2>
            <Select
                placeholder="Select rover"
                options={roverOptions}
                onChange={handleRoverChange}
                className="input"
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker']}>
                    <DatePicker value={value} onChange={(newValue) => setValue(newValue)} />
                </DemoContainer>
            </LocalizationProvider>
            <button type="submit"  className="btn" onClick={onSubmit}>Submit</button>
            {showImg && <Box sx={{ flexGrow: 1 }}><Grid container spacing={2}>{imgList.map((img: Image) =>  <Grid item xs={3}  key={img.img_src}><MediaCard key={img.img_src} img_src={img.img_src} rover={img.rover} camera={img.camera} /></Grid>) }</Grid> </Box>}
        </div>
    );
}