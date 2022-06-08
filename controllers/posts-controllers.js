exports.getAllPosts = (req, res) => {
    return res.status(200).json({
        message: "Berhasil mendapatkan post"
    })
}

exports.getPost = (req, res) => {
    return res.status(200).json({
        message: "Berhasil mendapatkan post dengan id " + req.params.id
    })
}

exports.createPost = (req, res) => {
    return res.status(201).json({
        message: "Berhasil membuat post"
    })
}

exports.updatePost = (req, res) => {
    return res.status(200).json({
        message: "Berhasil mengubah post"
    })
}

exports.deletePost = (req, res) => {
    return res.status(200).json({
        message: "Berhasil menghapus post"
    })
}