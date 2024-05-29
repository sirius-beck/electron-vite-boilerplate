import { Greetings } from '@renderer/components/greetings'

export default function App(): JSX.Element {
  const ping = (): Promise<void> => window.api.core.ping()

  return (
    <div>
      <button onClick={ping}>Ping</button>
      <Greetings name='World' />
    </div>
  )
}
