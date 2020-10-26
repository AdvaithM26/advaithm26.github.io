import React, {useEffect} from 'react'

const Slideshow = () => {
  useEffect(() =>{
    document.title = 'Super Cool slideshow'
  })
  function resizeIframe(e) {
    let iframe = e.target
    iframe.height = iframe.contentWindow.document.body.scrollHeight + 50 + "px";
  }
  return (
    <>
      <iframe onLoad={resizeIframe} style={{width: '100vw', border:'none'}} title='slideshow iframe' 
		src={`${process.env.PUBLIC_URL}/_projects/slideshow/`}/>
    </>
  )
}

export default Slideshow
