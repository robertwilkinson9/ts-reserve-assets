// import React from 'react'
import Select from 'react-select'
import {render} from '@testing-library/react'
import selectEvent from 'react-select-event'

describe('test pulldown', () => {
  it('no items from pulldown', async () => {
    const {getByTestId} = render(
      <form data-testid="form">
        <label htmlFor="food">Food</label>
        <Select options={[]} name="food" inputId="food" isMulti />
      </form>,
    )
    expect(getByTestId('form')).toHaveFormValues({food: ''}) // empty select
  });

  it('two items from pulldown', async () => {
    const {getByTestId, getByLabelText} = render(
      <form data-testid="form">
        <label htmlFor="food">Food</label>
        <Select options={[{ label: "Strawberry", value: "strawberry" }, { label: "Mango", value: "mango" }]} name="food" inputId="food" isMulti />
      </form>,
    )
// select two values...
    await selectEvent.select(getByLabelText('Food'), ['Strawberry', 'Mango'])
    expect(getByTestId('form')).toHaveFormValues({food: ['strawberry', 'mango']})
  });

  it('three items from pulldown', async () => {
    const {getByTestId, getByLabelText} = render(
      <form data-testid="form">
        <label htmlFor="food">Food</label>
        <Select options={[{ label: "Strawberry", value: "strawberry" }, { label: "Mango", value: "mango" }, { label: "Chocolate", value: "chocolate" }]} name="food" inputId="food" isMulti />
      </form>,
    )
// ...and add a third one
    await selectEvent.select(getByLabelText('Food'), 'Chocolate')
    expect(getByTestId('form')).toHaveFormValues({food: 'chocolate',})
//    expect(getByTestId('form')).toHaveFormValues({food: ['strawberry', 'mango', 'chocolate'],})
  });
});
