// Write your code here
import {Component} from 'react'
import './index.css'

let lengthOfList
class ReviewsCarousel extends Component {
  state = {reviewId: 0}

  leftArrowFunction = () => {
    const {reviewId} = this.state
    if (reviewId > 0) {
      this.setState(prevState => ({reviewId: prevState.reviewId - 1}))
      console.log('left arrow is clicked', reviewId)
    }
  }

  rightArrowFunction = () => {
    const {reviewId} = this.state
    console.log('right arrow is clicked before', reviewId)
    if (reviewId < lengthOfList) {
      this.setState(prevState => ({reviewId: prevState.reviewId + 1}))
      console.log('right arrow is clicked after', reviewId)
    }
  }

  render() {
    const {reviewsList} = this.props
    lengthOfList = reviewsList.length
    const {reviewId} = this.state

    const userList = reviewsList[reviewId]
    console.log(userList)
    const {companyName, description, imgUrl, username} = userList
    return (
      <div className="bg_container">
        <div className="reviews_container">
          <h1 className="heading">Reviews</h1>
          <img src={imgUrl} alt={username} />
          <p>{username}</p>
          <div className="buttons_container">
            <button
              data-testid="leftArrow"
              className="left-button"
              type="button"
              onClick={this.leftArrowFunction}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png "
                alt="left arrow"
              />
            </button>
            <p>{companyName}</p>
            <button
              data-testid="rightArrow"
              className="left-button"
              type="button"
              onClick={this.rightArrowFunction}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
              />
            </button>
          </div>

          <p className="descr">{description}</p>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
