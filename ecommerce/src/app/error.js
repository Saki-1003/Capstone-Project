'use client'

export default function Error({error}) {

  return(
    <div style={{
      position: 'absolute',
      top: '40vh',
      left: '40vw'
    }}>
      <p style={{fontSize: '2rem', color: 'orange'}} >{error.message}</p>
    </div>
  )
}