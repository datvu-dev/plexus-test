import React from 'react'
import { mount } from 'enzyme'
import { BrowserRouter as Router } from 'react-router-dom'
import { ToastProvider } from 'react-toast-notifications'
import MainForm from './MainForm'

const data1 = {
    storeType: 'Mall',
    storeDetails: '',
    userLookUp: 'Matthew Lang',
    userList: [],
    firstName: '',
    lastName: ''
}
const data2 = {
    storeType: 'Metro',
    storeDetails: 'test metro',
    userLookUp: 'John Lee',
    userList: [],
    firstName: '',
    lastName: ''
}

describe('Test rendering of text fields in <MainForm />', () => {
    let component 

    beforeEach(() => {
        component = mount(
            <ToastProvider>
                <Router>
                    <MainForm state={data2}/>
                </Router>
            </ToastProvider>
        )
    })

    it('renders a form', () => {
        expect(component.find('form')).toHaveLength(1)
    })

    it('renders Store Type field', () => {
        expect(component.find('#store-type label').text()).toEqual('Store Type')
    })

    it('renders Store Details field', () => {
        expect(component.find('#store-details label').text()).toEqual('Provide Details')
    })

    it('renders Search User field', () => {
        expect(component.find('#user-lookup label').text()).toEqual('Search User')
    })

    it('renders First Name field', () => {
        expect(component.find('#first-name label').text()).toEqual('First Name')
    })

    it('renders Last Name field', () => {
        expect(component.find('#last-name label').text()).toEqual('Last Name')
    })
})

describe('Test dynamic display of text fields in <MainForm />', () => {
    it('renders four question field if store type is not Metro', () => {
        const component = mount(
            <ToastProvider>
                <Router>
                    <MainForm state={data1}/>
                </Router>
            </ToastProvider>
        )

        expect(component.find('.question')).toHaveLength(4)
    })

    it('not renders Provide Details field if store type is not Metro', () => {
        const component = mount(
            <ToastProvider>
                <Router>
                    <MainForm state={data1}/>
                </Router>
            </ToastProvider>
        )

        expect(component.contains('#store-details')).toBe(false)
    })

    it('renders five question field if store type is not Metro', () => {
        const component = mount(
            <ToastProvider>
                <Router>
                    <MainForm state={data2}/>
                </Router>
            </ToastProvider>
        )

        expect(component.find('.question')).toHaveLength(5)
    })
  })