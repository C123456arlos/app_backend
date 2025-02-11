import express from "express"
import ReviewsCtrl from "./reviews.controller.js"


const router = express.Router()
router.route("movie/:id").get(ReviewsCtrl.apiGetReview)
router.route("/new").post(ReviewsCtrl.apiPostReview)
router.route("/:id")
    .get(ReviewsCtrl.apiGetReview)
    .put(ReviewsCtrl.apiPostReview)
    .delete(ReviewsCtrl.apiDeleteReview)
// router.route("/").get((req, res) => res.send("hello world"))
export default router