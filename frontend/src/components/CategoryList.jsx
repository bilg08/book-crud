import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  DeleteButton,
  ArrayField,
} from "react-admin";

function CategoryList(props) {
  return (
    <List {...props} pagination={false}>
      <Datagrid>
        <TextField source="name" />
        <EditButton />
        <DeleteButton />
        <ArrayField source="books">
          <div style={{minWidth:'300px',borderRadius:'10px',border:"1px solid silver",maxHeight:"100px",overflow:'scroll'}}>
            <Datagrid bulkActionButtons={false}>
              <TextField label={false} source="name" />
            </Datagrid>
          </div>
        </ArrayField>
        <DateField source="createdAt" />
      </Datagrid>
    </List>
  );
}


export default CategoryList


