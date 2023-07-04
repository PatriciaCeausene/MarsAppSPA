interface ImageGroupParams {
    images: string[],
}

export function ImageGroup(props: ImageGroupParams) {
    console.log(props.images);
    return (
        <div>
            {
                props.images.map((img_src)  => (<img src={img_src} key={img_src} alt="pic" />))
            }
        </div>
    );
}