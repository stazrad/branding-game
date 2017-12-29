// PACKAGES //
import React from 'react'
import { generate } from 'shortid'
import jsPDF from 'jspdf'

// IMPORT COMPONENTS //
import Column from './column'

class Phase5 extends React.Component {

    constructor() {
        super()

        this.generatePDF = this.generatePDF.bind(this)
        this.generateUrl = this.generateUrl.bind(this)
    }

    generatePDF() {
        const doc = new jsPDF()
        const body = document.getElementById('app')
        console.log(body)
        //doc.text('Hello world!', 10, 10)
        doc.fromHTML(body.get(0), 15, 15, {
        	'width': 170
        });
        doc.save('branding_profile_by_407.pdf')
    }

    generateUrl() {
        const storageData = {
            urlId: generate(),
            feel: [],
            look: [],
            sound: []
        }
        for (const key in this.props.column) {
            let column = this.props.column[key]
            switch (key) {
                case 'feel':
                    column.forEach(trait => {
                        let uid = trait.uid
                        storageData.feel.push(uid)
                    })
                    break
                case 'look':
                    column.forEach(trait => {
                        let uid = trait.uid
                        storageData.look.push(uid)
                    })
                    break
                case 'sound':
                    column.forEach(trait => {
                        let uid = trait.uid
                        storageData.sound.push(uid)
                    })
                    break
            }
        }
        // in the future, unique results will be stored in a db
        console.log(storageData)
    }

    render() {
        let descriptionLook = 'Use these words to help shape everything visual for your brand - logo, website, etc'
        let descriptionSound = 'Use these words to help shape the content for your brand - web copy, emails, etc.'
        let descriptionFeel = 'Use these words to help shape your brand as a whole - the culture, overall feel, etc.'
        return (
            <div>
                <div className='column-container'>
                    <Column name='look' description={descriptionLook} traits={this.props.column.look} />
                    <Column name='sound' description={descriptionSound} traits={this.props.column.sound} />
                    <Column name='feel' description={descriptionFeel} traits={this.props.column.feel} />
                </div>
                <div className='download-container'>
                    <button className='download-button' onClick={this.generatePDF}>Dowload your brand profile</button>
                </div>
            </div>
        )
    }
}

export default Phase5
