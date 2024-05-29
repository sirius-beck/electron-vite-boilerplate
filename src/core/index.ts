export async function greetings(name: string): Promise<string> {
  return new Promise<string>((resolve) => {
    const greetMessage = `Hello, ${name}!`
    console.log(greetMessage)
    resolve(greetMessage)
  })
}

export function ping(): void {
  console.log('pong')
}
