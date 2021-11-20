//import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";
function App() {
  const state = useSelector((state) => state.bank); //Use Selector in this project will bring the state from store

  const dispatch = useDispatch(); //Note this this is just a cosmetics to add the dispatcher in bind action creators

  //There is an object destructuring thats going on here. You need to understand that will expansion of this app, soon you would be adding mode values to this fields.
  const { depositMoney, withdrawMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );

  console.log(state);

  return (
    <div className="App">
      <h1>{state}</h1>
      <button onClick={() => depositMoney(1000)}>Deposit</button>
      <button onClick={() => withdrawMoney(1000)}>Withdraw</button>
    </div>
  );
}

export default App;
