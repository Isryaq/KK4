const userSchema = require('../models/user')

module.exports = {
    get: async (req, res) => {
        try {
            const users = await userSchema.find()
            if(users.length > 0){
                res.status(200).json({
                    status: true,
                    data: users,
                    method: req.method,
                    url: req.url
                })
            }else{
                res.json({
                    status: false,
                    message: "Data Masih Kosong"
                })
            }
        } catch (error) {
            res.status(400).json({sucess: false})
        }
    },
    getid: async (req, res) => {
        try {
            const users = await userSchema.findById(req.params.id)
            res.status(200).json({
                status: true,
                data: users,
                method: req.method,
                url: req.url,
                message: "Data Berhasil Didapat"
            })
        } catch (error) {
            res.status(400).json({sucess: false})
        }
    },
    post: async (req, res) => {
        try {
            const users = await userSchema.create(req.body)
            res.status(200).json({
                status: true,
                data: users,
                method: req.method,
                url: req.url,
                message: "Data Berhasil Ditambahkan"
            })
        } catch (error) {
            res.status(400).json({sucess: false})
        }
    },
    put: async (req, res) => {
        try {
            const users = await userSchema.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
                runValidators: true
            })
            res.status(200).json({
                status: true,
                data: users,
                method: req.method,
                url: req.url,
                message: "Data Berhasil Diubah"
            })
        } catch (error) {
            res.status(400).json({sucess: false})
        }
    },
    del: async (req, res) => {
        try {
            await userSchema.findByIdAndDelete(req.params.id)
            res.status(200).json({
                status: true,
                method: req.method,
                url: req.url,
                message: "Data Berhasil Dihapus"
            })
        } catch (error) {
            res.status(400).json({sucess: false})
        }
    }
}