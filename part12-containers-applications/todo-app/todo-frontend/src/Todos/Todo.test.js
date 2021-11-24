import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import Todo from './Todo'


test('renders content', () => {
  const todo = {
    text: 'Test this sh..',
    done: false
  }

  const mockHandler = jest.fn()

  const component = render(
    <Todo todo={todo} deleteTodo={mockHandler} completeTodo={mockHandler}/>
    )

    const delBtn = component.getByText('Delete')
    const completeBtn = component.getByText('Set as done')

    fireEvent.click(delBtn)
    fireEvent.click(completeBtn)

  expect(component.container).toHaveTextContent(
    'Test this sh..'
  )
})