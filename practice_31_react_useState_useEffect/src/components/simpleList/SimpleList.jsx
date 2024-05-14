import { useState } from "react";
import { useEffect } from "react";

/*
5. Усложняем работу с эффектами - работаем с массивом зависимостей. В компоненте `SimpleList`, нам нужно при КАЖДОМ изменении пропса `listSource` выводить в консоль сообщение "List source is changed".
*/

export default function SimpleList( {listHeaderText, listSource} ) {

  useEffect( () => {
    console.log('List source is changed!');
  }, [listSource]);

  useEffect( () => {
    console.log('List is mounted!');
    return () => {
      console.log('List is unmounted!');
    }
  }, []);

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