import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  render() {
    const renderPet = this.props.pets.map(pet => (
      <Pet pet={pet} key={pet.id} isAdopted={pet.isAdopted} onAdoptPet={this.props.onAdoptPet}/> 
    ));

    return <div className="ui cards">{renderPet}</div>
  }
}

export default PetBrowser
