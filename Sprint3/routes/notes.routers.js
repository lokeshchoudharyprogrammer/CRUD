const express = require("express");
const { NotesModel } = require("../model/notes.model");

const noteRouter = express.Router()

// NotesModel


noteRouter.post("/create", async (req, res) => {
    // logic

    try {

        const note = await new NotesModel(req.body)

        await note.save()

        res.send({ "msg": "Created Successfully" })

    } catch (error) {
        res.send("error")
    }
})


noteRouter.get('/', async (req, res) => {
    try {
        const notes = await NotesModel.find();
        res.send({ notes });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }

})

noteRouter.patch('/update/:noteID', async (req, res) => {
    try {
        const note = await NotesModel.findByIdAndUpdate(
            req.params.noteID,
            req.body,
            { new: true }
        );
        res.send({ note });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }

})

noteRouter.delete('delete/:noteID', async (req, res) => {
    try {
        await NotesModel.findByIdAndDelete(req.params.noteID);
        res.send({ msg: "Deleted Successfully" });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
})


module.exports = {
    noteRouter
}