import React from 'react';

class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = { files: {}, counter: 0 };
    //Session.setDefault(images, {})

    this.dragDrop = this.dragDrop.bind(this);
    this.previewFile = this.previewFile.bind(this);
  }

  deleteFile(id) {
    let arr1 = this.state.files;
    delete arr1[id];
    this.setState({ files: arr1 });
    document.getElementById(id).remove();
  }

  previewFile(file, index) {
    let newDiv = document.createElement("div"); newDiv.id = index;
    let newSpan = document.createElement("span"); newSpan.innerHTML = "&#x2716";
    newSpan.addEventListener('click', () => this.deleteFile(index));
    newDiv.appendChild(newSpan);
    let img = document.createElement('img');

    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      img.src = reader.result;
    }
    newDiv.appendChild(img);
    document.getElementById('gallery').appendChild(newDiv);
  }

  handleFiles(files) {
    files = [...files];
    let obj3 = this.state.files;
    let index = this.state.counter;

    files.forEach((file) => {
      let result = false;

      Object.values(obj3).forEach((fi) => { if (fi.name == file.name) result = true; }); //check if file name exist
      if (!result) {
        obj3[++index] = file;
        this.previewFile(file, index);
      }
      else {
        document.getElementById('warning').classList.remove("hide");
        setTimeout(() => document.getElementById('warning').classList.add("hide"), 2000);
      };
    });
    this.setState({ files: obj3, counter: index });
  }

  dragDrop() {
    event.preventDefault();
    switch (event.type) {
      case 'dragenter':
      case 'dragover': this.refs.div.classList.add('highlight')
        break;
      case 'dragleave': this.refs.div.classList.remove('highlight');
        break;
      case 'drop': this.refs.div.classList.remove('highlight');
        this.handleFiles(event.dataTransfer.files);
        break;
    }
  }

  render() {
    return (
      <div className="m-2 p-2" id="drop-area" onDragEnter={this.dragDrop} onDragOver={this.dragDrop}
        onDragLeave={this.dragDrop} onDrop={this.dragDrop} ref='div'>
        <div id="gallery"></div>
          <input id="file-elem" type="file" multiple accept="image/*"
            onChange={(event) => this.handleFiles(event.target.files)}></input>
          <label className="btn btn-outline-primary btn-sm" htmlFor="file-elem">Add Images</label>
        <span id="warning" className="fg-red hide">This file is exist</span>
      </div>
    );
  }
}

export default Upload;