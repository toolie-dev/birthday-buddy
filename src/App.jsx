import data from './data'
import Card from './components/Card'
import { useState } from 'react'

const App = () => {
  const [birthdays, setBirthdays] = useState(data)
  return (
    <main>
      <section className='container'>
        <h3>{birthdays.length} birthdays today</h3>
        <section>
          {birthdays.map(({ id, name, age, image }) => (
            <Card key={id} avatar={image} name={name} age={age} />
          ))}
        </section>
        <button onClick={() => setBirthdays([])} className='btn btn-block'>
          Clear All
        </button>
      </section>
    </main>
  )
}

export default App
