import './_style.scss'
import * as React from 'react'

interface Props {
  value: string
  onChange: (value: string) => void
}

const ReactInput = ({ value, onChange }: Props) => {
  const [state, setState] = React.useState(value)

  const onChangeInput = (e: any) => {
    setState(e.target.value)
    onChange(e.target.value)
  }

  return <input value={state} onChange={onChangeInput} />
}

export default ReactInput
