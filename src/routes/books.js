import express from 'express'

function getBooksRoutes() {
  const router = express.Router()
  router.post('/add', add)
  return router
}

function add(req, res) {
  return res.json({ ...req.body })
}

export { getBooksRoutes }
