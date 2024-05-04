import { useState, useEffect } from 'react'
import './App.css'

interface PostsProps {
  id: number,
  capa: string
  categoria: string,
  titulo: string,
  subtitulo: string
}

function App() {
  const [posts, setPosts] = useState<PostsProps[]>([])

  useEffect(() => {
    function loadPosts() {
      fetch("https://sujeitoprogramador.com/rn-api/?api=posts")
        .then(response => response.json())
        .then(data => setPosts(data))
      }
      
      loadPosts()
      console.log(posts)
  }, [])

  return (
    <>

    </>
  )
}

export default App
