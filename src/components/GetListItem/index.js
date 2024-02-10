import './index.css'

const GetListItem = props => {
  const {listItem, clickedDelete} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = listItem
  const deleteItem = () => clickedDelete(id)
  return (
    <li className="li">
      <div className="timeContainer">
        <p className="p1">{timeAccessed}</p>
      </div>
      <div className="websiteContainer">
        <div className="websiteContentContainer">
          <div className="logoContainer">
            <img className="image3" src={logoUrl} alt="domain logo" />
          </div>
          <div className="listContent">
            <p className="p2">{title}</p>
            <p className="p3">{domainUrl}</p>
          </div>
        </div>
        <div className="deleteIconContainer">
          <button
            data-testid="delete"
            className="button"
            type="button"
            onClick={deleteItem}
          >
            <img
              className="image4"
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              alt="delete"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default GetListItem
