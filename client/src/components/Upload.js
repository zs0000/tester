import React from 'react'

const Upload = () => {
    return (
        <div>
            <form action="/" method="POST" encType="multipart/form-data">
<h1>upload</h1>
<input type="file" name="sampleFile" accept="image/*"/>
<input type="submit" />
</form>
        </div>
    )
}

export default Upload


