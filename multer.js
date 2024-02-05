import multer, { diskStorage } from "multer";

const storage = diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./images");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      `${file.fieldname}-${Date.now()}-${file.originalname.replace(" ", "-")}`
    );
  },
});

const upload = multer({ storage: storage });

export default upload;
