import logger from 'loglevel'
import 'dotenv/config'
import { startServer } from './start'

logger.setLevel('INFO')

startServer()
