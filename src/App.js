import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.js';
import Public from './components/Public.js';
import Login from './features/auth/Login.js';
import DashLayout from './components/DashLayout.js';
import Welcome from './features/auth/Welcome.js';
import NotesList from './features/notes/NotesList.js';
import UsersList from './features/users/UsersList.js';
import EditUser from './features/users/EditUser.js';
import NewUserForm from './features/users/NewUserForm.js';
import EditNote from './features/notes/EditNote.js';
import NewNote from './features/notes/NewNote.js';
import Prefetch from './features/auth/Prefetch.js';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
          <Route index element={<Public />} />
          <Route path="login" element={<Login />} />
          
          <Route element={<Prefetch />}>
              <Route path="dash" element={<DashLayout />}>

              <Route index element={<Welcome />} />

              <Route path="users">
                  <Route index element={<UsersList />} />
                  <Route path=":id" element={<EditUser />} />
                  <Route path="new" element={<NewUserForm />} />
                </Route>

                <Route path="notes">
                  <Route index element={<NotesList />} />
                  <Route path=":id" element={<EditNote />} />
                  <Route path="new" element={<NewNote />} />
                </Route>

              </Route>{/* End Dash */}
          </Route>
      </Route>
    </Routes>
  );
}

export default App;
