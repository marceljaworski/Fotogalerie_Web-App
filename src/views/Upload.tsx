import React from 'react'

function Upload() {
  return (
    <div>
        <h1>Upload</h1>
        <form method="post" encType="multipart/form-data" action="/upload">
            <input type="file" name="file" />
            <input type="submit" value="Submit" />
        </form>
    </div>
  )
}

export default Upload