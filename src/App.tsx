import './App.scss';

type AppComponent = () => React.ReactNode;

const App: AppComponent = () => {
  return (
    <div className="app">
      <h1>Hello World</h1>
    </div>
  );
};

export default App;
