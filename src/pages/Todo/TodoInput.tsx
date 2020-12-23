interface TodoInputPropsDefine {
  placeholder?: string
  onEnter: (value: any) => void
}

export default function TodoInput(props: TodoInputPropsDefine) {
  console.log('render input')

  function handlePressEnter(e: any) {
    if (e.key.toLowerCase() === 'enter') {
      props.onEnter(e.target.value)
      e.target.value = ''
    }
  }

  return (
    <div>
      <input
        type='text'
        placeholder={props.placeholder || 'input something'}
        onKeyUp={handlePressEnter}
      />
    </div>
  )
}
