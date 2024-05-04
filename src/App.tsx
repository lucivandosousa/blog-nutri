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
    async function loadPosts() {
      await fetch("https://sujeitoprogramador.com/rn-api/?api=posts")
        .then(response => response.json())
        .then(data => {
          setPosts(data)
        })
      }
      
      loadPosts()
  }, [])

  return (
    <>
      <h1>Blog Nutri</h1>
      <section>
        {posts.map(post => (
          <article key={post.id}>
            <h2>{post.titulo}</h2>
            <h3>{post.subtitulo}</h3>
            <img src={post.capa} alt={post.titulo} />
          </article>
        ))}
      </section>
    </>
  )
}

export default App
