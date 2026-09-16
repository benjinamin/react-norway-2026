import { useState } from 'react'

interface Props {
  name?: string
}

// Enkel test-komponent for å sjekke at slidev-addon-react fungerer.
// Brukes i slides.md som: <React is="Hello" name="React Norway" />
export default function Hello({ name = 'verden' }: Props) {
  const [count, setCount] = useState(0)
  return (
    <div style={{ display: 'inline-flex', gap: '0.75rem', alignItems: 'center' }}>
      <span>Hei, {name}! Dette er en React-komponent.</span>
      <button
        type="button"
        onClick={() => setCount((c) => c + 1)}
        style={{ padding: '0.25rem 0.75rem', borderRadius: '0.375rem', border: '1px solid currentColor' }}
      >
        Klikk: {count}
      </button>
    </div>
  )
}
