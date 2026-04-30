import { Metadata } from "next"
import css from "@/components/CreateNote/CreateNote.module.css"
import NoteForm from "@/components/NoteForm/NoteForm"

export const metadata: Metadata = {
    title: "Create Note",
    description: "Create a new note quickly and easily.",
    openGraph: {
    title: "Create Note",
        description: "Create a new note quickly and easily.",
        url: "/notes/action/create",
        images: [{
         url: "/notehub-og-meta.jpg",
      width: 1200,
      height: 630,
    }]
    }
}


export default function CreateNote() {
    return (
       <main className={css.main}>
  <div className={css.container}>
    <h1 className={css.title}>Create note</h1>
    {<NoteForm />}
  </div>
</main>
 
    )
}

