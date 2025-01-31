import { useState } from 'react'
export const AddCategory = ({onNewCategory}) => {

  const [inputValue, setimputValue] = useState('One Punch')
  const onInputChange = (event) => {
    setimputValue(event.target.value)
  }

  const onSubmit = (event)  => {
    event.preventDefault();
    if(inputValue.trim().length <= 1) 
      return;
    //setCategories ( categories => [inputValue, ...categories])
    onNewCategory(inputValue.trim());
    setimputValue('');

  }
  return (
    <form onSubmit={onSubmit}>
      <input
      type="text"
      placeholder="Buscar gifs"
      value={inputValue}
      onChange={onInputChange}
      />
    </form>
  )
}

