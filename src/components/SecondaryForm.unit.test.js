import React from 'react'
import { mount } from 'enzyme'
import { BrowserRouter as Router } from 'react-router-dom'
import { ToastProvider } from 'react-toast-notifications'
import SecondaryForm from './SecondaryForm'

const data1 = {
    userRole: 'Manager',
    joinDate: '2015-04-03',
    isInVictoria: 'no'
}
const data2 = {
    userRole: 'Dev',
    joinDate: '2020-12-03',
    isInVictoria: 'yes',
    whereInVictoria: 'Canterbury'
}

describe('Test rendering of form elements in <SecondaryForm />', () => {
    let component 

    beforeEach(() => {
        component = mount(
            <ToastProvider>
                <Router>
                    <SecondaryForm state={data2}/>
                </Router>
            </ToastProvider>
        )
    })

    it('renders a form', () => {
        expect(component.find('form')).toHaveLength(1)
    })

    it('renders User Role label', () => {
        expect(component.find('#user-role label').text()).toEqual('What is the users role?')
    })

    it('renders Join Date field', () => {
        expect(component.find('#join-date label').text()).toEqual('When did the user first join?')
    })

    it('renders Is User In Victoria field', () => {
        expect(component.find('#is-in-Victoria p').text()).toEqual('Is this person located in Victoria?')
    })

    it('renders Where In Victoria field', () => {
        expect(component.find('#user-location label').text()).toEqual('Where in Victoria?')
    })
})

describe('Test dynamic display of text fields in <SecondaryForm />', () => {
    it('renders three question field if user does not live in Victoria', () => {
        const component = mount(
            <ToastProvider>
                <Router>
                    <SecondaryForm state={data1}/>
                </Router>
            </ToastProvider>
        )

        expect(component.find('.question')).toHaveLength(3)
    })

    it('not renders Where In Victoria field if user does not live in Victoria', () => {
        const component = mount(
            <ToastProvider>
                <Router>
                    <SecondaryForm state={data1}/>
                </Router>
            </ToastProvider>
        )

        expect(component.contains('#user-location')).toBe(false)
    })

    it('renders four question field if user lives in Victoria', () => {
        const component = mount(
            <ToastProvider>
                <Router>
                    <SecondaryForm state={data2}/>
                </Router>
            </ToastProvider>
        )

        expect(component.find('.question')).toHaveLength(4)
    })
  })