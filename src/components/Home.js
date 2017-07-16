import React, { Component } from 'react';

import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';

export default class Home extends Component {
  
  render() {
    return (
        <Fabric>
          <DefaultButton>I am a button.</DefaultButton>
        </Fabric>
    );
  }
}
