/**
 * @license
 *
 * Copyright IBM Corp. 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html } from 'lit';
import { settings } from '@carbon-labs/utilities/es/settings/index.js';
import '@carbon/web-components/es/components/link/index.js';
import ArrowRight16 from '@carbon/web-components/es/icons/arrow--right/16.js';

const { stablePrefix: clabsPrefix } = settings;

/**
 * Lit template for code
 *
 * @param {object} customElementClass Class functionality for the custom element
 * @returns {TemplateResult<1>} Lit html template
 */
export function detailedErrorElementTemplate(customElementClass) {
  const { title, description, action } = customElementClass;

  return html`<div class="${clabsPrefix}--chat-detailed-error">
    <div class="${clabsPrefix}--chat-detailed-error-container">
      <div class="title">${title}</div>
      <div class="description">${description}</div>
      ${action && html`
        <cds-link
          class="action"
          aria-label="Error action"
          role="button"
          icon="arrow-right"
          @click="${action}"
          >
          Next step ${ArrowRight16({ slot: 'icon' })}
        </cds-link>
      `}
    </div>
  </div>`;
}
