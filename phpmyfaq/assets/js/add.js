/**
 * Add FAQ functionality JavaScript part
 *
 * This Source Code Form is subject to the terms of the Mozilla Public License,
 * v. 2.0. If a copy of the MPL was not distributed with this file, You can
 * obtain one at http://mozilla.org/MPL/2.0/.
 *
 * @category  phpMyFAQ
 * @package   JavaScript
 * @author    Thorsten Rinne
 * @copyright 2017 phpMyFAQ Team
 * @license   http://www.mozilla.org/MPL/2.0/ Mozilla Public License Version 2.0
 * @link      http://www.phpmyfaq.de
 * @since     2017-08-02
 */

/*global document: false, window: false, $: false */

$(document).ready(function() {
  $('#submitfaq').click(function() {
    if (typeof tinyMCE !== 'undefined' && undefined !== tinyMCE) {
      tinyMCE.get('answer').setContent(tinyMCE.activeEditor.getContent());
      document.getElementById('answer').value = tinyMCE.activeEditor.getContent();
    }
    saveFormValues('savefaq', 'faq');
  });
  $('form#formValues').submit(function() { return false; });
});