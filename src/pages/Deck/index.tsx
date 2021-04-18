import { Route, Switch, useRouteMatch } from "react-router";
import DeckView from "./DeckView";
import DeckList from './DeckList';

export default function DeckPages() {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path}>
        <DeckList />
      </Route>
      <Route path={`${path}/:deckUUID`}>
        <DeckView />
      </Route>
    </Switch>
  );
}
