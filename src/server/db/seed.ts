import logger from '../util/logger'
import { Counter } from './models'

const seed = async () => {
  try {
    await Counter.findOrCreate({
      where: { id: 'example' },
      defaults: {
        value: 0,
      },
    })

    logger.info('Seeding successful')
  } catch (e) {
    logger.error('Seeding failed: ', e)
  }
}

export default seed
