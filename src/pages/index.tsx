import { Redirect, Route, BrowserRouter, Switch } from 'react-router-dom';
import GlobalStyles from '../styles/GlobalStyles';
import DeckPages from './Deck';


export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/deck'>
          <DeckPages />
        </Route>
        <Redirect path='/' exact to='/deck' />
      </Switch>
      <GlobalStyles />
    </BrowserRouter>
  );
}
