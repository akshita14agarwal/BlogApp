import React from 'react';
import {Button, Table, TableHead, TableCell, TableBody, TableRow, styled} from '@mui/material';


import{categories} from '../../constants/data';
const styledTable = styled(Table)`
border: 1px solid rgba(224, 224, 224, 1);

`
const styledButton = styled(Button)`
margin: 20px;
width: 85%
background: #6495ED;
color: #fff;

`
const Categories = ()=>{
    return(
        <>
        <styledButton variant="contained"> Create Blog</styledButton>
        <styledTable>
            <TableHead>
                <TableRow>
                    <TableCell>
                        All Categories
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>{            
                categories.map(category => (
                    <TableRow key={category.id}  >
                <TableCell>
                    {category.type}
                </TableCell>
                </TableRow>

                ))
            }
                
            </TableBody>
        </styledTable>
        </>

    )

}
 export default Categories;