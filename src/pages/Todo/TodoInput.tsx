import { memo, useCallback } from 'react'

interface TodoInputPropsDefine {
  placeholder?: string
  onEnter: (value: any) => void
}

export default memo(function TodoInput({ onEnter, placeholder }: TodoInputPropsDefine) {
  console.log('render input')

  const handlePressEnter = useCallback(
    (e: any) => {
      if (e.key.toLowerCase() === 'enter') {
        onEnter(e.target.value)
        e.target.value = ''
      }
    },
    [onEnter]
  )

  return (
    <div>
      <input
        type='text'
        placeholder={placeholder || 'input something'}
        onKeyUp={handlePressEnter}
      />
    </div>
  )
})
