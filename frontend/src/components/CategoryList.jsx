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
    <List {...props} >
      <Datagrid>
        <TextField source="name" />
        <EditButton />
        <DeleteButton />
        <ArrayField  source="books">
          <Datagrid bulkActionButtons={false}>
            <TextField label={false} source="name" />
          </Datagrid>
        </ArrayField>
        <DateField source="createdAt" />
      </Datagrid>
    </List>
  );
}


export default CategoryList


