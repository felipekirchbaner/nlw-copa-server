import cors from '@fastify/cors'
import Fastify from 'fastify'
import jwt from '@fastify/jwt'


import { authRoutes } from './routes/auth'
import { gameRoutes } from './routes/game'
import { guessRoutes } from './routes/guess'
import { poolRoutes } from './routes/pool'
import { userRoutes } from './routes/user'

async function boostrap() {
  const fastify = Fastify({
    logger: true,
  })

  await fastify.register(cors, {
    //origin: www.dominio.com.br
    origin: true
  })

  // Secret deve ser variavel de ambiente
  await fastify.register(jwt, {
    secret: 'nlwcopa'
  })

  await fastify.register(poolRoutes)
  await fastify.register(userRoutes)
  await fastify.register(gameRoutes)
  await fastify.register(guessRoutes)
  await fastify.register(authRoutes)

  await fastify.listen({ port : 3333, host: '0.0.0.0' })
}

boostrap()