const db = require('../utils/db');

module.exports = {
    addNewVideo(newVideo){
        return db('onlinecourse.videos').insert(newVideo);
    },
    async getVideoByVideoId(video_id){
        const ret = await db('onlinecourse.videos').where('video_id',video_id);
        if(ret.length === 0){
            return null;
        }
        return ret[0];
    },
    updateVideo(videoId,videoPath){
        return db('onlinecourse.videos').where('video_id',videoId).update({
            video_path: videoPath,
        })
    },
    updateVideoTitle(videoId,updateVideoTitle){
        return db('onlinecourse.videos').where('video_id',videoId).update({
            video_title: updateVideoTitle.video_title,
            preview_status: updateVideoTitle.preview_status
        })
    },
    async getAllVideoBySectionIdLiteral(sectionId){
        const list = await db('onlinecourse.videos').where('section_id',sectionId);
        if(list.length === 0){
            return [];
        }
        return list;
    },
    async getAllVideoBySectionId(sectionId){
        const list = await db('onlinecourse.videos').where('section_id',sectionId);
        if(list.length === 0){
            return null
        }
        return list;
    },
    delete(videoId){
        return db('onlinecourse.videos').where('video_id',videoId).del();
    }
}