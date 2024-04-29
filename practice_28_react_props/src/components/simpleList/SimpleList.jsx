
export default function SimpleList( ) {
    const listSource = ['Timon', 'Pumba', 'Simba'];
    return (
      <ul>
        {
          listSource.map( elem => <li key={elem}>{elem}</li>)
        }
      </ul>
    )
}