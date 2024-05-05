
export default function SimpleList( {listHeaderText, listSource} ) {

  /*
  5. Модернизируем наш компонент. Иногда бывает так, что массив `listSource` приходит пустой. В этом случае, нам нужно не рисовать список, а отрендерить параграф с текстом `Empty datasource!`. Тут нам тоже пригодится условный рендеринг.
  */

  return (
    <>
      { listHeaderText && <h4>{listHeaderText}</h4> }
      {
        (listSource && listSource.length > 0)
          ?
          <ul>
            {
              listSource.map( (elem) => <li key={elem}> {elem} </li>)
            }
          </ul>
          : <p>Empty datasource!</p>
      }
    </>
  );
}