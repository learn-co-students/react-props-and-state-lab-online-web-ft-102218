import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  filter = ({ type }) => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: type
      }
    })
  }

  adopt = (id) => {
    const pets = this.state.pets.map( pet => {
      return pet.id === id ? {...pet, isAdopted: true} : pet
    })
    this.setState({pets})
  }

  find = () => {
    if(this.state.filters.type == 'all') {
      fetch(`/api/pets`)
      .then(response => response.json())
      .then(pets => this.setState({ pets }))
    } else {
      fetch(`/api/pets?type=${this.state.filters.type}`)
      .then(response => response.json())
      .then(pets => this.setState({ pets }))
    }
  }  

  render() { console.log(this.state.filters.type)
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.filter} onFindPetsClick={this.find}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.adopt}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
