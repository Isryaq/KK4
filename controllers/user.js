let users = [
    {id: 1, nama: "Isryaq", email: "isryaq@gmail.com"},
    {id: 2, nama: "Egy", email: "Egy@gmail.com"}
]

module.exports = {
    get: (req, res) => {
        if(users.length > 0){
            res.json({
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
        res.send(users)
      },
    post: (req, res) => {
        users.push(req.body)
        res.json({
            status: true,
            data: users,
            method: req.method,
            url: req.url,
            message: "Data Berhasil Ditemukan"
        })
    },
    put: (req, res) => {
        const id = req.params.id
        users.filter(user => {
            if(user.id == id){
                user.nama = req.body.nama
                user.email = req.body.email
                return user
            }
        })
        res.json({
            status: true,
            data: users,
            method: req.method,
            url: req.url,
            message: "Data Berhasil Diubah"
        })
    },
    del: (req, res) => {
        const id = req.params.id
        users = users.filter(user => user.id != id)
    
        res.json({
            status: true,
            data: users,
            method: req.method,
            url: req.url,
            message: "Data Berhasil Dihapus"
        })
    }
}