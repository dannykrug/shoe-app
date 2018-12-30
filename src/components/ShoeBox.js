import React, {Component} from 'react'
import ShoeCell from './ShoeCell'

export default class ShoeBox extends Component {
  render(){
    return(
      <div>
      <h3>The Shoes You Own Go Here</h3>
      <ShoeCell/>
      </div>
    )
  }
}
