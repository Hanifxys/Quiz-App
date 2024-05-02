import QuizCard from "./components/QuizCard";


function App() {
  return (
    <div className="flex flex-col items-center mt-20 gap-6">
      <h1 className="text-3xl font-bold">Trivia Quiz App</h1>
      <QuizCard />
    </div>
  );
}

export default App;
