import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export interface Image {
    img_src: string,
    rover: string,
    camera: string
}
export default function MediaCard(props: Image) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image= {props.img_src}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Rover: {props.rover}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Camera: {props.camera}
                </Typography>
            </CardContent>
        </Card>
    );
}