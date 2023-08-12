const FileService = require('./file.service');

class ExampleService extends FileService {
  constructor() {
    super();
  }

  async getDirInfo() {
    const rawInfo = await this.readDirectory();
    let dirInfo = {};
    console.log(rawInfo)
    rawInfo.forEach((file, index) => {
      dirInfo[index] = file;
    });

    return dirInfo;
  }

  async generateFile(fileName, fileType) {
    await this.createFile(fileName, fileType);
  }

  async updateFile(fileName, fileType,data) {
    const status = await this.updateText(fileName, fileType,JSON.stringify(data));
    return status;
  }


  deleteFile(fileName, fileType) {
    const isDeleted = this.deleteRef(fileName, fileType);
    if (isDeleted) {
      return `File ${fileName} deleted`;
    } else {
      return 'Something went wrong';
    }
  }
}

module.exports = new ExampleService();