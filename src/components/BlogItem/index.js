// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blogItemDetails} = props
  const {title, description, publishedDate} = blogItemDetails
  return (
    <li className="each-blog-container">
      <div className="blog-item">
        <div className="date-and-heading-container">
          <h1 className="blog-heading">{title}</h1>
          <p className="blog-date"> {publishedDate} </p>
        </div>
        <div className="blog-description-container">
          <p className="blog-description">{description}</p>
        </div>
      </div>
      <hr size="1" color="#9aa5b1" />
    </li>
  )
}

export default BlogItem
