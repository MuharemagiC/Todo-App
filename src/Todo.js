import React from 'react'
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';

export default (props) => (
    <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '10px'  
        }}>

        <div style={{
                marginRight: '120px',
                width: '10vh',
                color:'#FF851B',
                fontFamily: 'Roboto' }
            }>
         {props.text}
        </div>
        <DeleteOutlinedIcon 
            onClick={props.onDelete} 
            style={{fontSize: '22px' , color: '#FF851B', cursor: 'pointer' }} 
        />
    </div>
)