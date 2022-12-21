// text est une props envoyer pas
import transcription from "../service/braille";
const Output = ({propsText}) => {
    return <h1>{transcription(propsText)}</h1>
}

export default Output;