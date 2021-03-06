import Header from "../components/Header";


/**
 * This is the band page
 * #TODO : design this page
 * @returns {JSX.Element}
 * @constructor
 */
export default function Band () {
    const band={
        id:1,
        name: "Foggy Mountain Rockers",
        img_url: "https://julienthomasfeatures.s3.eu-west-3.amazonaws.com/band.svg",
        artists:{
            1: {
                id:1,
                name: "Julien",
                img_url: "https://julienthomasfeatures.s3.eu-west-3.amazonaws.com/logo.png"
            },
            2: {
                id:2,
                name: "Hugo",
                img_url: "https://julienthomasfeatures.s3.eu-west-3.amazonaws.com/logo.png"
            },
            3: {
                id:3,
                name: "Issa",
                img_url: "https://julienthomasfeatures.s3.eu-west-3.amazonaws.com/logo.png"
            }
        }
    }

    return(
            <section className="container mt-3">
                <BandCard band={band} />
            </section>
    )
}

function BandCard ({band}){
    return(

        <article className="card card_band_profile">
            <div className="card-body">
                <h1>{band.name}</h1>
            </div>

        </article>
    )
}
