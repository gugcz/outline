// @flow
import * as React from 'react';
import CenteredContent from 'components/CenteredContent';
import PageTitle from 'components/PageTitle';
import Empty from 'components/Empty';

const ErrorOffline = () => {
  return (
    <CenteredContent>
      <PageTitle title="Offline" />
      <h1>Offline</h1>
      <Empty>Nepodařilo se načíst stránku, nejspíše jsi offline.</Empty>
    </CenteredContent>
  );
};

export default ErrorOffline;
