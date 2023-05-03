// Add JavaScript below
import { createClient } from "https://cdn.skypack.dev/@supabase/supabase-js@2.10.0"

const supabaseUrl = 'https://zulwwkcrwdvhzqagcjkk.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp1bHd3a2Nyd2R2aHpxYWdjamtrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg2NjU2MzAsImV4cCI6MTk5NDI0MTYzMH0.kb2fZnoyQXkusOFWz9LmDDC3WrBZ6uoTYqrKzW8eJZE'
const supabase = createClient(supabaseUrl, supabaseKey)

async function getBooks() {
  let { data: books, error } = await supabase
    .from('books')
    .select('*')
  
  for (let book of books){
    let bookList = document.getElementById('books')
    bookList.innerHTML += `<tr>
    <td> ${book.title} </td> 
    <td>${book.author} </td> 
    <td>${book.isbn}</td>
    <td>${book.description}</td>
    </tr>`
  }
}

getBooks();