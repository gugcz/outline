// @flow
import * as React from 'react';
import { observable } from 'mobx';
import { inject, observer } from 'mobx-react';
import Button from 'components/Button';
import Flex from 'shared/components/Flex';
import HelpText from 'components/HelpText';
import Modal from 'components/Modal';
import AuthStore from 'stores/AuthStore';

type Props = {
  auth: AuthStore,
  onRequestClose: () => void,
};

@observer
class UserDelete extends React.Component<Props> {
  @observable isDeleting: boolean;

  handleSubmit = async (ev: SyntheticEvent<>) => {
    ev.preventDefault();
    this.isDeleting = true;

    try {
      await this.props.auth.deleteUser();
      this.props.auth.logout();
    } finally {
      this.isDeleting = false;
    }
  };

  render() {
    const { auth, ...rest } = this.props;

    return (
      <Modal isOpen title="Odstranit účet" {...rest}>
        <Flex column>
          <form onSubmit={this.handleSubmit}>
            <HelpText>
              Určitě to chceš udělat? Odstraněním svého účtu smažeš nenávratně všechny tebe identifikující údaje
              spojené s tvým účtem. Budeš ihned odhlášet z wiki a všechny tvé API klíče budou zneplatněny.
            </HelpText>
            <HelpText>
              <strong>Poznámka:</strong> Pokud se znovu přihlásíš, bude ti vytvořen nový účet.
            </HelpText>
            <Button type="submit" danger>
              {this.isDeleting ? 'Odstraňuji…' : 'Odstranit můj účet'}
            </Button>
          </form>
        </Flex>
      </Modal>
    );
  }
}

export default inject('auth')(UserDelete);
