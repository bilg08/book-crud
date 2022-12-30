import React from 'react';
import { List,Datagrid,TextField,DateField,EditButton,DeleteButton} from 'react-admin';

function BookList(props) {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="name" />
        <TextField source="author" />
        <TextField source="category.name" />
        <EditButton />
        <DeleteButton />
        <DateField source="createdAt" />
      </Datagrid>
    </List>
  );
}

export default BookList
