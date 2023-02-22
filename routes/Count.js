const express = require('express')
const router = express.Router()
const Count = require('../models/Count')
const Bet = require('../models/bet')

// Counter Route
router.get('/', async (req, res) => {
    const count = await Count.findOne();
    res.render('count/index', { counter:count})
})

// // New Author Route
// router.get('/new', (req, res) => {
//   res.render('authors/new', { author: new Author() })
// })

// Create Author Route
// router.post('/', async (req, res) => {
//   const author = new Author({
//     name: req.body.name
//   })
//   try {
//     const newAuthor = await author.save()
//     res.redirect(`authors/${newAuthor.id}`)
//   } catch {
//     res.render('authors/new', {
//       author: author,
//       errorMessage: 'Error creating Author'
//     })
//   }
// })

// router.get('/:id', async (req, res) => {
//   try {
//     const author = await Author.findById(req.params.id)
//     const books = await Book.find({ author: author.id }).limit(6).exec()
//     res.render('authors/show', {
//       author: author,
//       booksByAuthor: books
//     })
//   } catch {
//     res.redirect('/')
//   }
// })

router.get('/reset', async (req, res) => {
  let count
  count = await Count.findOne()
  res.render('reset/reset', {counter:count})
})

router.put('/increase', async (req, res) => {
  let count
  count = await Count.findOne()
  count.Counter = req.body.Counter
  await count.save()
  res.redirect(`/count/`)
  // } catch {
  //   if (author == null) {
  //     res.redirect('/')
  //   } else {
  //     res.render('authors/edit', {
  //       author: author,
  //       errorMessage: 'Error updating Author'
  //     })
  //   }
  // }
})
router.put('/reset', async (req, res) => {
  let count
  count = await Count.findOne()
  count.Counter = req.body.Counter
  await count.save()
  res.redirect(`/count/`)
  // } catch {
  //   if (author == null) {
  //     res.redirect('/')
  //   } else {
  //     res.render('authors/edit', {
  //       author: author,
  //       errorMessage: 'Error updating Author'
  //     })
  //   }
  // }
})

// router.delete('/:id', async (req, res) => {
//   let author
//   try {
//     author = await Author.findById(req.params.id)
//     await author.remove()
//     res.redirect('/authors')
//   } catch {
//     if (author == null) {
//       res.redirect('/')
//     } else {
//       res.redirect(`/authors/${author.id}`)
//     }
//   }
// })

module.exports = router