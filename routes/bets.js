const express = require('express')
const router = express.Router()
const Bet = require('../models/bet')
const Count = require('../models/Count')
const imageMimeTypes = ['image/jpeg', 'image/png', 'images/gif']

// All Books Route
router.get('/', async (req, res) => {
  let query = Bet.find()
  // if (req.query.name != null && req.query.name != '') {
  //   query = query.regex('title', new RegExp(req.query.title, 'i'))
  // }
  // if (req.query.publishedBefore != null && req.query.publishedBefore != '') {
  //   query = query.lte('publishDate', req.query.publishedBefore)
  // }
  // if (req.query.publishedAfter != null && req.query.publishedAfter != '') {
  //   query = query.gte('publishDate', req.query.publishedAfter)
  // }
  // try {
  //   const books = await query.exec()
  //   res.render('books/index', {
  //     books: books,
  //     searchOptions: req.query
  //   })
  // } catch {
  //   res.redirect('/')
  // }
  const bets = await query.exec()
  res.render('bet/index', {
    bets:bets
  })
})

// New Book Route
router.get('/new', async (req, res) => {
  res.render('bet/new')
})

// Create Book Route
router.post('/', async (req, res) => {
  const bet = new Bet({
    name: req.body.name,
    bet: req.body.bet
  })
    const newBet = await bet.save()
    // res.redirect(`books/${newBook.id}`)
    res.redirect('bets');

})

// async function renderNewPage(res, book, hasError = false) {
//   try {
//     const authors = await Author.find({})
//     const params = {
//       authors: authors,
//       book: book
//     }
//     if (hasError) params.errorMessage = 'Error Creating Book'
//     res.render('books/new', params)
//   } catch {
//     res.redirect('/books')
//   }
// }

// function saveCover(book, coverEncoded) {
//   if (coverEncoded == null) return
//   const cover = JSON.parse(coverEncoded)
//   if (cover != null && imageMimeTypes.includes(cover.type)) {
//     book.coverImage = new Buffer.from(cover.data, 'base64')
//     book.coverImageType = cover.type
//   }
// }

module.exports = router