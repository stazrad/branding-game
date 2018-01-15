// PACKAGES //
import React from 'react'
import { generate } from 'shortid'
import jsPDF from 'jspdf'

// IMPORTS //
import Column from './column'
import logoPDF from '../../../../images/pdf/logo'
import headerPDF from '../../../../images/pdf/header'

class Phase5 extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            descriptionLook: 'Use these words to help shape everything visual for your brand - logo, website, etc',
            descriptionSound:'Use these words to help shape the content for your brand - web copy, emails, etc.',
            descriptionFeel: 'Use these words to help shape your brand as a whole - the culture, overall feel, etc.'
        }

        this.generatePDF = this.generatePDF.bind(this)
        this.generateUrl = this.generateUrl.bind(this)
    }

    generatePDF() {
        // loop through base64 encoded image
        // var newLogo = ''
        // for(var i = 0; i < headerPDF.length; i++) {
        //     if(headerPDF[i] != '\n') {
        //         newLogo += headerPDF[i]
        //     }
        // }
        // console.log(newLogo)

        // text based column header
        // // x, y
        // // column titles
        // doc.setFontSize(22)
        // doc.setFontType('bold')
        // doc.text('LOOK', 30, 60)
        // doc.text('SOUND', 92, 60)
        // doc.text('FEEL', 155, 60)
        // // subheading
        // doc.setFontSize(10)
        // doc.setTextColor(150) // light-grey
        // doc.setFontType('italic')
        // doc.text(this.state.descriptionLook, 30, 70)

        const doc = new jsPDF()
        const body = document.getElementById('app')
        const logo = `data:image/png;base64,${logoPDF}`
        const header = `data:image/png;base64,${headerPDF}`
        doc.addImage(logo, 'PNG', 95, 20, 20, 20)
        doc.addImage(header, 'PNG', 5, 50, 200, 30)
        // append traits
        const baseY = 90
        const columnLook = 35
        const columnSound = 100
        const columnFeel = 160
        doc.setFontSize(10)
        doc.setFontType('bold')
        doc.text('Classy', 160, 90)

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
        return (
            <div>
                <div className='column-container'>
                    <Column name='look' description={this.state.descriptionLook} traits={this.props.column.look} />
                    <Column name='sound' description={this.state.descriptionSound} traits={this.props.column.sound} />
                    <Column name='feel' description={this.state.descriptionFeel} traits={this.props.column.feel} />
                </div>
                <div className='download-container'>
                    <button className='download-button' onClick={this.generatePDF}>Dowload your brand profile</button>
                </div>
            </div>
        )
    }
}

export default Phase5
