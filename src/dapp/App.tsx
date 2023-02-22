import Farm from "components/farm/Farm";
import ModalSelectPlant from "components/modal/ModalSelectPlant";
import Island from "components/objects/Island";
import { AppContainer } from "./styles";
function App() {
  return (
    <AppContainer>
      <Farm />
      <Island />
      {/* <ModalSelectPlant /> */}
    </AppContainer>
  )
}

export default App;
