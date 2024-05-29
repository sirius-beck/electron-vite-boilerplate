import { useState } from 'react'

export function Greetings({ name }: { name: string }): React.JSX.Element {
  const [greet, setGreet] = useState('')
  window.api.core.greetings(name).then((res) => setGreet(res))

  return <div>{greet}</div>
}
