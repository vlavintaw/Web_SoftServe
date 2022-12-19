import QuoteList from "./components/QuoteList";
import "./styles.css";
const Quotes = [
  {
    text: "Be positive",
    autor: "Fred Anderson",
    data: "02.12.2022"
  },
  {
    text: "Life is a series of choices.",
    autor: "Ethan Walker",
    data: "01.12.2022"
  }
];
export default function App() {
  return (
    <div className="App">
      <QuoteList Quotes={Quotes} />
    </div>
  );
}