import { Header } from './components/Header';
import { SummaryTable } from './components/SummaryTable';
import './lib/dayjs';
import './styles/global.css';

// import { Habit } from "./components/Habit"

export function App() {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="flex flex-col w-full max-w-5xl gap-16 px-6">
        <Header />
        <SummaryTable />
      </div>
    </div>
  );
}
