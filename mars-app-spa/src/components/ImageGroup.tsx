interface ImageGroupParams {
    images: string[],
}

export function ImageGroup(props: ImageGroupParams) {
    props.images.slice(0,5);
    return (
        <div>
            {
                props.images.map((img_src)  => (<img src={img_src} key={img_src} alt="pic" />))
            }
        </div>
    );
}