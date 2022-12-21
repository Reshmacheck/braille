// setext est une props envoyer pas
const Input = ({setText}) => {
    //Gestionnaire d'évenement
    const handleChange = (e) =>{
     //Modifier l état contenu dans app avec la valeur de la saisie
     setText(e.currentTarget.value); 
    };
    return <input type="text" onChange={handleChange}/>
};

export default Input;