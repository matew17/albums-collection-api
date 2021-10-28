const Album = require("../models/Album");

const createAlbum = async (req, res) => {
    const album = new Album({
        ...req.body,
    });

    try {
        const storedAlbum = await album.save();

        res.status(200).json(storedAlbum);
    } catch (error) {
        errorHandler(res, error);
    }
};

const deleteAlbum = async (req, res) => {
    const albumId = req.params.id;

    try {
        const album = await Album.findById(albumId);

        if (!album) {
            return res.status(404).json({
                message: "Album doesn't exist",
            });
        }

        const deletedAlbum = await Album.findByIdAndDelete(albumId);

        res.status(200).json(deletedAlbum);
    } catch (error) {
        res.status(500).send({ error });
    }
};

const getAlbums = async (req, res) => {
    try {
        const albums = await Album.find();

        res.status(200).json([...albums]);
    } catch (error) {
        res.status(500).send({ error });
    }
};

const getAlbumById = async (req, res) => {
    const albumId = req.params.id;

    try {
        const album = await Album.findById(albumId);

        if (!album) {
            return res.status(404).json({
                message: "Album doesn't exist",
            });
        }

        res.status(200).json(album);
    } catch (error) {
        res.status(500).send({ error });
    }
};

const updateAlbum = async (req, res) => {
    const albumId = req.params.id;
    const newAlbum = { ...req.body };

    try {
        const album = await Album.findById(albumId);

        if (!album) {
            return res.status(404).json({
                message: "Album doesn't exist",
            });
        }

        const updatedAlbum = await Album.findByIdAndUpdate(albumId, newAlbum, {
            new: true,
        });

        res.status(200).json(updatedAlbum);
    } catch (error) {
        res.status(500).send({ error });
    }
};

module.exports = {
    createAlbum,
    deleteAlbum,
    getAlbums,
    getAlbumById,
    updateAlbum,
};
