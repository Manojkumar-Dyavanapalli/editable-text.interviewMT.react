import {Component} from 'react'
import './index.css'

class Edit extends Component {
  state = {inputValue: '', saved: false}

  onChangeInput = event => {
    this.setState({inputValue: event.target.value})
    console.log(event.target.value)
  }

  onClickButton = () => {
    this.setState(prevState => ({saved: !prevState.saved}))
  }

  render() {
    const {inputValue, saved} = this.state
    return (
      <div className="app-cont">
        <div className="edit-cont">
          <h1 className="head">Editable Text Input</h1>
          <div className="flex-cont">
            {saved ? (
              <p className="para">{inputValue}</p>
            ) : (
              <input
                type="input"
                className="input"
                value={inputValue}
                onChange={this.onChangeInput}
              />
            )}
            <button className="btn" type="button" onClick={this.onClickButton}>
              {saved ? 'Edit' : 'Save'}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Edit
