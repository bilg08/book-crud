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
        <List pagination={false} sx={{maxHeight:'100px',minWidth:'300px',border:'1px solid silver',overflow:'scroll'}} actions={false}>
          <ArrayField source="books">
            <Datagrid bulkActionButtons={false}>
              <TextField label={false} source="name" />
            </Datagrid>
          </ArrayField>
        </List>
        <DateField source="createdAt" />
      </Datagrid>
    </List>
  );
}


export default CategoryList


