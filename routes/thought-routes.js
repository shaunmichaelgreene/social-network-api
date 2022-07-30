const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThoughtById,
    deleteThought,
    createReaction,
    deleteReaction
} = require('../controllers/thought-controller');

// /api/thoughts
router
    .route('/')
    .get(getAllThoughts)
    .post(createThought);

// /api/thoughts/<thoughtId>
router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThoughtById)


// /api/thoughts/<userId>
router.route('/:userId').post(addThought);

// /api/thoughts/<userId>/<thoughtId
router
    .route('/:userId/:thoughtId')
    .put(createReaction)
    .delete(deleteThought);

// /api/thoughts/<userId>/<thoughtId>/<reactionId>
router.route('/:userId/:/commentId/:reactionId').delete(deleteReaction);

module.exports = router;