import React, { useState, useRef } from "react";
import "./addnote.css";
import Popup from "./popup";
import Delete from "../assets/images/delete-svg.svg";

function AddNote() {
  const [name, setName] = useState("");
  const [note, setNote] = useState({
    title: "",
    note: "",
  });
  const [deletenotes, setdeleteNotes] = useState(false);
  const [seleted, setSeleted] = useState({});
  const handledelete = (notedetails) => {
    setSeleted(notedetails);
    setdeleteNotes(!deletenotes);
  };
  console.log(name);
  const deleteItem = () => {
    const newArr = notes.filter((note) => note.id !== seleted.id);
    setNotes(newArr);
    setdeleteNotes(false);
  };
  const formRef = useRef(null);
  const [notes, setNotes] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newArr = [...notes, { ...note, id: Date.now() }];
    setNotes(newArr);
    formRef.current.reset();
  };
  const [editnotes, seteditNotes] = useState(false);
  const handleEdit = () => {
    const id = note.id;

    const newArr = notes.map((bk) => {
      if (bk.id === id) {
        return note;
      } else {
        return bk;
      }
    });
    setNotes(newArr);
    setNote({ title: "", note: "" });
    alert("Data Updated");
    seteditNotes(false);
  };
  const handlechange = (e) => {
    const { name, value } = e.target;
    const editedNoteObject = {
      ...note,
      [name]: value,
    };
    setNote(editedNoteObject);
    setName(value);
  };

  return (
    <div>
      <div className="global__addnote__containter">
        <div className="wrapper__containter">
          <div className="addnote__containter">
            <form ref={formRef}>
              <fieldset className="fieldset__containter">
                <div className="input__containter">
                  <input
                    id="input1"
                    type="text"
                    name="title"
                    placeholder="Title"
                    onChange={handlechange}
                  />
                  <input
                    id="input2"
                    type="text"
                    name="note"
                    placeholder="Take a note..."
                    onChange={handlechange}
                  />
                </div>
                <legend>
                  <button id="sumbitbtn" onClick={handleSubmit}>
                    +
                  </button>
                </legend>
              </fieldset>
            </form>
          </div>
          <div className="added__note">
            {notes.map((bk) => (
              <div className="book__container">
                <div className="title">
                  <div>
                    <p className="book__title">{bk.title}</p>
                    <p className="book__publish__date">{bk.note}</p>
                  </div>
                  <div className="delbtn">
                    <button
                      className="delbtn__border"
                      onClick={() => handledelete(bk)}
                    >
                      <img id="img" src={Delete} alt="delete" />
                    </button>
                    {/* <button onClick={() => {setNote(bk); seteditNotes(true)}}>Edit</button> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {deletenotes && (
            <Popup
              title={"Delete Book Details"}
              handleClose={() => setdeleteNotes(false)}
            >
              <div className="delete__btns">
                <h3 id="delete__p">
                  Are you sure you want to delete this note?
                </h3>
                <div className="delete__bts__yn">
                  <button className="yes__btn" onClick={deleteItem}>yes</button>
                  <button className="no__btn" onClick={() => setdeleteNotes(false)}>no</button>
                </div>
              </div>
            </Popup>
          )}
          {editnotes && (
            <Popup
              title={"Edit Book Details"}
              handleClose={() => seteditNotes(false)}
            >
              <div className="editbooks">
                <label htmlFor="title">Title :</label>
                <input
                  name="title"
                  id="title"
                  type="text"
                  value={note.title}
                  onChange={handlechange}
                />
                <label htmlFor="note">Note :</label>
                <input
                  name="note"
                  id="note"
                  type="text"
                  value={note.note}
                  onChange={handlechange}
                />
                <button onClick={handleEdit}>Update Data</button>
              </div>
            </Popup>
          )}
        </div>
      </div>
    </div>
  );
}
export default AddNote;
