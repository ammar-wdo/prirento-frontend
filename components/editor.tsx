
"use client"
import { BlockNoteEditor } from "@blocknote/core";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import "@blocknote/react/style.css";





// Our <Editor> component we can reuse later


type Props ={

    initialContent:string,
   
}
export default function Editor({initialContent}:Props) {




  


    



  // Creates a new editor instance.
  const editor: BlockNoteEditor | null = useBlockNote({
    editable:false,
    initialContent:  JSON.parse(initialContent) ,

 


  });




  return <div><BlockNoteView  theme={'light'}  editor={editor} /></div>;
}