import {render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react'
import { Async } from '.'

test('it renders correctly', async ()=> {
  render(<Async/>)

  expect(screen.getByText('Hello World')).toBeInTheDocument()
  // expect( await screen.findByText('Button', {}, {timeout: 3000})).toBeInTheDocument()

  await waitFor(() => {
    return expect(screen.queryByText('Button')).not.toBeInTheDocument()
  }, 
  //  {
  //   timeout: 3000
  // }
  )

  // await waitForElementToBeRemoved(screen.queryByText('Button'))

})