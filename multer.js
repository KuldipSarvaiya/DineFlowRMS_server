import multer, { diskStorage } from "multer";

const storage = diskStorage({
  destination: (req, file, cb) => {
    cd(null, "./images");
  },
  filename: (req, file, cd) => {
    cd(
      null,
      `${file.fieldname}-${Date.now()}-${file.originalname.replace(" ", "-")}`
    );
  },
});

const upload = multer({ storage: storage });

export default upload;
