const express = require('express');

const router = express.Router();

const { database } = require('../../servcies/dataBase/rethinkdb');

// Get all of Students
router.get('/', async (req, res) => {
    try {
        const allStudents = await database.table('students').orderBy('id').run(req.rdb);
        res.status(200).json({ data: allStudents, message: 'students listed' });
    } catch (error) {
        res.status(400).json(error);
    }
});
// Get a student
router.get('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const student = await database.table('students').get(id).run(req.rdb);
        res.status(200).json({ data: student, message: 'student listed' });
    } catch (error) {
        res.status(404).json(error);
    }
});
// Create a student
router.post('/', async (req, res) => {
    const student = req.body;

    try {
        const addStudent = await database.table('students').insert(student).run(req.rdb);
        res.status(201).json({ data: addStudent, message: 'student created' });
    } catch (error) {
        res.status(400).json(error);
    }
});
// Update data of student
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const updateStudent = req.body;

    try {
        const newStudent = await database.table('students').get(id).update(updateStudent).run(req.rdb);
        res.status(200).json({ data: newStudent, message: 'student was updated succesfully' });
    } catch (error) {
        res.status(404).json(error);
    }
});
// remove a student
router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const removeStudent = await database.table('students').get(id).delete().run(req.rdb);
        res.status(200).json({ data: removeStudent, message: 'student was deleted' });
    } catch (error) {
        res.status(404).json(error);
    }
});

module.exports = router;
