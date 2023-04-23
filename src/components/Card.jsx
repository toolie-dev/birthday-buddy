import React from 'react'
import Age from './Age'
import Avatar from './Avatar'
import Name from './Name'

const Card = ({ avatar, name, age }) => {
  return (
    <article className='person'>
      <Avatar img={avatar} name={name} />
      <div>
        <Name name={name} />
        <Age age={age} />
      </div>
    </article>
  )
}

export default Card
