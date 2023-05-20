// simplebox/simplebox.js

import SimpleBoxEditing2 from './simpleboxediting2';
import SimpleBoxUI2 from './simpleboxui2';
import { Plugin } from '@ckeditor/ckeditor5-core';

export default class SimpleBox2 extends Plugin {
    static get requires() {
        return [ SimpleBoxEditing2, SimpleBoxUI2 ];
    }
}
