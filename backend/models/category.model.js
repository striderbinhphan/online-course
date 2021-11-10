const db = require("../utils/db");
const limit_of_page = process.env.LIMIT_OF_PAGE;
module.exports = {
  all(){
    return db("onlinecourse.category")
  },
  allCategory(page) {
    return db("onlinecourse.category")
      .distinct("category_name")
      .limit(limit_of_page)
      .offset((page - 1) * limit_of_page);
  },
  getCategoryById(category_id) {
    return db("onlinecourse.category").where("category_id", category_id);
  },
  addCategory(category) {
    return db("onlinecourse.category").insert(category);
  },
  editCategory(categoryId,categoryName) {
  return db("onlinecourse.category").where("category_id", categoryId).update({
      category_name: categoryName,
    });
  },
  delete(category_id) {
    return db("onlinecourse.category").where("category_id", category_id).del();
  },

  getTopCategoryByPurchased(){
    return db.select("*").count('* as SL').from("onlinecourse.category")
    .leftJoin('onlinecourse.course','onlinecourse.category.category_id',"=",'onlinecourse.course.category_id')
    .innerJoin('onlinecourse.course_subscribe','onlinecourse.course.course_id',"=",'onlinecourse.course_subscribe.course_id')
    .groupBy('onlinecourse.course.category_id')
    .orderBy('SL','desc');
  }
};
