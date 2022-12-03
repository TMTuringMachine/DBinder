import multer from 'multer'

export const fileStorage = multer.diskStorage({
    destination: 'uploads', 
      filename: (req, file, cb) => {
          cb(null, file.originalname)
            // path.extname get the uploaded file extension
    }
});

export const fileUpload = multer({
    storage: fileStorage,
    limits: {
      fileSize: 100000000 // 1000000 Bytes = 1 MB => 100MB
    },
})