import { useState } from "react";

import "./App.css";
import Input from "./components/Input";
import Output from "./components/Output";

//APP est fichier parent

function App() {
  //creation d'un état
  const [ text, setText ] = useState("état");
	return (
		<>
			<Input setText={setText} />
      <Output propsText={text}/>
		</>
	);
}

export default App;
