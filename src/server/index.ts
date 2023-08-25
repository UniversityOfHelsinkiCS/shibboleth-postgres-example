import path from 'path'

import express from 'express'

import { PORT } from './util/config'
import { inProduction, inStaging } from '../config'
import logger from './util/logger'
import router from './routes'
import { connectToDatabase } from './db/connection'

const app = express()

app.use('/api', (req, res, next) => router(req, res, next))
app.use('/api', (_, res) => res.sendStatus(404))

if (inProduction || inStaging) {
  const DIST_PATH = path.resolve(__dirname, '../../dist')
  const INDEX_PATH = path.resolve(DIST_PATH, 'index.html')

  app.use(express.static(DIST_PATH))
  app.get('*', (_, res) => res.sendFile(INDEX_PATH))
}

app.listen(PORT, async () => {
  await connectToDatabase()

  logger.info(`Server running on port ${PORT}`)
})
