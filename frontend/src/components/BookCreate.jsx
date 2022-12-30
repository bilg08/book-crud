import React from 'react';
import { Create,SimpleForm,TextInput,DateInput,SelectInput, useGetList} from 'react-admin';
function BookCreate(props) {
  const { data: categories } = useGetList("category");
  return (
    <Create title="Create a Book" {...props}>
      <SimpleForm>
        <TextInput source="name" />
        <TextInput source="author" />
        <TextInput source="price" />
        <SelectInput source="category" choices={(categories)?categories:[]} />
        <TextInput fullWidth source="content" />
        <DateInput source="createdAt" />
      </SimpleForm>
    </Create>
  );
}

export default BookCreate
