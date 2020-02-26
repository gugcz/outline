// @flow
import * as React from 'react';
import { inject, observer } from 'mobx-react';

import CenteredContent from 'components/CenteredContent';
import PageTitle from 'components/PageTitle';
import AuthStore from 'stores/AuthStore';

const ErrorSuspended = observer(({ auth }: { auth: AuthStore }) => {
  return (
    <CenteredContent>
      <PageTitle title="Tvůj účet byl pozastaven" />
      <h1>
        <span role="img" aria-label="Warning sign">
          ⚠️
        </span>{' '}
        Tvůj účet byl pozastaven.
      </h1>

      <p>
        Administrátoři (<strong>{auth.suspendedContactEmail}</strong>) pozastavili
          tvůj účet. Pokud si myslíš, že se jedná o omyl, napiš na
        admins@gug.cz nebo jakémukoliv Administrátorovi na Slacku.
      </p>
    </CenteredContent>
  );
});

export default inject('auth')(ErrorSuspended);
