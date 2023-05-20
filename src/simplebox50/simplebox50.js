// simplebox/simplebox.js

import SimpleBoxEditing50 from './simpleboxediting50';
import SimpleBoxUI50 from './simpleboxui50';
import { Plugin } from '@ckeditor/ckeditor5-core';

export default class SimpleBox50 extends Plugin {
    static get requires() {
        return [ SimpleBoxEditing50, SimpleBoxUI50 ];
    }
}
