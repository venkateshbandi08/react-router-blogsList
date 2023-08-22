// Write your JS code here
import './index.css'
import BlogItem from '../BlogItem/index'

const BlogList = props => {
  const {blogsList} = props
  return (
    <ul className="blogs-list-container">
      {blogsList.map(eachItem => (
        <BlogItem blogItemDetails={eachItem} key={eachItem.id} />
      ))}
    </ul>
  )
}

export default BlogList
