import { Admin, Resource } from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import BookList from './components/BookList'
import BookCreate from './components/BookCreate';
import BookEdit from './components/BookEdit';
import CategoryList from './components/CategoryList';
import EditCategory from './components/EditCategory';
import CreateCategory from './components/CreateCategory';
function App() {
  return (
    <Admin
      dataProvider={restProvider(
        "http://localhost:8000"
      )}>
      <Resource  name='book' edit={BookEdit} create={BookCreate} list={BookList}/>
      <Resource name='category' create={CreateCategory} edit={EditCategory} list={CategoryList}/>  
    </Admin>
  );
}

export default App;
