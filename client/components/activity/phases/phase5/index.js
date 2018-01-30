// PACKAGES //
import React from 'react'
import { generate } from 'shortid'
import jsPDF from 'jspdf'

// IMPORTS //
import Column from './column'
import logoPDF from '../../../../images/pdf/logo'
import headerPDF from '../../../../images/pdf/header'
import footerPDF from '../../../../images/pdf/footer'

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
        // for(var i = 0; i < footerPDF.length; i++) {
        //     if(footerPDF[i] != '\n') {
        //         newLogo += footerPDF[i]
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

        const logo = `data:image/png;base64,${logoPDF}`
        const header = `data:image/png;base64,${headerPDF}`
        const footer = `data:image/png;base64,${footerPDF}`
        const doc = new jsPDF()

        // url style
        doc.setFontSize(10)
        doc.setTextColor(150) // light-grey
        doc.setFontType('italic')
        doc.text('www.fourohseven.com', 86, 38)

        doc.addImage(logo, 'PNG', 95, 12, 20, 20)
        doc.addImage(header, 'PNG', 5, 50, 200, 30)
        doc.addImage(footer, 'PNG', 0, 268, 215, 30)

        // append traits
        doc.setFontSize(12)
        doc.setTextColor(0) // black
        doc.setFontType('bold')
        let look = {
            x: 37,
            y: 90,
            page2: []
        }
        let sound = {
            x: 94,
            y: 90,
            page2: []
        }
        let feel = {
            x: 157,
            y: 90,
            page2: []
        }
        let pageCount = 1
        const addNewPage = () => {
            doc.addPage()
            doc.addImage(logo, 'PNG', 95, 20, 20, 20)
            doc.addImage(header, 'PNG', 5, 50, 200, 30)
            doc.addImage(footer, 'PNG', 0, 268, 215, 30)
            look.y = 90
            sound.y = 90
            feel.y = 90
            return pageCount++
        }
        const appendToPDF = (trait, columnPDF) => {
            doc.text(trait, columnPDF.x, columnPDF.y)
            return columnPDF.y += 8
        }
        const bufferToPage2 = (trait, columnPDF) => {
            return columnPDF.page2.push(trait)
        }

        // cycle through look, sound, & feel arrays
        for (let title in this.props.column) {
            let columnPDF = eval(title)
            this.props.column[title].forEach(({ trait }) => {
                if(columnPDF.y >= 258) {
                    return bufferToPage2(trait, columnPDF)
                }
                return appendToPDF(trait, columnPDF)
            })
        }

        // check to see if a second page is needed
        for (let title in this.props.column) {
            let columnPDF = eval(title)
            if(columnPDF.page2.length != 0) {
                if(pageCount != 2) {
                    addNewPage()
                }
                columnPDF.page2.forEach((trait) => {
                    return appendToPDF(trait, columnPDF)
                })
            }
        }
        return doc.save('branding-profile-by-407.pdf')
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
