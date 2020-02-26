// @flow
import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { observer, inject } from 'mobx-react';

import DocumentsStore from 'stores/DocumentsStore';
import AuthStore from 'stores/AuthStore';
import NewDocumentMenu from 'menus/NewDocumentMenu';
import Actions, { Action } from 'components/Actions';
import InputSearch from 'components/InputSearch';
import CenteredContent from 'components/CenteredContent';
import PageTitle from 'components/PageTitle';
import Tabs from 'components/Tabs';
import Tab from 'components/Tab';
import PaginatedDocumentList from '../components/PaginatedDocumentList';

type Props = {
  documents: DocumentsStore,
  auth: AuthStore,
};

@observer
class Dashboard extends React.Component<Props> {
  render() {
    const { documents, auth } = this.props;
    if (!auth.user || !auth.team) return null;
    const user = auth.user.id;

    return (
      <CenteredContent>
        <PageTitle title="Home" />
        <h1>Domů</h1>
        <Tabs>
          <Tab to="/dashboard" exact>
            Nedávno upravené
          </Tab>
          <Tab to="/dashboard/recent" exact>
            Nedávno otevřené
          </Tab>
          <Tab to="/dashboard/created">Vyvořeno mnou</Tab>
        </Tabs>
        <Switch>
          <Route path="/dashboard/recent">
            <PaginatedDocumentList
              key="recent"
              documents={documents.recentlyViewed}
              fetch={documents.fetchRecentlyViewed}
              showCollection
            />
          </Route>
          <Route path="/dashboard/created">
            <PaginatedDocumentList
              key="created"
              documents={documents.createdByUser(user)}
              fetch={documents.fetchOwned}
              options={{ user }}
              showCollection
            />
          </Route>
          <Route path="/dashboard">
            <PaginatedDocumentList
              documents={documents.recentlyUpdated}
              fetch={documents.fetchRecentlyUpdated}
              showCollection
            />
          </Route>
        </Switch>
        <Actions align="center" justify="flex-end">
          <Action>
            <InputSearch />
          </Action>
          <Action>
            <NewDocumentMenu />
          </Action>
        </Actions>
      </CenteredContent>
    );
  }
}

export default inject('documents', 'auth')(Dashboard);
