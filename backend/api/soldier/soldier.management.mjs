import Soldier from '../../db/models/soldier.model.mjs';

export function getIDS(req, res) {
    Soldier.findById(req.params.id, 'ids', (err, ids_id) => {
        if(!err) {
            res.json(ids_id);
        } else {
            console.log(err);
        }
    }); 
}

export function getGmushim(req, res) {
    Soldier.findById(req.params.id, ' -_id gmushim classiffication', (err, gmushim_classiffication) => {
        if(!err) {
            res.json(gmushim_classiffication);
        } else {
            console.log(err);
        }
    }); 
}

export function getBonuses(req, res) {
    Soldier.findById(req.params.id, ' -_id bonuses', (err, bonuses) => {
        if(!err) {
            res.json(bonuses);
        } else {
            console.log(err);
        }
    }); 
}

export function getCourses(req, res) {
    Soldier.findById(req.params.id, ' -_id courses', (err, courses) => {
        if(!err) {
            res.json(courses);
        } else {
            console.log(err);
        }
    }); 
}

export function updateCourse(req, res) {
    Soldier.findOneAndUpdate({_id: req.params.id, 'courses.name': req.body.course.name},
                             {$set: {'courses.$.date': req.body.course.date} },
                             { new: true, 'fields': 'courses'},
                             (err, courses) => {
                                if(!err) {
                                    console.log(courses)
                                    res.json(courses);
                                } else {
                                    console.log(err);
                                }
    }); 
}

export function addCourse(req, res) {
    Soldier.findByIdAndUpdate(req.params.id,
                             {$push: {courses: req.body.course} },
                             { new: true, 'fields': 'courses'},
                             (err, courses) => {
                                if(!err) {
                                    res.json(courses);
                                } else {
                                    console.log(err);
                                }
    }); 
}

export function deleteCourse(req, res) {
    Soldier.findOneAndUpdate({_id: req.params.id},
                             {$pull: {courses: { 'name': req.body.course.name }} },
                             { new: true, 'fields': 'courses'},
                             (err, courses) => {
                                if(!err) {
                                    res.json(courses);
                                } else {
                                    console.log(err);
                                }
    }); 
}