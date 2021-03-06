import React, { Component } from 'react'
import './Card.css'
import { EmptyState } from '../../libs/Interfaces'
import DotButton from './DotButton'
import { CardHandleOption } from '../../libs/Enums'

interface CardProps {
    title: string,
    content: string,
    date: string,
    isButtonActive?: boolean
    handleClick: Function
}

// TODO: Add markdown support for the card
export default class Card extends Component<CardProps, EmptyState> {

    render() {
        return (
            <div className="card">
                <div className="flexTwo">
                    <div className="title">{this.props.title}</div>
                    <div className="buttonSet">
                        <DotButton text="Finish" colorName="color-success" handler={() => this.props.handleClick(this, CardHandleOption.FINISH)} margin={true} />
                        <DotButton text="Delete" colorName="color-warning" handler={() => this.props.handleClick(this, CardHandleOption.DELETE)} />
                    </div>
                </div>
                <div className="verticalSeparatorSmall"></div>
                <div className="content">{this.props.content}</div>
                <div className="date">{this.props.date}</div>
            </div>
        )
    }
}