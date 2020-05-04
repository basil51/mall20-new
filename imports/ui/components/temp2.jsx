import React from 'react';

class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = { files: {}, upload:{},counter: 0 };

    this.dragDrop = this.dragDrop.bind(this);
    this.previewFile = this.previewFile.bind(this);

    //this.handleFile = this.handleFile.bind(this);
    this.showimages = this.showimages.bind(this);
    this.addimages = this.addimages.bind(this);
  }

  deleteFile(id) {
    let arr1 = this.state.files;
    delete arr1[id];
    this.setState({ files: arr1 });
    document.getElementById(id).remove();
    //Meteor.call('image.remove', fileId )
  }



  previewFile(file, index) {
    let reader = new FileReader()
    reader.readAsDataURL(file);
    let newSpan = document.createElement("span"); newSpan.innerHTML = "&#x2716";
    newSpan.addEventListener('click', () => parent.deleteFile(index));

    reader.onloadend = function () {
      // send to SAVE FILE AT MTETOR IMPORT FILES
      Meteor.call('image.save', reader.result, file.name, file.size, (error, fileId) => {
        if (error) alert(error);
        else {
          let newDiv = document.createElement("div"); newDiv.id = index;
          newDiv.appendChild(newSpan);
          let img = document.createElement('img'); img.src = reader.result
          newDiv.appendChild(img);
          document.getElementById('gallery').appendChild(newDiv);

        }
      });
    }
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

  addimages() {
     const index = this.state.counter;
     let arr = Object.entries(this.state.upload);
     console.log('arr:',arr)
     let arr2=arr.map((x)=>{ return [parseInt(x[0])+index,x[1]]; });
     const obj3 = Object.fromEntries(arr2);
     console.log(obj3);
     this.setState({files:obj3});
   }



  showimages() {
    console.log('hwllo');this.addimages();
    return Object.entries(this.state.files).map((file, index) => {
      console.log(this.state);
      obj3[++index] = file;
      //if (index == this.state.upload.length) this.setState({ files: obj3, counter: index });
      return (
        <div key={file[0]}>
          <span>X</span>
          <img id={file[0]} onLoad={URL.revokeObjectURL(this.src)} src={ URL.createObjectURL(file[1])} />
        </div>
      )
    })
  }


  handleChange = (event) => {
    this.setState({ upload: event.target.files });

  }

  dragDrop() {
    event.preventDefault();
    event.stopPropagation();
    switch (event.type) {
      case 'dragenter':
      case 'dragover': this.refs.div.classList.add('highlight')
        break;
      case 'dragleave': this.refs.div.classList.remove('highlight');
        break;
      case 'drop': this.refs.div.classList.remove('highlight');
        this.setState({ upload: event.dataTransfer.files });
        break;
    }
  }

  render() {
    return (
      <div id="drop-area" onDragEnter={this.dragDrop} onDragOver={this.dragDrop}
        onDragLeave={this.dragDrop} onDrop={this.dragDrop} ref='div'>
        <div id="gallery">
          {this.showimages()}
        </div>
        <form>
          <input id="file-elem" type="file" multiple accept="image/**"
            onChange={this.handleChange.bind(this)}></input>
          <label className="button success square large rounded " htmlFor="file-elem"><span className="mif-download"></span></label>
        </form>
        <span id="warning" className="fg-red hide">This file is exist</span>
      </div>
    );
  }
}

export default Upload;