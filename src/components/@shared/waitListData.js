import waiting from '../../images/dashboard/waiting.png'
import customers from '../../images/dashboard/customers.png'
import student from '../../images/dashboard/student.png'
import global from '../../images/dashboard/global.png'
import business from '../../images/dashboard/business.png'


const waitListData = [
    {
        title:'Total waiting to join us',
        icon:waiting,
        amount:29,
        percentage:5
    },
    {
        title:'Students',
        icon:student,
        amount:5,
        percentage:17.2
    },
    {
        title:'Individuals',
        icon:customers,
        amount:20,
        percentage:69.0
    },
    {
        title:'Businesses',
        icon:business,
        amount:4,
        percentage:15.0
    },
    {
        title:'Countries(globally)',
        icon:global,
        amount:6,
        percentage:5
    }
]

export default waitListData