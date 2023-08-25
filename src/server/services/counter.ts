import { Counter } from '../db/models'

export const getCounter = async () => {
  const counter = await Counter.findByPk('example', {
    attributes: ['id', 'value'],
  })

  if (!counter) throw new Error('Counter not found')

  return counter
}

export const incrementCounter = async (): Promise<number> => {
  const counter = await getCounter()

  await counter.increment('value')

  return counter.value
}

export const decrementCounter = async (): Promise<number> => {
  const counter = await getCounter()

  await counter.decrement('value')

  return counter.value
}
