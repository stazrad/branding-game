// IMPORT REACT //
import React from 'react'

// COMPONENTS //
import Phase0 from './phases/phase0'
import Phase1 from './phases/phase1'
import Phase2 from './phases/phase2'
import Phase3 from './phases/phase3'
import Phase4 from './phases/phase4'
import Phase5 from './phases/phase5'

// DATA //
import traitsList from '../../json/traits-list-definitions.json'

export default class App extends React.Component {
    constructor() {
        super()
        this.state = {
            phase: 0,
            traits: [],
            activeTraits: [],
            stack: {
                happy: [],
                neutral: [],
                sad: []
            },
            column: {
                look: [],
                sound: [],
                feel: []
            },
            numOfTraitsDisplayed: 1, //multiples of 3
            numOfTraitsSelected: 0
        }

        this.nextPhase = this.nextPhase.bind(this)
        this.onSelect = this.onSelect.bind(this)
        this.pushTraitToStack = this.pushTraitToStack.bind(this)
    }

    componentDidMount() {
        // set active traits to the number of numOfTraitsDisplayed
        let traits = traitsList
        let numOfTraitsDisplayed = this.state.numOfTraitsDisplayed
        let activeTraits = traits.slice(0,numOfTraitsDisplayed)
        this.setState({activeTraits, traits})
    }

    onSelect(selection) {
        let activeTraits        = this.state.activeTraits,
            numOfTraitsSelected = this.state.numOfTraitsSelected + 1,
            traits              = this.state.traits
        // queue up next trait to activeTraits
        let index = selection.index
        let nextTrait = traits[index + 1]
        let i = activeTraits.findIndex(item => item.trait == selection.trait)
        activeTraits[i] = nextTrait
        if(!selection.column) {
            this.pushTraitToStack(selection)
        } else {
            this.pushTraitToColumn(selection)
        }
        this.setState({activeTraits, numOfTraitsSelected})
        // go to next phase
        if(numOfTraitsSelected == traits.length) {
            return this.nextPhase()
        }
    }

    pushTraitToColumn(trait) {
        let column = this.state.column
        switch (trait.column) {
            case 'look':
                column.look.push(trait)
                break
            case 'sound':
                column.sound.push(trait)
                break
            case 'feel':
                column.feel.push(trait)
                break
        }
    }

    pushTraitToStack(trait) {
        let stack = this.state.stack
        switch (trait.face) {
            case 'happy':
                stack.happy.push(trait)
                break
            case 'neutral':
                stack.neutral.push(trait)
                break
            case 'sad':
                stack.sad.push(trait)
                break
        }
    }

    nextPhase() {
        let phase = this.state.phase + 1
        if(phase != 4) {
            this.setState({phase})
            return
        }
        // set activeTraits array to first trait in happy stack
        let activeTraits = [this.state.stack.happy[0]]
        let numOfTraitsSelected = 0
        let traits = this.state.stack.happy
        this.setState({activeTraits, numOfTraitsSelected, phase, traits})
    }

    render() {
        let phase = this.state.phase
        let phase0 = <Phase0 nextPhase={this.nextPhase} />
        let phase1 = <Phase1 nextPhase={this.nextPhase} />
        let phase2 = <Phase2
                        activeTraits={this.state.activeTraits}
                        numOfTraitsSelected={this.state.numOfTraitsSelected}
                        onSelect={this.onSelect}
                        traits={this.state.traits} />
        let phase3 = <Phase3 nextPhase={this.nextPhase} />
        let phase4 = <Phase4
                        activeTraits={this.state.activeTraits}
                        numOfTraitsSelected={this.state.numOfTraitsSelected}
                        onSelect={this.onSelect}
                        traits={this.state.traits} />
        let phase5 = <Phase5 column={this.state.column} />

        return (
            <div>
                <div onClick={this.nextPhase}>NEXT PHASE</div>
                <div className='container'>
                    {phase == 0 ? phase0 : null}
                    {phase == 1 ? phase1 : null}
                    {phase == 2 ? phase2 : null}
                    {phase == 3 ? phase3 : null}
                    {phase == 4 ? phase4 : null}
                    {phase == 5 ? phase5 : null}
                </div>
            </div>
        )
    }
}
