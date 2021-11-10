const db = require('../utils/db');

module.exports = {
    async getSectionBySectionId(sectionId){
        const sections = await db('onlinecourse.sections').where("section_id", sectionId);
        if(sections.length === 0)
        {
            return null;
        }
        return sections[0];
    },
    
    async getAllSectionByCourseIdLiteral(courseId){
        console.log(courseId);
        const sections = await db('onlinecourse.sections').where("course_id", courseId);
        if(sections.length === 0)
        {
            return [];
        }
        return sections;
    },
    async getAllSectionByCourseId(courseId){
        console.log(courseId);
        const sections = await db('onlinecourse.sections').where("course_id", courseId);
        if(sections.length === 0)
        {
            return null;
        }
        return sections;
    },
    addNewSections(section){
        return db('onlinecourse.sections').insert(section);
    },
    updateSection(sectionId,sectionTitle){
        return db('onlinecourse.sections').where('section_id',sectionId).update({
            section_title: sectionTitle
        })
    },
    deleteSection(sectionId){
        return db('onlinecourse.sections').where('section_id',sectionId).del();
    }
}