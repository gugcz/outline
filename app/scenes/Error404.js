// @flow
import * as React from 'react';
import CenteredContent from 'components/CenteredContent';
import PageTitle from 'components/PageTitle';
import Empty from 'components/Empty';

const Error404 = () => {
  return (
    <CenteredContent>
      <PageTitle title="Nenalezeno" />
      <h1>Nenalezeno</h1>
      <Empty>
        Bohužel jsme stránku, na kterou se snažíš přistoupit, nenašli. Chceš jít&nbsp;<a href="/">
          domů
        </a>?
      </Empty>
    </CenteredContent>
  );
};

export default Error404;
