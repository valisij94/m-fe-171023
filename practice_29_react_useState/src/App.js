import './App.css';
import SimpleList from './components/simpleList/SimpleList';
import SimpleParagraph from './components/simpleParagraph/SimpleParagraph';

function App() {

  let currentSeason = 'winter';

  const clickParagraphHandler = (event) => {
    console.log('Clicked on ' + event.target.textContent)
  }

  return (
    <div className="App">
      <h1>Hello World!</h1>
      {/** Comment here! */}
      <h2>Something! {new Date().toLocaleString()}</h2>
      <div>
        <button>Login</button>
        <button>Register</button>
      </div>
      <SimpleParagraph
        textContent="Hello from simple paragraph!!!"
        clickHandler={clickParagraphHandler}
      />
      <SimpleList
        listHeaderText="Header text"
        listSource={ ['Timon', 'Pumba', 'Simba'] }
      />
      {/*4. Еще работаем с динамикой. Объявим в нашем компоненте переменную `currentSeason`, и запишем в нее значение `winter` (у нас сейчас зима). Теперь нужно в компоненте (внутри `<div className='App'>`), под нашими кнопками, вывести параграф с классом `seasonParagraph`, и текстом "Now is: " + значение переменной `currentSeason`.*/}
      <p className='seasonParagraph'>Current season is: {currentSeason}</p>
    </div>
  );
}

export default App;
