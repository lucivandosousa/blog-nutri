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
      <header className='title-header'>
        <h1>Blog Nutri</h1>
      </header>

      <section className='container'>
        {posts.map(post => (
          <article key={post.id} className='article'>
            <h2>{post.titulo}</h2>
            <h3>{post.subtitulo}</h3>
            <img src={post.capa} alt={post.titulo} />
          </article>
        ))}
      </section>

      <footer className='footer'>
        <span>2024 © Blog Nutri. Todos os direitos reservados.</span>
      </footer>
    </>
  )
}

export default App
