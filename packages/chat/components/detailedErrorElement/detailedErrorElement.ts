/**
 * @license
 *
 * Copyright IBM Corp. 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { customElement } from 'lit/decorators.js';
import { settings } from '@carbon-labs/utilities/es/settings/index.js';

import detailedErrorElement from './src/detailedErrorElement.js';
import { detailedErrorElementTemplate } from './src/detailedErrorElement.template.js';

const { stablePrefix: clabsPrefix } = settings;

/**
 * Constructed class functionality for the test input custom element
 */
@customElement(`${clabsPrefix}-chat-detailed-error`)
class CLABSDetailedErrorElement extends detailedErrorElement {
  /**
   * Renders the template while passing in class functionality
   *
   * @returns {TemplateResult<1>}
   */
  render() {
    return detailedErrorElementTemplate(this);
  }
}

export default CLABSDetailedErrorElement;
