const db = require("../utils/db")
module.exports  = {
    getReviewByReviewId(reviewId)
    {
        return db("onlinecourse.review").where("review_id",reviewId);
    },
    getCourseReviews(courseId)
    {
        return db("onlinecourse.review")
        .where("course_id",courseId)
        .orderBy("timestamp","desc");
    },
    addNewReview(feedback, rating, userId, courseId,timestamp){
        return db("onlinecourse.review").insert({
            review_feedback: feedback,
            review_rating: rating,
            course_id: courseId,
            user_id: userId,
            timestamp: timestamp
        })
    }
} 