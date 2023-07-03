import NASA_logo from '../images/NASA_logo.png'
interface NASAInfoPageParams {
    textP1: string,
    textP2: string,
    img: string,
    title: string
}

export function NASAInfoPage(props: NASAInfoPageParams) {
    document.title = props.title;
    return (
        <div className="App-header">
            <img src = {props.img}  className="App-logo"  alt="logo"/>
            <p style={{fontSize:20,textAlign:'justify', padding: 10}}>
                { props.textP1 }
            </p>
            <p style={{fontSize:20,textAlign:'justify', padding: 10}}>
                { props.textP2 }
            </p>
        </div>
    );
}