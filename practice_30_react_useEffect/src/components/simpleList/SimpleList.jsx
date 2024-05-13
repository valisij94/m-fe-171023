
export default function SimpleList( {listHeaderText, listSource} ) {


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