import { useState } from "react"
import { useSelector,useDispatch } from "react-redux"
import { addPost } from "../features/posts/postsSlice"


function Posts () {
    const [name,setName] = useState('')
    const dispatch = useDispatch()
    const post = useSelector(state => state.posts)

    const sendToStore = () => console.log(post)

    const handleChange = (e) =>{
        setName(e.target.value)
    }
    const onSubmit = (e)=>{
        e.preventDefault()
        dispatch(addPost(name))
        setName('')
    }
    return(
        <>
            <div className="container">
                <form className="form-control" onSubmit={onSubmit}>
                    <input 
                        className="form-control"
                        type='text' 
                        placeholder="Enter your post here..." 
                        value={name} 
                        onChange={handleChange}
                    />
                    <button className="btn btn-danger" type='submit'>Send</button>
                    <button className="btn btn-success" onClick={sendToStore}>Show store</button>
                </form>
            </div>
        </>
    )
}
export default Posts