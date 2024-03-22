import Posts from '../components/posts'
import { useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import {Button, Typography} from '@mui/material'

export default function PostsPage() {
    const navigate = useNavigate()
    const handleAddPostClick = () => {
        navigate('../addpost')
    }
    return (
        <div className="posts">
            <Typography variant="h3">Notices</Typography>
            <Button variant="contained" onClick={handleAddPostClick}>Add Notice</Button>
            <Posts />
        </div>
    )
}