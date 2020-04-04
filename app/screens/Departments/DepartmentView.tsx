import React=require('react')
import { connect } from 'react-redux'

export const DepartmentView = () => {
    return (
        <div>
            DepartmentView
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(DepartmentView)
