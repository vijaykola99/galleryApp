import './index.css'

const ThumbnailItem = props => {
  const {active, data, changeStateId} = props

  const onChangeActiveId = () => {
    changeStateId(data)
  }
  return (
    <li>
      <img
        onClick={onChangeActiveId}
        className={active ? 'no-opacity' : 'with-opacity'}
        src={data.thumbnailUrl}
        alt={data.thumbnailAltText}
      />
    </li>
  )
}
export default ThumbnailItem
