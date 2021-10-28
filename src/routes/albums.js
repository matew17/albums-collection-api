/**
 * User Routes
 * host + /api/albums
 */
const { Router } = require("express");
const {
    createAlbum,
    deleteAlbum,
    getAlbumById,
    getAlbums,
    updateAlbum,
} = require("../controllers/albums");

router = Router();

router.get("/", getAlbums);
router.get("/:id", getAlbumById);
router.post("/", createAlbum);
router.put("/:id", updateAlbum);
router.delete("/:id", deleteAlbum);

module.exports = router;
