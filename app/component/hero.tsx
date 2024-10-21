import sinta from "../sinta.jpg"

export default function Hero(){
    return(
    <div className="container mx-auto p-2 text-center">
    <h1 className="text-black-300 font-bold">CV Online</h1>
    <h2 className="text-5x1"> Sinta Sopyanti</h2>

    <Profile/>
  
    <p>
    Miliarder sholehah yang rajin sholat, ngaji dan sedekah.uihwdeihfurui3hfueihfoie8frgiwhuuihcv
        </p>
        </div>
    );
};
function Profile(){
    return <img src={sinta.src} alt="Sinta Sopyantizzz" className="sinta"/>;
  }
  