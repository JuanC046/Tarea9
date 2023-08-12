const router = require('express').Router();
const exampleService = require('../service/example.service');

router.get('/', async (req, res, err) => {
  const dirInfo = await exampleService.getDirInfo();
  res.status(200).json(dirInfo);
});

router.post('/', async (req, res, err) => {
  const fileName = req.body.fileName;
  const fileType = req.body.fileType;
  await exampleService.generateFile(fileName, fileType);
  res.status(201).json({
    status: 'File created',
  });
});

router.put('/', async (req, res, err) => {
  const fileName = req.body.fileName;
  const fileType = req.body.fileType;
  const data = req.body.data;
  const status = await exampleService.updateFile(fileName, fileType,data);
  if (status){
    res.status(200).json({
      status: 'File updated',
    });
  }
  else {
    res.status(500).json({
      status: 'ERROR-UPDATE',
    });
    console.log("[Error-Message]: Error updating the File (File no found)");
  }
  
});

router.delete('/', (req, res, err) => {
  const fileName = req.body.fileName;
  const fileType = req.body.fileType;
  const fileStatus = exampleService.deleteFile(fileName, fileType);
  res.status(200).json({
    status:fileStatus
  });
});

module.exports = router;