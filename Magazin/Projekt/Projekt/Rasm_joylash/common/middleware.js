
const multer = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './Rasm_joylash/public/uploads');
  },
  filename: function (req, file, cb) {
    const date = new Date();
    const year=date.getFullYear(),
    month=date.getMonth()+1,
    day=date.getDate(), 
    hour=date.getHours(), 
    minute=date.getMinutes(), 
    second=date.getSeconds(), 
    millisecond=date.getMilliseconds()
    const extention = file.originalname.split(".").pop();
    const newName=[year,"0"+month,day,hour,minute,second,millisecond].join('-')+"."+extention;

    cb(null, newName)
  }
})

const upload = multer({ storage: storage });
module.exports = upload;

