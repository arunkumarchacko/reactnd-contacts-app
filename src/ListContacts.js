import React, {Component} from 'react'

class ListContacts extends Component {
    render() {
        return (
            <ol>
            { this.props.contacts.map( contact => {
                return (
                    <li>
                        {contact.name}
                    </li>
                )
            })}

            </ol>
        )
    }
}

export default ListContacts