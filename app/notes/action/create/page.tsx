import css from "@/components/CreateNote/CreateNote.module.css"
import NoteForm from "@/components/NoteForm/NoteForm"



export default function CreateNote() {
    return (
       <main className={css.main}>
  <div className={css.container}>
    <h1 className={css.title}>Create note</h1>
	   {<NoteForm onClose={}/>}
  </div>
</main>
 
    )
}