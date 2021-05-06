const Tarea = require('../models/tarea');

function createTarea(req, res) {
    let tarea = new Tarea({
        name: req.body.name,
        points: req.body.points,
        course: req.body.course,
        dueDate: req.body.dueDate,
        createdAt: req.body.createdAt,
    });

    tarea.save((error, result) => {
        if (error) {
            return res.status(500).json({
                error: true,
                message: "Server error",
                code: 0
            });
        }
        if (!result) {
            return res.status(400).json({
                error: true,
                message: "Client error",
                code: 20
            });
        }
        return res.status(200).json({
            error: false,
            message: "Success",
            data: result,
            code: 10
        });
    });
} // end createTarea

function updateTarea(req, res) {
    const tarea_id = req.params.id;
    const data = req.body;
    
    Tarea.findByIdAndUpdate(tarea_id, data, { new: true }, (error, result) => {
        if (error) {
            return res.status(500).json({
                error: true,
                message: "Server error",
                code: 0
            });
        }
        if (!result) {
            return res.status(400).json({
                error: true,
                message: "Not found",
                code: 20
            });
        }
        return res.status(200).json({
            error: false,
            message: "Success",
            data: result,
            code: 10
        });
    });
} // end updateTarea

function getAllTareas(req, res) {
    Tarea.find().exec((error, tareas) => {
        if (error) {
            return res.status(500).json({
                error: true,
                message: "Server error",
                code: 0
            });
        }
        return res.status(200).json({
            error: false,
            message: "Success",
            data: tareas,
            code: 10
        });
    });
} // end getAllTareas

function deleteTarea(req, res) {
    const tarea_id = req.params.id;
    console.log(tarea_id)
    Tarea.findByIdAndDelete(tarea_id, (error, result) => {
        if (error) {
            return res.status(500).json({
                error: true,
                message: "Server error",
                code: 0
            });
        }
        if (!result) {
            return res.status(400).json({
                error: true,
                message: "Not found",
                code: 20
            });
        }
        return res.status(200).json({
            error: false,
            message: "Success Delete",
            data: result,
            code: 10
        });
    });
} // end deleteTarea

module.exports = {
    createTarea,
    updateTarea,
    getAllTareas,
    deleteTarea
};
